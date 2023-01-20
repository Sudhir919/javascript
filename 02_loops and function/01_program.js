

let marks = {
    harry: 90,
    shubham: 9,
    lovish: 56,
    Monika: 4
  }
  // Problem No 1
  for (let i = 0; i < Object.keys(marks).length; i++) {
    // console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
  }
  
  

//for each loop

  for (let key in marks) {
    // console.log("The marks of " + key + " are " + marks[key])
  }
  

  
  // function
  const mean = (a, b, c, d) => {
    return (a + b + c + d) / 4
  }
  
  console.log(mean(4, 5, 6, 7))


