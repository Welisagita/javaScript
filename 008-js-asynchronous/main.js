let promise4 = new Promise(function(resolve, reject){
  setTimeout(function(){
      resolve('Promise resolved')
  }, 4000);
});

async function asyncFunc(){
  try{
      let result4 = await promise4;
      console.log(result4)
  }
  catch (error){
      console.log(error);
  }
}

asyncFunc();
/*In the above program, 
we have used try/catch block to handle the errors. 
If the program runs successfully, 
it will go to the try block. 
And if the program throws an error, it will go to the catch block. */


//======= Benefits of Using async Function
/*
1. The code is more readable than using a callback or a promise.
2. Error handling is simpler.
3. Debugging is easier.*/

/*Note: These two keywords async/await 
were introduced in the newer version of JavaScript (ES8). 
Some older browsers may not support the use of async/await. 
To learn more, visit JavaScript async/await browser support. */


