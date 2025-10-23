import React from "react";
import { Linkedin, Github, Twitter, Facebook } from "lucide-react";

function Footer() {
  return (
    <footer className="relative bg-white dark:bg-[#0a140a] text-gray-800 dark:text-gray-200 py-16 px-6 overflow-hidden transition-colors duration-500">
      
     
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-green-400/20 rounded-full blur-3xl -translate-x-1/2 -z-10 animate-blob"></div>
      <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-green-300/20 rounded-full blur-2xl -z-10 animate-blob animation-delay-2000"></div>

      <div className="max-w-6xl mx-auto flex justify-between">
        
       
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-green-700 dark:text-green-300">
            Sagar Singh Rajawat
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-sm">
            Fullsatack Developer | MERN Enthusiast | Building interactive and modern web experiences.
          </p>
        </div>

      
        

        
        <div>
          <h2 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-4">
            Connect with Me
          </h2>
          <div className="flex gap-4">
            {[
              { icon: <Linkedin />, link: "https://www.linkedin.com/in/sagar-singh-2b9953337" },
              { icon: <Github />, link: "https://github.com/" },
              { icon: <Twitter />, link: "https://twitter.com/" },
              { icon: <Facebook />, link: "https://facebook.com/" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 shadow-md hover:scale-110 hover:shadow-xl transition-all duration-300"
              >
                {React.cloneElement(social.icon, { className: "w-6 h-6" })}
              </a>
            ))}
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">
            © 2025 Sagar Singh Rajawat. All rights reserved.
          </p>
        </div>
      </div>

      
      <style>
        {`
          @keyframes blob {
            0%, 100% { transform: translateY(0px) scale(1); }
            33% { transform: translateY(-20px) scale(1.05); }
            66% { transform: translateY(20px) scale(0.95); }
          }
          .animate-blob {
            animation: blob 8s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
        `}
      </style>
    </footer>
  );
}

export default Footer;
