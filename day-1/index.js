// const os = require('os')
// console.log(os.arch())

// console.log(os.platform())

// console.log(os.hostname())

// console.log(os.version())

// console.log(os.uptime())
// console.log(os.totalmem()/1024/1024/1024 + " GB")

// console.log(os.freemem()/1024/1024/1024 + " GB")

// console.log(os.cpus().length)


const fs = require('fs');

// fs.writeFile('test.txt', 'Hello World!', (err) => {
//     if (err) console.log(err)
//     else console.log('File has been created!');
    
// });

// fs.readFile('test.txt', 'utf8', (err, data) => {
//     if (err) console.log(err)
//     else console.log(data);
    
// });
// fs.appendFile('test.txt', ' This is an appended text.', (err) => {
//     if (err) console.log(err)
//     else console.log('File has been updated!');
    
// }  );

// fs.unlink('test.txt', (err) => {
//     if (err) console.log(err)
//     else console.log('File has been deleted!');
    
// });

const data = {
    name: 'John Doe',
    age: 30,
};

fs.writeFile('data.json', JSON.stringify(data,["name","age"],5), (err) => {
    if (err) console.log(err)
    else console.log('JSON file has been created!');
    
});