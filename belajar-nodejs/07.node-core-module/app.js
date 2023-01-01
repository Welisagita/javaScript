//Core Module
//File System
const fs = require('fs');

/*=============================================
//menuliskan string ke file (synchronous)
fs.writeFileSync('synchronous.txt', 'Helo world secara synchronous')

//menuliskan string ke file (asynchronous)
fs.writeFile('asynchronous.txt', 'Hello world secara asynchronous', (err) => {
    if (err) throw err;
    console.log('the file has been saved!');
})
==============================================*/


/*=============================================
//membaca isi file (synchronous)
const data = fs.readFileSync('synchronous.txt', 'utf-8');
console.log(data);//Helo world secara synchronous

//membaca isi file (asynchronous)
fs.readFile('asynchronous.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
==============================================*/

/*=============================================
//==Readline
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Masukan nama Anda : ', (nama)=>{
    rl.question('Masukan no HP Anda : ',(noHP)=>{
        console.log(`Terima kasih ${nama}, Anda telah menginputkan ${noHP} `);
    rl.close();
    })
});
==============================================*/

//== Readline and write file to JSON 
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('Masukan nama Anda: ', (nama) => {
    rl.question('Masukan no HP: ', (noHP) => {

        //buat object
        const contact = {
            nama: nama, 
            noHP: noHP
        };
        //baca dan lihat isi file
        const file = fs.readFileSync('data/contacts.json','utf8');
        
        
        //buat array dan ubah file string jadi json
        const contacts = JSON.parse(file)
        //push contact nama dan noHP di array 
        contacts.push(contact);

        //tulis contacts di file JSON, lalu balikan file contacts JSON ke string
        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

        console.log('Terima kasih sudah memasukkan data');
        
        rl.close();
    })
})