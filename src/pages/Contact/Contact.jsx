import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./contact.scss";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const [messageSent, setMessageSent] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setMessageSent(true);
    reset();
    setTimeout(() => setMessageSent(false), 3000);
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Me contacter</h2>
        <p>Vous voulez en savoir plus sur moi ? Contactez-moi !</p>
        <p>📧 kahinasaidi771@gmail.com</p>
        <p>📍 57000,Metz</p>
      </div>

      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder="Votre adresse mail" {...register("email")} />
        <div className="input-group">
          <input type="text" placeholder="Votre prénom" {...register("prenom")} />
          <input type="text" placeholder="Votre nom" {...register("nom")} />
        </div>
        <div className="input-group">
          <input type="tel" placeholder="Votre téléphone" {...register("telephone")} />
          <input type="text" placeholder="Votre entreprise" {...register("entreprise")} />
        </div>
        <textarea placeholder="Votre message" {...register("message")} rows="4" />
        
        <button type="submit">Envoyer</button>
        {messageSent && <p className="success-message">Votre message a été envoyé avec succès !</p>}
      </form>
    </div>
  );
};

export default Contact;
