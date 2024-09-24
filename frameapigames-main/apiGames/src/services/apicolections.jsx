export const fetchColections = async () => {


    const response = await fetch('./colections.json');
    const data = await response.json();
    return data;

};
