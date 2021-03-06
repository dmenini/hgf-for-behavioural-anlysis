scrsz = get(0, 'screenSize');
outerpos = [0.2*scrsz(3), 0.2*scrsz(4), 0.8*scrsz(3), 0.8*scrsz(4)];

C_RED = [0.6350, 0.0780, 0.1840];
C_BLUE = [0, 0.447, 0.741];
RED = [0.85, 0.325, 0.098];
BLUE = [0.301, 0.745, 0.933];
GREEN = [0,0.5,0];

C_SIZE = 150;
SIZE = 90;

%% K-Means Score based on ground truth
fig0 = figure('Name','score');
axes1 = axes('Parent',fig0);
y = [correct_biscuits, correct_virus];
X = categorical({'Biscuits', 'Sanitizer'});
b = bar(X, y, 'BarWidth' , 0.3);
b(1).FaceColor = [0, 0.5, 0];
title('Cluster Score based on ground truth', 'FontSize', 15, 'FontWeight', 'bold')
ylim(axes1,[0.45 0.9]);

%% Sanitizer vs biscuits
fig1 = figure('Name','sanit_biscuit', 'OuterPosition', outerpos);
sgtitle('Parameter Space: Sanitizer vs. Biscuits', 'FontSize', 18, 'FontWeight', 'bold')

subplot1 = subplot(1,2,1);
view(subplot1,[-46.9568093417894 17.8584070779964]);
C = zeros(numel(users), 3);
for i = 1:numel(users)
    if users(i).anxiety_test_result == HEALTY
        C(i,:) = BLUE;
    else
        C(i,:) = RED;
    end
end
scatter3(est_matrix_virus(:,1),est_matrix_virus(:,2),est_matrix_virus(:,3),SIZE,C,'filled','MarkerEdgeColor','k')
xlabel('\omega_2');
ylabel('\omega_3');
zlabel('\mu_3');
title("Sanitizer's parameter space", 'FontSize', 18)

subplot1=subplot(1,2,2);
view(subplot1,[-46.9568093417894 17.8584070779964]);
scatter3(est_matrix_biscuits(:,1),est_matrix_biscuits(:,2),est_matrix_biscuits(:,3),SIZE,C,'filled','MarkerEdgeColor','k')
xlabel('\omega_2');
ylabel('\omega_3');
zlabel('\mu_3');
title("Biscuits' parameter space", 'FontSize', 18)

%% Biscuits
fig2 = figure('Name','biscuit', 'OuterPosition', outerpos);
sgtitle('Parameter Space: Biscuits', 'FontSize', 18, 'FontWeight', 'bold')

subplot1=subplot(1,2,1);
view(subplot1,[-46.9568093417894 17.8584070779964]);
C = zeros(numel(users), 3);
for i = 1:numel(users)
    if users(i).anxiety_test_result == HEALTY
        C(i,:) = BLUE;
    else
        C(i,:) = RED;
    end
end
scatter3(est_matrix_biscuits(:,1),est_matrix_biscuits(:,2),est_matrix_biscuits(:,3),SIZE,C,'filled','MarkerEdgeColor','k')
xlabel('\omega_2');
ylabel('\omega_3');
zlabel('\mu_3');
title("Biscuits' ground truth", 'FontSize', 18)

subplot1=subplot(1,2,2);
view(subplot1,[-46.9568093417894 17.8584070779964]);
C = zeros(numel(users), 3);
for i = 1:numel(users)
    if idx_biscuits(i) == HEALTY
        C(i,:) = BLUE;
    else
        C(i,:) = RED;
    end
end
scatter3(est_matrix_biscuits(:,1),est_matrix_biscuits(:,2),est_matrix_biscuits(:,3),SIZE,C,'filled','MarkerEdgeColor','k')
hold on
scatter3(C_virus(1,1),C_virus(1,2),C_virus(1,3),C_SIZE,'d','MarkerEdgeColor', 'k', 'MarkerFaceColor', C_BLUE);
scatter3(C_virus(2,1),C_virus(2,2),C_virus(2,3),C_SIZE,'d','MarkerEdgeColor', 'k', 'MarkerFaceColor', C_RED);
scatter3(C_ideal(1),C_ideal(2),C_ideal(3),C_SIZE,'d','MarkerEdgeColor', 'k', 'MarkerFaceColor', GREEN);
hold off
xlabel('\omega_2');
ylabel('\omega_3');
zlabel('\mu_3');
title("Biscuits' clusters", 'FontSize', 18)

%% Sanitizer
fig3 = figure('Name','sanitizer', 'OuterPosition', outerpos);
sgtitle('Parameter Space: Sanitizer', 'FontSize', 18, 'FontWeight', 'bold')

subplot1=subplot(1,2,1);
view(subplot1,[-46.9568093417894 17.8584070779964]);
C = zeros(numel(users), 3);
for i = 1:numel(users)
    if users(i).anxiety_test_result == 1
        C(i,:) = RED;
    else
        C(i,:) = BLUE;
    end
end
scatter3(est_matrix_virus(:,1),est_matrix_virus(:,2),est_matrix_virus(:,3),SIZE,C,'filled','MarkerEdgeColor','k')
xlabel('\omega_2');
ylabel('\omega_3');
zlabel('\mu_3');
title("Sanitizers' ground truth", 'FontSize', 18)

