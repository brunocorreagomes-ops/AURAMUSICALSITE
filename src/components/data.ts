export type Persona = "namoro" | "amigo" | "familia" | "geral"

export const contentMap = {
  namoro: {
    headline: "Imortalize sua história de Amor",
    subheadline: "Surpreenda quem você ama com uma trilha sonora que narra cada detalhe da jornada de vocês.",
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
    deliveries: [
      { id: "PZZZQKL2akY", title: "EDI, HOJE É SEU DIA", label: "Aniversário - Sertanejo" },
      { id: "FHH7H0niz7Y", title: "TIA LI (MADRINHA QUERIDA)", label: "Homenagem - MPB / Pop" }
    ]
  },

  amigo: {
    headline: "Transforme sua amizade em Música",
    subheadline: "Transforme as piadas internas e as aventuras em uma música foda feita exclusivamente para o seu melhor amigo.",
    exemplos: [
      {
        nome: "Resenha Infinita",
        trecho: "Se a gente cair, a gente ri depois..."
      }
    ],
    prova: "Meu amigo não parava de rir e se emocionar ao mesmo tempo. A produção é impecável!",
    image: "https://i.ibb.co/zYYxrF5/AMIGO-AURA.webp",
    deliveries: [
      { id: "PZZZQKL2akY", title: "EDI, HOJE É SEU DIA", label: "Aniversário - Sertanejo" },
      { id: "FHH7H0niz7Y", title: "TIA LI (MADRINHA QUERIDA)", label: "Homenagem - MPB / Pop" }
    ]
  },

  familia: {
    headline: "Homenageie quem você mais Ama",
    subheadline: "Homenageie quem sempre esteve lá com uma canção que celebra as raízes e o amor incondicional.",
    exemplos: [
      {
        nome: "Base de Tudo",
        trecho: "Foi você que me ensinou a ser quem sou..."
      }
    ],
    prova: "Dei de presente pra minha mãe e ela não tira do repeat. É o presente mais valioso da casa agora.",
    image: "https://i.ibb.co/zhDZ924h/FAMILIA-AURA-1.webp",
    deliveries: [
      { id: "PZZZQKL2akY", title: "EDI, HOJE É SEU DIA", label: "Aniversário - Sertanejo" },
      { id: "FHH7H0niz7Y", title: "TIA LI (MADRINHA QUERIDA)", label: "Homenagem - MPB / Pop" }
    ]
  },

  geral: {
    headline: "Sua história em uma Canção",
    subheadline: "Para formaturas, conquistas ou momentos especiais: criamos a trilha sonora perfeita para honrar sua trajetória.",
    exemplos: [],
    prova: "Simplesmente inesquecível. Superou todas as minhas expectativas em termos de qualidade e emoção.",
    image: "https://i.ibb.co/Rp4X8PXq/GERAL-OUTRO-AURA.webp",
    deliveries: [
      { id: "PZZZQKL2akY", title: "EDI, HOJE É SEU DIA", label: "Aniversário - Sertanejo" },
      { id: "FHH7H0niz7Y", title: "TIA LI (MADRINHA QUERIDA)", label: "Homenagem - MPB / Pop" }
    ]
  }
}
