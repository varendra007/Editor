syms a b c d ;
s=[a;b;c;d;xor(a,b);xor(xor(a,b),c);xor(c,d)];
m = [a;b;c;d];
x = linsolve(m,s)

