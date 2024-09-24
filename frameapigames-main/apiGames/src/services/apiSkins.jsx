export const fetchSkins = async () => {


  const response = await fetch('./skins.json');
  const data = await response.json();
  return data;

};
