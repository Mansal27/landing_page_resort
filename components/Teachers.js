import React from "react";

const Teacher = () => {
  return (
    <div className="container mx-auto py-20">
      <strong><p className="text-base lg:text-xl font-medium text-gray-500 uppercase">
       Lugares Especiales
      </p></strong>
      <p className="text-3xl lg:text-5xl font-semibold text-gray-500  mt-3">
      Conoce Nuestros Lugares Especiales
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 py-10 lg:py-20">
        <div className="flex flex-col gap-5 ">
        <p className="text-2xl font-semibold">Area de Piscina</p>
        <img src="/assets/Piscina.png" alt="Camping Field" style={{ borderRadius: '20px'}}/>
          <p className="text-2xl font-semibold">Bungalows</p>
          <div className="flex items-center gap-2">
            <img src="/assets/Cabañas.png" alt="Camping Field" style={{ borderRadius: '20px'}}/>
          <p className="text-gray-500">
          </p> 
          </div>
       </div>

       <div className="flex flex-col gap-5 ">
        <p className="text-2xl font-semibold">Area de Piscina 2</p>
        <img src="/assets/piscina2.png" alt="Camping Field" style={{ borderRadius: '20px'}}/>
          <p className="text-2xl font-semibold">Vista al Mar</p>
          <div className="flex items-center gap-2">
            <img src="/assets/Vista al mar.png" alt="Camping Field" style={{ borderRadius: '20px'}}/>
          <p className="text-gray-500">
          </p> 
          </div>
       </div>
       

       <div className="flex flex-col gap-5 ">
        <p className="text-2xl font-semibold">Muelle</p>
        <img src="/assets/Vista-aerea.png" alt="Camping Field" style={{ borderRadius: '20px'}}/>
          <p className="text-2xl font-semibold">Vehiculos</p>
          <div className="flex items-center gap-2">
            <img src="/assets/Helicoptero.png" alt="Camping Field" style={{ borderRadius: '20px'}}/>
          <p className="text-gray-500">
          </p> 
          </div>
       </div>

       {/*  <div className="flex flex-col gap-5 ">
          <img src="/assets/t3.svg" alt="v1" />
          <p className="text-2xl font-semibold">Jimmy Cooper</p>
          <div className="flex items-center gap-2">
            <img src="/assets/uk.svg" alt="itersfgjds" />
            <p className="text-gray-500">
          English teacher
          </p>
          </div> 
       
        </div> */}
      </div>
    </div>
  );
};

export default Teacher;
