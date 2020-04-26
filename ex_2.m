% tapas_simModel gives problems with some parameters. The generative model
% is supposed to be pseudo-random, however randn has a fixed seed and it
% keeps generating 'bad' parameters. Our solution consists of repeating
% the generation of mu_2(0) and mu_3(0) until the simulation eventually works.
% Moreover, to obtain nice plots (i.e. not flat), several trials with
% different seeds may be required. Just comment/uncomment the following line:

rng shuffle    % shuffle the seed of randn, otherwise always same results

addpath 'HGF'
close all

N = 620;
ka_2 = 1;
om_2 = -4;
om_3 = -6;
theta = exp(om_3);

CN = @(m,v,a,b)m+sqrt(v).*(randn(a, b));

while 1     % To skip errors in the simulation (due to initialization)
    
    %% 2.2.b
    u = zeros(N,1);
    x_1 = zeros(N,1);
    x_2 = zeros(N,1);
    x_3 = zeros(N,1);

    x_2(1) = abs(CN(0, 1, 1, 1));     % initial value of perceptual state (mu_2, sigma_2)
    x_3(1) = abs(CN(1, 1, 1, 1));     % initial value of perceptual state (mu_3, sigma_3)

    % Generative model
    for i=2:N
        x_3(i) = CN(x_3(i-1), theta, 1, 1);
        x_2(i) = CN(x_2(i-1), exp(ka_2*x_3(i) + om_2), 1, 1);
        x_1(i) = 1/(1+exp(-x_2(i)));        % sigmoid
        u(i) = round(x_1(i));
    end

    %% 2.2.c
    try
        sim = tapas_simModel(u,...
                             'tapas_hgf_binary',...
                             [NaN 0 1 NaN 1 1 NaN 0 0 1 1 NaN -4 -6],...
                             'tapas_unitsq_sgm',...
                             5,...
                             12345);
        plot_ex2(x_3, x_2, u)
        sgtitle('Section 2.2.b', 'FontWeight', 'bold')
        tapas_hgf_binary_plotTraj(sim)
        sgtitle('Section 2.2.c', 'FontWeight', 'bold')
        break
    catch
        fprintf('Bad parameters... Try again :( \n')
    end

end