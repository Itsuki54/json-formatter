#!/usr/bin/env node

function formatJSON(input: string): string {
  try {
    const json = JSON.parse(input);
    return JSON.stringify(json, null, 2);
  } catch (error) {
    throw new Error("Invalid JSON");
  }
}

function main() {
  const inputChunks: string[] = [];

  process.stdin.setEncoding("utf-8");
  process.stdin.on("data", chunk => inputChunks.push(chunk.toString()));
  process.stdin.on("end", () => {
    const input = inputChunks.join("");
    try {
      const formatted = formatJSON(input);
      console.log(formatted);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  });
}

main();

