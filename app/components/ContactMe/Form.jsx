import axios from "axios";
import { useRef, useState } from "react";
import { IconSend } from "@tabler/icons";
import { useForm } from "../../hooks/useForm";

const contactMeFormFields = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { name, email, message, subject, onInputChange, onResetForm } =
    useForm(contactMeFormFields);
  const alertSumbitMail = useRef(null);
  const alertErrorMail = useRef(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await axios
        .post("/api/sendgrid", {
          email,
          name,
          subject,
          message,
        })
        .then(({ status }) => {
          if (status === 200) {
            alertSumbitMail.current.classList.remove("hidden");
            setTimeout(() => {
              alertSumbitMail.current.classList.add("hidden");
            }, 3000);
          }
        });
    } catch ({ message }) {
      alertErrorMail.current.classList.remove("hidden");
      setTimeout(() => {
        alertErrorMail.current.classList.add("hidden");
      }, 3000);
    }
    onResetForm();
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleFormSubmit} id="myForm" className=" mt-4 w-full">
      <input
        type="text"
        placeholder="Nombre"
        name="name"
        value={name}
        onChange={onInputChange}
        required
        className="border mt-2 p-2 bg-transparent w-full rounded-md"
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        name="email"
        value={email}
        onChange={onInputChange}
        required
        className="border mt-2 p-2 bg-transparent w-full rounded-md"
      />
      <input
        type="text"
        placeholder="Asunto"
        name="subject"
        value={subject}
        onChange={onInputChange}
        required
        className="border mt-2 p-2 bg-transparent w-full rounded-md"
      />
      <textarea
        placeholder="Mensaje"
        rows="5"
        name="message"
        value={message}
        onChange={onInputChange}
        required
        className="border rounded-md bg-transparent mt-2 p-2 w-full "
      />

      <div className="bg-[var(--bg-buttons)] rounded-md text-white h-16 hover:scale-105 mt-2 flex items-center justify-center w-full">
        <button
          type="submit"
          disabled={!!isLoading}
          className="text-2xl w-full h-full"
        >
          {isLoading ? (
            <div className="flex justify-center items-center ">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Enviando...
            </div>
          ) : (
            <div className="flex justify-center items-center gap-2 w-full h-full">
              <IconSend className="h-6 w-6" />
              Enviar
            </div>
          )}
        </button>
      </div>

      <div className="flex flex-col gap-2 justify-center items-end mt-2">
        <div
          className="hidden text-center bg-green-600 w-full p-2 rounded-md mb-6"
          role="alert"
          ref={alertSumbitMail}
        >
          <strong>¡Mensaje enviado!</strong>
          <br />
          Te responderé lo antes posible.
        </div>
        <div
          className="hidden text-center bg-red-500 w-full p-2 rounded-md mb-6"
          role="alert"
          ref={alertErrorMail}
        >
          <strong>¡El mensaje no se pudo enviar!</strong>
          <br />
          Por favor, intenta nuevamente más tarde.
        </div>
      </div>
    </form>
  );
};
