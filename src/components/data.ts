export type Persona = "namoro" | "amigo" | "familia" | "geral"

export const contentMap = {
  namoro: {
    headline: "O presente que faz o coração bater no ritmo da sua história",
    subheadline: "Surpreenda seu namorado(a) ou companheiro(a) com uma canção exclusiva que narra cada detalhe do amor de vocês.",
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
    prova: "Fiz pra minha namorada e ela chorou do começo ao fim. Foi o melhor aniversário de namoro que já tivemos.",
    image: "https://i.ibb.co/hhrqxYJ/CASAL-AURA.webp",
    deliveries: [""] // YouTube Shorts IDs here
  },

  amigo: {
    headline: "Toda grande amizade tem histórias que merecem um refrão",
    subheadline: "Transforme as piadas internas, as viagens e as loucuras em uma música profissional feita para o seu melhor amigo(a).",
    exemplos: [
      {
        nome: "Resenha Infinita",
        trecho: "Se a gente cair, a gente ri depois..."
      }
    ],
    prova: "Meu amigo não parava de rir e se emocionar ao mesmo tempo. A produção é impecável!",
    image: "https://i.ibb.co/zYYxrF5/AMIGO-AURA.webp",
    deliveries: [""]
  },

  familia: {
    headline: "O abraço em forma de música que sua família nunca vai esquecer",
    subheadline: "Homenageie pais, avós ou filhos com uma canção que celebra as raízes e o amor incondicional da sua família.",
    exemplos: [
      {
        nome: "Base de Tudo",
        trecho: "Foi você que me ensinou a ser quem sou..."
      }
    ],
    prova: "Dei de presente pra minha mãe e ela não tira do repeat. É o presente mais valioso da casa agora.",
    image: "https://i.ibb.co/zhDZ924h/FAMILIA-AURA-1.webp",
    deliveries: [""]
  },

  geral: {
    headline: "Dê vida à sua história com uma produção musical de cinema",
    subheadline: "Seja para um evento, uma formatura ou uma conquista pessoal, criamos a trilha sonora perfeita para qualquer momento.",
    exemplos: [],
    prova: "Simplesmente inesquecível. Superou todas as minhas expectativas em termos de qualidade e emoção.",
    image: "https://i.ibb.co/Rp4X8PXq/GERAL-OUTRO-AURA.webp",
    deliveries: [""]
  }
}
