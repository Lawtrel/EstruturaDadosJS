let cartao = {saldo: 100}
let conta = cartao

conta.valor = 200

console.log("cartao: ", cartao);
console.log("conta: ", conta)

 
function nsei(obj) {
    obj.valor = 100;
    
}

let obj = {valor: 50};
nsei(obj)

console.log(obj.valor);