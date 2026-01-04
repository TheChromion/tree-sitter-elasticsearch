# tree-sitter-elasticsearch

A [Tree-sitter](https://tree-sitter.github.io/tree-sitter/) grammar for Elasticsearch query syntax.

> **Note:** This grammar is currently a work in progress and not feature-complete. It is being developed as a learning project for understanding and working with Tree-sitter parsers.

## About

This project provides syntax parsing for Elasticsearch HTTP requests using the Tree-sitter parsing framework. Tree-sitter is an incremental parsing library that generates concrete syntax trees and is commonly used in text editors for syntax highlighting, code navigation, and other language-aware features.

## Current Features

The grammar currently supports basic Elasticsearch HTTP request parsing:

- HTTP methods: `GET`, `POST`, `PUT`, `DELETE`
- Path segments for Elasticsearch endpoints
- Basic request structure parsing

## Installation

This package is not published to any registry. To use it in your project, you can install it directly from the git repository.

### NPM

Add to your `package.json`:

```json
{
  "dependencies": {
    "tree-sitter-elasticsearch": "git+https://github.com/tree-sitter/tree-sitter-elasticsearch.git"
  }
}
```

Or install via command line:

```bash
npm install git+https://github.com/tree-sitter/tree-sitter-elasticsearch.git
```

### Cargo

Add to your `Cargo.toml`:

```toml
[dependencies]
tree-sitter-elasticsearch = { git = "https://github.com/tree-sitter/tree-sitter-elasticsearch.git" }
```

## Usage

### Node.js

```javascript
import Parser from "tree-sitter";
import Elasticsearch from "tree-sitter-elasticsearch";

const parser = new Parser();
parser.setLanguage(Elasticsearch);

const sourceCode = "GET /my-index/_search";
const tree = parser.parse(sourceCode);
console.log(tree.rootNode.toString());
```

### Rust

```rust
use tree_sitter::Parser;
use tree_sitter_elasticsearch::LANGUAGE;

fn main() {
    let mut parser = Parser::new();
    parser.set_language(&LANGUAGE.into()).unwrap();

    let source_code = "GET /my-index/_search";
    let tree = parser.parse(source_code, None).unwrap();
    println!("{}", tree.root_node().to_sexp());
}
```

## Development

### Prerequisites

- Node.js 22
- Tree-sitter CLI

### Building

Generate the parser:

```bash
npx tree-sitter generate
```

Test the grammar:

```bash
npm test
```

Launch the Tree-sitter playground:

```bash
npm start
```

### Project Structure

- `grammar.js` - The main grammar definition
- `src/` - Generated parser source files
- `bindings/` - Language bindings (Node.js, Rust)
- `queries/` - Syntax highlighting queries

## Roadmap

This grammar is still under development. Planned features include:

- Full Elasticsearch query DSL support
- Request body parsing (JSON)
- Query string parameters
- Multi-line requests
- Comment support
- Syntax highlighting queries

## Contributing

Contributions are welcome! This is a learning project, so feedback and suggestions for improvement are especially appreciated.

## License

MIT

## Resources

- [Tree-sitter Documentation](https://tree-sitter.github.io/tree-sitter/)
- [Elasticsearch Documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html)
