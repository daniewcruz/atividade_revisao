// Classe base para representar um funcionário
class Funcionario {
    constructor(
        protected matricula: string,
        public nome: string,
        private cpf: string,
        protected dataDeNascimento: Date,
        public email: string,
        protected endereco: string[],
        public telefone: string,
        private genero?: string,
    ) { }

    // Método para exibir os dados do funcionário
    mostrarDados() {
        console.log(`Nome: ${this.nome}, Email: ${this.email}`);
    }

    // Getter para obter o CPF do funcionário
    getCPF(): string {
        return this.cpf;
    }

    // Setter para definir o CPF do funcionário
    setCPF(cpf: string): void {
        this.cpf = cpf;
    }
}

// Classe para representar um membro da equipe, extendendo Funcionario
class Membro extends Funcionario {
    projetos: Projeto[];
    equipe: Equipe;

    // Construtor para criar um novo membro da equipe
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
        this.equipe = equipe;
    }
}

// Classe para representar uma tarefa
class Tarefa {
    constructor(
        public nome: string,
        public descricao: string,
        public responsavel: Membro,
        public prazo: Date,
        public status: string // pendente, em execução, concluída, etc.
    ) { }

    definirStatus(novoStatus: string): void {
        this.status = novoStatus;
    }
}

// Classe para representar um projeto
class Projeto {
    tarefas: Tarefa[];

    // Construtor para criar um novo projeto
    constructor(
        public nome: string,
        public descricao: string,
        public dataInicio: Date,
        public dataTerminoPrevisto: Date,
        public status: string // pendente, em andamento, concluído, etc.
    ) {
        this.tarefas = [];
    }

    // Método para adicionar uma nova tarefa ao projeto
    adicionarTarefa(tarefa: Tarefa): void {
        this.tarefas.push(tarefa);
    }

    // Método para exibir os dados do projeto
    mostrarDados(): void {
        console.log(`Nome do Projeto: ${this.nome}`);
    }
}

// Classe para representar uma equipe de trabalho
class Equipe {
    constructor(
        public nome: string,
        public lider: Membro,
        public membros: Membro[]
    ) { }
}

// Classe para representar o sistema de controle de projetos
class SistemaControleProjeto {
    projetos: Projeto[];
    equipes: Equipe[];

    constructor() {
        this.projetos = [];
        this.equipes = [];
    }

    // Método para registrar um novo projeto no sistema
    registrarProjeto(projeto: Projeto): void {
        this.projetos.push(projeto);
    }
}

// Exemplo de uso:

// Criando membros com equipe vazia
const lider = new Membro([], "equipe1", "001", "João", "123.456.789-10", new Date(), "joao@email.com", ["Rua A", "123"], "123456789", null);
const membro1 = new Membro([], "equipe2", "002", "Maria", "987.654.321-00", new Date(), "maria@email.com", ["Rua B", "456"], "987654321", null);

// Criando equipe e adicionando membros
const equipe = new Equipe("equipe1",lider, [lider, membro1]);

// Criando projeto e atribuindo a equipe aos membros
const projeto = new Projeto(
    "Projeto A",
    "Descrição do Projeto A",
    new Date(), // Data de início
    new Date(), // Data de término prevista
    "Em andamento"
);

// Associando a equipe aos membros
lider.equipe = equipe;
membro1.equipe = equipe;

// Criando uma instância do sistema de controle de projetos
const sistema = new SistemaControleProjeto();

// Registrando o projeto no sistema
sistema.registrarProjeto(projeto);

// Mostrando dados do projeto registrado
projeto.mostrarDados();
