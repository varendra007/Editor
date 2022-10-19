function y=My_matrix(n,N,B)
s = ceil(n/N);
y=zeros(s,N);
i=1;
   if i < N+1
       for j =1:s
           for k = 1:N
              y(j,k) = B(i);
              i = i+1;
           end
       end
   end
end
    
