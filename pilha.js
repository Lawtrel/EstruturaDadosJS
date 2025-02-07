/*  1. Criar uma pilha de produtos.
    2. Adicionar produtos à pilha conforme são escaneados.
    3. Remover produtos da pilha simulando o ensacamento.
 */

class Pilha{
    constructor() {
        this.pos = 0;
        this.items = [];
    }
    push(elemento) {
        this.items[this.pos] = elemento;
        this.pos++
    }
    pop() {
        if (this.isEmpty()) {
            return undefined
        }
        this.pos--
        const result = this.items[this.pos]
        delete this.items[this.pos]
        return result
    }

    peek() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.pos - 1]
    }
    isEmpty() {
        return this.pos === 0
    }

    size() {
        return this.pos
    }

    clear() {
        this.items =[]
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let obj = `${this.items[0]}`
        for (let i = 1; i < this.pos; i++) {
            obj = `${obj},${this.items[i]}`
        }
        return obj
    }

}

const pilha = new Pilha()

console.log('Vazio? ',pilha.isEmpty()) // vazio


pilha.push(5) // empilhar
pilha.push(8) // empilhar
pilha.push(7) // empilhar

console.log('Tamanho da Pilha: ',pilha.size()) // tamanho (3)

console.log('Pilha : ',pilha.toString()) // mostra a pilha
console.log('Ultimo elemento: ',pilha.peek()) // exibir ultimo elemento

console.log('Remove o elemento: ',pilha.pop()) // remove elemento da list

console.log("Lista Atual: ",pilha.toString())
console.log("Empilhando: (2)", pilha.push(2))
console.log("Lista Atual: ",pilha.toString())
console.log("Vazio? ",pilha.isEmpty())