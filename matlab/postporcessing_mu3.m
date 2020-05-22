clear
rng(9876);
addpath 'HGF'
database_file = '../interface/SurveyUserActions_26.json';
inputs_file = '../interface/input.mat';

users = create_users_struct(database_file);
inputs = load(inputs_file);
inputs = inputs.gen;

for i = 1:numel(users)
    % Estimate parameters mu_3, om_2, theta (om_3)
    est_biscuits(i) = tapas_fitModel(users(i).biscuit_test,...
                         inputs.u,...
                         'tapas_hgf_binary_config_',...
                         'tapas_unitsq_sgm_mu3_config',...
                         'tapas_quasinewton_optim_config');
    est_virus(i) = tapas_fitModel(users(i).virus_test,...
                         inputs.u,...
                         'tapas_hgf_binary_config_',...
                         'tapas_unitsq_sgm_mu3_config',...
                         'tapas_quasinewton_optim_config');
end

ideal_model = tapas_fitModel([],...
        inputs.u,...
        'tapas_hgf_binary_config_',...
        'tapas_bayes_optimal_binary_config',...
        'tapas_quasinewton_optim_config');

% Repat for different parameter configurations
% ...
%

% K-means
est_matrix_biscuits = zeros(numel(users), 3);
est_matrix_virus = zeros(numel(users), 3);

for i = 1:numel(users)
    mu_0 = est_biscuits(i).p_prc.mu_0;
    sa_0 = est_biscuits(i).p_prc.sa_0;
    rho = est_biscuits(i).p_prc.rho;
    ka = est_biscuits(i).p_prc.ka;
    om = est_biscuits(i).p_prc.om;
    p = est_biscuits(i).p_prc.p;
    ptrans = est_biscuits(i).p_prc.ptrans;
  
    % est_matrix_biscuits(i,:) = [mu_0(3) om(2) om(3)];
    est_matrix_biscuits(i,:) = [om(2) om(3) mu_0(3)];
end
mean_biscuits=mean(est_matrix_biscuits);
[idx_biscuits, C_biscuits] = kmeans(est_matrix_biscuits, 2);

for i = 1:numel(users)
    mu_0 = est_virus(i).p_prc.mu_0;
    sa_0 = est_virus(i).p_prc.sa_0;
    rho = est_virus(i).p_prc.rho;
    ka = est_virus(i).p_prc.ka;
    om = est_virus(i).p_prc.om;
    p = est_virus(i).p_prc.p;
    ptrans = est_virus(i).p_prc.ptrans;
  
    % est_matrix_virus(i,:) = [mu_0(3) om(2) om(3)];
    est_matrix_virus(i,:) = [om(2) om(3) mu_0(3)];
    
end
mean_virus=mean(est_matrix_virus);
[idx_virus, C_virus] = kmeans(est_matrix_virus, 2);

anxiety_vector = zeros (1, numel(users));
for i = 1:numel(users)
   anxiety_vector(i) = users(i).anxiety_test_result;
end

correct = calculate_correct (idx_virus, anxiety_vector);

%%
plotall;
