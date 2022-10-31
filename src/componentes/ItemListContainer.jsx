import React from "react";
import { getItems, getItemsByCategory } from "../contenedores/firestore";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { DotWave } from "@uiball/loaders";

const ItemListContainer = () => {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const cat = useParams().cat;

  useEffect(() => {
    setData([]);
    setIsLoading(true);
    if (cat === undefined) {
      getItems()
        .then((respuestaDatos) => setData(respuestaDatos))
        .finally(() => setIsLoading(false));
    } else {
      getItemsByCategory(cat)
        .then((respuestaDatos) => setData(respuestaDatos))
        .finally(() => setIsLoading(false));
    }
  }, [cat]);

  return (
    <div>
      {isLoading && <DotWave size={47} speed={1} color="black" />}
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;
