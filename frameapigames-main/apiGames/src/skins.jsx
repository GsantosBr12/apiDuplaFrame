import React, { useState } from 'react';
import { fetchSkins } from './services/apiSkins';
import ListaSkins from "./components/listaSkins"
import Header from "./content/header"
import './lists.css'

const skins = () => {

  const [Skins, setSkins] = useState([]);

  const carregaSkins = async () => {
    try {
      const dadosSkins = await fetchSkins();
      setSkins(dadosSkins);
    } catch (error) {
      console.error("Erro de acesso api: ", error);
    }
  }

  return (
    <>
    <Header />
    <div className='vis' >
        
      <h1>LISTA DE Skins</h1>
      <button onClick={carregaSkins}>Carregar Skins</button>
      <div >
        <div className='lista' >
          <ListaSkins skins={Skins}  />
        </div>
      </div>
    </div>
    </>
  )
}

export default skins;
