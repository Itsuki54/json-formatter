#!/usr/bin/env node
// JSON整形関数
function formatJSON(input) {
    try {
        const json = JSON.parse(input);
        return JSON.stringify(json, null, 2); // 2スペースでインデント
    }
    catch (error) {
        throw new Error("Invalid JSON");
    }
}
// CLIとして実行
function main() {
    const inputChunks = [];
    process.stdin.setEncoding("utf-8");
    process.stdin.on("data", chunk => inputChunks.push(chunk.toString()));
    process.stdin.on("end", () => {
        const input = inputChunks.join("");
        try {
            const formatted = formatJSON(input);
            console.log(formatted);
        }
        catch (error) {
            console.error(error.message);
            process.exit(1);
        }
    });
}
main();
