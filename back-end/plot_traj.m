function plot_traj(gen)

% Set up display
scrsz = get(0,'screenSize');
outerpos = [0.2*scrsz(3),0.2*scrsz(4),0.8*scrsz(3),0.8*scrsz(4)];
figure(...
    'OuterPosition', outerpos,...
    'Name', 'input_generative');

% Time axis
ts = numel(gen.u);
ts = 1:ts;

subplot(5,1,1);
plot(ts, gen.x_3, 'b', 'LineWidth', 2);
xlim([1 ts(end)]);
title('Hidden state x_{3}', 'FontWeight', 'bold');
ylabel('x_{3}');

subplot(5,1,2);
plot(ts, gen.x_2, 'b', 'LineWidth', 2); % prior
xlim([1 ts(end)]);
title('Condition probability in logit of height given eyes', 'FontWeight', 'bold');
ylabel('x_{2}');

subplot(5,1,3);
plot(ts, gen.s, 'b', 'LineWidth', 2);
xlim([1 ts(end)]);
title('Condition probability of height given eyes', 'FontWeight', 'bold');
ylabel('s(x_{2})');

pb = [0.9 0.1 0.5 0.9 0.1]';
pb = repmat(pb,1,numel(gen.u)/numel(pb))';
pb = reshape(pb,numel(gen.u),1);

subplot(5,1,4);
plot(ts, gen.x_1, 'b', 'LineWidth', 2);
hold on
plot(ts, pb, 'k', 'LineWidth', 1);
hold off
xlim([1 ts(end)]);
title('Benoulli(p(u|cues),s(x_{2})) (blue) and p(u|cues)  (black)', 'FontWeight', 'bold');
ylabel('x_{1}, p(u|cues)');

subplot(5,1,5);
plot(ts, gen.u, '.', 'Color', [0 0.6 0]);
hold on
if gen.cues == 1
    gen.cues = gen.cues+0.1;
end
plot(ts, gen.cues, '.', 'Color', [0.9100 0.4100 0.1700])
xlim([1 ts(end)]);
title('Cues (orange) and ground truth (green)', 'FontWeight', 'bold');
ylabel('u, cues');
xlabel('Trial number');
axis([0 ts(end) -0.1 1.1])



end
