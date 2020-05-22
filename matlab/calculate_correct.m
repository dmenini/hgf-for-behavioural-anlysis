function correct = calculate_correct (cluster, anxiety_result)
    correct = 0;
    for i = 1:numel(cluster)
        if (anxiety_result(i) == 1 & cluster(i) == 2) | (anxiety_result(i) == 0 & cluster(i) == 1)
               correct = correct + 1;
        end 
    end 
    
end