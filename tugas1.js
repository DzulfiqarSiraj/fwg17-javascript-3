// Task Javascript Introduction 3
// Week 2
// Oct 31, 2023

const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      const dataDay = ['senin','selasa','rabu','kamis','jumat']

      const cek = dataDay.find((item) => {
        return item === day
      })

      if(cek){
        resolve(cek)
      } else {
        reject(new Error('Hari ini bukan hari kerja'))
      }

    },3000)
  })
};


// a. then catch
cekHariKerja('selasa')
  .then(result => console.log(`Hari ${result} adalah hari kerja`))
  .catch(error => console.log(error.message))


// b. try catch
async function getResult(str){
  try{
    const result = await cekHariKerja(str)
    console.log(`Hari ${result} adalah hari kerja`)
  }catch(error){
    console.log(error.message)
  }finally{
    console.log('Program selesai')
  }
}

getResult('jumat')
getResult('minggu')