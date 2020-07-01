var arrangeCoins = function(n) {
  var i = 0;
  while(i <= n) {
      n = n - i;
      if(n <= i) {
        return i;
      }
      i++;
  }
};

console.log(arrangeCoins(6))