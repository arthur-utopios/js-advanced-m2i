import readline from "readline";

export async function input(message) {
  const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    reader.question(message, (answer) => {
      resolve(answer);
      reader.close();
    });
  });
}