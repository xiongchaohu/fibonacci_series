'use strict';

function fibonacci_series(n) {

	var temp=[0,1]; 
  
    if(n==0)
    	temp.pop();
    else  
    {  
       	for (var i = 2; i < n+1; i ++)  
       	{  
           	tmp = temp[i-2] + temp[i-1];  
           	temp.push(tmp); 
        }  
        
      
	}
 	return temp; 
}

module.exports = fibonacci_series;
