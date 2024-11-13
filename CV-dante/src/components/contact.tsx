import { useRef } from 'react';
import { toast } from "react-toastify";

import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e : Event) => {
        e.preventDefault();

        emailjs
            .sendForm('service_zarj1ep', 'template_r3tj0qj', form.current, {
                publicKey: 'Nc9IU4enMFiqEX8QI',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    // Reset form fields
                    form.current.reset();
                    toast.info("Email sent with success! Will reply ASAP");
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error("Error: Email was not sent! Try again later.");
                },
            );
    };


    return (
        <section id="contact" className="py-16 bg-gray-100">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
                <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        name="user_name"
                        className="w-full px-4 py-2 border rounded"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        name="user_email"
                        className="w-full px-4 py-2 border rounded"
                    />
                    <textarea
                        placeholder="Your Message"
                        name="message"
                        className="w-full px-4 py-2 border rounded h-32"></textarea>
                    <button
                        type="submit"
                        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;