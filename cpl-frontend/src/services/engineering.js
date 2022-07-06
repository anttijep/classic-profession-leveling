import axios from "axios";
import configs from "../config";

const getItems = async () => {
  const { data } = await axios.get(`${configs.API_URL}/engineering/items`);
  console.log(data);
  return data;
}

const engineeringService = { getItems };

export default engineeringService;
