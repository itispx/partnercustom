"use client";

import styles from "./contact.module.scss";

import Image from "next/image";

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            <Image
              src="/modelos/confident-8.5/capa.jpg"
              alt="Motorhome Partner Custom"
              width={600}
              height={800}
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.formSection}>
          <div className={styles.header}>
            <h2 className={styles.title}>Tem Alguma Dúvida?</h2>
            <p className={styles.subtitle}>
              Nos envie sua pergunta sobre a Partner, marcas e produtos. Vamos adorar responder.
            </p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <div className={styles.iconWrapper}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 10C12.0711 10 13.75 8.32107 13.75 6.25C13.75 4.17893 12.0711 2.5 10 2.5C7.92893 2.5 6.25 4.17893 6.25 6.25C6.25 8.32107 7.92893 10 10 10Z"
                    stroke="#666666"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.5 17.5C17.5 14.7386 14.1421 12.5 10 12.5C5.85786 12.5 2.5 14.7386 2.5 17.5"
                    stroke="#666666"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <input
                type="text"
                name="name"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <div className={styles.iconWrapper}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.5 5.83333L8.89336 10.4788C9.56784 10.9556 10.4322 10.9556 11.1066 10.4788L17.5 5.83333M4.16667 15.8333H15.8333C16.7538 15.8333 17.5 15.0871 17.5 14.1667V5.83333C17.5 4.91286 16.7538 4.16667 15.8333 4.16667H4.16667C3.24619 4.16667 2.5 4.91286 2.5 5.83333V14.1667C2.5 15.0871 3.24619 15.8333 4.16667 15.8333Z"
                    stroke="#666666"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <div className={styles.iconWrapper}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.5 5.83333C2.5 4.91286 3.24619 4.16667 4.16667 4.16667H6.45617C6.82674 4.16667 7.15804 4.41375 7.27736 4.76726L8.39653 8.00726C8.53491 8.40989 8.38398 8.86054 8.03516 9.09792L6.66667 10.0833C7.55961 12.0651 9.10155 13.607 11.0833 14.5L12.0687 13.1315C12.3061 12.7827 12.7568 12.6317 13.1594 12.7701L16.3994 13.8893C16.7529 14.0086 17 14.34 17 14.7105V17C17 17.9205 16.2538 18.6667 15.3333 18.6667H14.1667C7.86328 18.6667 2.5 13.3034 2.5 7V5.83333Z"
                    stroke="#666666"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <input
                type="tel"
                name="whatsapp"
                placeholder="Whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>

            <textarea
              name="message"
              placeholder="Descreva sua dúvida"
              value={formData.message}
              onChange={handleChange}
              className={styles.textarea}
              rows={6}
              required
            />

            <button type="submit" className={styles.submitButton}>
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
