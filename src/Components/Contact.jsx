import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Facebook } from "lucide-react";

function Contact() {
  return (
    <section className="min-h-screen bg-white dark:bg-[#0a140a] text-gray-800 dark:text-gray-200 flex items-center justify-center px-6 py-12 transition-colors duration-500">
      <div className="max-w-5xl mt-10 w-full bg-white dark:bg-green-950 shadow-xl rounded-2xl flex flex-col md:flex-row justify-between p-10 border border-green-200 dark:border-green-700 transition-colors duration-500">
        
        {/* Contact Info */}
        <div className="w-full md:w-1/2  mb-10 md:mb-0">
          <h2 className="text-3xl font-bold text-green-700 dark:text-green-300 mb-4">Let's Connect</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I’m always open to discussing new projects, creative ideas, or
            opportunities. Feel free to reach out!
          </p>

          <div className="flex items-center gap-3 mb-4">
            <Mail className="text-green-600 dark:text-green-400" />
            <p>sagar.singh44818@gmail.com</p>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <Phone className="text-green-600 dark:text-green-400" />
            <p>+91 7887263984</p>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <MapPin className="text-green-600 dark:text-green-400" />
            <p>Banda, Uttar Pradesh, India</p>
          </div>

          <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-3">
            Find me on social media
          </h3>
          <div className="flex gap-4">
            {[{
              icon: <Linkedin />,
              link: "https://www.linkedin.com/in/sagar-singh-2b9953337"
            },{
              icon: <Github />,
              link: "https://github.com/"
            },{
              icon: <Twitter />,
              link: "https://twitter.com/"
            },{
              icon: <Facebook />,
              link: "https://facebook.com/"
            }].map((social, i) => (
              <a key={i} href={social.link} target="_blank" rel="noreferrer">
                {React.cloneElement(social.icon, { className: "text-green-700 dark:text-green-400 hover:text-green-900 dark:hover:text-green-200 w-6 h-6 transition-colors duration-300" })}
              </a>
            ))}
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400 mt-10">
            © 2025 Sagar Singh Rajawat. All rights reserved.
          </p>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2 bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border border-green-100 dark:border-green-700 transition-colors duration-500">
          <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-4">
            Send me a message
          </h3>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-green-300 dark:border-green-600 rounded-lg px-4 py-2 bg-white dark:bg-green-950 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 transition-colors duration-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-green-300 dark:border-green-600 rounded-lg px-4 py-2 bg-white dark:bg-green-950 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 transition-colors duration-300"
            />
            <input
              type="text"
              placeholder="Subject"
              className="border border-green-300 dark:border-green-600 rounded-lg px-4 py-2 bg-white dark:bg-green-950 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 transition-colors duration-300"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="border border-green-300 dark:border-green-600 rounded-lg px-4 py-2 bg-white dark:bg-green-950 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 transition-colors duration-300"
            ></textarea>
            <button
              type="submit"
              className="bg-green-600 dark:bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
