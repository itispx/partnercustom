import { redirect } from "next/navigation";

import DetailsSection, { IDetailsSectionProps } from "@/components/details-section/details-section";
import HeroSlider, { IHeroSliderProps } from "@/components/hero-slider";
import HistoryVideo from "@/components/history-video";
import ImageGallery, { IImageGalleryProps } from "@/components/image-gallery";
import Differentials, { IDifferentialsProps } from "@/components/differentials";

interface IModelo {
  heroSliderProps: IHeroSliderProps;
  imageGalleryProps: IImageGalleryProps;
  differentialsProps: IDifferentialsProps;
  detailsSectionProps: IDetailsSectionProps;
}

const confident85: IModelo = {
  heroSliderProps: {
    slides: [{ id: 1, image: "/modelos/confident-8.5/capa-fade.jpg", alt: "Confident 8.5" }],
  },
  imageGalleryProps: {
    images: {
      external: [
        "/modelos/confident-8.5/galeria/externo/1.jpeg",
        "/modelos/confident-8.5/galeria/externo/4.jpg",
        "/modelos/confident-8.5/galeria/externo/5.jpg",
        "/modelos/confident-8.5/galeria/externo/6.jpg",
        "/modelos/confident-8.5/galeria/externo/28.jpg",
        "/modelos/confident-8.5/galeria/externo/29.jpg",
        "/modelos/confident-8.5/galeria/externo/30.jpg",
      ],
      internal: [
        "/modelos/confident-8.5/galeria/interno/2.jpg",
        "/modelos/confident-8.5/galeria/interno/3.jpg",
        "/modelos/confident-8.5/galeria/interno/7.jpg",
        "/modelos/confident-8.5/galeria/interno/8.jpg",
        "/modelos/confident-8.5/galeria/interno/9.jpg",
        "/modelos/confident-8.5/galeria/interno/10.jpg",
        "/modelos/confident-8.5/galeria/interno/11.jpg",
        "/modelos/confident-8.5/galeria/interno/12.jpg",
        "/modelos/confident-8.5/galeria/interno/13.jpg",
        "/modelos/confident-8.5/galeria/interno/14.jpg",
        "/modelos/confident-8.5/galeria/interno/15.jpg",
        "/modelos/confident-8.5/galeria/interno/16.jpg",
        "/modelos/confident-8.5/galeria/interno/17.jpg",
        "/modelos/confident-8.5/galeria/interno/18.jpg",
        "/modelos/confident-8.5/galeria/interno/19.jpg",
        "/modelos/confident-8.5/galeria/interno/20.jpg",
        "/modelos/confident-8.5/galeria/interno/21.jpg",
        "/modelos/confident-8.5/galeria/interno/22.jpg",
        "/modelos/confident-8.5/galeria/interno/23.jpg",
        "/modelos/confident-8.5/galeria/interno/24.jpg",
        "/modelos/confident-8.5/galeria/interno/25.jpg",
        "/modelos/confident-8.5/galeria/interno/26.jpg",
        "/modelos/confident-8.5/galeria/interno/27.jpg",
        "/modelos/confident-8.5/galeria/interno/31.jpg",
        "/modelos/confident-8.5/galeria/interno/32.jpg",
        "/modelos/confident-8.5/galeria/interno/33.jpg",
        "/modelos/confident-8.5/galeria/interno/34.jpg",
      ],
    },
  },
  differentialsProps: {
    features: [
      {
        title: "Robustez",
        description:
          "Estrutura reforçada e materiais de qualidade que garantem durabilidade e segurança durante a viagem.",
      },
      {
        title: "Exclusividade",
        description:
          "Design, acabamentos e linha de produção diferenciados que tornam o veículo único e personalizado para o proprietário.",
      },
      {
        title: "Família",
        description: "Espaço pensado para acomodar toda a família de forma prática e confortável.",
      },
    ],
  },
  detailsSectionProps: {
    mainTitle: "A riqueza está nos",
    highlightText: "detalhes",
    items: [
      {
        title: "Conforto",
        description:
          "Todos os espaços internos foram pensados para oferecer comodidade durante a viagem, incluindo assentos, colchões e disposição dos móveis para facilitar o dia a dia.",
        image: "/modelos/confident-8.5/detalhes/1.jpg",
        imagePosition: "left",
      },
      {
        title: "Slide Amplo",
        description:
          "O slide aumenta significativamente a área interna quando o motorhome está parado, criando mais espaço para circulação, refeições e convivência.",
        image: "/modelos/confident-8.5/detalhes/2.jpg",
        imagePosition: "right",
      },
      {
        title: "Sala e Cozinha Integradas",
        description:
          "O ambiente da sala e cozinha foi projetado de forma integrada, facilitando o uso diário e garantindo praticidade na preparação de refeições e momentos de convivência.",
        image: "/modelos/confident-8.5/detalhes/3.jpg",
        imagePosition: "left",
      },
      {
        title: "Quarto com Corredor",
        description:
          "O quarto possui corredor lateral, permitindo acesso fácil à cama e circulação confortável dentro do espaço.",
        image: "/modelos/confident-8.5/detalhes/4.jpg",
        imagePosition: "right",
      },
      {
        title: "Espelhos",
        description:
          "Espelhos posicionados estrategicamente ampliam a percepção de espaço e ajudam na funcionalidade do dia a dia.",
        image: "/modelos/confident-8.5/detalhes/5.jpg",
        imagePosition: "left",
      },
      {
        title: "Detalhes de ambientes como uma casa",
        description:
          "Acabamentos, mobiliário e organização dos espaços foram planejados para trazer sensação de lar, tornando a experiência de viagem mais prática e acolhedora.",
        image: "/modelos/confident-8.5/detalhes/6.jpg",
        imagePosition: "right",
      },
    ],
  },
};

