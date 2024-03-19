// Classe para representar um funcionário
class Funcionario {
    constructor(
        protected matricula: string,
        protected nome: string,
        private cpf: string,
        protected dataDeNascimento: Date,
        public email: string,
        protected endereco: string[],
        public telefone: string,
        private genero?: string,
    ) { }

    // Método para exibir os dados do funcionário
    mostrarDados() {
        console.log(`Matricula: ${this.matricula}`,
            `Nome_____: ${this.nome}`,
            `cpf______: ${this.cpf}`,
            `Data de Nascimento: ${this.dataDeNascimento}`,
            `Email: ${this.email}`,
            `Endereço: ${this.endereco}`,
            `telefone: ${this.telefone}`);

    }

    //getter e setter para obter e definir os atributos que estão protegido e privado.
    getmatricula(): string {
        return this.matricula;
    }
    setmatricula(matricula: string): void {
        this.matricula = matricula;
    }


    getnome(): string {
        return this.nome;
    }
    setnome(nome: string): void {
        this.nome = nome;
    }


    getCPF(): string {
        return this.cpf;
    }

    setCPF(cpf: string): void {
        this.cpf = cpf;
    }


    getdataDeNascimento(): Date {
        return this.dataDeNascimento;
    }
    setdataDeNascimento(dataDeNascimento: Date): void {
        this.dataDeNascimento = dataDeNascimento;
    }


    getendereco(): string[] {
        return this.endereco;
    }
    setemdereco(endereco: string[]): void {
        this.endereco = endereco;
    }


    getgenero(): string | undefined {
        return this.genero;
    }
    setgenero(genero: string): void {
        this.genero = genero;
    }

}


// Classe que representa um membro da equipe extendendo Funcionario
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

    mostrarDados() {
        super.mostrarDados();
        console.log(`Projetos: ${this.projetos}`,
            `Equipe__: ${this.equipe}`);

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
        console.log(`Nome do Projeto: ${this.nome}`,
            `Descrição:  ${this.descricao}`,
            `Data de Inicio:  ${this.dataInicio}`,
            `Data de Termino Previsto: ${this.dataTerminoPrevisto}`,
            `Status: ${this.status}`);

    }
}

// Classe para representar uma equipe de trabalho
class Equipe {
    constructor(
        public nome: string,
        public lider: string,
        public membros = []
    ) { }
    mostrarDados(): void {
        console.log(`Nome da Equipe: ${this.nome}`,
            `Lider da Equipe:  ${this.lider}`,
            `Membros da equipe:  ${this.membros}`);

    }

}

const equipe1 = new Equipe('teste', 'lider 1')
const equipe2 = new Equipe('teste', 'lider 2')

const lider1 = new Membro([], equipe1, "0001", "Daniel", "123.456.789-10", new Date(), "Daniel@email.com", ["Rua A", "123"], "123456789");
const membro1 = new Membro([], equipe2, "0002", "José", "987.654.321-00", new Date(), "jose@email.com", ["Rua B", "456"], "987654321");


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
    mostrarDados(): void {
        console.log(`Projetos: ${this.projetos}`,
            `Equipes:  ${this.equipes}`);

    }

}

// Criando projeto 
const projeto = new Projeto(
    "Projeto A",
    "Descrição do Projeto A",
    new Date(), // Data de início
    new Date(), // Data de término prevista
    "Em andamento"
);

projeto.mostrarDados();

// Criando uma instancia do sistema de controle de projetos
const sistema = new SistemaControleProjeto();

// Registrando o projeto no sistema
sistema.registrarProjeto(projeto);



equipe1.mostrarDados();

equipe2.mostrarDados();

lider1.mostrarDados();

membro1.mostrarDados(); 
