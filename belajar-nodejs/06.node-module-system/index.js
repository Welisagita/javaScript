const printNama = (nama) => `Nama saya ${nama}`;
console.log(printNama('Weli'));



/*cara export core module

const fs = require('fs');//contoh core module*/

//print dari file module-exports.js; local module
const modulexport = require('./module-exports');//local module
console.log(modulexport.cetakNama('Abdullah'));
console.log(modulexport.PI);
console.log(modulexport.mahasiswa.cetakMhs());
console.log(new modulexport.Orang());
/*cara export npm module, nantinya akan ada di folder node_modules

const moment = require('moment');//third party module*/