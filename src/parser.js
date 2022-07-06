import { CstParser } from "chevrotain"
import { allTokens, Comma, Exclamation, lexer, Word } from "./lexer.js"

class HelloWorldParser extends CstParser {
  constructor() {
    super(allTokens)

    const $ = this

    $.RULE("helloWorldStatement", () => {
      $.SUBRULE($.word)
      $.CONSUME(Comma)
      $.SUBRULE1($.word)
      $.CONSUME(Exclamation)
    })

    $.RULE("word", () => {
      $.CONSUME(Word)
    })

    this.performSelfAnalysis()
  }
}

export const parser = new HelloWorldParser()

export function parseInput(text) {
  const lexingResult = lexer.tokenize(text)
  parser.input = lexingResult.tokens
  const cst = parser.helloWorldStatement()

  if (parser.errors.length > 0) {
    console.error(parser.errors)
    throw new Error("sad sad panda, Parsing errors detected")
  }

  return cst
}

// const inputText = "Hello, world!"
// const parserOutput = parseInput(inputText)
// console.debug(parserOutput)
