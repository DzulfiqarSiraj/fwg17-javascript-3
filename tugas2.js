// Task Javascript Introduction 3
// Week 2
// Oct 31, 2023

const getMonth = (callback) => {
  setTimeout(() => {
    let error = true;
    let month = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];

    if (!error){
      callback(null, month)
    } else {
      callback( new Error('Sorry Data Not Found'), [])
    }
  },4000)
}

async function showMonth(param1, param2){
  try{
    let result = await param2.map(p => p)
    if(param1 !== null){
      console.log(result)
      console.log(param1.message)
    } else {
      console.log(result)
    }
  }catch(err){
    console.log(err.message)
  }finally{
    console.log('End of Program')
  }
}

getMonth(showMonth)