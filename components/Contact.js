import { useState } from 'react';
import ArrowIcon from './icons/ArrowIcon'; 
import ChevronIcon from './icons/ChevronIcon';
import Button from './Button';
import DownloadIcon from './icons/DownloadIcon';

function Contact() {

    const [formSubmitted, setFormSubmitted] = useState(false);
    const fields = [
      { id: "name", type: "text", required: true, placeholder: "Nombre completo*" },
      { id: "email", type: "email", required: true, placeholder: "Correo electrónico*" },
      { id: "phone", type: "phone", required: true, placeholder: "Teléfono*" },
      { id: "company", type: "text", required: true, placeholder: "Empresa*" },
      { id: "service", type: "select", required: true, placeholder: "¿En qué puedo ayudarte?*", options: ["Colaboración con tu marca", "Participación en podcast", "Conferencia", "Taller/curso de RH", "Otro"] },
      { id: "message", type: "textarea", required: false, placeholder: "Cuéntame más!" },
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
                access_key: "a40fbdea-5dff-4265-b353-66e062bbdc86",
                name: e.target.name.value,
                email: e.target.email.value,
                phone: e.target.phone.value,
                company: e.target.company.value,
                service: e.target.service.value,
                message: e.target.message.value,
            }),
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
            setFormSubmitted(true);
          
            setTimeout(() => {
              setFormSubmitted(false);
            }, 30000); 
        }
    }

    if (formSubmitted) {
      return (
        <div>
          <div className="py-5 text-2xl text-white font-belgro" role="alert">Gracias por tu interés. Mi equipo te contactará en breve!</div>
            <div className='mt-auto border-t border-white border-opacity-20 py-8 flex flex-col gap-4 items-start hidden lg:inline-flex'>
            <h4 className='text-white text-lg lg:text-xl z-1'>Costos de colaboraciones</h4>
            <p className="text-xl opacity-90 text-white max-w-xl">
              Si lo deseas, puedes descargar mi media kit para conocer costos de colaboración antes de que mi equipo te contacte.
            </p>
            <Button href="/resources/DORA_VALDEZ_MEDIA-KIT.pdf" target="_blank" className="bg-pink text-white flex gap-10 bg-purple hover:bg-pinklight"><span>Descargar media kit</span> <DownloadIcon className="ml-4" /></Button>
          </div>
        </div>
      );
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
                    className="font-belgro px-5 md:px-6 py-4 md:py-5 w-full rounded-[24px] bg-white bg-opacity-0 focus:bg-opacity-20 border border-white border-opacity-25 focus:border-opacity-50 tracking-wider text-[10.5px] md:text-[11px] uppercase !outline-none text-white appearance-none hover:bg-opacity-5"
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
        <button type="submit" className="flex text-xs justify-between items-center gap-12 font-belgro uppercase px-5 md:px-6 py-4 md:py-5 min-w-1/3 rounded-full hover:bg-pinklight cursor-pointer bg-pinkcontrast text-white transition duration-500">
          <div>Enviar mensaje</div>
          <span className="inline-block ml-2"><ArrowIcon /></span>
        </button>
      </form>
    );
}

export default Contact;