const fs = require('fs');
const { stdin } = require('process');
const readline = require('readline')
// cria e abre o arquivo
fs.open('arq.txt', 'as', function (err, file) {
    if (err) throw err;
})

const data = fs.readFileSync('arq.txt', 'utf8')

const vogais = ['a','e','i','o','u','A','E','I','O','U']


// funcao para fazer leitura teclas digitadas no terminal
let leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function ler() {
    for (let i = 0; i < data.length; i++) {
        process.stdout.write(data[i])
    }
}

function exibirlinha() {
    const linhas = data.split('\n').length;
    console.log(linhas);
}


function vogal() {
    for (let i = 0; i < data.length; i++) {
        if (vogais.includes(data[i])) {
            cont++;
        }
    }
}


function pergunta() {
    leitor.question("Digite os numeros(0 para sair)\n ", function(resultado) {
    if (resultado === '0') {
        leitor.close();
    } else {
    fs.appendFileSync("arq.txt", resultado + "\n");
        pergunta()
    }
})
}

function Menu() {
    console.log("\n Menu: ")
    console.log("1 - Digitar na Lista")
    console.log("2 - ler os caracteres")
    console.log("3 - exibirlinha")
    console.log("4 - ler as vogais")
    leitor.question("Escolha uma Função: ",function(opcao) {
    switch (opcao) {
        case '1':
            pergunta()
            break;
        case '2':
            ler()
            break;
        case '3':
            exibirlinha()
            break;
        case '4':
            vogal()
            break;
        default:
            console.log("Funcao Invalida!")
            Menu();
            break;
    }}
    )
}

Menu();