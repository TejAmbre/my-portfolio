// // src/components/ContactSection.jsx
// import React, { useState } from "react";

// export default function ContactSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can handle form submission here, e.g., send data to email or backend
//     // For now, just simulate submission
//     setSubmitted(true);
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <section id="contact" className="max-w-2xl mx-auto px-6 py-16 bg-[rgba(20,20,40,0.85)] rounded-xl backdrop-blur-md shadow-lg">
//       <h2 className="text-4xl font-bold text-white mb-6 text-center">Contact Me</h2>
//       <p className="text-gray-300 mb-8 text-center">
//         Feel free to reach out with any questions or project inquiries!
//       </p>
//       <form
//         onSubmit={handleSubmit}
//         className="max-w-lg mx-auto flex flex-col gap-6"
//         noValidate
//       >
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           className="p-3 rounded-md bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           className="p-3 rounded-md bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
//         />
//         <textarea
//           name="message"
//           rows="6"
//           placeholder="Message"
//           value={formData.message}
//           onChange={handleChange}
//           required
//           className="p-3 rounded-md bg-gray-100 text-gray-900 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
//         />
//         <button
//           type="submit"
//           className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-md transition"
//         >
//           Send Message
//         </button>
//         {submitted && (
//           <p className="text-green-400 text-center mt-2">
//             Thank you! Your message has been sent.
//           </p>
//         )}
//       </form>
//     </section>
//   );
// }


// src/components/ContactSection.jsx
// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

// export default function ContactSection() {
//   const form = useRef();
//   const [statusMessage, setStatusMessage] = useState("");

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_pcmupte",   // replace with your EmailJS Service ID
//         "template_otqohte",  // replace with your EmailJS Template ID
//         form.current,
//         "vr9_V8nsOoJQUOsI1"    // replace with your public key
//       )
//       .then(
//         (result) => {
//           console.log("Email sent:", result.text);
//           setStatusMessage("Thank you! Your message has been sent.");
//           form.current.reset();
//         },
//         (error) => {
//           console.error("Email send error:", error.text);
//           setStatusMessage("Oops! Something went wrong. Please try again.");
//         }
//       );
//   };

//   return (
//     <section
//       id="contact"
//       className="max-w-6xl mx-auto px-6 py-16 bg-[rgba(20,20,40,0.85)] rounded-xl backdrop-blur-md shadow-lg"
//     >
//       <h2 className="text-4xl font-bold text-white mb-6 text-center">Contact Me</h2>
//       <form
//         ref={form}
//         onSubmit={sendEmail}
//         className="max-w-lg mx-auto flex flex-col gap-6"
//       >
//         <input
//           type="text"
//           name="user_name"  // must match your EmailJS template variable name
//           placeholder="Name"
//           required
//           className="p-3 rounded-md bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
//         />
//         <input
//           type="email"
//           name="user_email"  // must match your EmailJS template variable name
//           placeholder="Email"
//           required
//           className="p-3 rounded-md bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
//         />
//         <textarea
//           name="message"  // must match your EmailJS template variable name
//           rows="6"
//           placeholder="Message"
//           required
//           className="p-3 rounded-md bg-gray-100 text-gray-900 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
//         />
//         <button
//           type="submit"
//           className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-md transition"
//         >
//           Send Message
//         </button>
//       </form>
//       {statusMessage && (
//         <p className="text-center mt-4 text-green-400">{statusMessage}</p>
//       )}
//     </section>
//   );
// }




import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pcmupte",      // your EmailJS Service ID
        "template_otqohte",     // your EmailJS Template ID
        form.current,
        "vr9_V8nsOoJQUOsI1"     // your EmailJS Public Key
      )
      .then(
        (result) => {
          setStatusMessage("Thank you! Your message has been sent.");
          form.current.reset();
        },
        (error) => {
          setStatusMessage("Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="max-w-2xl mx-auto px-6 py-16 bg-[rgba(20,20,40,0.85)] rounded-xl backdrop-blur-md shadow-lg"
    >
      <h2 className="text-4xl font-bold text-white mb-6 text-center">Contact Me</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-lg mx-auto flex flex-col gap-6"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          required
          className="p-3 rounded-md bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          required
          className="p-3 rounded-md bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
        />
        <textarea
          name="message"
          rows="6"
          placeholder="Message"
          required
          className="p-3 rounded-md bg-gray-100 text-gray-900 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
        />
        {/* If your template uses `to_email` as a variable for recipient, uncomment below and fill your address:
        <input type="hidden" name="to_email" value="your@email.com" />
        */}
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-md transition"
        >
          Send Message
        </button>
      </form>
      {statusMessage && (
        <p className="text-center mt-4 text-green-400">{statusMessage}</p>
      )}
    </section>
  );
}
