"use client";

import Image from "next/image";
import styles from "./team.module.scss";

const teamMembers = [
  {
    id: 1,
    name: "Odirlei",
    role: "Eletricista",
    image: "/team/drake.webp",
  },
  {
    id: 2,
    name: "Juliana",
    role: "Eletricista",
    image: "/team/eminem.jpg",
  },
];

const Team = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>FAZER TEXTO</h2>

      <div className={styles.teamGrid}>
        {teamMembers.map((member) => (
          <div key={member.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image src={member.image} alt={member.name} width={400} height={500} className={styles.image} />
            </div>
            <div className={styles.info}>
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
