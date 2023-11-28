// Adicionar uma tarefa
let tarefas = [];

function adicionarTarefa(mensagem) {
tarefas.push(mensagem);
}

adicionarTarefa("Limpar a casa");
adicionarTarefa("Limpar o quarto");
adicionarTarefa("Lavar a louça");

console.log(tarefas)


function editarTarefa (index, novaMensagem){
	tarefas[index] = novaMensagem
}

editarTarefa(0, 'varrer o chão');

console.log(tarefas)
