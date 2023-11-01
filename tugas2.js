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

const showMonth = (err, month) => {
  if(err){
    console.log(err.message)
  } else {
    console.log(month.map(data => data))
  }
}

getMonth(showMonth)

const showData = (err, month) => {
  if(err){
    console.log(err.message)
  } else {
    month.forEach(dat => console.log(dat))
  }
}

getMonth(showData)