 import React from "react";

const Student = () => {
  return (
    <div className="container mx-auto ">
      <p className="text-gray-500 text-base lg:text-xl font-medium uppercase">
        Nuestros mejores conductores
      </p>
      <p className="text-gray-800 text-3xl lg:text-5xl font-medium capitalize">
        Nuestros afiliados dicen:
      </p>
      <div className="flex flex-col overflow-hidden lg:flex-row justify-center  lg:justify-between items-center gap-5 py-10 lg:py-20">
        <img src="/assets/student.svg" alt="" />
        <div className="flex flex-col gap-5 items-start">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">Enrique Matus</p>
          <div className="flex items-center gap-2 h-20 w-20">
            <img src="/assets/ni.svg" alt="itersfgjds" />
            <p className="text-gray-500">Conductor Afiliado</p>
          </div>
          <p className=" text-base sm:text-lg md:text-2xl lg:text-3xl">
            No hay manera de decir lo comodo que me encuentro con la app <br /> y he disfrutado mucho mi tiempo colaborando con Subete Latam<br /> 

          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5 py-10 lg:py-20">
  <div className="flex flex-col gap-5 items-start text-center lg:text-left lg:order-1">
    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">Arturo Mejía</p>
    <div className="flex items-center gap-2 h-20 w-20">
      <img src="/assets/mx.svg" alt="itersfgjds" />
      <p className="text-gray-500">Pasajero Afiliado</p>
    </div>
    <p className="text-base sm:text-lg md:text-2xl lg:text-3xl">
     La plataforma ofrece la mejor experiencia para los conductores y para los pasajeros, es una plataforma muy segura<br />
    </p>

  </div>

  <img src="/assets/john-doe.jpeg" alt="" className="overflow-hidden rounded-2xl lg:order-2"/>
</div>


  
    </div>

    
  );
};

export default Student;
 