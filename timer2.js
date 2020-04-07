const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const prompt = () => {rl.question('', (input) => {
    if (input === 'b') {
      process.stdout.write('\r \x07');
    } else {
      process.stdin.write(`Setting timer for ${input} seconds...\n`)
      let timeout = 1000;
      for (let i = 1; i <= Number(input); i++) {
        setTimeout(() => {
          if (i === Number(input)) {
            process.stdout.write(`\r${i}\x07  \n`);
          } else {
            process.stdout.write(`\r${i}  `);
          }
        }, timeout);
        timeout += 1000;
      }
    }
    prompt();
  });
};

prompt();

rl.on('SIGINT', () => {
  console.log('Thanks for using me, ciao!');
  rl.close();
});

