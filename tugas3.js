// Task Javascript Introduction 3
// Week 2
// Oct 31, 2023

let data = fetch('https://jsonplaceholder.typicode.com/users');

// handling menggunakan async/await dan mencetak array dengan isi kumpulan string nama
async function showData(){
    try{
        let result = await data;
    let dataName = await result.json()
    if(dataName.length){
      console.log(dataName.map(d => d.name))
    } else {
      throw new Error('Invalid process')
    }
  } catch(error){
    console.log(error.message)
  }
}

showData()


// handling data menggunakan then catch dan mencetak setiap nama
data
  .then(result => result.json())
  .then(result => {
    if(result.length){
      result.forEach(data => console.log(data.name))
    } else {
      throw new Error('Invalid Process')
    }
  })
  .catch(error => console.log(error.message))