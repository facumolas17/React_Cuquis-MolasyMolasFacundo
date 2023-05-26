import React from 'react';
const productos=[
  {
        "id":1,  
        "precio":15700,
        "name":"CAROL",
        "image": "/assets/images/img-carol.jpg",
        "title": "mesa de juegos",
        "stock":40,
        "categoria":"individuales",
        "descriptionGeneral":"Mesa de madera. Niños 1 a 8 años. Tapa en madera melamina color blanco espesor 18mm. Patas laterales panel fenólico tono natural espesor 14 mm.Dimensiones: 60 cm profundidad x 52 cm ancho x 45 cm alto."
  },
  {
        "id":2,  
        "precio":8900,
        "name":"ELEONOR",
        "image": "/assets/images/img-eleonor.jpg",
        "title": "banquito escalera",
        "stock":45,
        "categoria":"individuales",
        "descriptionGeneral":"Banquito escalera de madera. Niños 1 a 6 años. Taburete y escalón en madera melamina color blanco espesor 18mm. Laterales panel fenólico tono natural espesor 14 mm. Dimensiones: 38 cm profundidad x 30 cm ancho x 20 cm alto"
  },
  {     "id":3,  
        "precio":10900,
        "name":"GALILEO",
        "image": "/assets/images/img-galileo.jpg",
        "title": "banquito de juegos",
        "stock":20,
        "categoria":"individuales",
        "descriptionGeneral":"Banquito de madera. Niños 1 a 8 años. Taburete en madera melamina color blanco espesor 18mm. Laterales panel fenólico tono natural espesor 14 mm. Dimensiones: 38 cm profundidad x 32 cm ancho x 29 cm alto."
    
  },
  {       
        "id":4,  
        "precio":12500,
        "name":"PEPPER",
        "image": "/assets/images/img-pepper.jpg",
        "title": "silloncito de juegos",
        "stock":10,
        "categoria":"individuales",
        "descriptionGeneral":"Silloncito de madera. Niños 1 a 8 años. Taburete y respaldo en madera melamina color blanco espesor 18mm. Laterales panel fenólico tono natural espesor 14 mm. Dimensiones: 38 cm profundidad x 32 cm ancho x 40 cm alto."

  },
  {     
        "id":5, 
        "precio":25700, 
        "name":"RINGO",
        "image": "/assets/images/img-ringo.jpg",
        "title": "baúl de guardado",
        "stock":5,
        "categoria":"individuales",
        "descriptionGeneral":"Baúl de madera. Niños 1 a 8 años.Taburete y espacio de guardado en madera melamina color blanco espesor 18mm. Laterales panel fenólico tono natural espesor 14 mm. Herrajes en acero inoxidable. Bisagras soft close. Manijas de agarre. Dimensiones: 70 cm largo x 45 cm ancho x 38 cm alto."
  },

  { 
        "id":6,
        "precio":12500,  
        "name":"ROBIN",
        "image": "/assets/images/img-robin.jpg",
        "title": "Banquito baúl de juegos",
        "stock":10,
        "categoria":"individuales",
        "descriptionGeneral":"Banquito baúl de madera. Niños 1 a 8 años. Taburete y espacio de guardado en madera melamina color blanco espesor 18mm. Laterales panel fenólico tono natural espesor 14 mm. Herrajes en acero inoxidable. Dimensiones: 38 cm profundidad x 32 cm ancho x 29 cm alto."
},

{
      "id":7,  
      "precio":23700,
      "name":"COMBO RINGO",
      "image": "/assets/images/img-ringo.jpg",
      "title": "mesa de juegos",
      "categoria":"combos",
      "stock":4,
      "descriptionGeneral":"Mesa de madera. Niños 1 a 8 años. Tapa en madera melamina color blanco espesor 18mm. Patas laterales panel fenólico tono natural espesor 14 mm.Dimensiones: 60 cm profundidad x 52 cm ancho x 45 cm alto."
},

{
      "id":8,  
      "precio":19700,
      "name":"COMBO CAROL",
      "image": "/assets/images/img-carol.jpg",
      "title": "mesa de juegos",
      "stock":6,
      "categoria":"combos",
      "descriptionGeneral":"Mesa de madera. Niños 1 a 8 años. Tapa en madera melamina color blanco espesor 18mm. Patas laterales panel fenólico tono natural espesor 14 mm.Dimensiones: 60 cm profundidad x 52 cm ancho x 45 cm alto."
}


];

export function getItems(){
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