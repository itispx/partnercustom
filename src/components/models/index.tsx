"use client";

import styles from "./models.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export interface Model {
  id: number;
  name: string;
  image: string;
  category: string;
  href?: string;
}

export interface IModelsProps {
  title: string;
  tabs: string[];
  models: Model[];
  defaultTab?: string;
}

const Models: React.FC<IModelsProps> = ({ title, tabs, models, defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const filteredModels = activeTab === defaultTab ? models : models.filter((model) => model.category === activeTab);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>

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
          <Link key={model.id} href={model.href || "#"} className={styles.card}>
            <Image src={model.image} alt={model.name} width={800} height={600} className={styles.cardImage} />
            <h3 className={styles.cardTitle}>{model.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Models;
