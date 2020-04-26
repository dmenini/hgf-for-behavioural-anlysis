addpath 'HGF'
close all

u = load('example_binary_input.txt');

%% 2.3.a
mu_3 = 1;    % initial value
sa_3 = 1;    % initial value
ka_2 = 2.5;
om_2 = -4;
om_3 = -6;
theta = exp(om_3);
ze = 5;
params = [NaN 0 mu_3 NaN 1 sa_3 NaN 0 0 1 ka_2 NaN om_2 om_3];

% Simulate beliefs and responses
sim_a = tapas_simModel(u,...
                     'tapas_hgf_binary',...
                     params,...
                     'tapas_unitsq_sgm',...
                     ze,...
                     12345);
tapas_hgf_binary_plotTraj(sim_a)
sgtitle('Section 2.3.a', 'FontWeight', 'bold')

% Estimate parameters zeta, mu_3, k_2, theta (om_3)
est_a1 = tapas_fitModel(sim_a.y,...
                     sim_a.u,...
                     'tapas_hgf_binary_config_1',...
                     'tapas_unitsq_sgm_config',...
                     'tapas_quasinewton_optim_config');
tapas_fit_plotCorr(est_a1)

% Estimate parameters zeta, mu_3, om_2, theta (om_3)
est_a2 = tapas_fitModel(sim_a.y,...
                     sim_a.u,...
                     'tapas_hgf_binary_config_2',...
                     'tapas_unitsq_sgm_config',...
                     'tapas_quasinewton_optim_config');
tapas_fit_plotCorr(est_a2)

%% 2.3.b
mu_3 = 2.5;    % initial value
sa_3 = 6.25;      % initial value
ka_2 = 1;
om_2 = -4;
om_3 = -4.1674;
theta = exp(om_3);
ze = 5;
params = [NaN 0 mu_3 NaN 1 sa_3 NaN 0 0 1 ka_2 NaN om_2 om_3];

% Simulate beliefs and responses
sim_b = tapas_simModel(u,...
                     'tapas_hgf_binary',...
                     params,...
                     'tapas_unitsq_sgm',...
                     ze,...
                     12345);
tapas_hgf_binary_plotTraj(sim_b)
sgtitle('Section 2.3.b', 'FontWeight', 'bold')

%% 2.3.c
ka_2_old = 2.5;
mu_3_old = 1;
om_2_old = -4;
om_3_old = -6;
sa_3_old = 1;
ze_old = 5;
cont = 0;

for ka_2 = [1 ka_2_old]
    for om_2 = [0 om_2_old]
        cont = cont + 1;
        if ka_2 == 1 && om_2 == 0
            mu_3 = ka_2_old * mu_3_old + om_2_old;
        elseif ka_2 == 1 && om_2 == om_2_old
            mu_3 = ka_2_old * mu_3_old;
        elseif ka_2 == ka_2_old && om_2 == 0
            mu_3 = om_2_old/ka_2_old + mu_3_old;
        else
            mu_3 = mu_3_old;
        end

        params = [NaN 0 mu_3 NaN 1 sa_3_old NaN 0 0 1 ka_2 NaN om_2 om_3_old];
        mis(cont) = tapas_simModel(u,...
                                 'tapas_hgf_binary',...
                                 params,...
                                 'tapas_unitsq_sgm',...
                                 ze_old,...
                                 12345);
        tapas_hgf_binary_plotTraj(mis(cont))
        sgtitle(['Section 2.3.c. Parameters: \kappa_2=', num2str(ka_2), ...
                ', \omega_2=', num2str(om_2),', \mu_3=',num2str(mu_3)], ...
                'FontWeight', 'bold');
    end
end

%% 2.3.d
mu_3 = 1;    % initial value
sa_3 = 1;    % initial value
ka_2 = 2.5;
om_2 = -4;
om_3 = -6;
theta = exp(om_3);
ze = 5;
params = [NaN 0 mu_3 NaN 1 sa_3 NaN 0 0 1 ka_2 NaN om_2 om_3];

% Simulate beliefs and responses
sim_d = tapas_simModel(u,...
                     'tapas_hgf_binary',...
                     params,...
                     'tapas_unitsq_sgm_mu3',...
                     ze,...
                     12345);
tapas_hgf_binary_plotTraj(sim_d)
sgtitle('Section 2.3.d', 'FontWeight', 'bold')

% Estimate parameters mu_3, om_2, theta (om_3)
est_d1 = tapas_fitModel(sim_d.y,...
                     sim_d.u,...
                     'tapas_hgf_binary_config_1',...
                     'tapas_unitsq_sgm_mu3_config',...
                     'tapas_quasinewton_optim_config');
tapas_fit_plotCorr(est_d1)

% Estimate parameters mu_3, om_2, theta (om_3)
est_d2 = tapas_fitModel(sim_d.y,...
                     sim_d.u,...
                     'tapas_hgf_binary_config_2',...
                     'tapas_unitsq_sgm_mu3_config',...
                     'tapas_quasinewton_optim_config');
tapas_fit_plotCorr(est_d2)

