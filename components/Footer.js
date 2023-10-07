import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="bg-[#f8fafe] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-10 px-10 py-10 rounded-3xl items-center justify-center ">
        <div className="flex flex-col items-center lg:items-start gap-5">
          <img src="/assets/Logo.png" alt="footer lgo" />
          <p className="text-center lg:text-start"></p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5">
          <p className="text-xl font-medium">Subete Latam</p>
          <p className="text-base">Colaboradores</p>
          <p className="text-base">Soporte</p>
          <p className="text-base">Contactos</p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5">
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5">
          <p className="text-xl font-medium">Legal</p>
          <p className="text-base">Terminos y condiciones</p>
          <p className="text-base">Politicas de Privacidad</p>
        </div>
        <div className="flex items-center gap-5">
                <BsFacebook className="text-3xl text-gray-500"/>
                <BsTwitter className="text-3xl text-gray-500"/>
                <BsInstagram className="text-3xl text-gray-500"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
