class TodoList{
    constructor(){
        this.todos = [];
    }

    addTodo(){
        this.todos.push('novo todo');
        console.log(this.todos);
    }
}

const minhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    minhaLista.addTodo();
}

//////////////////////////////////


class List{
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data)
    }
}

class TodoList2 extends List{
    constructor(){
        super();

        this.nomeUsuario = 'Gerson';
    }

    mostrarUsuario(){
        console.log(this.nomeUsuario);
    }

}

const todoList2 = new TodoList2();

document.getElementById('novotodo2').onclick = function(){
    todoList2.add('Novo Todo com Heranca');
}

todoList2.mostrarUsuario();

//////////////////

class Matematica{
    
    static soma(a, b){
        return a + b;
    }
}

console.log(Matematica.soma(1, 4));