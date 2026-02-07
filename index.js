// Classe que representa um herói de uma aventura
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;   // Nome do herói
        this.idade = idade; // Idade do herói
        this.tipo = tipo;   // Tipo do herói (mago, guerreiro, monge ou ninja)
    }

    // Método responsável pelo ataque do herói
    atacar() {
        let ataque; // Define o tipo de ataque conforme o herói

        // Escolhe o ataque de acordo com o tipo
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "um ataque desconhecido";
        }

        // Exibe a mensagem final
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criação dos heróis e execução dos ataques
const heroi1 = new Heroi("Arthas", 30, "guerreiro");
heroi1.atacar();

const heroi2 = new Heroi("Merlin", 150, "mago");
heroi2.atacar();

const heroi3 = new Heroi("Hanzo", 25, "ninja");
heroi3.atacar();
