import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './contact.scss';

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }, // Récupération des erreurs
  } = useForm();

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
        <p>📍 57000, Metz</p>
      </div>

      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        {/* Champ Email */}
        <input
          type="email"
          placeholder="Votre adresse mail"
          {...register('email', {
            required: "L'email est obligatoire",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "L'email n'est pas valide",
            },
          })}
        />
        {errors.email && (
          <p className="error-message">{errors.email.message}</p>
        )}

        {/* Prénom & Nom */}
        <div className="input-group">
          <div className="groupe-container">
            <input
              type="text"
              placeholder="Votre prénom"
              {...register('prenom', { required: 'Le prénom est obligatoire' })}
            />
            {errors.prenom && (
              <p className="error-message">{errors.prenom.message}</p>
            )}
          </div>
          <div className="groupe-container">
            <input
              type="text"
              placeholder="Votre nom"
              {...register('nom', { required: 'Le nom est obligatoire' })}
            />
            {errors.nom && (
              <p className="error-message">{errors.nom.message}</p>
            )}
          </div>
        </div>

        {/* Téléphone & Entreprise */}
        <div className="input-group">
        <div className="groupe-container">
          <input
            type="tel"
            placeholder="Votre téléphone"
            {...register('telephone', {
              required: 'Le téléphone est obligatoire',
              pattern: {
                value: /^[0-9]+$/,
                message:
                  'Le numéro de téléphone doit contenir uniquement des chiffres',
              },
            })}
          />
        
         
          {errors.telephone && (
            <p className="error-message">{errors.telephone.message}</p>
          )}
 </div>

 <div className="groupe-container">
          <input
            type="text"
            placeholder="Votre entreprise"
            {...register('entreprise')}
          />
           </div>
        </div>

        {/* Message */}
        <textarea
          placeholder="Votre message"
          {...register('message', { required: 'Le message est obligatoire' })}
          rows="4"
        />
        {errors.message && (
          <p className="error-message">{errors.message.message}</p>
        )}

        <button type="submit">Envoyer</button>
        {messageSent && (
          <p className="success-message">
            Votre message a été envoyé avec succès !
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;
