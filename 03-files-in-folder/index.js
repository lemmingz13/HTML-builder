const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, 'secret-folder'), { withFileTypes: true }, (err, files) => {
  files.forEach((file) => {
   
    const info = [];
 
    if (file.isDirectory() === true) return;
   
    const fileName = file.name.split('.')[0];
    const ext = path.extname(file.name).split('.')[1];
    const thisPath = path.join(`${__dirname}/secret-folder`, `${file.name}`);
   
    fs.stat(thisPath, (err, stats) => {
     
      const size = `${stats.size / 1000}kb`;
      arrInfo.push(fileName, ext, size);
      const result = info.join(' - ');
      console.log(result);
    });
  });
});
