function gen = generative_model(P,N,SAVE)
    const = 1;
    while const
        rng shuffle    % shuffle the seed of randn, otherwise always same results

        CN = @(m,v,a,b)m+sqrt(v).*(randn(a, b));

        u = zeros(N,1);
        s = zeros(N,1);
        x_1 = zeros(N,1);
        x_2 = zeros(N,1);
        x_3 = zeros(N,1);

        x_2(1) = abs(CN(P.mu_2, P.sa_2, 1, 1));     % initial value of perceptual state (mu_2, sigma_2)
        x_3(1) = abs(CN(P.mu_3, P.sa_3, 1, 1));     % initial value of perceptual state (mu_3, sigma_3)
        
        % Generate random inputs for the user (eyes or sanitizer)
        cues = round(randn(N,1));
        
        % Generative model
        for i = 2:N
            x_3(i) = CN(x_3(i-1), exp(P.om_3), 1, 1);
            x_2(i) = CN(x_2(i-1), exp(P.ka_2 * x_3(i) + P.om_2), 1, 1);
            s(i) = 1 / (1 + exp(-x_2(i)));
        end
        
        % Ground truth of the user belief (height or next supermarket)
        u = rand(N,1);
        bern = s.^cues .* (1-s).^(1-cues);
        u = round(bern);
        
        % Verify that u is sufficiently varied
        M = 5;
        assert(mod(N,M) == 0);
        t = reshape(s,N/M,M);
        if all(var(t) > 0.02)
            const = 0;
        end
    end
    
    gen = struct('x_3',x_3, 'x_2',x_2, 'cues',cues, 's',s, 'u',u);
    
    if SAVE
        save('input.mat','gen')
    end
    
end