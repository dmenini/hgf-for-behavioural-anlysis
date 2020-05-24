addpath 'HGF'
close all; clear

normal = @(m,v) m + sqrt(v).*(randn(1, 1));
bern = @(p,x) p.^x .* (1-p).^(1-x);

N = 120;

        P = struct(...
        'mu_2', 0,...       % initial mean of x_2
        'mu_3', 1,...       % initial mean of x_3
        'sa_2', 1,...       % initial variance of x_2
        'sa_3', 1,...       % initial variance of x_3
        'ka_2', 1,...       % coupling of x_2 and x_3
        'om_2', -3,...      % default volatility of x_2
        'om_3', -6);        % default volatility of x_3

s = zeros(N,1);
x_1 = zeros(N,1);
x_2 = zeros(N,1);
x_3 = zeros(N,1);

% Probability of u (e.g. height) given cue (e.g. eyes) = step function
p_u_given_cue = [0.1 0.9 0.3 0.7 0.1 0.9];
pb = repmat(p_u_given_cue, N/numel(p_u_given_cue), 1);
pb = reshape(pb, N, 1);

run = 1;

while run
    x_2(1) = abs(normal(P.mu_2, P.sa_2));     % initial value of perceptual state 2
    x_3(1) = abs(normal(P.mu_3, P.sa_3));     % initial value of perceptual state 3

    % Generative model
    for i = 2:N
        x_3(i) = normal(x_3(i-1), exp(P.om_3));
        x_2(i) = normal(x_2(i-1), exp(P.ka_2 * x_3(i) + P.om_2));
        s(i) = 1 / (1 + exp(-x_2(i)));
        x_1(i) = bern(s(i),pb(i));
    end
    u = round(x_1);
    
    % Ground truth of the user belief (e.g. height or next supermarket)
    cues = round(rand(N,1));
    for i = 1:numel(cues)
        if cues(i) == 0 
            cues(i) = u(i);
        elseif cues(i) == 1
            cues(i) = 1 - u(i);
        end
    end
    if sum(abs(x_1 - pb)) < 0.2*N
        run = 0;
    end
end

% Simulate beliefs and responses
ideal_model = tapas_fitModel([],...
        u,...
        'tapas_hgf_binary_config_',...
        'tapas_bayes_optimal_binary_config',...
        'tapas_quasinewton_optim_config');
    
mu_0 = ideal_model.p_prc.mu_0;
om = ideal_model.p_prc.om;
est_matrix_ideal = [om(2) om(3) mu_0(3)];

ze = 1;
params = [NaN P.mu_2 mu_0(3) NaN P.sa_2 P.sa_3 NaN 0 0 1 P.ka_2 NaN om(2) om(3)];
sim = tapas_simModel(cues,...
                     'tapas_hgf_binary',...
                     params,...
                     'tapas_unitsq_sgm',...
                     ze,...
                     12345);
tapas_hgf_binary_plotTraj(sim)

params = [NaN P.mu_2 mu_0(3) NaN P.sa_2 P.sa_3 NaN 0 0 1 P.ka_2 NaN om(2) om(3)];
sim = tapas_simModel(cues,...
                     'tapas_hgf_binary',...
                     params,...
                     'tapas_unitsq_sgm_mu3',...
                     ze,...
                     12345);
tapas_hgf_binary_plotTraj(sim)

% Create struct of trajectories
gen = struct(...
        'x_3',x_3,...
        'x_2',x_2,...
        'x_1',x_1,...
        'cues',cues,...
        's',s,...
        'u',u);

fig = figure('Name', 'inputs');
plot_traj(fig, gen, p_u_given_cue)

sgtitle('Generative model output', 'FontWeight', 'bold')

SAVE = input('Save generated inputs? (1|0)  ');

if SAVE
    save('../interface/input.mat','gen')
    struct2csv(gen,'../interface/input.csv');
    fprintf('Variables saved.\n')
else
    fprintf('Variables not saved.\n')
end