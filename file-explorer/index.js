const fs = require('fs');

// console.log(fs.readdirSync(__dirname));

// function async(err, files) {
//     console.log(files);
// }
// fs.readdir('.', async);


// fs.readdir(__dirname, (err, files)=> {
//     console.log(files);
// });

fs.readdir(process.cwd(), (err, files)=> {
    console.log(' ');
    if(!files.length) {
        return console.log('没有文件可以展示')
    }
    console.log('选择你想要看见的文件夹');
    function file(i) {
        let filename = files[i];
        fs.stat(`${__dirname}/${filename}`, (err, stat)=> {
            if(stat.isDirectory()) {
                console.log(`${i}${filename}`);
            }else {
                console.log(`${i}${filename}`);
            }
        });
        i++;
        if(i == files.length) {
            console.log('');
            process.stdout.write('输入你的选择');
        }else {
            file(i);
        }
    }
    file(0)
});
