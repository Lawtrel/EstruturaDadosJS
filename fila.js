//DESAFIO
//Implemente uma fila básica usando uma lista em Javascript. A fila deve suportar as operações de enfileirar (enqueue), desenfileirar (dequeue), quantidade de itens na fila, ler_item e verificar se está vazia (is_empty).

class Fila {
    constructor() {
        this.pos = 0;
        this.ultimaPos = 0;
        this.items = {};
    }

    enqueue(elemento) {
        this.items[this.pos] = elemento
        this.pos++
    }
    
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.ultimaPos]
        delete this.items[this.ultimaPos]
        this.ultimaPos++
        return result
    }
    
    peek() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.ultimaPos]
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return this.pos - this.ultimaPos
    }

    clear() {
        this.items = [];
        this.pos = 0;
        this.ultimaPos = 0

    }

    toSring() {
        if (this.isEmpty()) {
            return ''
        }
        let obj = `${this.items[this.ultimaPos]}`
        for (let i = this.ultimaPos + 1; i < this.pos; i++) {
            obj = `${obj},${this.items[i]}`
        }
        return obj
    }
};
/*class Desenfila {
    constructor() {
        this.pos = 0
        this.ultimaPos = 0
        this.items = {}
    }
    addFrente(elemento) {
        if (this.isEmpty()) {
            this.addAtras(Element)
        } else if (this.addAtras.ultimaPos > 0) {
            this.ultimaPos--
            this.items[this.ultimaPos] = elemento
        } else {
            for (let i = this.pos; i > 0; i--) {
                this.items[i] = this.items[i - 1]
            }
            this.pos++
            this.ultimaPos = 0
            this.items[0] = elemento
        }

    }
}*/

const fila = new Fila()
//const desenfila = new Desenfila()
console.log(fila.isEmpty()) // True

fila.enqueue('Arroz')
fila.enqueue('Feijao')
fila.enqueue('Carne')
fila.enqueue('Salada')
console.log(fila.size()) // (4)


console.log(fila.toSring())

fila.dequeue() // Remove Arroz

console.log(fila.toSring())
console.log(fila.size()) // 3

console.log(fila.isEmpty()) // False

console.log(fila.peek()) // ver que esta na frente da fila (FEIJAO)
//console.log(fila.clear()) // limpar a fila

console.log(fila.size())
console.log(fila.toSring())