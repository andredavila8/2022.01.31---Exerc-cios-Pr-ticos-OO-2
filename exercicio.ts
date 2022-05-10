abstract class Pessoa {    
    protected assiduidade = 0; 

    constructor(public nome: string, public idade: number) {}

    mostrarAssiduidade() {
        console.log(this.assiduidade);
    }
}

class Aluno extends Pessoa {
	private notas: Array<number> = [];

	constructor(nome: string, idade: number, public matricula: string, public serie: number) {
        super(nome, idade);
	}

    responderChamada() {
        this.assiduidade++;
    }

	addNota(nota: number) {
		this.notas.push(nota);
	}

	media() {
		if (this.notas.length > 0) {
			let soma = 0;
			for (const nota of this.notas) {
				soma += nota;
			}
			return soma / this.notas.length;
		} else {
			return -1;
		}
	}
}

class Professor extends Pessoa {
       constructor(nome: string,
				   idade: number,
				   public disciplina: string,
				   public salario: number,
				   public formacao: string){
        super(nome, idade);
    }

    baterPonto() {
        this.assiduidade++;
    }

    aumentaSalario(valordoAumento: number) {
        this.salario += valordoAumento;
    }
}

class Turma {
	public alunos: Array<Aluno> = [];

	constructor(public sala: string,
				public turno: string,
				public responsavel: string) {
	}

	addAluno(paramAluno: Aluno) {
		this.alunos.push(paramAluno);
	}

	removeAluno(nomeAluno: string) {
		for (let indexAluno in this.alunos) {
			if (this.alunos[indexAluno].nome === nomeAluno) {
				this.alunos.splice(parseInt(indexAluno, 1));
				break;
			}
		}
	}

	mediaTurma() {
		let mediaTurma = 0;

        for (let aluno of this.alunos) {
			mediaTurma += aluno.media();
		}
		return mediaTurma / this.alunos.length;
	}
}

class Escola {
	public turmas: Array<Turma> = [];
    public professores: Array<Professor> = [];
    private mediaEscola = 7;

	constructor(public nome: string,
				public diretor: string,
				public endereco: string) {
	}

	addTurma(turma: Turma) {
		this.turmas.push(turma);
	}

    addProfessor(professor: Professor) {
        this.professores.push(professor);
	}

	emitirParecer(nomeAluno: string) {
        let resultado: string;
		
		for (let turma of this.turmas) {
			for (let aluno of turma.alunos) {
				if (aluno.nome === nomeAluno) {
					let media = aluno.media();
					if (media >= this.mediaEscola) {
						resultado = 'Aprovado';
					} else {
						resultado = 'Não aprovado';
					}
					return `O Aluno /* nome do aluno */ obteve média ${media} - ${resultado}`;
				}
			}
		}
		return 'Aluno não encontrado.';        
    }
}

const escola1 = new Escola("Duque", "Lucas", "Rua dos Bobos, 9");
const turma101 = new Turma("101", "Tarde", "Thomas");

const aluno1 = new Aluno("Felipe", 10, "000001", 3);
const aluno2 = new Aluno("Guilherme", 10, "000002", 3);
const aluno3 = new Aluno("Thiago", 10, "000003", 3);

aluno1.addNota(10);
aluno1.addNota(8);
aluno1.addNota(9);
aluno2.addNota(7);
aluno2.addNota(6);
aluno2.addNota(5);
aluno3.addNota(1);
aluno3.addNota(2);
aluno3.addNota(3);

turma101.addAluno(aluno1);
turma101.addAluno(aluno2);
turma101.addAluno(aluno3);

escola1.addTurma(turma101);

let professor1 = new Professor("Guilherme", 40, "Matemática", 1100, "Licenciatura Matemática");

escola1.addProfessor(professor1);

function emitirParecer(nomeAluno: any, string: any) {
	throw new Error("Function not implemented.");
}

