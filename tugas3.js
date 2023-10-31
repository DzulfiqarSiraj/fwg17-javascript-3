let data = fetch('https://jsonplaceholder.typicode.com/users');

async function showData(){
  try{
    let result = await data;
    let dataName = await result.json()
    console.log(dataName.map(n => n.name))
  } catch(error){
    console.log(error)
  }
}

showData()