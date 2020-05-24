clear; clc; close all;
rng(9876);
addpath 'HGF'
SAVE = 1;

%% Intialization
database_file = '../interface/SurveyUserActions_result_tests.json';
inputs_file = '../interface/input.mat';

users = create_users_struct(database_file);
inputs = load(inputs_file);
inputs = inputs.gen;
u = inputs.u;

est_matrix_biscuits = zeros(numel(users), 3);
est_matrix_virus = zeros(numel(users), 3);
anxiety_vector = zeros(1, numel(users));
error_biscuits = zeros(2, 3);
error_virus = zeros(2, 3);

for i = 1:numel(users)
   anxiety_vector(i) = users(i).anxiety_test_result;
end

%% Estimation of mu_3, om_2, om_3 (and ze)
parfor i = 1:numel(users)
    est_biscuits(i) = tapas_fitModel(users(i).biscuit_test,...
                         u,...
                         'tapas_hgf_binary_config_',...
                         'tapas_unitsq_sgm_mu3_config',...
                         'tapas_quasinewton_optim_config');
    est_virus(i) = tapas_fitModel(users(i).virus_test,...
                         u,...
                         'tapas_hgf_binary_config_',...
                         'tapas_unitsq_sgm_mu3_config',...
                         'tapas_quasinewton_optim_config');
end

for i = 1:numel(users)
    mu_0 = est_biscuits(i).p_prc.mu_0;
    om = est_biscuits(i).p_prc.om;
    est_matrix_biscuits(i,:) = [om(2) om(3) mu_0(3)];

    mu_0 = est_virus(i).p_prc.mu_0;
    om = est_virus(i).p_prc.om;
    est_matrix_virus(i,:) = [om(2) om(3) mu_0(3)]; 
end

ideal_model = tapas_fitModel([],...
        inputs.u,...
        'tapas_hgf_binary_config_',...
        'tapas_bayes_optimal_binary_config',...
        'tapas_quasinewton_optim_config');
    
mu_0 = ideal_model.p_prc.mu_0;
om = ideal_model.p_prc.om;
est_matrix_ideal = [om(2) om(3) mu_0(3)];

%% K-means Clustering
mean_biscuits = mean(est_matrix_biscuits);
[idx_biscuits, C_biscuits] = kmeans(est_matrix_biscuits, 2);
idx_biscuits = idx_biscuits - 1;    % [0,1]

mean_virus = mean(est_matrix_virus);
[idx_virus, C_virus] = kmeans(est_matrix_virus, 2);
idx_virus = idx_virus - 1;          % [0,1]

correct_biscuits = calculate_correct(idx_biscuits, anxiety_vector);
correct_virus = calculate_correct(idx_virus, anxiety_vector);

ANXIOUS = max(idx_biscuits);    % 1
HEALTY = min(idx_biscuits);     % 0

%% MSE of estimations (users - ideal)
for i = 1:numel(users)
    idx = users(i).anxiety_test_result + 1;
    error_virus(idx,:) = error_virus(idx,:) + (est_matrix_virus(i,:) - est_matrix_ideal).^2;
    error_biscuits(idx,:) = error_biscuits(idx,:) + (est_matrix_biscuits(i,:) - est_matrix_ideal).^2;
end
error_virus = error_virus / numel(users);
error_biscuits = error_biscuits / numel(users);

%% 
P = struct(...
        'mu_2', 0,...       % initial mean of x_2
        'mu_3', 1,...       % initial mean of x_3
        'sa_2', 1,...       % initial variance of x_2
        'sa_3', 1,...       % initial variance of x_3
        'ka_2', 1,...       % coupling of x_2 and x_3
        'om_2', -3,...      % default volatility of x_2
        'om_3', -6);        % default volatility of x_3
ze = 5;
params = [NaN P.mu_2 mu_0(3) NaN P.sa_2 P.sa_3 NaN 0 0 1 P.ka_2 NaN om(2) om(3)];
sim_ideal = tapas_simModel(inputs.cues,...
                     'tapas_hgf_binary',...
                     params,...
                     'tapas_unitsq_sgm_mu3',...
                     ze,...
                     12345);

params = [NaN P.mu_2 C_virus(1,3) NaN P.sa_2 P.sa_3 NaN 0 0 1 P.ka_2 NaN C_virus(1,1) C_virus(1,2)];
sim_anxious = tapas_simModel(inputs.cues,...
                     'tapas_hgf_binary',...
                     params,...
                     'tapas_unitsq_sgm_mu3',...
                     ze,...
                     12345);

params = [NaN P.mu_2 C_virus(2,3) NaN P.sa_2 P.sa_3 NaN 0 0 1 P.ka_2 NaN C_virus(2,1) C_virus(2,2)];
sim_healty = tapas_simModel(inputs.cues,...
                     'tapas_hgf_binary',...
                     params,...
                     'tapas_unitsq_sgm_mu3',...
                     ze,...
                     12345);

                 

%% Plots
plot_all;
