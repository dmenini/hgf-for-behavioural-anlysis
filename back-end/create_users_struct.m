function users = create_users_struct(file_name_json)
    database_data = jsondecode(fileread(file_name_json));
    N_users = numel(database_data.results);
    users = struct([]);

    for i = 1 : N_users
        users(i).eyes_test = database_data.results(i).test1;
        users(i).virus_test = database_data.results(i).test2;
        users(i).anxiety_test = database_data.results(i).test3;
        users(i).anxiety_test_result = sum(users(i).anxiety_test);
    end
end 