function users = create_users_struct(file_name_json)
    database_data = jsondecode(fileread(file_name_json));
    N_users = numel(database_data.results);
    
    users = struct([]);
    
    for i = 1:N_users
        users(i).biscuit_test = string2array(database_data.results(i).test1, 'NaN')';
        users(i).virus_test = string2array(database_data.results(i).test2, 'NaN')';
        users(i).anxiety_test = string2array(database_data.results(i).test3, '');
        users(i).anxiety_test_sum = sum(users(i).anxiety_test);
        users(i).anxiety_test_result = sum(users(i).anxiety_test) > 30;
        users(i).num_nan = sum(string2array(database_data.results(i).test2, '') == 2);
    end
end 