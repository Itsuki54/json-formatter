---

# JSON Formatter

A simple CLI tool to format JSON input into a pretty-printed output.

## Features

- Formats JSON input with 2-space indentation.
- Reads from standard input (stdin) and outputs to standard output (stdout).
- Useful for piping JSON between commands in the terminal.

---

## Installation

### Locally for development

1. Clone this repository or create a new project:
   ```bash
   git clone [<repository-url>](https://github.com/Itsuki54/json-formatter.git)
   cd json-formatter
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the project:
   ```bash
   npm run build
   ```

4. Link the CLI tool:
   ```bash
   npm link
   ```

---

## Usage

### Example: Formatting JSON

Pipe a JSON string into the tool to format it.

```bash
echo '{"key":"value","arr":[1,2,3]}' | json-formatter
```

**Output:**
```json
{
  "key": "value",
  "arr": [
    1,
    2,
    3
  ]
}
```

---

### Error Handling

If invalid JSON is provided, the tool outputs an error message and exits with code `1`.

```bash
echo '{"key":value}' | json-formatter
```

**Output:**
```
Invalid JSON
```

---

## Development

### Project Structure

- `src/index.ts`: Main entry point of the tool.
- `dist/index.js`: Compiled JavaScript file.

### Commands

- Build the project:
  ```bash
  npm run build
  ```
- Run the tool directly with `ts-node`:
  ```bash
  echo '{"key":"value"}' | npx ts-node src/index.ts
  ```

---
