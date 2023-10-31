// Task Javascript Introduction 3
// Week 2
// Oct 31, 2023

let data = fetch('https://jsonplaceholder.typicode.com/users');

async function showData(){
  try{
    let result = await data;
    console.log(result)
    let dataName = await result.json()
    console.log(dataName.map(n => n.name))
  } catch(error){
    console.log(error)
  }
}

showData()