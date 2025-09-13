const arg = process.argv[2];
const count = parseInt(arg);

if (isNaN(count)) {
  console.log("Missing size");
} else {
  for (let i = 0; i < count; i++) {
    console.log("X".repeat(count));
  }
}