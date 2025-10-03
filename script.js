let taskCounter = 1;

function gerarEspaco() {
    let divItems = document.getElementById("items");

    if (!divItems) {
        divItems = document.createElement("div");
        divItems.id = "items";

        const header = document.createElement("h3");
        header.textContent = "Tarefas adicionadas";
        divItems.appendChild(header);

        document.body.appendChild(divItems);
    }

    return divItems;
}

function addTask() {
    event.preventDefault();

    const title = document.getElementById("tasktitle").value;

    if (title === "") {
        alert("Por favor, insira um título para a tarefa.");
        return;
    }

    if(taskCounter==11) {
        alert("Número máximo de tarefas adicionadas.");
        return;
    }
    
    let divItems = gerarEspaco();
    const itemsDiv = document.getElementById("items");

    const idTask = "task-" + taskCounter;
    const idCheck = "check-" + idTask;
    const idRemove = "remove-" + idTask;
    const titleTask = "title-" + idTask;


    itemsDiv.innerHTML += `
        <div class="itemcard" id="${idTask}">
            <h4 id="${titleTask}">${title}</h4>
            <br>
            <button type="button" class="check" id="${idCheck}" onclick="taskDone('${titleTask}', '${idTask}')">Feito</button>
            <button type="button" class="remove" id="${idRemove}" onclick="removeItem('${idTask}', 'false')">Remover</button>
        </div>
    `;


    taskCounter++;

    //alert(idTask + " adicionada com sucesso.");

    document.getElementById("tasktitle").value = "";
}

function removeItem(taskId, check) {
    const taskDiv = document.getElementById(taskId);

    if(taskDiv) {
        taskDiv.remove();
    }
    
    taskCounter--;
    espacoVazio();

    let divItems = document.getElementById("items");

    if(divItems && taskCounter==0) {
        divItems.remove();
    }

}

function espacoFeito() {
    let divFeito = document.getElementById("done");
    if(!divFeito) {
        divFeito = document.createElement("div");
        divFeito.id = "done";

        const header = document.createElement("h3");
        header.textContent = "Tarefas concluídas";
        divFeito.appendChild(header);

        document.body.appendChild(divFeito);
    }

    return divFeito;
}

function taskDone(titleTask, taskId) {
    let divFeito = espacoFeito();
    const h4Task = document.getElementById(titleTask);

    if (h4Task) {
        const newH4 = document.createElement("h4");

        const del = document.createElement("del");
        del.textContent = h4Task.textContent;

        newH4.appendChild(del);

        divFeito.appendChild(newH4);
    }
    
    removeItem(taskId, true);
}



function espacoVazio() {
    if(taskCounter==1) {
        let divItems = document.getElementById("items");
        divItems.remove();
    }
}