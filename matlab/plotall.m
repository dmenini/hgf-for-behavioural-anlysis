scrsz = get(0, 'screenSize');
outerpos = [0.2*scrsz(3), 0.2*scrsz(4), 0.8*scrsz(3), 0.8*scrsz(4)];

C_RED = [0.6350, 0.0780, 0.1840];
C_BLUE = [0, 0.447, 0.741];
RED = [0.85, 0.325, 0.098];
BLUE = [0.301, 0.745, 0.933];

%% Sanitizer vs biscuits
fig1 = figure('Name','sanit_biscuit', 'OuterPosition', outerpos);
sgtitle('Parameter Space: Sanitizer vs. Biscuits', 'FontSize', 18, 'FontWeight', 'bold')

subplot(1,2,1)
C = zeros(numel(users), 3);
for i = 1:numel(users)
    if users(i).anxiety_test_result == HEALTY
        C(i,:) = BLUE;
    else
        C(i,:) = RED;
    end
end
scatter3(est_matrix_virus(:,1),est_matrix_virus(:,2),est_matrix_virus(:,3),50,C,'filled','MarkerEdgeColor','k')
xlabel('om_2');
ylabel('om_3');
zlabel('mu_3');
title("Biscuits' parameter space", 'FontSize', 15)

subplot(1,2,2)
scatter3(est_matrix_biscuits(:,1),est_matrix_biscuits(:,2),est_matrix_biscuits(:,3),50,C,'filled','MarkerEdgeColor','k')
xlabel('om_2');
ylabel('om_3');
zlabel('mu_3');
title("Sanitizer's parameter space", 'FontSize', 15)

%% Biscuits
fig2 = figure('Name','biscuit', 'OuterPosition', outerpos);
sgtitle('Parameter Space: Biscuits', 'FontSize', 18, 'FontWeight', 'bold')

subplot(1,2,1)
C = zeros(numel(users), 3);
for i = 1:numel(users)
    if users(i).anxiety_test_result == HEALTY
        C(i,:) = BLUE;
    else
        C(i,:) = RED;
    end
end
scatter3(est_matrix_biscuits(:,1),est_matrix_biscuits(:,2),est_matrix_biscuits(:,3),50,C,'filled','MarkerEdgeColor','k')
xlabel('om_2');
ylabel('om_3');
zlabel('mu_3');
title("Biscuits' ground truth", 'FontSize', 16)

subplot(1,2,2)
C = zeros(numel(users), 3);
for i = 1:numel(users)
    if idx_biscuits(i) == HEALTY
        C(i,:) = BLUE;
    else
        C(i,:) = RED;
    end
end
scatter3(est_matrix_biscuits(:,1),est_matrix_biscuits(:,2),est_matrix_biscuits(:,3),50,C,'filled','MarkerEdgeColor','k')
hold on
scatter3(C_virus(1,1),C_virus(1,2),C_virus(1,3),100,'d','MarkerEdgeColor', 'k', 'MarkerFaceColor', C_BLUE);
scatter3(C_virus(2,1),C_virus(2,2),C_virus(2,3),100,'d','MarkerEdgeColor', 'k', 'MarkerFaceColor', C_RED);
hold off
xlabel('om_2');
ylabel('om_3');
zlabel('mu_3');
title("Biscuits' clusters", 'FontSize', 15)

%% Cluster
fig3 = figure('Name','sanitizer', 'OuterPosition', outerpos);
sgtitle('Parameter Space: Sanitizer', 'FontSize', 18, 'FontWeight', 'bold')

subplot(1,2,1)
C = zeros(numel(users), 3);
for i = 1:numel(users)
    if users(i).anxiety_test_result == 1
        C(i,:) = RED;
    else
        C(i,:) = BLUE;
    end
end
scatter3(est_matrix_virus(:,1),est_matrix_virus(:,2),est_matrix_virus(:,3),50,C,'filled','MarkerEdgeColor','k')
xlabel('om_2');
ylabel('om_3');
zlabel('mu_3');
title("Sanitizers' ground truth", 'FontSize', 15)

subplot(1,2,2)
C = zeros(numel(users), 3);
for i = 1:numel(users)
    if idx_virus(i) == HEALTY
        C(i,:) = BLUE;
    else
        C(i,:) = RED;
    end
end
scatter3(est_matrix_virus(:,1),est_matrix_virus(:,2),est_matrix_virus(:,3),50,C,'filled','MarkerEdgeColor','k')
hold on
scatter3(C_virus(1,1),C_virus(1,2),C_virus(1,3),100,'d','MarkerEdgeColor', 'k', 'MarkerFaceColor', C_BLUE);
scatter3(C_virus(2,1),C_virus(2,2),C_virus(2,3),100,'d','MarkerEdgeColor', 'k', 'MarkerFaceColor', C_RED);
hold off
xlabel('om_2');
ylabel('om_3');
zlabel('mu_3');
title("Sanitizers' clusters", 'FontSize', 15, 'FontWeight', 'bold')

%% Parameter correlation
fig4 = figure('Name','par_corr_bisc');
tapas_fit_plotCorr(est_biscuits(7))
title('Parameter correlation of biscuits', 'FontSize', 15, 'FontWeight', 'bold');

fig5 = figure('Name','par_corr_virus');
tapas_fit_plotCorr(est_virus(7))
title('Parameter correlation of sanitizer', 'FontSize', 15, 'FontWeight', 'bold');

%% MSE estimations
fig6 = figure('Name', 'mse_om2');
y = [error_biscuits(:,1)'; error_virus(:,1)'];
X = categorical({'Biscuits', 'Sanitizer'});
b = bar(X, y);
b(HEALTY+1).FaceColor = C_BLUE;
b(ANXIOUS+1).FaceColor = C_RED;
title('om_2 MSE', 'FontSize', 15, 'FontWeight', 'bold')
legend('Healthy controls', 'Anxious Patients', 'Location', 'northwest', 'FontSize', 10)

fig7 = figure('Name', 'mse_om3');
y = [error_biscuits(:,2)'; error_virus(:,2)'];
X = categorical({'Biscuits', 'Sanitizer'});
b = bar(X, y);
b(HEALTY+1).FaceColor = C_BLUE;
b(ANXIOUS+1).FaceColor = C_RED;
title('om_3 MSE', 'FontSize', 15, 'FontWeight', 'bold')
legend('Healthy controls', 'Anxious Patients', 'Location', 'northwest', 'FontSize', 10)

%% Score
fig0 = figure('Name','score');
axes1 = axes('Parent',fig0);
y = [correct_biscuits, correct_virus];
X = categorical({'Biscuits', 'Sanitizer'});
b = bar(X, y, 'BarWidth' , 0.3);
b(1).FaceColor = [0, 0.5, 0];
title('Cluster Score based on ground truth', 'FontSize', 15, 'FontWeight', 'bold')
ylim(axes1,[0.5 0.8]);

%%
if SAVE
    saveas(fig0, ['../img/' get(fig0,'Name') '.jpg']);
    saveas(fig1, ['../img/' get(fig1,'Name') '.jpg']);
    saveas(fig2, ['../img/' get(fig2,'Name') '.jpg']);
    saveas(fig3, ['../img/' get(fig3,'Name') '.jpg']);
    saveas(fig4, ['../img/' get(fig4,'Name') '.jpg']);
    saveas(fig5, ['../img/' get(fig5,'Name') '.jpg']);
    saveas(fig6, ['../img/' get(fig6,'Name') '.jpg']);
    saveas(fig7, ['../img/' get(fig7,'Name') '.jpg']);
    close all
end