const position65: IModelo = {
  heroSliderProps: {
    slides: [{ id: 1, image: "/modelos/position-6.5/capa-fade.png", alt: "Position 6.5" }],
  },
  imageGalleryProps: {
    images: {
      external: [
        "/modelos/position-6.5/galeria/externo/18.jpg",
        "/modelos/position-6.5/galeria/externo/19.jpg",
        "/modelos/position-6.5/galeria/externo/20.jpg",
        "/modelos/position-6.5/galeria/externo/21.jpg",
      ],
      internal: [
        "/modelos/position-6.5/galeria/interno/1.jpg",
        "/modelos/position-6.5/galeria/interno/2.jpg",
        "/modelos/position-6.5/galeria/interno/3.jpg",
        "/modelos/position-6.5/galeria/interno/4.jpg",
        "/modelos/position-6.5/galeria/interno/5.jpg",
        "/modelos/position-6.5/galeria/interno/6.jpg",
        "/modelos/position-6.5/galeria/interno/7.jpg",
        "/modelos/position-6.5/galeria/interno/8.jpg",
        "/modelos/position-6.5/galeria/interno/9.jpg",
        "/modelos/position-6.5/galeria/interno/10.jpg",
        "/modelos/position-6.5/galeria/interno/11.jpg",
        "/modelos/position-6.5/galeria/interno/12.jpg",
        "/modelos/position-6.5/galeria/interno/13.jpg",
        "/modelos/position-6.5/galeria/interno/14.jpg",
        "/modelos/position-6.5/galeria/interno/15.jpg",
        "/modelos/position-6.5/galeria/interno/16.jpg",
        "/modelos/position-6.5/galeria/interno/17.jpg",
      ],
    },
  },
  differentialsProps: {
    features: [
      {
        title: "Rodado simples",
        description: "Menos manutenção, mais praticidade.",
      },
      {
        title: "Econômico",
        description: "Mais quilômetros por litro, mais estrada por viagem.",
      },
      {
        title: "Compacto",
        description: "Feito para quem quer liberdade sem abrir mão da mobilidade.",
      },
    ],
  },
  detailsSectionProps: {
    mainTitle: "A riqueza está nos",
    highlightText: "detalhes",
    items: [
      {
        title: "Dimensões Compactas",
        description:
          "Pensado para quem busca conforto sem abrir mão da praticidade. O tamanho facilita a condução, o estacionamento e o acesso a diferentes destinos, sem perder o conforto interno.",
        image: "/modelos/position-6.5/detalhes/1.jpg",
        imagePosition: "left",
      },
      {
        title: "Espaço Aberto",
        description:
          "O ambiente foi projetado para ser leve, arejado e integrado. Cada detalhe favorece a sensação de amplitude e torna a convivência dentro do motorhome ainda mais agradável.",
        image: "/modelos/position-6.5/detalhes/2.jpg",
        imagePosition: "right",
      },
      {
        title: "Banheiro Conjugado",
        description:
          "Funcional e bem distribuído, o banheiro reúne tudo o que você precisa no dia a dia, com aproveitamento inteligente de cada centímetro e acabamento de alto padrão.",
        image: "/modelos/position-6.5/detalhes/3.jpg",
        imagePosition: "left",
      },
      {
        title: "Ambiente para cinco pessoas",
        description:
          "O layout foi pensado para reunir até cinco pessoas com conforto. Um espaço perfeito para relaxar, conversar ou fazer as refeições durante a jornada.",
        image: "/modelos/position-6.5/detalhes/4.jpg",
        imagePosition: "right",
      },
      {
        title: "Equipamentos e conforto",
        description:
          "Cada detalhe foi pensado para tornar a viagem mais prática e agradável. Do sistema elétrico à climatização, tudo foi planejado para oferecer comodidade e segurança em qualquer destino.",
        image: "/modelos/position-6.5/detalhes/5.png",
        imagePosition: "left",
      },
    ],
  },
};

