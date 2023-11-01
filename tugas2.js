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
  if(!err){
    console.log(month)
  } else {
    console.log(err.message)
  }
}

getMonth(showMonth)

const showData = (err, month) => {
  if(!err){
    month.forEach(dat => console.log(dat))
  } else {
    console.log(err.message)
  }
}

getMonth(showData)