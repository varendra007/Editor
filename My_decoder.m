function y=My_decoder(B,a)
m = length(B);
y = zeros(m/a,1);
    for i = 1 : m/a
        n_zero = 0;
        n_one = 0;
        for j = 1:a
            if B((i-1)*a+j,1) == 0
                n_zero = n_zero+1;
            elseif B((i-1)*a+j,1) == 1
                n_one = n_one+1;
            end
        if n_one > n_zero
            y(i,1) = 1;
        elseif n_zero > n_one
            y(i,1) = 0;
        end
        end
    end
end
        