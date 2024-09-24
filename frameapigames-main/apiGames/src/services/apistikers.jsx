export const fetchStikers = async () => {


    const response = await fetch('./stikers.json');
    const data = await response.json();
    return data;

};