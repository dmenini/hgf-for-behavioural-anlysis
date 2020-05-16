addpath 'HGF'
close all

normal = @(m,v) m + sqrt(v).*(randn(1, 1));
bern = @(p,x) p.^x .* (1-p).^(1-x);

N = 120;
trials = 60;
P = struct(...
        'mu_2', 0,...       % initial mean of x_2
        'mu_3', 1,...       % initial mean of x_3
        'sa_2', 1,...       % initial variance of x_2
        'sa_3', 1,...       % initial variance of x_3
        'ka_2', 1,...       % coupling of x_2 and x_3
        'om_2', -4,...      % default volatility of x_2
        'om_3', -6);        % default volatility of x_3

s = zeros(N,1);
x_1 = zeros(N,1);
x_2 = zeros(N,1);
x_3 = zeros(N,1);

% Probability of u (e.g. height) given cue (e.g. eyes) = step function
p_u_given_cue = [0.1 0.9 0.5 0.1 0.9];
p_u_given_cue = repmat(p_u_given_cue, N/numel(p_u_given_cue), 1);
p_u_given_cue = reshape(p_u_given_cue, N, 1);

run = 1;

while run
    x_2(1) = abs(normal(P.mu_2, P.sa_2));     % initial value of perceptual state 2
    x_3(1) = abs(normal(P.mu_3, P.sa_3));     % initial value of perceptual state 3

    % Generate random inputs for the user (e.g. eyes or sanitizer)
    cues = round(rand(N,1));

    % Generative model
    for i = 2:N
        x_3(i) = normal(x_3(i-1), exp(P.om_3));
        x_2(i) = normal(x_2(i-1), exp(P.ka_2 * x_3(i) + P.om_2));
        s(i) = 1 / (1 + exp(-x_2(i)));
        x_1(i) = bern(s(i),p_u_given_cue(i));
    end

    % Ground truth of the user belief (e.g. height or next supermarket)
    u = x_1 > rand(N,1);

    % Verify that s is sufficiently varied
%     M = 5;
%     assert(mod(N,M) == 0);
%     t = reshape(s,N/M,M);
%     if all(var(t) > 0.04)
%         run = 0;
%     end
    if sum(abs(x_1 - p_u_given_cue)) < 0.2*N
        run = 0;
    end
end

% Simulate beliefs and responses
ze = 5;
params = [NaN P.mu_2 P.mu_3 NaN P.sa_2 P.sa_3 NaN 0 0 1 P.ka_2 NaN P.om_2 P.om_3];
sim = tapas_simModel(u,...
                     'tapas_hgf_binary',...
                     params,...
                     'tapas_unitsq_sgm_mu3',...
                     ze,...
                     12345);

% Estimate parameters mu_3, om_2, theta (om_3)
est = tapas_fitModel(sim.y,...
                     sim.u,...
                     'tapas_hgf_binary_config_',...
                     'tapas_unitsq_sgm_mu3_config',...
                     'tapas_quasinewton_optim_config');

% Create struct of trajectories
gen = struct(...
        'x_3',x_3,...
        'x_2',x_2,...
        'x_1',x_1,...
        'cues',cues,...
        's',s,...
        'u',u);

% Downsample trajectories -> input for the test
gen_ds = gen;

fn = fieldnames(gen_ds);
for i = 1:numel(fn)
    gen_ds.(fn{i}) = downsample(gen.(fn{i}), floor(N/trials));
end
p_u_given_cue_ds = downsample(p_u_given_cue, floor(N/trials));

plot_traj(gen, p_u_given_cue)
sgtitle('Generative model output', 'FontWeight', 'bold')
plot_traj(gen_ds, p_u_given_cue_ds)
sgtitle('Generative model output (downsampled)', 'FontWeight', 'bold')

SAVE = input('Save generated inputs? (1|0)  ');

if SAVE
    save('../interface/input.mat','gen')
    save('../interface/input_ds.mat','gen_ds')
    struct2csv(gen,'../interface/input.csv');
    struct2csv(gen_ds,'../interface/input_ds.csv');
    fprintf('Variables saved.\n')
else
    fprintf('Variables not saved.\n')
end