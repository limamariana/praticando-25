const nomeSalao = "Salão Sempre Incrível"

const data = new Date();

let clientes = [{
    nome: "Maria",
    idade:27,
    genero: "transgênero",
    contato: "(81) 99996-5678",
    servicos: ["pintar as unhas, cortar o cabelo", "depilação"],
    dinheiro: false
},
{
    nome: "Marcela",
    idade:50,
    genero:"feminino",
    contato:"(81) 98865-2552",
    servicos: ["depilação"],
    dinheiro: true
},
{
    nome: "Carlos",
    idade: 46,
    genero: "masculino",
    contato: "(81) 99541-1231",
    servicos: ["aparar a barba", "fazer as sobrancelhas"],
    dinheiro: true
}

];

const clientList = () => {
    for (let cliente of clientes) {
    console.log(`Os clientes do dia são ${cliente.nome}, ${cliente.idade}`);    
    }
    
};

const listarPagamento = (cliente) => {
    if (cliente.dinheiro === true) {
        console.log(`${cliente.nome} pagou em dinheiro.`);
    } else {
        console.log(`${cliente.nome} utilizou outra forma de pagamento`);
    }
};

const listaDepilacao = (cliente) => {
    if (cliente.servicos[0] === "depilação") {
        console.log(`${cliente.nome} depilou.`);
    } else {
        console.log(`${cliente.nome} não depilou`);
    }
};

const adicionarCliente = (nome, idade, genero, contato, servicos, dinheiro) => {
       newClient = {
        nome, idade, genero, contato, servicos, dinheiro };
        clientes.push(newClient)
    };





//listarPagamento(clientes[0]);
//istarPagamento(clientes[2]);
//listaDepilacao(clientes[2]);
//listaDepilacao(clientes[0]);
//listaDepilacao(clientes[1])
adicionarCliente("Paulo", 18, "masculino", "(81) 98520-0021", "raspar o cabelo", true);
adicionarCliente("Paula", 22, "feminino", "(81) 99520-0001", "fazer luzes", true);

clientList();
console.log(clientes)