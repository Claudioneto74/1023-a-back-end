// let nomemateria:string = "Frameworks 1"
// console.log(nomemateria)

// const variavael = 10 
// const variavelNumber:number = 10
// const variavelString:string = "Frameworks 1"
// const variavelbooleano:boolean = true // false

// const vetor:number[] = []

// const vetorstring:string[] = ["strings", "11"]

// vetor.push(10)

// //como criar objetos dentro do JS

// const pessoa = {
//     idade:15,
//     nome:"claudio"
// }

// pessoa.nome = "neto"
// console.log(pessoa)

// //TYPE
//  type EstudanteType = {
//     nome:string,
//     idade:number,
//     cpf: string,
//  }
//  const estudanteObj:EstudanteType ={
//     nome:"neto",
//     idade:17,
//     cpf: "012345678945"
//  } 
//  console.log(estudanteObj)

//  //funções no javascript
//  function soma(a:number,b:number):number|undefined{
//     return a+b
//  }

//  console.log(`o resultado da soma é:${soma(10,20)}`)


//  const vetorExemplo = [1,2,3,4,5,6,7,8,9,10,11]
// console.log (vetorExemplo)
// console.log(vetorExemplo.pop())
// console.log (vetorExemplo)
// console.log(vetorExemplo.pop())
// console.log (vetorExemplo)
// console.log(vetorExemplo.pop())

// function somaA(a:number,b:number):number{
//     return a+b
//  }
// const somaB= function (a:number,b:number):number{
//     return a+b
// }
// const somaC= (a:number,b:number):number=>{
//     return a+b
// }
// const somaD= (a:number,b:number):number=> a+b


// const somay = (a,b)=>a+b



// //atividade
// // primeira atividade com tipagem do typescript

// //crie uma função que par()
// //recebe um numero e se ele for par ele retorna true
// //se nao for, retorna false

// //usem tipagem do typescript na função

// //exemplo1 par(10)  //true
// //exemplo2 par(11)  //false
// //exemplo3 par(0)  //undefined
// //exemplo4 par(-1)  //undefined

// function par(numero: number){
//     if(numero<=0){
//         return undefined
//     }
//     if (numero%2==0){
//         return true
//     }
//     else{
//         return false
//     }
// }
    


// console.log(par(92)); 
// console.log(par(55)); 
// console.log(par(0)); 
// console.log(par(-9)); 

// //crie uma função que receba um vetor e some 
// //os numeros do vetor

// //somaNumeros([1,2,3,4,])
// //10

// //quando o vetor passado for vazio
// //retorna undefined

// function somaNumeros(vetor) {
//     if (vetor.length === 0) return undefined;
//     return vetor.reduce((soma, num) => soma + num, 0);
// }

// console.log(somaNumeros([16, 0, 9, 7]));
// console.log(somaNumeros([]));

// //cire uma função que recebe um vetor e um numero

// //sua função deve somar as posiçoes do vetor elevando  ao numero recebido por parametro

// //exemplo
// //soam elevado([2,2,2]2) //12
// //soma elevado([1,2,3]2) //36

// //se o vetor for vazio devolva undefined

// function somaElevado(vetor, numero) {
//     if (vetor.length === 0) return undefined;
//     return vetor.reduce((soma, num) => soma + Math.pow(num, numero), 0);
// }

// console.log(somaElevado([7, 9,5], 2)); 
// console.log(somaElevado([8, 2, 4], 2)); 
// console.log(somaElevado([1, 2, 1], 3)); 
// console.log(somaElevado([], 2));

// //find

// //criar uma função que retorna
// //verdadeira quando é o meu
// //elemento buscando
// //quando não for, retorne false
// const v = [1,2,3,4,5,6]
// function callbacks(x:number){
//     if(x>=4){
//         return true
//     }
//     else{
//         return false
//     }
// }
// let result = v.filter(callbacks)

// console.log(result)
// type Pessoa = {
//     id: number;
//     nome: string;
//     cpf: number; 
//     idade?: string; 
// };

// const pessoas: Pessoa[] = [
//     {
//         id: 1,
//         nome: "ted",
//         cpf: 123,
//         idade: "7 anos"
//     },
//     {
//         id: 2,
//         nome: "sidy",
//         cpf: 345
//     },
//     {
//         id: 3,
//         nome: "apollo",
//         cpf: 567,
//         idade: "2 anos"
//     },
//     {
//         id: 4,
//         nome: "marrie",
//         cpf: 789
//     }, 
//     {
//         id: 5,
//         nome: "fiote",
//         cpf: 100,
//         idade: "6 meses"
//     }
// ];

