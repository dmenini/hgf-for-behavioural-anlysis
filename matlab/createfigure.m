function createfigure(xvector1, yvector1)
%CREATEFIGURE(xvector1, yvector1)
%  XVECTOR1:  bar xvector
%  YVECTOR1:  bar yvector

%  Auto-generated by MATLAB on 22-May-2020 20:34:27

% Create figure
figure1 = figure('Name','score');

% Create axes
axes1 = axes('Parent',figure1);
hold(axes1,'on');

% Create bar
bar(xvector1,yvector1,'BarWidth',0.4);

% Create title
title('K-Means Score','FontWeight','bold','FontSize',15);

% Uncomment the following line to preserve the Y-limits of the axes
% ylim(axes1,[0.509805605014247 0.79020072459936]);
box(axes1,'on');