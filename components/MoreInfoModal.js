import React from 'react'
import { Disclosure } from '@headlessui/react'
import { BsFillPlusCircleFill } from 'react-icons/bs'
const MoreInfoModal = () => {
  const info=[
    {
      title:'¿Cómo contactarnos?',
      des:'Canales de difusión autorizados o redes sociales verificadas.'
    },
    {
      title:'¿Dónde estamos ubicados?',
      des:'Estamos ubicados en Play Store y App Store.'
    },
    {
      title:'¿Cómo contratar?',
      des:'Desde las aplicaciones oficiales de Subete Latam.'
    },
    {
      title:'¿Transporte de punto a punto?',
      des:'Si hay gente que va a tu mismo destino, puedes compartir el viaje con ellos.'
    },
  ]
  return (
    <div className="container mx-auto py-20">
            <p className="text-gray-500 text-2xl font-medium uppercase my-3">
         Más Información
      </p>
      <p className="text-gray-800 text-4xl font-medium capitalize mb-10">
      Preguntas Frecuentes
      </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
      {info.map((inf,i)=>{
        return(
      
    <Disclosure key={i} >
        {({ open }) => (
          <div className='group'>
            <Disclosure.Button className="flex flex-col group-hover:bg-[#1e3a8a] group-focus:bg-[#1e3a8a] w-full justify-between rounded-md border border-gray-200 px-8 py-10 text-left font-bold  focus:outline-none ">
              <div className="flex justify-between items-center w-full">
              <span className='group-hover:text-white  group-focus:text-white'>{inf.title}</span>
              <BsFillPlusCircleFill
                className={`${
                  open ? 'rotate-180 transform' : ''
                }  text[#1e3a8a] text-2xl group-hover:text-white  group-focus:text-white `}
              />
              </div>
           
                   <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 group-focus:text-white group-hover:text-white">
              {inf.des}
            </Disclosure.Panel>
            </Disclosure.Button>
       
          </div>
        )}
      </Disclosure>
       
        )
      })}
  
 
    </div>
  </div>
  )
}

export default MoreInfoModal