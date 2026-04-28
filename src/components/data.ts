export type Persona = "namoro" | "amigo" | "familia" | "geral"

export const contentMap = {
  namoro: {
    headline: "Transforme sua história de amor em uma música única",
    exemplos: [
      {
        nome: "Nosso Jeito",
        trecho: "Entre erros e acertos, foi você que ficou..."
      },
      {
        nome: "Só Nós Dois",
        trecho: "No meio do mundo, só você faz sentido..."
      }
    ],
    prova: "Fiz pra minha namorada e ela chorou do começo ao fim."
  },

  amigo: {
    headline: "Crie uma música que só vocês vão entender",
    exemplos: [
      {
        nome: "Resenha Infinita",
        trecho: "Se a gente cair, a gente ri depois..."
      }
    ],
    prova: "Meu amigo não parava de rir, foi perfeito."
  },

  familia: {
    headline: "Uma homenagem que vai marcar pra sempre",
    exemplos: [
      {
        nome: "Base de Tudo",
        trecho: "Foi você que me ensinou a ser quem sou..."
      }
    ],
    prova: "Minha mãe ficou sem palavras."
  },

  geral: {
    headline: "Transforme qualquer história em música",
    exemplos: [],
    prova: "Simplesmente inesquecível."
  }
}
