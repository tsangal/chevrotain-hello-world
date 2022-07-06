import { parseInput, parser } from "./parser.js"

const BaseHelloWorldVisitor = parser.getBaseCstVisitorConstructor()

class HelloWorldVisitor extends BaseHelloWorldVisitor {
  constructor() {
    super()
    this.validateVisitor()
  }

  helloWorldStatement(ctx) {
    const words = ctx.word.map((w) => this.visit(w))
    return [
      words[0],
      ctx.Comma[0].image,
      words[1],
      ctx.Exclamation[0].image,
    ].join("")
  }

  word(ctx) {
    return ctx.Word[0].image
  }
}

function visit(text) {
  const cst = parseInput(inputText)
  const visitor = new HelloWorldVisitor()
  const result = visitor.visit(cst)
  return result
}

const inputText = "Hello, world!"
const result = visit(inputText)
console.debug(result)
