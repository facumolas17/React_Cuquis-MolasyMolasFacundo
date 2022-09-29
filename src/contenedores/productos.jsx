import React from 'react';
const productos=[
  {
        "id":1,  
        "stock":5,
        "precio":15700,
        "name":"CAROL",
        "image": "carol",
        "title": "mesa de juegos",
        "categoria":"individuales",
        "descriptionGeneral":"Mesa de madera. Niños 1 a 8 años. Tapa en madera melamina color blanco espesor 18mm. Patas laterales panel fenólico tono natural espesor 14 mm.Dimensiones: 60 cm profundidad x 52 cm ancho x 45 cm alto."
  },
  {
        "id":2,  
        "stock":5,
        "precio":8900,
        "name":"ELEONOR",
        "image": "eleonor",
        "title": "banquito escalera",
        "categoria":"individuales",
        "descriptionGeneral":"Banquito escalera de madera. Niños 1 a 6 años. Taburete y escalón en madera melamina color blanco espesor 18mm. Laterales panel fenólico tono natural espesor 14 mm. Dimensiones: 38 cm profundidad x 30 cm ancho x 20 cm alto"
  },
  {     "id":3,  
        "stock":5,
        "precio":10900,
        "name":"GALILEO",
        "image": "galileo",
        "title": "banquito de juegos",
        "categoria":"individuales",
        "descriptionGeneral":"Banquito de madera. Niños 1 a 8 años. Taburete en madera melamina color blanco espesor 18mm. Laterales panel fenólico tono natural espesor 14 mm. Dimensiones: 38 cm profundidad x 32 cm ancho x 29 cm alto."
    
  },
  {       
        "id":4,  
        "stock":5,
        "precio":12500,
        "name":"PEPPER",
        "image": "pepper",
        "title": "silloncito de juegos",
        "categoria":"individuales",
        "descriptionGeneral":"Silloncito de madera. Niños 1 a 8 años. Taburete y respaldo en madera melamina color blanco espesor 18mm. Laterales panel fenólico tono natural espesor 14 mm. Dimensiones: 38 cm profundidad x 32 cm ancho x 40 cm alto."

  },
  {     
        "id":5, 
        "stock":5,
        "precio":25700, 
        "name":"RINGO",
        "image": "ringo",
        "title": "baúl de guardado",
        "categoria":"individuales",
        "descriptionGeneral":"Baúl de madera. Niños 1 a 8 años.Taburete y espacio de guardado en madera melamina color blanco espesor 18mm. Laterales panel fenólico tono natural espesor 14 mm. Herrajes en acero inoxidable. Bisagras soft close. Manijas de agarre. Dimensiones: 70 cm largo x 45 cm ancho x 38 cm alto."
  },

  { 
        "id":7,
        "stock":5,
        "precio":12500,  
        "name":"ROBIN",
        "image": "robin",
        "title": "Banquito baúl de juegos",
        "categoria":"individuales",
        "descriptionGeneral":"Banquito baúl de madera. Niños 1 a 8 años. Taburete y espacio de guardado en madera melamina color blanco espesor 18mm. Laterales panel fenólico tono natural espesor 14 mm. Herrajes en acero inoxidable. Dimensiones: 38 cm profundidad x 32 cm ancho x 29 cm alto."
},

{
      "id":8,  
      "stock":5,
      "precio":23700,
      "name":"Combo ringo",
      "image": "ringo",
      "title": "mesa de juegos",
      "categoria":"combos",
      "descriptionGeneral":"Mesa de madera. Niños 1 a 8 años. Tapa en madera melamina color blanco espesor 18mm. Patas laterales panel fenólico tono natural espesor 14 mm.Dimensiones: 60 cm profundidad x 52 cm ancho x 45 cm alto."
},

{
      "id":9,  
      "stock":5,
      "precio":19700,
      "name":"Combo Carol",
      "image": "carol",
      "title": "mesa de juegos",
      "categoria":"combos",
      "descriptionGeneral":"Mesa de madera. Niños 1 a 8 años. Tapa en madera melamina color blanco espesor 18mm. Patas laterales panel fenólico tono natural espesor 14 mm.Dimensiones: 60 cm profundidad x 52 cm ancho x 45 cm alto."
}


];

export default function getItems(){
      return new Promise((resolve,reject) => {
            setTimeout(() => {
                  resolve(productos);
            },1500);
      })
}

export function getItemsByCategory(cat){
      return new Promise((resolve, reject) => {

            let itemFind= productos.filter((item) =>{ 
                  return item.categoria === cat;
            });

            setTimeout(() => {
                  
                        if (itemFind) resolve(itemFind);
                        else reject(new Error("item no encontrado"));
            },1500);
      })
}

export function getItemDetail(idItem){
      return new Promise((resolve, reject) => {

            let itemFind= productos.find((item) =>{ 
                  return item.id === parseInt(idItem) 
            });

            setTimeout(() => {
                  
                        if (itemFind) resolve(itemFind);
                        else reject(new Error("item no encontrado"));
            },1500);
      }) 
}