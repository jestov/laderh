import { useState } from 'react';
import ArrowIcon from './icons/ArrowIcon'; 
import ChevronIcon from './icons/ChevronIcon';

function Contact() {

    const [formSubmitted, setFormSubmitted] = useState(false);
    const fields = [
      { id: "name", type: "text", required: true, placeholder: "Nombre completo*" },
      { id: "email", type: "email", required: true, placeholder: "Correo electrónico*" },
      { id: "phone", type: "phone", required: true, placeholder: "Teléfono*" },
      { id: "company", type: "select", required: true, placeholder: "¿En qué puedo ayudarte?*", options: ["Colaboración en redes", "Participación en podcast", "Colaboración en empresa o escuela", "Otro"] },
      { id: "message", type: "textarea", required: true, placeholder: "Cuéntame más!*" },
    ];


    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "db64ff47-ef92-4b2c-9086-70c0ba5387eb",
                name: e.target.name.value,
                email: e.target.email.value,
                phone: e.target.phone.value,
                company: e.target.company.value,
                message: e.target.message.value,
            }),
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
            setFormSubmitted(true);
          
            setTimeout(() => {
              setFormSubmitted(false);
            }, 10000); 
        }
    }

    if (formSubmitted) {
      return <div className="bg-white bg-opacity-15 shadow-sm p-5 text-base text-primary" role="alert">Gracias por tu interés. Mi equipo te contactará en breve!</div>;
    }
  
    return (
      <form onSubmit={handleSubmit} className={formSubmitted ? "hidden" : "flex flex-col gap-4 md:gap-6 w-full items-start bg-white bg-opacity-5 py-8 md:py-12 px-6 md:px-10 rounded-[36px] shadow-xl border border-white border-opacity-40"}>
        {fields.map(field => (
          <div key={field.id} className="flex flex-col gap-4 w-full">
            {field.type === "textarea" ? (
              <textarea name={field.id} required={field.required} rows="4" placeholder={field.placeholder} className="font-belgro px-5 md:px-6 py-4 md:py-5 w-full rounded-[24px] bg-white bg-opacity-0 focus:bg-opacity-20 border border-white border-opacity-25 focus:border-opacity-50 tracking-wider text-[10.5px] md:text-[11px] uppercase text-white placeholder-white !outline-none hover:bg-opacity-5"></textarea>
            ) : field.type === "select" ? (
                <div className="relative">
                  <select
                    name={field.id}
                    required={field.required}
                    className="font-belgro px-5 md:px-6 py-4 md:py-5 w-full rounded-[24px] bg-white bg-opacity-0 focus:bg-opacity-20 border border-white border-opacity-25 focus:border-opacity-50 tracking-wider text-[10.5px] md:text-[11px] uppercase text-white appearance-none hover:bg-opacity-5"
                  >
                    <option value="" disabled selected>
                      {field.placeholder}
                    </option>
                    {field.options.map(option => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <ChevronIcon className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white pointer-events-none" />
                </div>
            ) : (
              <input type={field.type} name={field.id} required={field.required} placeholder={field.placeholder} className="font-belgro px-5 md:px-6 py-4 md:py-5 w-full rounded-[24px] bg-white bg-opacity-0 focus:bg-opacity-20 border border-white border-opacity-25 focus:border-opacity-50 tracking-wider text-[10.5px] md:text-[11px] uppercase text-white placeholder-white !outline-none hover:bg-opacity-5" />
            )}
          </div>
        ))}
        <button type="submit" className="flex text-xs justify-between items-center gap-12 font-belgro uppercase px-5 md:px-6 py-4 md:py-5 min-w-1/3 rounded-full hover:bg-pinklight cursor-pointer bg-pinkcontrast text-white">
          <div>Enviar mensaje</div>
          <span className="inline-block ml-2"><ArrowIcon /></span>
        </button>
      </form>
    );
}

export default Contact;