function y = My_deinterleaver(B,a)
m = length(B);
y = zeros(m,1);
B = reshape(B , m/a , a);
k=1;
    for i = 1:m/a
        for j = 1:a
            y(k,1) = B(i,j);
            k = k+1;
        end
    end
end