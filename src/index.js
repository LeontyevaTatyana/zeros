module.exports = function getZerosCount(number) {
  
  let n = 5;
  let result = 0;
  
	while(number > n){
		result +=  Math.floor(number / n);
		n *=  5;
  }
  
 	return result;
}
