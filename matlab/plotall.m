scrsz = get(0, 'screenSize');
outerpos = [0.2*scrsz(3), 0.2*scrsz(4), 0.8*scrsz(3), 0.8*scrsz(4)];

SAVE = 0;

% Figure 1
fig1 = figure('Name','sanit_biscuit', 'OuterPosition', outerpos);
sgtitle('Param Space: Sanitizer vs. Biscuit', 'FontSize', 20)

C = zeros(numel(users), 3);
for i = 1:numel(users)
    if users(i).anxiety_test_result == 1
        C(i,:) = [0.85, 0.325, 0.098];
    else
        C(i,:) = [0.466, 0.674, 0.188];
    end
end
subplot(1,2,1)
scatter3(est_matrix_virus(:,1),est_matrix_virus(:,2),est_matrix_virus(:,3),60,C,'filled','MarkerEdgeColor','k')
hold on
scatter3(C_virus(1,1),C_virus(1,2),C_virus(1,3),100,'d','MarkerEdgeColor', [0, 0.5, 0], 'MarkerFaceColor', [0, 0.5, 0]);
scatter3(C_virus(2,1),C_virus(2,2),C_virus(2,3),100,'d','MarkerEdgeColor', [0.6350, 0.0780, 0.1840], 'MarkerFaceColor', [0.6350, 0.0780, 0.1840]);
hold off
xlabel('om_2');
ylabel('om_3');
zlabel('mu_3');
title('Biscuit param space', 'FontSize', 16)

subplot(1,2,2)
scatter3(est_matrix_biscuits(:,1),est_matrix_biscuits(:,2),est_matrix_biscuits(:,3),[],C,'filled','MarkerEdgeColor','k')
hold on

scatter3(C_virus(1,1),C_virus(1,2),C_virus(1,3),100,'d','MarkerEdgeColor', [0, 0.5, 0], 'MarkerFaceColor', [0, 0.5, 0]);
scatter3(C_virus(2,1),C_virus(2,2),C_virus(2,3),100,'d','MarkerEdgeColor', [0.6350, 0.0780, 0.1840], 'MarkerFaceColor', [0.6350, 0.0780, 0.1840]);hold off
xlabel('om_2');
ylabel('om_3');
zlabel('mu_3');
title('Sanitizer param space', 'FontSize', 16)

%Figure 2
fig2 = figure('Name','biscuit', 'OuterPosition', outerpos);
sgtitle('Param Space: Biscuits', 'FontSize', 20)

C = zeros(numel(users), 3);
for i = 1:numel(users)
    if users(i).anxiety_test_result == 1
        C(i,:) = [0.85, 0.325, 0.098];
    else
        C(i,:) = [0.466, 0.674, 0.188];
    end
end
subplot(1,2,1)
scatter3(est_matrix_biscuits(:,1),est_matrix_biscuits(:,2),est_matrix_biscuits(:,3),[],C,'filled','MarkerEdgeColor','k')
hold on

scatter3(C_virus(1,1),C_virus(1,2),C_virus(1,3),100,'d','MarkerEdgeColor', [0, 0.5, 0], 'MarkerFaceColor', [0, 0.5, 0]);
scatter3(C_virus(2,1),C_virus(2,2),C_virus(2,3),100,'d','MarkerEdgeColor', [0.6350, 0.0780, 0.1840], 'MarkerFaceColor', [0.6350, 0.0780, 0.1840]);
hold off
xlabel('om_2');
ylabel('om_3');
zlabel('mu_3');
title('Biscuit ground truth', 'FontSize', 16)

subplot(1,2,2)
C = zeros(numel(users), 3);
for i = 1:numel(users)
    if idx_biscuits(i) == 2
        C(i,:) = [0.85, 0.325, 0.098];
    else
        C(i,:) = [0.466, 0.674, 0.188];
    end
end
scatter3(est_matrix_biscuits(:,1),est_matrix_biscuits(:,2),est_matrix_biscuits(:,3),[],C,'filled','MarkerEdgeColor','k')
hold on

scatter3(C_virus(1,1),C_virus(1,2),C_virus(1,3),100,'d','MarkerEdgeColor', [0, 0.5, 0], 'MarkerFaceColor', [0, 0.5, 0]);
scatter3(C_virus(2,1),C_virus(2,2),C_virus(2,3),100,'d','MarkerEdgeColor', [0.6350, 0.0780, 0.1840], 'MarkerFaceColor', [0.6350, 0.0780, 0.1840]);
hold off
xlabel('om_2');
ylabel('om_3');
zlabel('mu_3');
title('Biscuit cluster', 'FontSize', 16)

% Figure 3
fig3 = figure('Name','sanitizer', 'OuterPosition', outerpos);
sgtitle('Param Space: Sanitizer', 'FontSize', 20)

C = zeros(numel(users), 3);
for i = 1:numel(users)
    if users(i).anxiety_test_result == 1
        C(i,:) = [0.85, 0.325, 0.098];
    else
        C(i,:) = [0.466, 0.674, 0.188];
    end
end
subplot(1,2,1)
scatter3(est_matrix_virus(:,1),est_matrix_virus(:,2),est_matrix_virus(:,3),[],C,'filled','MarkerEdgeColor','k')
hold on

scatter3(C_virus(1,1),C_virus(1,2),C_virus(1,3),100,'d','MarkerEdgeColor', [0, 0.5, 0], 'MarkerFaceColor', [0, 0.5, 0]);
scatter3(C_virus(2,1),C_virus(2,2),C_virus(2,3),100,'d','MarkerEdgeColor', [0.6350, 0.0780, 0.1840], 'MarkerFaceColor', [0.6350, 0.0780, 0.1840]);
hold off
xlabel('om_2');
ylabel('om_3');
zlabel('mu_3');
title('Sanitizers ground truth', 'FontSize', 16)

subplot(1,2,2)
C = zeros(numel(users), 3);
for i = 1:numel(users)
    if idx_virus(i) == 1
        C(i,:) = [0.85, 0.325, 0.098];
    else
        C(i,:) = [0.466, 0.674, 0.188];
    end
end
scatter3(est_matrix_virus(:,1),est_matrix_virus(:,2),est_matrix_virus(:,3),[],C,'filled','MarkerEdgeColor','k')
hold on

scatter3(C_virus(1,1),C_virus(1,2),C_virus(1,3),100,'d','MarkerEdgeColor', [0, 0.5, 0], 'MarkerFaceColor', [0, 0.5, 0]);
scatter3(C_virus(2,1),C_virus(2,2),C_virus(2,3),100,'d','MarkerEdgeColor', [0.6350, 0.0780, 0.1840], 'MarkerFaceColor', [0.6350, 0.0780, 0.1840]);
hold off
xlabel('om_2');
ylabel('om_3');
zlabel('mu_3');
title('Sanitizers cluster', 'FontSize', 16)

tapas_fit_plotCorr(est_biscuits(7))
tapas_fit_plotCorr(est_virus(7))


if SAVE
    saveas(fig1, get('name', fig1), '.jpg')
    saveas(fig2, get('name', fig2), '.jpg')
    saveas(fig3, get('name', fig3), '.jpg')
end
