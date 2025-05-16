const Aluno = {
    nome: "Carlos",
    idade: "16", 
    curso: "TI"
};

const jsonGerado = JSON.stringify(Aluno)
console.log(jsonGerado);
console.log(typeof jsonGerado); 