// const p = pessoas.find((x)=>x.id==5);
// console.log(p)

// /* assincronidae -> nnao sincronizado
// nao ficar esperando algo que demore enquanto voce 
// pode fazer outrar coisas

// exemplo: enquanto esperamos o banco responder algo.
// podemos realizar ago com javascript.

// promessas
// é um tipo de objeto do javascript que é o retono de 
// uma funçao que nao é sincrona.
// esse objeto chamado de promise quando a funçaçõ termina :
// ele pode estar nos dois casos:
// resolve -> quando a função executou corretamente.
// reject -> quando algo deu errado
// */

// function demora():Promise<string>{
//     let promise = new Promise<string>((resolve,reject)=>{
//     setTimeout(
//         function(){
//             if (Math.random()<0.5){
//              resolve ("dados!")
//              }
//              else{
//                 reject("na hoy, mas não funciona néh")
//              }
//         },
//         4
//     )
//  });
//  return promise
// }
// console.log("executa algo antes")
// const resultado = demora()
// console.log(resultado)


// //.then        => entao    
// // .catch       =>capturar
// resultado.then((resultadoEspera)=>{console.log(resultadoEspera)})
// resultado.catch((resultadoEspera)=>{console.log("catch"+resultadoEspera)})
// console.log("executa algo depois")

// // await //async
//  async function aux (){
//     try{
//    const resultado = await demora ()
//    console.log("resultado await "+resultado)
//    }
//    catch(erro){
//     console.log ("ERRO TRY/CATCH "+erro)
//    }
// }
// aux ()
import mysql, { Connection, ConnectionOptions } from 'mysql2/promise';
import fastify, { FastifyRequest, FastifyReply } from 'fastify'
import cors from '@fastify/cors'
const app = fastify()
app.register(cors)

app.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    reply.send("Fastify Funcionando")
})
app.get('/estudantes', async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        const conn =  await mysql.createConnection({
            host: "localhost",
            user: 'root',
            password: "",
            database: 'banco1023a',
            port: 3306
        })
        const resultado =  await conn.query("SELECT * FROM estudantes")
        const [dados, camposTabela] = resultado
        reply.status(200).send(dados)
    }
    catch (erro: any) {
        if (erro.code === 'ECONNREFUSED') {
            console.log("ERRO: LIGUE O LARAGAO => Conexão Recusada")
            reply.status(400).send({mensagem:"ERRO: LIGUE O LARAGAO => Conexão Recusada"})
        } else if (erro.code === 'ER_BAD_DB_ERROR') {
            console.log("ERRO: CRIE UM BANCO DE DADOS COM O NOME DEFINIDO NA CONEXÃO")
            reply.status(400).send({mensagem:"ERRO: CRIE UM BANCO DE DADOS COM O NOME DEFINIDO NA CONEXÃO"})
        } else if (erro.code === 'ER_ACCESS_DENIED_ERROR') {
            console.log("ERRO: CONFERIR O USUÁRIO E SENHA DEFINIDOS NA CONEXÃO")
            reply.status(400).send({mensagem:"ERRO: CONFERIR O USUÁRIO E SENHA DEFINIDOS NA CONEXÃO"})
        } else if (erro.code === 'ER_NO_SUCH_TABLE') {
            console.log("ERRO: Você deve criar a tabela com o mesmo nome da sua QUERY")
            reply.status(400).send({mensagem:"ERRO: Você deve criar a tabela com o mesmo nome da sua QUERY"})
        } else if (erro.code === 'ER_PARSE_ERROR') {
            console.log("ERRO: Você tem um erro de escrita em sua QUERY confira: VÍRGULAS, PARENTESES E NOME DE COLUNAS")
            reply.status(400).send({mensagem:"ERRO: Você tem um erro de escrita em sua QUERY confira: VÍRGULAS, PARENTESES E NOME DE COLUNAS"})
        } else {
            console.log(erro)
            reply.status(400).send({mensagem:"ERRO: NÃO IDENTIFICADO"})
        }
    }
})

app.listen({ port: 8000 }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})

