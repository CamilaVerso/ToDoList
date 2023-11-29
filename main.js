
let tarefas = [];
let contadorIds = 1;

function adicionarTarefa(mensagem) {
	const novaTarefa = {
		id: contadorIds++,
		mensagem: mensagem,
	}
	tarefas.push(novaTarefa);
}

adicionarTarefa("Limpar a casa");
adicionarTarefa("Limpar o quarto");
adicionarTarefa("Lavar a louça");

function editarTarefaPeloId(id, novaMensagem) {
	const index = tarefas.findIndex(tarefa => tarefa.id === id);

	if (index !== -1) {
		tarefas[index].mensagem = novaMensagem;
		console.log(`Tarefa com Id ${id} editada com sucesso.`);
	} else {
		console.log(`Nenhuma tarefa encontrada com o ID ${id}.`);
	}
}

function listarTarefas() {
	tarefas.forEach((tarefas) => {
		console.log(`Aqui está a sua tarefa de número ${tarefas.id}: ${tarefas.mensagem}`)
	})
}

function removerTarefaPeloId(id) {
	tarefas = tarefas.filter(tarefas => tarefas.id != id);
}

function obterTarefaPeloId(id) {
	const tarefasEncontradas = tarefas.filter(tarefa => tarefa.id === id);

	if (tarefasEncontradas.length > 0) {
		console.log("Tarefa encontrada:");
		tarefasEncontradas.forEach(tarefa => {
			console.log(`- ${tarefa.mensagem}`);
		});0
	} else {
		console.log(`Nenhuma tarefa encontrada com o Id ${id}`);
	}
}