const position75: IModelo = {
  heroSliderProps: {
    slides: [{ id: 1, image: "/modelos/position-7.5/capa-fade.jpg", alt: "Position 7.5" }],
  },
  imageGalleryProps: {
    images: {
      external: [
        "/modelos/position-7.5/galeria/externo/21.jpg",
        "/modelos/position-7.5/galeria/externo/22.jpg",
        "/modelos/position-7.5/galeria/externo/23.jpg",
        "/modelos/position-7.5/galeria/externo/24.jpg",
      ],
      internal: [
        "/modelos/position-7.5/galeria/interno/1.jpg",
        "/modelos/position-7.5/galeria/interno/2.jpg",
        "/modelos/position-7.5/galeria/interno/3.jpg",
        "/modelos/position-7.5/galeria/interno/4.jpg",
        "/modelos/position-7.5/galeria/interno/5.jpg",
        "/modelos/position-7.5/galeria/interno/6.jpg",
        "/modelos/position-7.5/galeria/interno/7.jpg",
        "/modelos/position-7.5/galeria/interno/8.jpg",
        "/modelos/position-7.5/galeria/interno/9.jpg",
        "/modelos/position-7.5/galeria/interno/10.jpg",
        "/modelos/position-7.5/galeria/interno/11.jpg",
        "/modelos/position-7.5/galeria/interno/12.jpg",
        "/modelos/position-7.5/galeria/interno/13.jpg",
        "/modelos/position-7.5/galeria/interno/14.jpg",
        "/modelos/position-7.5/galeria/interno/15.jpg",
        "/modelos/position-7.5/galeria/interno/16.jpg",
        "/modelos/position-7.5/galeria/interno/17.jpg",
        "/modelos/position-7.5/galeria/interno/18.jpg",
        "/modelos/position-7.5/galeria/interno/19.jpg",
        "/modelos/position-7.5/galeria/interno/20.jpg",
      ],
    },
  },
  differentialsProps: {
    features: [
      {
        title: "Rodado duplo",
        description: "Mais estabilidade e segurança na estrada.",
      },
      {
        title: "Confortável",
        description: "Acabamento interno que valoriza o bem-estar.",
      },
      {
        title: "Carteira B",
        description: "Dirija com a habilitação comum, sem burocracia.",
      },
    ],
  },
  detailsSectionProps: {
    mainTitle: "A riqueza está nos",
    highlightText: "detalhes",
    items: [
      {
        title: "Dormir em 6",
        description:
          "Distribuição planejada para acomodar confortavelmente até seis pessoas, garantindo noites tranquilas e espaço adequado para cada ocupante.",
        image: "/modelos/position-7.5/detalhes/1.jpg",
        imagePosition: "left",
      },
      {
        title: "Alcova Espaçosa",
        description:
          "A alcova foi projetada para oferecer espaço interno amplo, A alcova tem altura e largura adequadas para dormir confortavelmente e se movimentar sem dificuldade.",
        image: "/modelos/position-7.5/detalhes/2.jpg",
        imagePosition: "right",
      },
      {
        title: "Cama Principal Ampla",
        description:
          "Cama confortável e bem posicionada, pensada para acomodar os ocupantes de forma prática e tranquila durante a viagem. O ambiente ao redor também foi pensado para oferecer praticidade no dia a dia.",
        image: "/modelos/position-7.5/detalhes/3.jpg",
        imagePosition: "left",
      },
      {
        title: "Bagageiro para Aventuras",
        description:
          "Espaço para guardar motos ou cargas extras de forma segura e organizada. O bagageiro foi projetado para facilitar o transporte e o acesso aos itens armazenados.",
        image: "/modelos/position-7.5/detalhes/4.jpg",
        imagePosition: "right",
      },
      {
        title: "Slide Expansível",
        description:
          "Permite aumentar a área interna quando o motorhome está parado, criando mais espaço para circulação e convivência. O mecanismo é fácil de usar e amplia a funcionalidade do veículo.",
        image: "/modelos/position-7.5/detalhes/5.jpg",
        imagePosition: "left",
      },
      {
        title: "Cozinha ao Ar Livre",
        description:
          "Cozinha externa com fácil acesso, prática para preparar refeições fora do veículo. O espaço permite organizar utensílios e cozinhar de forma confortável durante as paradas.",
        image: "/modelos/position-7.5/detalhes/6.jpg",
        imagePosition: "right",
      },
      {
        title: "Iluminação Planejada",
        description:
          "Luzes posicionadas para garantir boa visibilidade e conforto dentro do motorhome a qualquer hora do dia. A iluminação foi distribuída para atender às diferentes necessidades do ambiente interno e também externo.",
        image: "/modelos/position-7.5/detalhes/7.jpg",
        imagePosition: "left",
      },
    ],
  },
};

