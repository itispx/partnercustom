"use client";

import styles from "./models.module.scss";
import Image from "next/image";
import { useState } from "react";

const Models = () => {
  const [activeTab, setActiveTab] = useState("TODOS");

  const tabs = ["TODOS", "CHASSI CABINE", "VAN", "ÔNIBUS"];

  const models = [
    {
      id: 1,
      name: "Position 6.5",
      image: "/position-6.5/capa.jpg",
      category: "CHASSI CABINE",
    },
    {
      id: 2,
      name: "Position 7.5",
      image: "/position-7.5/capa.jpg",
      category: "CHASSI CABINE",
    },
    {
      id: 3,
      name: "Confident 8.5",
      image: "/confident-8.5/capa.jpg",
      category: "VAN",
    },
    // Add more models with their respective categories
    // {
    //   id: 4,
    //   name: "Model Name",
    //   image: "/path/to/image.jpg",
    //   category: "ÔNIBUS",
    // },
  ];

  const filteredModels = activeTab === "TODOS" ? models : models.filter((model) => model.category === activeTab);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Conheça os nossos modelos</h2>

      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`${styles.tab} ${activeTab === tab ? styles.active : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className={styles.modelsGrid}>
        {filteredModels.map((model) => (
          <div key={model.id} className={styles.card}>
            <Image src={model.image} alt={model.name} width={800} height={600} className={styles.cardImage} />
            <h3 className={styles.cardTitle}>{model.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Models;
