
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: "AIzaSyAWqllUlxur5EXW6syuEnGv855Z2X450_A",
  authDomain: "react-cuquis-molasymolas.firebaseapp.com",
  projectId: "react-cuquis-molasymolas",
  storageBucket: "react-cuquis-molasymolas.appspot.com",
  messagingSenderId: "122723703574",
  appId: "1:122723703574:web:89ee2e6d0b111816168e37"
};


const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export async function getItems(){
    const myCollection = collection( firestore, "productos");
    let respuesta = await getDocs(myCollection);
    let dataDocs = respuesta.docs.map(documento => {
        let docFormateado = { ...documento.data(), id: documento.id }
        return docFormateado;
    });
    return dataDocs;
    
}

export async function getItemDetail(idItem){
    const docRef = doc(firestore,"productos", idItem);
    const docSnapshot = await getDoc(docRef);
    
    return { ...docSnapshot.data(), id: docSnapshot.id };
    
}

export async function getItemsByCategory(cat){
    const myCollection = collection( firestore, "productos");
    const queryCategory = query(myCollection, where("categoria","==", cat));

    const respuesta = await getDocs(queryCategory);
    let dataDocs = respuesta.docs.map(documento => {
        let docFormateado = { ...documento.data(), id: documento.id }
        return docFormateado;
    });
    return dataDocs;
}

export default firestore ;