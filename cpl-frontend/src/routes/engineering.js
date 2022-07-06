import apiService from "../services/apiService";
import { useEffect, useState } from "react";
import Craft from "../components/craft";

const Engineering = () => {
  const [items, setItems] = useState({});
  const [spells, setSpells] = useState({});
  useEffect(() => {
    (async () => {
      const data = await apiService.getSpells("engineering");
      setSpells(data);
    })();
    (async () => {
      const data = await apiService.getItems("engineering");
      setItems(data);
    })();
  }, []);
  if (Object.keys(items).length === 0 || Object.keys(spells).length === 0) {
    return null;
  }
  return (
    <div>
      {Object.keys(spells).map((k) => <Craft key={k} id={k} {...spells[k]} cname={items[spells[k].crea.id].name}/>)}
    </div>
  );
};

export default Engineering;
