
let tarefas = [];

// Adicionar uma tarefa
function adicionarTarefa(mensagem) {
	tarefas.push(mensagem);
}

adicionarTarefa("Limpar a casa");
adicionarTarefa("Limpar o quarto");
adicionarTarefa("Lavar a louça");

// Editar a tarefa a partir do index
function editarTarefa(index, novaMensagem) {
	tarefas[index] = novaMensagem
}

// função que listará todas as tarefas adicionadas
function listarTarefas() {
	tarefas.forEach((tarefas) => {
		console.log(`Aqui está a sua tarefa: ${tarefas}`)
	})

}

// função que irá excluir a tarefa de acordo com o index
function removerTarefa(index) {
	tarefas.splice(index, 1)
}
