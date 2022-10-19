function y=My_demodulator(B,N)
m = length(B);
y = zeros(m,N);
    if N == 1
        
        % BPSK Constellation
        constellation = [-1,1];
    elseif N == 2
        
        % QPSK Constellation
        constellation = (1/sqrt(2))*[-1-1i,-1+1i,1-1i,1+1i];
    elseif N == 4
       
        % 16QAM constellation 
        constellation = (1/sqrt(10))*[-3-3j,-3-1j,-3+1j,-3+3j,-1-3j,-1-1j,-1+1j,-1+3j,1-3j,1-1j,1+1j,1+3j,3-3j,3-1j,3+1j,3+3j];
    end
    for i = 1:m
        dist = abs ((constellation - B(i)).^2);
        [minVal, minIndex] = min(dist);
        y(i,:) = dec2bin(minIndex - 1,N)-48;
    end
    y = reshape(y',m*N,1);
end