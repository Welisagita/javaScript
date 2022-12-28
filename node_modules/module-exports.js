
//export FUNCTION
function cetakNama(nama){
    return `Halo, nama saya ${nama}`
}
//module.exports.cetakNama = cetakNama;


//export VARIABLE
const PI = 3.14;
//module.exports.PI = PI;


//export OBJECT
const mahasiswa = {
    nama: 'Budi',
    umur: 19,
    cetakMhs (){
        return `Halo, nama saya ${this.nama} dan saya ${this.umur} tahun.`
    }
}
//module.exports.mahasiswa = mahasiswa;


//export CLASS
class Orang{
    constructor(){
        console.log('Objek orang telah dibuat!!')
    }
}
//module.exports.Orang = Orang;


//Cara lain export
module.exports = {
    cetakNama: cetakNama,
    PI: PI,
    mahasiswa: mahasiswa,
    Orang: Orang
}