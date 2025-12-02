"use client";

import React, { useState } from "react";
import styles from "./comparison-table.module.scss";
import Link from "next/link";

const ChevronDown: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

interface IModel {
  id: number;
  name: string;
  habilitacao: string;
  acomodacoes: string;
  quantosDormem: string;
  altura: string;
  largura: string;
  comprimento: string;
  consumo: string;
  peso: string;
  href: string;
}

export interface IComparisonTableProps {
  primaryModelName: string;
  models: IModel[];
}

const ComparisonTable: React.FC<IComparisonTableProps> = ({ primaryModelName, models }) => {
  const [selectedModels, setSelectedModels] = useState<IModel[]>([models[0], models[1], models[2]]);

  const handleModelChange = (index: number, modelId: number): void => {
    const newModel = models.find((m) => m.id === modelId);
    if (newModel) {
      const newSelected = [...selectedModels];
      newSelected[index] = newModel;
      setSelectedModels(newSelected);
    }
  };

  const renderValue = (value: string): React.ReactNode => {
    return (
      <div className={styles.valueWrapper}>
        <span className={styles.valueText}>{value}</span>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>Essa é a melhor versão para você?</h1>
          <p className={styles.subtitle}>Veja o comparativo entre outros modelos</p>
        </div>

        <div className={styles.tableWrapper}>
          <div className={styles.table}>
            {/* Header Row */}
            <div className={`${styles.cell} ${styles.headerCell} ${styles.labelCell}`}>Modelo</div>
            {selectedModels.map((model, index) => (
              <div key={index} className={`${styles.cell} ${styles.headerCell} ${styles.dataCell}`}>
                {index === 0 ? (
                  <div className={styles.fixedModelName}>{primaryModelName}</div>
                ) : (
                  <div className={styles.selectWrapper}>
                    <select
                      value={model.id}
                      onChange={(e) => handleModelChange(index, parseInt(e.target.value))}
                      className={styles.select}
                    >
                      {models.map(
                        (m) =>
                          m.name !== primaryModelName && (
                            <option key={m.id} value={m.id}>
                              {m.name}
                            </option>
                          ),
                      )}
                    </select>
                    <ChevronDown className={styles.selectIcon} />
                  </div>
                )}
              </div>
            ))}

            {/* Habilitação */}
            <div className={`${styles.cell} ${styles.primaryRow} ${styles.labelCell}`}>Habilitação</div>
            {selectedModels.map((model, index) => (
              <div key={index} className={`${styles.cell} ${styles.primaryRow} ${styles.dataCell}`}>
                {renderValue(model.habilitacao)}
              </div>
            ))}

            {/* Acomodações */}
            <div className={`${styles.cell} ${styles.secondaryRow} ${styles.labelCell}`}>Acomodações</div>
            {selectedModels.map((model, index) => (
              <div key={index} className={`${styles.cell} ${styles.secondaryRow} ${styles.dataCell}`}>
                {renderValue(model.acomodacoes)}
              </div>
            ))}

            {/* Quantos dormem */}
            <div className={`${styles.cell} ${styles.primaryRow} ${styles.labelCell}`}>Quantos dormem</div>
            {selectedModels.map((model, index) => (
              <div key={index} className={`${styles.cell} ${styles.primaryRow} ${styles.dataCell}`}>
                {renderValue(model.quantosDormem)}
              </div>
            ))}

            {/* Altura */}
            <div className={`${styles.cell} ${styles.secondaryRow} ${styles.labelCell}`}>Altura</div>
            {selectedModels.map((model, index) => (
              <div key={index} className={`${styles.cell} ${styles.secondaryRow} ${styles.dataCell}`}>
                {renderValue(model.altura)}
              </div>
            ))}

            {/* Largura */}
            <div className={`${styles.cell} ${styles.primaryRow} ${styles.labelCell}`}>Largura</div>
            {selectedModels.map((model, index) => (
              <div key={index} className={`${styles.cell} ${styles.primaryRow} ${styles.dataCell}`}>
                {renderValue(model.largura)}
              </div>
            ))}

            {/* Comprimento */}
            <div className={`${styles.cell} ${styles.secondaryRow} ${styles.labelCell}`}>Comprimento</div>
            {selectedModels.map((model, index) => (
              <div key={index} className={`${styles.cell} ${styles.secondaryRow} ${styles.dataCell}`}>
                {renderValue(model.comprimento)}
              </div>
            ))}

            {/* Consumo */}
            <div className={`${styles.cell} ${styles.primaryRow} ${styles.labelCell}`}>Consumo</div>
            {selectedModels.map((model, index) => (
              <div key={index} className={`${styles.cell} ${styles.primaryRow} ${styles.dataCell}`}>
                {renderValue(model.consumo)}
              </div>
            ))}

            {/* Peso */}
            <div className={`${styles.cell} ${styles.secondaryRow} ${styles.labelCell}`}>Peso</div>
            {selectedModels.map((model, index) => (
              <div key={index} className={`${styles.cell} ${styles.secondaryRow} ${styles.dataCell}`}>
                {renderValue(model.peso)}
              </div>
            ))}

            {/* Buttons Row */}
            <div className={`${styles.cell}`}>
              <button className={styles.projectButton}>Inicie o seu projeto</button>
            </div>
            {selectedModels.map((model, index) => (
              <div key={index} className={`${styles.cell} ${styles.buttonCell}`}>
                <Link href={model.href} className={styles.viewButton}>
                  Veja esse modelo
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
