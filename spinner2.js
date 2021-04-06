let spinner = ['\r|    ', '\r/    ', '\r/    ', '\r-    ', '\r\\    ', '\r|    ', '\r/    ', '\r/    ', '\r-    ', '\r\\    ', '\r|    '];
let delay = 100;
for (const char of spinner) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 200;
  setTimeout(() => {
    process.stdout.write('\n');
  }, spinner.length * 200);
}