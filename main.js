// Adicionar uma tarefa
let tarefas = [];

function adicionarTarefa(mensagem) {
	tarefas.push(mensagem);
}

adicionarTarefa("Limpar a casa");
adicionarTarefa("Limpar o quarto");
adicionarTarefa("Lavar a louça");

// console.log(tarefas)

// Editar a tarefa a partir do index
function editarTarefa(index, novaMensagem) {
	tarefas[index] = novaMensagem
}

// editarTarefa(0, 'varrer o chão');

// console.log(tarefas)

// função que listará todas as tarefas adicionadas
function listarTarefas() {
	tarefas.forEach((tarefas) => {
		console.log(`Aqui está a sua tarefa: ${tarefas}`)
	})
		
}

listarTarefas();
