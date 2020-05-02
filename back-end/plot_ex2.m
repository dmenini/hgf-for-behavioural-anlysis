function plot_ex2(x_3, x_2, u)

% Set up display
scrsz = get(0,'screenSize');
outerpos = [0.2*scrsz(3),0.2*scrsz(4),0.8*scrsz(3),0.8*scrsz(4)];
figure(...
    'OuterPosition', outerpos,...
    'Name', 'input_generative');

% Time axis
ts = numel(u);
ts = 1:ts;

subplot(3,1,1);
plot(ts, x_3, 'b', 'LineWidth', 2);
xlim([1 ts(end)]);
title('Trajectory of x_{3}', 'FontWeight', 'bold');
ylabel('x_{3}');

subplot(3,1,2);
plot(ts, x_2, 'b', 'LineWidth', 2); % prior
xlim([1 ts(end)]);
title('Trajectory of x_{2}', 'FontWeight', 'bold');
ylabel('x_{2}');

subplot(3,1,3);
plot(ts, u, '.', 'Color', [0 0.6 0]);
xlim([1 ts(end)]);
title('Input', 'FontWeight', 'bold');
ylabel('u');
xlabel('Trial number');
axis([0 ts(end) -0.1 1.1])

end
