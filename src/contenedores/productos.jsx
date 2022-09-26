import React from 'react';
const productos=[
  {
        "id":1,  
        "stock":5,
        "precio":15700,
        "name":"CAROL",
        "image": "carol",
        "title": "mesa de juegos",
        "descriptionGeneral":"Mesa de madera. Niños 1 a 8 años. Tapa en madera melamina color blanco espesor 18mm. Patas laterales panel fenólico tono natural espesor 14 mm.Dimensiones: 60 cm profundidad x 52 cm ancho x 45 cm alto."
  },
  {
        "id":2,  
        "stock":5,
        "precio":8900,
        "name":"ELEONOR",
        "image": "eleonor",
        "title": "banquito escalera",
        "descriptionGeneral":"Banquito escalera de madera. Niños 1 a 6 años. Taburete y escalón en madera melamina color blanco espesor 18mm. Laterales panel fenólico tono natural espesor 14 mm. Dimensiones: 38 cm profundidad x 30 cm ancho x 20 cm alto"
  },
  {     "id":3,  
        "stock":5,
        "precio":10900,
        "name":"GALILEO",
        "image": "galileo",
        "title": "banquito de juegos",
        "descriptionGeneral":"Banquito de madera. Niños 1 a 8 años. Taburete en madera melamina color blanco espesor 18mm. Laterales panel fenólico tono natural espesor 14 mm. Dimensiones: 38 cm profundidad x 32 cm ancho x 29 cm alto."
    
  },
  {       
        "id":4,  
        "stock":5,
        "precio":12500,
        "name":"PEPPER",
        "image": "pepper",
        "title": "silloncito de juegos",
        "descriptionGeneral":"Silloncito de madera. Niños 1 a 8 años. Taburete y respaldo en madera melamina color blanco espesor 18mm. Laterales panel fenólico tono natural espesor 14 mm. Dimensiones: 38 cm profundidad x 32 cm ancho x 40 cm alto."

  },
  {     
        "id":5, 
        "stock":5,
        "precio":25700, 
        "name":"RINGO",
        "image": "ringo",
        "title": "baúl de guardado",
        "descriptionGeneral":"Baúl de madera. Niños 1 a 8 años.Taburete y espacio de guardado en madera melamina color blanco espesor 18mm. Laterales panel fenólico tono natural espesor 14 mm. Herrajes en acero inoxidable. Bisagras soft close. Manijas de agarre. Dimensiones: 70 cm largo x 45 cm ancho x 38 cm alto."
  },

  { 
        "id":7,
        "stock":5,
        "precio":12500,  
        "name":"ROBIN",
        "image": "robin",
        "title": "Banquito baúl de juegos",
        "descriptionGeneral":"Banquito baúl de madera. Niños 1 a 8 años. Taburete y espacio de guardado en madera melamina color blanco espesor 18mm. Laterales panel fenólico tono natural espesor 14 mm. Herrajes en acero inoxidable. Dimensiones: 38 cm profundidad x 32 cm ancho x 29 cm alto."
}


];

export default function getItems(){
      return new Promise((resolve,reject) => {
            setTimeout(() => {
                  resolve(productos);
            },2000);
      })
}

export function getItemDetail(){
      return new Promise((resolve, reject) => {
            setTimeout(() => {
                  resolve(productos[1]);
            },2000);
      }) 
}