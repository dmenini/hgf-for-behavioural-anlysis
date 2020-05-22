scrsz = get(0, 'screenSize');
outerpos = [0.2*scrsz(3), 0.2*scrsz(4), 0.8*scrsz(3), 0.8*scrsz(4)];

% Figure 1
fig1 = figure('Name','sanit_biscuit', 'OuterPosition', outerpos);
sgtitle('Parameter Space: Sanitizer vs. Biscuits', 'FontSize', 18, 'FontWeight', 'bold')

subplot(1,2,1)
C = zeros(numel(users), 3);
for i = 1:numel(users)
    if users(i).anxiety_test_result == 1
        C(i,:) = [0.85, 0.325, 0.098];
    else
        C(i,:) = [0.466, 0.674, 0.188];
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

%Figure 2
fig2 = figure('Name','biscuit', 'OuterPosition', outerpos);
sgtitle('Parameter Space: Biscuits', 'FontSize', 18, 'FontWeight', 'bold')

subplot(1,2,1)
C = zeros(numel(users), 3);
for i = 1:numel(users)
    if users(i).anxiety_test_result == 1
        C(i,:) = [0.85, 0.325, 0.098];
    else
        C(i,:) = [0.466, 0.674, 0.188];
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
    if idx_biscuits(i) == 1
        C(i,:) = [0.85, 0.325, 0.098];
    else
        C(i,:) = [0.466, 0.674, 0.188];
    end
end
scatter3(est_matrix_biscuits(:,1),est_matrix_biscuits(:,2),est_matrix_biscuits(:,3),50,C,'filled','MarkerEdgeColor','k')
hold on
scatter3(C_virus(1,1),C_virus(1,2),C_virus(1,3),100,'d','MarkerEdgeColor', 'k', 'MarkerFaceColor', [0, 0.5, 0]);
scatter3(C_virus(2,1),C_virus(2,2),C_virus(2,3),100,'d','MarkerEdgeColor', 'k', 'MarkerFaceColor', [0.6350, 0.0780, 0.1840]);
hold off
xlabel('om_2');
ylabel('om_3');
zlabel('mu_3');
title("Biscuits' clusters", 'FontSize', 15)

% Figure 3
fig3 = figure('Name','sanitizer', 'OuterPosition', outerpos);
sgtitle('Parameter Space: Sanitizer', 'FontSize', 18, 'FontWeight', 'bold')

subplot(1,2,1)
C = zeros(numel(users), 3);
for i = 1:numel(users)
    if users(i).anxiety_test_result == 1
        C(i,:) = [0.85, 0.325, 0.098];
    else
        C(i,:) = [0.466, 0.674, 0.188];
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
    if idx_virus(i) == 2
        C(i,:) = [0.85, 0.325, 0.098];
    else
        C(i,:) = [0.466, 0.674, 0.188];
    end
end
scatter3(est_matrix_virus(:,1),est_matrix_virus(:,2),est_matrix_virus(:,3),50,C,'filled','MarkerEdgeColor','k')
hold on
scatter3(C_virus(1,1),C_virus(1,2),C_virus(1,3),100,'d','MarkerEdgeColor', 'k', 'MarkerFaceColor', [0, 0.5, 0]);
scatter3(C_virus(2,1),C_virus(2,2),C_virus(2,3),100,'d','MarkerEdgeColor', 'k', 'MarkerFaceColor', [0.6350, 0.0780, 0.1840]);
hold off
xlabel('om_2');
ylabel('om_3');
zlabel('mu_3');
title("Sanitizers' clusters", 'FontSize', 15, 'FontWeight', 'bold')

% Parameter correlation
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
b(1).FaceColor = [0, 0.5, 0];
b(2).FaceColor = [0.6350, 0.0780, 0.1840];
title('om_2 MSE', 'FontSize', 15, 'FontWeight', 'bold')
legend('Healthy controls', 'Anxious Patients', 'Location', 'northwest', 'FontSize', 10)

fig7 = figure('Name', 'mse_om3');
y = [error_biscuits(:,1)'; error_virus(:,1)'];
X = categorical({'Biscuits', 'Sanitizer'});
b = bar(X, y);
b(1).FaceColor = [0, 0.5, 0];
b(2).FaceColor = [0.6350, 0.0780, 0.1840];
title('om_3 MSE', 'FontSize', 15, 'FontWeight', 'bold')
legend('Healthy controls', 'Anxious Patients', 'Location', 'northwest', 'FontSize', 10)

%%
if SAVE
    saveas(fig1, get('name', fig1), '.jpg')
    saveas(fig2, get('name', fig2), '.jpg')
    saveas(fig3, get('name', fig3), '.jpg')
    saveas(fig4, get('name', fig4), '.jpg')
    saveas(fig5, get('name', fig5), '.jpg')
    saveas(fig6, get('name', fig6), '.jpg')
    saveas(fig7, get('name', fig7), '.jpg')
    
end
