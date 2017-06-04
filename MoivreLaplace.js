const MoivreLaplace = (k, n, p) => {
  
  return (Math.E**(((k - n * p)**2)/(-2 * n * p * (1  - p))) ) / (Math.sqrt(2 * Math.PI * n * p * (1  - p)));
 };
 
 MoivreLaplace (208, 500, 0.75);
