// Task Javascript Introduction 3
// Week 2
// Oct 31, 2023

const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
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
    if(param1 === null){
      let result = await param2.map(p => p);
      console.log(result)
    } else {
      console.log(param1.message)
    }
  }catch(err){
    console.log(err)
  }finally{
    console.log('End of Program')
  }
}

getMonth(showMonth)