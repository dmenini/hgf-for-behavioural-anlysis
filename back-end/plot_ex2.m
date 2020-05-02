function plot_ex2(gen)

% Set up display
scrsz = get(0,'screenSize');
outerpos = [0.2*scrsz(3),0.2*scrsz(4),0.8*scrsz(3),0.8*scrsz(4)];
figure(...
    'OuterPosition', outerpos,...
    'Name', 'input_generative');

% Time axis
ts = numel(gen.u);
ts = 1:ts;

subplot(4,1,1);
plot(ts, gen.x_3, 'b', 'LineWidth', 2);
xlim([1 ts(end)]);
title('Trajectory of x_{3}', 'FontWeight', 'bold');
ylabel('x_{3}');

subplot(4,1,2);
plot(ts, gen.x_2, 'b', 'LineWidth', 2); % prior
xlim([1 ts(end)]);
title('Trajectory of x_{2}', 'FontWeight', 'bold');
ylabel('x_{2}');

subplot(4,1,3);
plot(ts, gen.s, 'b', 'LineWidth', 2);
xlim([1 ts(end)]);
title('Probability of height given eyes', 'FontWeight', 'bold');
ylabel('s(x_{2})');

subplot(4,1,4);
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