subplot1 = subplot(1,2,2);
view(subplot1,[-46.9568093417894 17.8584070779964]);
C = zeros(numel(users), 3);
for i = 1:numel(users)
    if idx_virus(i) == HEALTY
        C(i,:) = BLUE;
    else
        C(i,:) = RED;
    end
end
scatter3(est_matrix_virus(:,1),est_matrix_virus(:,2),est_matrix_virus(:,3),SIZE,C,'filled','MarkerEdgeColor','k')
hold on
scatter3(C_virus(1,1),C_virus(1,2),C_virus(1,3),C_SIZE,'d','MarkerEdgeColor', 'k', 'MarkerFaceColor', C_BLUE);
scatter3(C_virus(2,1),C_virus(2,2),C_virus(2,3),C_SIZE,'d','MarkerEdgeColor', 'k', 'MarkerFaceColor', C_RED);
scatter3(C_ideal(1),C_ideal(2),C_ideal(3),C_SIZE,'d','MarkerEdgeColor', 'k', 'MarkerFaceColor', [0,0.5,0]);
hold off
xlabel('\omega_2');
ylabel('\omega_3');
zlabel('\mu_3');
title("Sanitizers' clusters", 'FontSize', 18, 'FontWeight', 'bold')

%% Parameter correlation
fig4 = figure('Name','par_corr_bisc_h');
tapas_fit_plotCorr(est_biscuits(7))
title('Parameter correlation of biscuits (h)', 'FontSize', 15, 'FontWeight', 'bold');

fig5 = figure('Name','par_corr_virus_h');
tapas_fit_plotCorr(est_virus(7))
title('Parameter correlation of sanitizer (h)', 'FontSize', 15, 'FontWeight', 'bold');

fig6 = figure('Name','par_corr_bisc_a');
tapas_fit_plotCorr(est_biscuits(1))
title('Parameter correlation of biscuits (a)', 'FontSize', 15, 'FontWeight', 'bold');

fig7 = figure('Name','par_corr_virus_a');
tapas_fit_plotCorr(est_virus(1))
title('Parameter correlation of sanitizer (a)', 'FontSize', 15, 'FontWeight', 'bold');

%% MSE estimations
% fig6 = figure('Name', 'mse_om2');
% axes1 = axes('Parent',fig6);
% y = [error_biscuits(:,1)'; error_virus(:,1)'];
% X = categorical({'Biscuits', 'Sanitizer'});
% b = bar(X, y);
% b(HEALTY+1).FaceColor = C_BLUE;
% b(ANXIOUS+1).FaceColor = C_RED;
% title('\omega_2 MSE', 'FontSize', 15, 'FontWeight', 'bold')
% legend('Healthy controls', 'Anxious Patients', 'Location', 'northwest', 'FontSize', 10)
% ylim(axes1,[0 1]);
% 
% fig7 = figure('Name', 'mse_om3');
% axes1 = axes('Parent',fig7);
% y = [error_biscuits(:,2)'; error_virus(:,2)'];
% X = categorical({'Biscuits', 'Sanitizer'});
% b = bar(X, y);
% b(HEALTY+1).FaceColor = C_BLUE;
% b(ANXIOUS+1).FaceColor = C_RED;
% title('\omega_3 MSE', 'FontSize', 15, 'FontWeight', 'bold')
% legend('Healthy controls', 'Anxious Patients', 'Location', 'northwest', 'FontSize', 10)
% ylim(axes1,[0 0.01]);
% 
% fig8 = figure('Name', 'mse_mu3');
% axes1 = axes('Parent',fig8);
% y = [error_biscuits(:,3)'; error_virus(:,3)'];
% X = categorical({'Biscuits', 'Sanitizer'});
% b = bar(X, y);
% b(HEALTY+1).FaceColor = C_BLUE;
% b(ANXIOUS+1).FaceColor = C_RED;
% title('\mu_3 MSE', 'FontSize', 15, 'FontWeight', 'bold')
% legend('Healthy controls', 'Anxious Patients', 'Location', 'northwest', 'FontSize', 10)
% ylim(axes1,[0 1]);

%% Input sequence
fig9 = figure('Name', 'inputs');
p_u_given_cue = [0.1 0.9 0.3 0.7 0.1 0.9];
plot_traj(fig9, inputs, p_u_given_cue)

%% Simulations               
tapas_hgf_binary_plotTraj(sim_ideal)
sgtitle('Ideal')

tapas_hgf_binary_plotTraj(sim_healthy)
sgtitle('Virus healthy')

tapas_hgf_binary_plotTraj(sim_anxious)
sgtitle('Virus anxious') 
%% Save (from postprocessing or manually set)
if SAVE
    saveas(fig0, ['../img/' get(fig0,'Name') '.jpg']);
    saveas(fig1, ['../img/' get(fig1,'Name') '.jpg']);
    saveas(fig2, ['../img/' get(fig2,'Name') '.jpg']);
    saveas(fig3, ['../img/' get(fig3,'Name') '.jpg']);
    saveas(fig4, ['../img/' get(fig4,'Name') '.jpg']);
    saveas(fig5, ['../img/' get(fig5,'Name') '.jpg']);
    saveas(fig6, ['../img/' get(fig6,'Name') '.jpg']);
    saveas(fig7, ['../img/' get(fig7,'Name') '.jpg']);
    % saveas(fig8, ['../img/' get(fig8,'Name') '.jpg']);
    saveas(fig9, ['../img/' get(fig9,'Name') '.jpg']);
    close all
end
