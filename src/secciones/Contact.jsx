import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const[showAlert, setShowAlert] = useState(false);
    const[alertType, setAlertType] = useState("success");
    const[alertMessage, setAlertMessage] = useState("");
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const showAlertMessage = (type, message) => {
        setAlertType(type);
        setAlertMessage(message);
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 5000);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

try {   
    console.log("Formulario enviado", formData);
    await emailjs.send("service_wycopku", "template_znlrxnr", {
        from_name: formData.name,
        to_name: "Yassir Paez",
        from_email: formData.email,
        to_email: "yassirjose4@gmail.com",
        message: formData.message,
    }, 
    "7qcv76vS-jX30n17s"
    );

    setIsLoading(false);
    setFormData({ name: "", email: "", message: "" });
    showAlertMessage("Exito", "Formulario enviado correctamente");
 
} catch (error) {
    setIsLoading(false);
    console.log(error);
    showAlertMessage("Error", "Algo salio mal, intente nuevamente");
}       
    };    
  return ( <section id="contact" className='relative flex items-center c-space
    section-spacing'> 
    <Particles 
    className="absolute inset-0 z-50"
    quantity={100}
    ease={80}
    color={"#ffffff"}
    refresh    
    />
    {showAlert && <Alert type={alertType} text={alertMessage} />}
    <div className="flex flex-col items-center justify-center 
    max-w-md p-5 mx-auto border border-white/10 rounded-2xl
    bg-primary">
        <div className="flex flex-col items-start w-full gap-5
        mb-10">
            <h2 className="text-heading">Contáctame</h2>
            <p className="font-normal text-neutral-400">
            Ya sea que busque crear un nuevo sitio web, 
            mejorar su plataforma actual o necesite cualquier solucion,
            estoy aquí para ayudarle.
            </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-5">
                <label htmlFor="name" className="field-label">Nombre Completo</label>
                <input 
                type="text" 
                id="name" 
                name="name" 
                className="field-input field-input-focus"
                placeholder="Juan Perez"
                required
                autoComplete="name" 
                value={formData.name}
                onChange={handleChange}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="field-label">Email</label>
                <input 
                type="email" 
                id="email" 
                name="email" 
                className="field-input field-input-focus"
                placeholder="juanperez@gmail.com"
                required
                autoComplete="email" 
                value={formData.email}
                onChange={handleChange}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="message" className="field-label">Mensaje</label>
                <textarea 
                id="message" 
                name="message" 
                className="field-input field-input-focus"
                placeholder="Escribe tu mensaje aquí"
                required
                rows="4"
                autoComplete="message" 
                value={formData.message}
                onChange={handleChange}
                />
            </div>
            <button type="submit" className="w-full px-1 py-3 text-lg text-center
            rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation">
            {isLoading ? "Enviando..." : "Enviar"}
            </button>
        </form>
    </div>
    </section>
  )
}

export default Contact