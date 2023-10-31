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


let showMonth = (param1, param2) => {
  if(param1 === null){
      console.log(param2.map(m => m))
  } else {
    console.log(param1.message)
  }
}
getMonth(showMonth)