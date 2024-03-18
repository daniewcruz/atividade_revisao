//sistema de controle de projetos que facilite o gerenciamento de tarefas.

class Funcionario {
    constructor(
        protected matricula: string,
        protected nome: string,
        private cpf: string,
        protected dataDeNascimento: Date,
        public email: string,
        private endereco: string[],
        public telefone: string,
        private genero?: string,
    ) { }

    mostrarDados() { }
}


//classe para representar um membro da equipe que extende os atributos de funcionario.
class Membro extends Funcionario {
    projetos: Projeto[];
    equipe: Equipe;
    constructor(
        projetos: Projeto[],
        equipe: Equipe,
        matricula: string,
        nome: string,
        cpf: string,
        dataDeNascimento: Date,
        email: string,
        endereco: string[],
        telefone: string,
        genero?: string,
        
    ) {
        super(matricula, nome, cpf, dataDeNascimento, email, endereco, telefone, genero);
        this.projetos = projetos;
        this.equipe = equipe
    }
}



//classe para representar uma tarefa
class Tarefas {
    constructor(
        public nome: string,
        public descricao: string,
        public responsavel: Membro,
        public prazo: Date,
        public status: string //pendente, em execução ou concluida.
    ) { }

    definirStatus(novoStatus: string): void {
        this.status = novoStatus;
    }
}

//classe para representar projeto.
class Projeto {

    constructor(
        public tarefas: Tarefas[] = [], // lista de tarefas do projeto.
        public nome: string,
        public descricao: string,
        public dataInicio: Date,
        public dataTerminoPrevisto: Date,
        public status: string //pendente, em execução ou concluida.


    ) { }
    //metodo para adicionar uma nova tarefa em um projeto.
    adicionarTarefa(tarefas: Tarefas): void {
        this.tarefas.push(tarefas);
    }
    mostrarDados() { 
        console.log('nome do projeto', this.nome);
    }
}


//classe para representar uma equipe de trabalho.
class Equipe {
    constructor(
        public lider: Membro,
        public membros: Membro[]
    ) { }
}



//classe para representar um sistema de controle dos projetos.
class SistemaControleProjeto {
    constructor(
        public projetos: Projeto[],
        public equipes: Equipe[]
    ) { }

    //metodo para adicionar um novo projeto.    
    registrarProjeto(projeto: Projeto): void {
        this.projetos.push(projeto);
    }
}


