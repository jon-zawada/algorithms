var arrangeCoins = function(n) {
  var i = 0;
  while(i <= n) {
      n = n - i;
      //3-3
      if(n <= i) {
        return i;
      }
      i++;
  }
};

console.log(arrangeCoins(6))