import tokens from "./config-tokenizer.js"
import availableOptions from "./available-options.js"

const options = {}

function sanityCheck(tokens, options) {
    for (let token in tokens) {
        if (!availableOptions.has(token)) {
            throw new Error(`Invalid option '${token}'`)
        }
        options[token] = tokens[token]
    }
}

sanityCheck(tokens, options)
export default options
