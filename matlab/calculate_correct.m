function correct = calculate_correct(cluster, anxiety_result)
    correct = 0;
    for i = 1:numel(cluster)
        if (anxiety_result(i) && cluster(i)) || (~anxiety_result(i) && cluster(i))
               correct = correct + 1;
        end 
    end
    correct = correct / numel(cluster);
    
    if correct < 0.5
        correct = 1 - correct;
    end
end