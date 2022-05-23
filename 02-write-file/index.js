const fs = require('fs');
const path = require('path');
const question = 'What is your name?';

 fs.appendFile(path.join(__dirname, 'text.txt'), '', () => { });
  process.stdout.write(question)
}

process.stdin.on('data', function (data) {
const newText = data.toString().trim() + '\n';
  
  fs.appendFile(path.join(__dirname, 'text.txt'), newText, () => {
    console.log('HI!');
  });

  if (newText.trim() === 'exit') {
    console.log('Goodbye');
    process.exit();
  }
});

process.on('SIGINT', () => {
  console.log('\nGoodbye');
  process.exit();
});

ask();
