import { createToken, Lexer } from "chevrotain"

export const WhiteSpace = createToken({
  name: "WhiteSpace",
  pattern: /\s+/,
  group: Lexer.SKIPPED,
})

export const Word = createToken({ name: "Word", pattern: /\w+/ })

export const Comma = createToken({ name: "Comma", pattern: /,/ })

export const Exclamation = createToken({ name: "Exclamation", pattern: /!/ })

export const allTokens = [WhiteSpace, Comma, Exclamation, Word]

export const lexer = new Lexer(allTokens)

// let inputText = "Hello, world!"
// let result = lexer.tokenize(inputText)
// console.log(result)
