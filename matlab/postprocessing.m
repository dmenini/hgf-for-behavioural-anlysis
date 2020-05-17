clear

addpath 'HGF'
database_file = '../interface/SurveyUserActions.json';
inputs_file = '../interface/input.mat';

users = create_users_struct(database_file);
inputs = load(inputs_file).gen;


for i = 1:2
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

% Repat for different parameter configurations
% ...
%

% K-means
est_matrix_biscuits = zeros(numel(users), 3);
est_matrix_virus = zeros(numel(users), 3);

for i = 1:numel(users)
    mu_0 = est_virus(i).p_prc.mu_0;
    sa_0 = est_virus(i).p_prc.sa_0;
    rho = est_virus(i).p_prc.rho;
    ka = est_virus(i).p_prc.ka;
    om = est_virus(i).p_prc.om;
    p = est_virus(i).p_prc.p;
    ptrans = est_virus(i).p_prc.ptrans;
  
    est_matrix_biscuits(i,:) = [mu_0(3) om(2) om(3)];
end

[idx_biscuits, C_biscuits] = kmeans(est_matrix_biscuits, 2);

for i = 1:numel(users)
    mu_0 = est_virus(i).p_prc.mu_0;
    sa_0 = est_virus(i).p_prc.sa_0;
    rho = est_virus(i).p_prc.rho;
    ka = est_virus(i).p_prc.ka;
    om = est_virus(i).p_prc.om;
    p = est_virus(i).p_prc.p;
    ptrans = est_virus(i).p_prc.ptrans;
  
    est_matrix_virus(i,:) = [mu_0(3) om(2) om(3)];
end

[idx_virus, C_virus] = kmeans(est_matrix_virus, 2);
