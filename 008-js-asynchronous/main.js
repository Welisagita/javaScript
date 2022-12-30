let countValue3 = new Promise(function(resolve, reject){
  resolve('Promise Resolved');
})

countValue3.finally(
  function greet(){
      console.log ('This code is executed.')
  }
);