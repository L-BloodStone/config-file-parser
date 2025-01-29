import fs from "node:fs"

const rawText = fs.readFileSync("./note.conf", { encoding: "utf8" })

const pairs = rawText.split(/\n/)

const tokens = { }

for (let i of pairs) {
    // ignore comment line
    if (i.match(/^\/\//)) continue

    // split the token and value
    const token = i.split(/ ?: ?/)
    if (token[0] == '') continue
    
    tokens[token[0]] =  token[1]
}

export default tokens
