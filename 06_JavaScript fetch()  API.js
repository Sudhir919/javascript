
// *********************************** GET REQUEST *****************************************************

// Syntax:

fetch('url')    //api for the get request
  .then(response => response.json())
  .then(data => console.log(data));

// -> e.g:- 
 
fetch('https://api.github.com/orgs/nodejs')
.then(apidata)=>{
  console.log(apidata);
  return apidata.json();
})

.then((actualdata) => {
  console.log(actualdata);
})

.catch(error) => {
  console.log(error);
})


// ********************************** POST REQUEST ***************************************

let data = {
   first_name: 'John',
   last_name: 'Adams',
   job_title: 'Software Engineer'
};
const options = {
   method: 'POST',
   body: JSON.stringify(data),
   headers: {
     'Content-Type': 'application/json'
}
}
fetch('https://reqres.in/api/users', options)
   .then(res => res.json())
   .then(res => console.log(res));











