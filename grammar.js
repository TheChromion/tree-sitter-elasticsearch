/**
 * @file Elasticsearch grammar for tree-sitter
 * @author Jonas Lieber
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

export default grammar({
  name: "elasticsearch",

  extras: ($) => [' ', '\t', '\r', '\n'],

  rules: {
    source_file: ($) => repeat($.request),

    request: ($) => seq($.method, ' ', $.path),

    method: ($) => choice("GET", "POST", "PUT", "DELETE"),

    path: ($) => seq("/", repeat1($.path_segment)),

    path_segment: ($) => seq(/[a-zA-Z0-9_-]+/, optional("/")),
  },
});
