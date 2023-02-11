


// simple function


const perOne = (friend) => {

  console.log(`sudhir ${friend} singh `);
  
}

const perTwo = () => {

  console.log(`from Bihar`);
}


perOne("Thapa");
perTwo();

 </script>


// simple function

const perOne = (friend,callfrnd) => {

  console.log(` sudhir ${friend} singh `);
  callfrnd();
}

const perTwo = () => {

  console.log(`from Bihar`);
}


perOne("Thapa",perTwo);

 </script>



// OUTPUT:- Both has same output



