# 📚 XML Term Frequency Indexer

Welcome to **XML Term Frequency Indexer**!  
A simple Rust CLI tool to index XML files in a folder and count term frequencies.  
Perfect for quick text analysis and search experiments! 🚀

---

## ✨ Features

- 🔍 **Index**: Recursively scans a folder, parses XML files, and builds a term frequency index.
- 📦 **Save**: Stores the index as a JSON file for later use.
- 📊 **Check**: Quickly see how many documents are indexed.
- 🌐 **Serve**: Start a local HTTP server with a web interface and API for searching.
- ⚡ **Fast**: Written in Rust for speed and reliability.

---

## 🛠️ Usage

```sh
cargo run -- [SUBCOMMAND] [OPTIONS]
```

### Subcommands

| Command                                         | Description                                                        |
|-------------------------------------------------|--------------------------------------------------------------------|
| `index <folder>`                                | Index all XML files in `<folder>` and save index                   |
| `search <index-file>`                           | Show how many documents are in the index                           |
| `serve <index-file> [address]`                  | Start local HTTP server with web interface (default: 127.0.0.1:6969)|

---

### 📥 Example

**Index a folder:**
```sh
cargo run -- index ./my-xml-folder
```

**Check an index:**
```sh
cargo run -- search index.json
```

**Serve the index via HTTP:**
```sh
cargo run -- serve index.json
```
Or specify a custom address:
```sh
cargo run -- serve index.json 0.0.0.0:8080
```

---

## 🌐 HTTP API

- **POST `/api/search`**  
  Send a search query in the request body.  
  Returns the top 10 ranked files (currently prints to server log and responds with `"ok"`).

- **GET `/` or `/index.html`**  
  Serves the web interface (requires `index.html` in the working directory).

- **GET `/index.js`**  
  Serves the JavaScript for the web interface (requires `index.js` in the working directory).

---

## 📄 Output

- The index is saved as `index.json` in the current directory.
- Each file's term frequencies are stored as a map.

---

## 🧩 Dependencies

- [xml-rs](https://crates.io/crates/xml)
- [serde](https://crates.io/crates/serde)
- [serde_json](https://crates.io/crates/serde_json)
- [tiny_http](https://crates.io/crates/tiny_http)

---

## 💡 Notes

- Only XML files are parsed.
- The `search` command currently only shows the number of indexed documents.
- The HTTP `/api/search` endpoint prints results to the server log and returns `"ok"`.
- All terms are converted to uppercase for consistency.
- Place your `index.html` and `index.js` in the working directory to use the web interface.

---

## 📝 License

MIT

---

Made with ❤️ in Rust.
