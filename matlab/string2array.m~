function array = string2array(str, type)  

    len = length(str);
    array = zeros(1, len);
    for i = 1:len
        c = str(i);
        array(i) = str2num(c);
        if array(i) == 2 && strcmp(type,'NaN')
            array(i) = round(rand);
        end
    end
    array = fliplr(array);
    
end