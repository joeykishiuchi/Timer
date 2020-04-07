const argv = process.argv.slice(2).sort((a, b) => a - b);
let timeout = 500;

for (let i = 1; i <= argv[argv.length - 1]; i++) {
  setTimeout(() => {
    if (argv.includes(i.toString())) {
      process.stdout.write(`\r.  `);
    } else {
      process.stdout.write(`\r${i}  `);
    }
  }, timeout);
  timeout += 500;
}

setTimeout(() => {
  console.log();
}, timeout);