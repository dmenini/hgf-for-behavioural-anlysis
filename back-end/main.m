addpath '../HGF'
close all

N = 620;
P = struct('mu_2',0,'mu_3',1,'sa_2',1,'sa_3',1,'ka_2',1,'om_2',-4,'om_3',-6);
zeta = 5;

while 1
    try
        gen = generative_model(P, N, 0);
        % gen = load('input_1.mat').gen;

        par = [NaN P.mu_2 P.mu_3 NaN P.sa_2 P.sa_3 NaN 0 0 1 P.ka_2 NaN P.om_2 P.om_3];
        sim = tapas_simModel(gen.u,'tapas_hgf_binary',par,'tapas_unitsq_sgm',zeta);

        plot_ex2(gen.x_3, gen.x_2, gen.u)
        sgtitle('Generative model output', 'FontWeight', 'bold')
        tapas_hgf_binary_plotTraj(sim)
        sgtitle('Simulation result', 'FontWeight', 'bold')

        % Estimate parameters zeta, mu_3, k_2, theta (om_3)
        est = tapas_fitModel(sim.y,...
                     sim.u,...
                     'tapas_hgf_binary_config_1',...
                     'tapas_unitsq_sgm_config',...
                     'tapas_quasinewton_optim_config');
        tapas_fit_plotCorr(est)
        save('input_1.mat','gen')
        break
    catch
        fprintf('Try again.\n')
        close all
    end

end
