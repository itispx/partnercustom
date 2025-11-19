import { redirect } from "next/navigation";

import HeroSlider, { IHeroSliderProps } from "@/components/hero-slider";
import BussGallery, { IBussGallery } from "@/components/buss-gallery";
import Artists from "@/components/artists";
import DetailsSection, { IDetailsSectionProps } from "@/components/details-section/details-section";
import Testimonials, { ITestimonialsProps } from "@/components/testimonials";
import Action from "@/components/action";

interface IModelo {
  heroSliderProps: IHeroSliderProps;
  detailsSectionProps: IDetailsSectionProps;
  testimonialsProps: ITestimonialsProps;
  bussGallery: IBussGallery;
}

const pbuss: IModelo = {
  heroSliderProps: {
    slides: [{ id: 1, image: "/modelos/p-buss/capa-fade.jpg", alt: "P-Buss" }],
  },
  detailsSectionProps: {
    mainTitle: "A riqueza está nos",
    highlightText: "detalhes",
    items: [
      {
        title: "Confiável",
        description:
          "Utilizamos materiais de alto padrão, resistentes e elegantes, capazes de suportar a rotina intensa de viagens sem perder o requinte. Cada superfície, textura e detalhe é escolhido para equilibrar durabilidade e estética.",
        image: "/modelos/p-buss/dianteira/1.jpg",
        imagePosition: "left",
      },
      {
        title: "Personalizável",
        description:
          "Pode ser adaptado de acordo com as necessidades e preferências do proprietário. Desde a escolha de acabamentos, disposição interna, cores e equipamentos, até detalhes que tornam o veículo único.",
        image: "/modelos/p-buss/dianteira/1.jpg",
        imagePosition: "right",
      },
      {
        title: "Projecto exclusivo",
        description:
          "Cada montagem é desenvolvida do zero, alinhada à identidade visual, às necessidades e à rotina de cada artista. Não existem modelos pré-definidos — o layout, os acabamentos e as soluções técnicas são criados de forma personalizada, para que o resultado seja único. \n\nMontar um ônibus para turnês é criar muito mais do que um veículo. É criar um espaço que seja ao mesmo tempo casa, escritório e camarim. Cada projeto é pensado para oferecer conforto absoluto, funcionalidade inteligente e identidade única, traduzindo o estilo de vida de quem vive entre palcos e estradas.",
        image: "/modelos/p-buss/dianteira/1.jpg",
        imagePosition: "left",
      },
    ],
  },
  testimonialsProps: {
    title: "Voz de quem já viveu o sonho",
    testimonials: [
      {
        id: 1,
        thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
        youtubeId: "jNQXAC9IVRw",
        title: "Casal feliz com motorhome",
      },
      {
        id: 2,
        thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg",
        youtubeId: "9bZkp7q19f0",
        title: "Família com motorhome",
      },
      {
        id: 3,
        thumbnail: "https://img.youtube.com/vi/L_jWHffIx5E/maxresdefault.jpg",
        youtubeId: "L_jWHffIx5E",
        title: "Ele era um ônibus",
        caption: "Ele era um ônibus",
      },
    ],
  },
  bussGallery: {
    title: "Personalizações de Ônibus",
    tabs: ["TODOS", "PISO INFERIOR", "PISO SUPERIOR", "SALA DIANTEIRA"],
    images: [
      {
        id: 1,
        name: "Piso Inferior 1",
        url: "/modelos/p-buss/inferior/1.jpg",
        category: "PISO INFERIOR",
      },
      {
        id: 2,
        name: "Piso Inferior 2",
        url: "/modelos/p-buss/inferior/2.jpg",
        category: "PISO INFERIOR",
      },
      {
        id: 3,
        name: "Piso Inferior 3",
        url: "/modelos/p-buss/inferior/3.jpg",
        category: "PISO INFERIOR",
      },
      {
        id: 4,
        name: "Piso Inferior 4",
        url: "/modelos/p-buss/inferior/4.jpg",
        category: "PISO INFERIOR",
      },
      {
        id: 5,
        name: "Piso Inferior 5",
        url: "/modelos/p-buss/inferior/5.jpg",
        category: "PISO INFERIOR",
      },
      {
        id: 6,
        name: "Piso Inferior 6",
        url: "/modelos/p-buss/inferior/6.jpg",
        category: "PISO INFERIOR",
      },
      {
        id: 7,
        name: "Piso Inferior 7",
        url: "/modelos/p-buss/inferior/7.jpg",
        category: "PISO INFERIOR",
      },
      {
        id: 8,
        name: "Piso Inferior 8",
        url: "/modelos/p-buss/inferior/8.jpg",
        category: "PISO INFERIOR",
      },
      {
        id: 9,
        name: "Piso Inferior 9",
        url: "/modelos/p-buss/inferior/9.jpg",
        category: "PISO INFERIOR",
      },
      {
        id: 10,
        name: "Piso Inferior 10",
        url: "/modelos/p-buss/inferior/10.jpg",
        category: "PISO INFERIOR",
      },
      {
        id: 11,
        name: "Piso Inferior 11",
        url: "/modelos/p-buss/inferior/11.jpg",
        category: "PISO INFERIOR",
      },
      {
        id: 12,
        name: "Piso Inferior 12",
        url: "/modelos/p-buss/inferior/12.jpg",
        category: "PISO INFERIOR",
      },
      {
        id: 13,
        name: "Piso Inferior 13",
        url: "/modelos/p-buss/inferior/13.jpg",
        category: "PISO INFERIOR",
      },
      {
        id: 14,
        name: "Piso Inferior 14",
        url: "/modelos/p-buss/inferior/14.jpg",
        category: "PISO INFERIOR",
      },
      {
        id: 15,
        name: "Piso Inferior 15",
        url: "/modelos/p-buss/inferior/15.jpeg",
        category: "PISO INFERIOR",
      },
      {
        id: 16,
        name: "Piso Inferior 16",
        url: "/modelos/p-buss/inferior/16.jpg",
        category: "PISO INFERIOR",
      },
      {
        id: 17,
        name: "Piso Inferior 17",
        url: "/modelos/p-buss/inferior/17.jpg",
        category: "PISO INFERIOR",
      },
      {
        id: 18,
        name: "Piso Inferior 18",
        url: "/modelos/p-buss/inferior/18.jpg",
        category: "PISO INFERIOR",
      },
      {
        id: 19,
        name: "Piso Inferior 19",
        url: "/modelos/p-buss/inferior/19.jpg",
        category: "PISO INFERIOR",
      },
      {
        id: 20,
        name: "Piso Inferior 20",
        url: "/modelos/p-buss/inferior/20.jpg",
        category: "PISO INFERIOR",
      },
      {
        id: 21,
        name: "Piso Inferior 21",
        url: "/modelos/p-buss/inferior/21.jpg",
        category: "PISO INFERIOR",
      },
      {
        id: 22,
        name: "Piso Inferior 22",
        url: "/modelos/p-buss/inferior/22.jpg",
        category: "PISO INFERIOR",
      },
      {
        id: 23,
        name: "Piso Inferior 23",
        url: "/modelos/p-buss/inferior/23.jpg",
        category: "PISO INFERIOR",
      },
      {
        id: 24,
        name: "Piso Inferior 24",
        url: "/modelos/p-buss/inferior/24.jpg",
        category: "PISO INFERIOR",
      },
      {
        id: 25,
        name: "Piso Inferior 25",
        url: "/modelos/p-buss/inferior/25.jpg",
        category: "PISO INFERIOR",
      },
      {
        id: 26,
        name: "Piso Inferior 26",
        url: "/modelos/p-buss/inferior/26.jpg",
        category: "PISO INFERIOR",
      },
      {
        id: 27,
        name: "Piso Inferior 27",
        url: "/modelos/p-buss/inferior/27.jpg",
        category: "PISO INFERIOR",
      },
      {
        id: 28,
        name: "Piso Inferior 28",
        url: "/modelos/p-buss/inferior/28.jpg",
        category: "PISO INFERIOR",
      },
      {
        id: 29,
        name: "Piso Inferior 29",
        url: "/modelos/p-buss/inferior/29.jpg",
        category: "PISO INFERIOR",
      },
      {
        id: 30,
        name: "Piso Inferior 30",
        url: "/modelos/p-buss/inferior/30.jpg",
        category: "PISO INFERIOR",
      },
      {
        id: 31,
        name: "Piso Inferior 31",
        url: "/modelos/p-buss/inferior/31.jpg",
        category: "PISO INFERIOR",
      },
      {
        id: 32,
        name: "Piso Inferior 32",
        url: "/modelos/p-buss/inferior/32.jpg",
        category: "PISO INFERIOR",
      },
      {
        id: 33,
        name: "Piso Inferior 33",
        url: "/modelos/p-buss/inferior/33.jpg",
        category: "PISO INFERIOR",
      },
      {
        id: 34,
        name: "Piso Inferior 34",
        url: "/modelos/p-buss/inferior/34.jpg",
        category: "PISO INFERIOR",
      },
      {
        id: 35,
        name: "Piso Inferior 35",
        url: "/modelos/p-buss/inferior/35.jpg",
        category: "PISO INFERIOR",
      },
      {
        id: 36,
        name: "Piso Inferior 36",
        url: "/modelos/p-buss/inferior/36.jpg",
        category: "PISO INFERIOR",
      },
      {
        id: 37,
        name: "Piso Inferior 37",
        url: "/modelos/p-buss/inferior/37.jpeg",
        category: "PISO INFERIOR",
      },
      {
        id: 38,
        name: "Piso Inferior 38",
        url: "/modelos/p-buss/inferior/38.jpg",
        category: "PISO INFERIOR",
      },
      {
        id: 39,
        name: "Piso Inferior 39",
        url: "/modelos/p-buss/inferior/39.jpg",
        category: "PISO INFERIOR",
      },
      {
        id: 40,
        name: "Piso Inferior 40",
        url: "/modelos/p-buss/inferior/40.jpg",
        category: "PISO INFERIOR",
      },
      {
        id: 41,
        name: "Piso Inferior 41",
        url: "/modelos/p-buss/inferior/41.jpg",
        category: "PISO INFERIOR",
      },
      {
        id: 42,
        name: "Piso Inferior 42",
        url: "/modelos/p-buss/inferior/42.jpg",
        category: "PISO INFERIOR",
      },
      {
        id: 43,
        name: "Piso Inferior 43",
        url: "/modelos/p-buss/inferior/43.jpeg",
        category: "PISO INFERIOR",
      },
      {
        id: 44,
        name: "Piso Superior 1",
        url: "/modelos/p-buss/superior/1.jpeg",
        category: "PISO SUPERIOR",
      },
      {
        id: 45,
        name: "Piso Superior 2",
        url: "/modelos/p-buss/superior/2.jpg",
        category: "PISO SUPERIOR",
      },
      {
        id: 46,
        name: "Piso Superior 3",
        url: "/modelos/p-buss/superior/3.jpg",
        category: "PISO SUPERIOR",
      },
      {
        id: 47,
        name: "Piso Superior 4",
        url: "/modelos/p-buss/superior/4.jpg",
        category: "PISO SUPERIOR",
      },
      {
        id: 48,
        name: "Piso Superior 5",
        url: "/modelos/p-buss/superior/5.jpg",
        category: "PISO SUPERIOR",
      },
      {
        id: 49,
        name: "Piso Superior 6",
        url: "/modelos/p-buss/superior/6.jpg",
        category: "PISO SUPERIOR",
      },
      {
        id: 50,
        name: "Piso Superior 7",
        url: "/modelos/p-buss/superior/7.jpg",
        category: "PISO SUPERIOR",
      },
      {
        id: 51,
        name: "Piso Superior 8",
        url: "/modelos/p-buss/superior/8.jpg",
        category: "PISO SUPERIOR",
      },
      {
        id: 52,
        name: "Piso Superior 9",
        url: "/modelos/p-buss/superior/9.jpg",
        category: "PISO SUPERIOR",
      },
      {
        id: 53,
        name: "Piso Superior 10",
        url: "/modelos/p-buss/superior/10.jpg",
        category: "PISO SUPERIOR",
      },
      {
        id: 54,
        name: "Piso Superior 11",
        url: "/modelos/p-buss/superior/11.jpg",
        category: "PISO SUPERIOR",
      },
      {
        id: 55,
        name: "Piso Superior 12",
        url: "/modelos/p-buss/superior/12.jpg",
        category: "PISO SUPERIOR",
      },
      {
        id: 56,
        name: "Sala Dianteira 1",
        url: "/modelos/p-buss/dianteira/1.jpg",
        category: "SALA DIANTEIRA",
      },
      {
        id: 57,
        name: "Sala Dianteira 2",
        url: "/modelos/p-buss/dianteira/2.jpg",
        category: "SALA DIANTEIRA",
      },
      {
        id: 58,
        name: "Sala Dianteira 3",
        url: "/modelos/p-buss/dianteira/3.jpg",
        category: "SALA DIANTEIRA",
      },
      {
        id: 59,
        name: "Sala Dianteira 4",
        url: "/modelos/p-buss/dianteira/4.jpg",
        category: "SALA DIANTEIRA",
      },
    ],

    defaultTab: "TODOS",
  },
};

const modelos: Record<string, IModelo> = {
  "p-buss": pbuss,
};

type PageProps = {
  params: Promise<{ modelo: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function OnibusPage({ params }: PageProps) {
  const { modelo: modeloParam } = await params;

  const modelo = modelos[modeloParam];

  if (!modelo) {
    redirect("/");
  }

  return (
    <>
      <HeroSlider {...modelo.heroSliderProps} />

      <div style={{ margin: 50 }} />

      <BussGallery {...modelo.bussGallery} />

      <Artists />

      <DetailsSection {...modelo.detailsSectionProps} />

      <Testimonials {...modelo.testimonialsProps} />

      <Action />
    </>
  );
}
