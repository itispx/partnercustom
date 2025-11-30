import HeroSlider, { IHeroSliderProps } from "@/components/hero-slider";
import Showcase, { IShowcaseProps } from "@/components/showcase";
import Models, { IModelsProps } from "@/components/models";
import Testimonials, { ITestimonialsProps } from "@/components/testimonials";
import Steps, { IStepsProps } from "@/components/steps";
import CtaButton from "@/components/cta-button";
import Artists from "@/components/artists";
import Partners from "@/components/partners";
import Action from "@/components/action";

const heroSliderProps: IHeroSliderProps = {
  enableAutoplay: true,
  autoplayDelay: 5000,
  enableSliding: true,
  slides: [
    {
      id: 1,
      image: "/modelos/confident-8.5/capa.jpg",
      alt: "Confident 8.5",
    },
    {
      id: 2,
      image: "/modelos/p-buss/capa.jpg",
      alt: "P-Buss",
    },
    {
      id: 3,
      image: "/modelos/position-6.5/capa.jpg",
      alt: "Position 6.5",
    },
    {
      id: 4,
      image: "/modelos/position-7.5/capa.jpg",
      alt: "Position 7.5",
    },
    {
      id: 5,
      image: "/modelos/winner-p-7.2/capa.jpg",
      alt: "Winner P-7.2",
    },
  ],
};

const showcaseProps: IShowcaseProps = {
  title: "Da sua ideia à estrada:",
  highlight: "motorhomes exclusivos.",
  media: [
    { src: "/exclusivos/1.jpg", alt: "1" },
    { src: "/exclusivos/2.jpg", alt: "2" },
    { src: "/exclusivos/3.jpg", alt: "3" },
    { src: "/exclusivos/4.jpg", alt: "4" },
  ],
};

const modelsProps: IModelsProps = {
  title: "Conheça os nossos modelos",
  tabs: ["TODOS", "CHASSI CABINE", "ÔNIBUS", "TRAILER"],
  models: [
    {
      id: 1,
      name: "Confident 8.5",
      image: "/modelos/confident-8.5/capa.jpg",
      category: "CHASSI CABINE",
      href: "/modelos/confident-8.5",
    },
    {
      id: 2,
      name: "Position 7.5",
      image: "/modelos/position-7.5/capa.jpg",
      category: "CHASSI CABINE",
      href: "/modelos/position-7.5",
    },
    {
      id: 3,
      name: "Position 6.5",
      image: "/modelos/position-6.5/capa.jpg",
      category: "CHASSI CABINE",
      href: "/modelos/position-6.5",
    },
    {
      id: 4,
      name: "P-Buss",
      image: "/modelos/p-buss/capa.jpg",
      category: "ÔNIBUS",
      href: "/modelos/onibus/p-buss",
    },
    {
      id: 5,
      name: "Winner P-7.2",
      image: "/modelos/winner-p-7.2/capa.jpg",
      category: "TRAILER",
      href: "/modelos/winner-p-7.2",
    },
  ],
  defaultTab: "TODOS",
};

const testimonialsProps: ITestimonialsProps = {
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
};

const stepsProps: IStepsProps = {
  title: "Nosso processo de montagem",
  subtitle: "Rápido e simples, um processo onde você faz parte do começo ao fim.",
  steps: [
    {
      id: 1,
      icon: "/processo/modelo.svg",
      title: "Modelo",
      description: "Procure o modelo perfeito para você, sua família ou artista.",
      variant: "light",
    },
    {
      id: 2,
      icon: "/processo/exclusividade.svg",
      title: "Exclusividade garantida",
      description:
        "Converse com o nosso setor comercial ou, até mesmo, visite a nossa fábrica para alinhar toda a sua montagem e personalização",
      variant: "dark",
    },
    {
      id: 3,
      icon: "/processo/estrada.svg",
      title: "Pronto para viagem",
      description:
        "Receba uma entrega onde você irá aprender todas as funcionalidades do seu novo lar sobre rodas e você já está pronto para viajar",
      variant: "light",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <HeroSlider {...heroSliderProps} />

      <Showcase {...showcaseProps} />

      <section id="modelos">
        <Models {...modelsProps} />
      </section>

      <Testimonials {...testimonialsProps} />

      <Steps {...stepsProps} />

      <Artists />

      <CtaButton />

      <Partners />

      <Action />
    </>
  );
}
