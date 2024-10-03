const { kelompokkanBilangan } = import('./exam');

for (let i = 1; i <= 20; i++) {
  console.log(`${i} adalah ${kelompokkanBilangan(i)}`);
}
