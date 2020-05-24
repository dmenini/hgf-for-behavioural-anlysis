function plot_traj(fig, gen, pb)

% Set up display
scrsz = get(0,'screenSize');
outerpos = [0.2*scrsz(3),0.2*scrsz(4),0.8*scrsz(3),0.8*scrsz(4)];
fig.OuterPosition = outerpos;

% Time axis
N = numel(gen.u);
ts = 1:N;

pb = repmat(pb, N/numel(pb), 1);
pb = reshape(pb, N, 1);

subplot(4,1,1);
plot(ts, gen.x_3, 'b', 'LineWidth', 2);
xlim([1 ts(end)]);
title('Hidden state x_{3}', 'FontWeight', 'bold');
ylabel('x_{3}');

subplot(4,1,2);
plot(ts, gen.x_2, 'b', 'LineWidth', 2); % prior
xlim([1 ts(end)]);
title('Condition probability in logit of biscuits given cues', 'FontWeight', 'bold');
ylabel('x_{2}');

% subplot(5,1,3);
% plot(ts, gen.s, 'b', 'LineWidth', 2);
% xlim([1 ts(end)]);
% title('Condition probability of biscuits given cues', 'FontWeight', 'bold');
% ylabel('s(x_{2})');

subplot(4,1,3);
plot(ts, gen.x_1, 'b', 'LineWidth', 2);
hold on
plot(ts, pb, 'k', 'LineWidth', 1);
hold off
xlim([1 ts(end)]);
title('\bf{$Bern(p(u|cues),s(x_{2}))$ (blue) and $ p(u|cues) $ (black)}','interpreter','latex');
ylabel('x_{1}, p(u|cues)');

subplot(4,1,4);
plot(ts, gen.u, '.', 'Color', [0 0.6 0]);
hold on
plot(ts, gen.cues + 0.1, '.', 'Color', [0.9100 0.4100 0.1700])
xlim([1 ts(end)]);
title('Cues (orange) and correct outcomes (green)', 'FontWeight', 'bold');
ylabel('u, cues');
xlabel('Trial number');
axis([0 ts(end) -0.1 1.2])

end
