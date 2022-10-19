function J = computeCost(x, y, theta)
m = length(y);
J = sum((x*theta-y).^2,1)/(2*m);
end
