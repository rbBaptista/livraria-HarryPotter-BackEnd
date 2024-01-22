import fs from 'fs';

function getTodosLancamentos() {
    return JSON.parse(fs.readFileSync("lancamentos.json"))
}

export { getTodosLancamentos };