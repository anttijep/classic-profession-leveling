import engineeringService from "../services/engineering";
import { useEffect, useState } from "react";

const Engineering = () => {
  const [items, setItems] = useState({});
  useEffect(() => {
    (async () => {
      const data = await engineeringService.getItems();
      setItems(data);
    })();
  }, []);
  if (Object.keys(items).length === 0) {
    return null;
  }

  return <div>engi</div>;
};

export default Engineering;
