import axios from "axios";
import configs from "../config";

const getItems = async (prof) => {
  const { data } = await axios.get(`${configs.API_URL}/${prof}/items`);
  return data;
}

const getLimited = async (prof) => {
  const { data } = await axios.get(`${configs.API_URL}/${prof}/limited`);
  return data;
}

const getSpells = async (prof) => {
  const { data } = await axios.get(`${configs.API_URL}/${prof}/spells`);
  return data;
}

const apiService = { getItems, getSpells, getLimited };

export default apiService;
