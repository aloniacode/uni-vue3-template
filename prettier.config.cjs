module.exports = {
  singleQuote: true,
  printWidth: 120,
  arrowParens: 'always',
  semi:true,
  tabWidth:2,
  trailingComma: "es5",
  endOfLine: "auto",
  overrides: [
    {
      files: "*.html",
      options: {
        parser: "html"
      }
    }
  ]
}

