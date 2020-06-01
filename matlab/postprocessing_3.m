clear; clc; close all;
rng(9876);
addpath 'HGF'
SAVE = 0;

%% Intialization
database_file = '../interface/SurveyUserActions_result_tests.json';
inputs_file = '../interface/input.mat';

users = create_users_struct(database_file);
inputs = load(inputs_file);
inputs = inputs.gen;
u = and(inputs.u,inputs.cues);

est_matrix_biscuits = zeros(numel(users), 3);
est_matrix_virus = zeros(numel(users), 3);
anxiety_vector = zeros(1, numel(users));

for i = 1:numel(users)
   anxiety_vector(i) = users(i).anxiety_test_result;
end

%% Estimation of mu_3, om_2, ka_2
parfor i = 1:numel(users)

    est_biscuits(i) = tapas_fitModel(users(i).biscuit_test,...
                         u,...
                         'tapas_hgf_binary_config_3',...
                         'tapas_unitsq_sgm_mu3_config',...
                         'tapas_quasinewton_optim_config');
    est_virus(i) = tapas_fitModel(users(i).virus_test,...
                         u,...
                         'tapas_hgf_binary_config_3',...
                         'tapas_unitsq_sgm_mu3_config',...
                         'tapas_quasinewton_optim_config');
end

for i = 1:numel(users)
    mu_0 = est_biscuits(i).p_prc.mu_0;
    om = est_biscuits(i).p_prc.om;
    ka = est_biscuits(i).p_prc.ka;
    est_matrix_biscuits(i,:) = [om(2) ka(2) mu_0(3)];

    mu_0 = est_virus(i).p_prc.mu_0;
    om = est_virus(i).p_prc.om;
    ka = est_virus(i).p_prc.ka;
    est_matrix_virus(i,:) = [om(2) ka(2) mu_0(3)]; 
end

%% K-means Clustering
[idx_biscuits, C_biscuits] = kmeans(est_matrix_biscuits, 2);
idx_biscuits = idx_biscuits - 1;    % [0,1]

[idx_virus, C_virus] = kmeans(est_matrix_virus, 2);
idx_virus = idx_virus - 1;          % [0,1]

correct_biscuits = calculate_correct(idx_biscuits, anxiety_vector);
correct_virus = calculate_correct(idx_virus, anxiety_vector);

ANXIOUS = max(idx_biscuits);    % 1
HEALTY = min(idx_biscuits);     % 0

%% Plots
plot_all_3;
