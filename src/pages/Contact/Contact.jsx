import React from "react";
import { useForm } from "react-hook-form";
import './contact.scss'
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Données envoyées :", data);
    alert("Message envoyé avec succès !");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
      <div>
        <label>Nom :</label>
        <input
          type="text"
          {...register("name", { required: "Le nom est obligatoire" })}
        />
        {errors.name && <p className="error">{errors.name.message}</p>}
      </div>

      <div>
        <label>Email :</label>
        <input
          type="email"
          {...register("email", {
            required: "L'email est obligatoire",
            pattern: { value: /^\S+@\S+$/i, message: "Email invalide" },
          })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>

      <div>
        <label>Message :</label>
        <textarea
          {...register("message", { required: "Le message est obligatoire" })}
        />
        {errors.message && <p className="error">{errors.message.message}</p>}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Envoi en cours..." : "Envoyer"}
      </button>
    </form>
  );
};

export default ContactForm;
