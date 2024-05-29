let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum = sum + i;
  if (sum == 10) {
    document.write("=");
  } else {
    document.write("+");
  }
}
document.write(sum);