const winnerP72: IModelo = {
  heroSliderProps: {
    slides: [{ id: 1, image: "/modelos/winner-p-7.2/capa-fade.jpg", alt: "Winner P-7.2" }],
  },
  imageGalleryProps: {
    images: {
      external: [
        "/modelos/winner-p-7.2/galeria/externo/18.jpg",
        "/modelos/winner-p-7.2/galeria/externo/19.jpg",
        "/modelos/winner-p-7.2/galeria/externo/20.jpg",
        "/modelos/winner-p-7.2/galeria/externo/21.jpg",
        "/modelos/winner-p-7.2/galeria/externo/22.jpg",
        "/modelos/winner-p-7.2/galeria/externo/23.jpg",
        "/modelos/winner-p-7.2/galeria/externo/24.jpg",
        "/modelos/winner-p-7.2/galeria/externo/25.jpg",
        "/modelos/winner-p-7.2/galeria/externo/26.jpg",
        "/modelos/winner-p-7.2/galeria/externo/27.jpg",
      ],
      internal: [
        "/modelos/winner-p-7.2/galeria/interno/1.jpg",
        "/modelos/winner-p-7.2/galeria/interno/2.jpg",
        "/modelos/winner-p-7.2/galeria/interno/3.jpg",
        "/modelos/winner-p-7.2/galeria/interno/4.jpg",
        "/modelos/winner-p-7.2/galeria/interno/5.jpg",
        "/modelos/winner-p-7.2/galeria/interno/6.jpg",
        "/modelos/winner-p-7.2/galeria/interno/7.jpg",
        "/modelos/winner-p-7.2/galeria/interno/8.jpg",
        "/modelos/winner-p-7.2/galeria/interno/9.jpg",
        "/modelos/winner-p-7.2/galeria/interno/10.jpg",
        "/modelos/winner-p-7.2/galeria/interno/11.jpg",
        "/modelos/winner-p-7.2/galeria/interno/12.jpg",
        "/modelos/winner-p-7.2/galeria/interno/13.jpg",
        "/modelos/winner-p-7.2/galeria/interno/14.jpg",
        "/modelos/winner-p-7.2/galeria/interno/15.jpg",
        "/modelos/winner-p-7.2/galeria/interno/16.jpg",
        "/modelos/winner-p-7.2/galeria/interno/17.jpg",
      ],
    },
  },
  differentialsProps: {
    features: [
      {
        title: "Espaço",
        description:
          "Áreas internas bem distribuídas para facilitar a circulação e o uso dos ambientes durante a viagem.",
      },
      {
        title: "Conforto",
        description:
          "Detalhes internos pensados para tornar a viagem mais agradável e prática para todos os ocupantes.",
      },
      {
        title: "Fora de Estrada",
        description:
          "Estrutura resistente e altura do solo adequada para garantir segurança e estabilidade em rotas off road.",
      },
    ],
  },
  detailsSectionProps: {
    mainTitle: "A riqueza está nos",
    highlightText: "detalhes",
    items: [
      {
        title: "Altura do Chão",
        description:
          "O trailer possui altura elevada do solo, permitindo transitar com segurança em terrenos fora de estrada.",
        image: "/modelos/winner-p-7.2/detalhes/1.jpg",
        imagePosition: "left",
      },
      {
        title: "Espaço Interno",
        description:
          "Os ambientes foram planejados para oferecer circulação confortável e aproveitamento inteligente de cada metro quadrado. \nCama principal ampla.",
        image: "/modelos/winner-p-7.2/detalhes/2.jpg",
        imagePosition: "right",
      },
      {
        title: "Ambientes internos",
        description:
          "Sala, cozinha, quarto e banheiro distribuídos de forma funcional, garantindo praticidade e conforto durante toda a viagem, inclusive em áreas fora de estrada.",
        image: "/modelos/winner-p-7.2/detalhes/3.jpg",
        imagePosition: "left",
      },
      {
        title: "Aumentando o espaço",
        description:
          "O slide expande a área interna quando o trailer está estacionado, aumentando a sensação de amplitude e conforto.",
        image: "/modelos/winner-p-7.2/detalhes/4.jpg",
        imagePosition: "right",
      },
      {
        title: "Acabamento",
        description:
          "Materiais resistentes e detalhes internos duráveis, pensados para suportar o uso em condições fora de estrada, sem perder conforto ou qualidade.",
        image: "/modelos/winner-p-7.2/detalhes/5.jpg",
        imagePosition: "left",
      },
    ],
  },
};

const modelos: Record<string, IModelo> = {
  "confident-8.5": confident85,
  "position-6.5": position65,
  "position-7.5": position75,
  "winner-p-7.2": winnerP72,
};

export default async function ModeloPage({ params }: { params: { modelo: string } }) {
  const { modelo: modeloParam } = await params;

  console.log({ modeloParam });

  const modelo = modelos[modeloParam];

  if (!modelo) {
    redirect("/");
  }

  return (
    <>
      <HeroSlider {...modelo.heroSliderProps} />

      <div style={{ margin: 50 }} />

      <ImageGallery {...modelo.imageGalleryProps} />

      <div style={{ margin: 30 }} />

      <Differentials {...modelo.differentialsProps} />

      <HistoryVideo />

      <DetailsSection {...modelo.detailsSectionProps} />
    </>
  );
}
