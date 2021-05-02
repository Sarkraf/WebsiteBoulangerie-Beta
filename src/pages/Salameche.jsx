import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Title from '../components/Title'
import sarkrafPP from '../assets/Sarkraf.jpg';
const internetSalameche = 'https://res.cloudinary.com/teepublic/image/private/s--45IfnNqa--/t_Preview/b_rgb:5e366e,c_limit,f_jpg,h_630,q_90,w_630/v1467160780/production/designs/564425_1.jpg';
const internetCarapuce = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.media.pokekalos.fr%2Fimg%2Fpokemon%2Fpgl%2Fcarapuce.png&f=1&nofb=1';
const internetBulbizarre = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.3Kqzu65PD7x4c-HAz0C89wHaHM%26pid%3DApi&f=1';

const items = [
  {
    titre: "Salamèche", 
    couleur: "red", 
    picture: internetSalameche,
    descriptionDuPokemon: "https://pokeapi.co/api/v2/pokemon-species/4/"
  }, 

  {
    titre: "Sarkraf", 
    couleur: "yellow", 
    picture: sarkrafPP,
    descriptionDuPokemon: ""
  },

  {
    titre: "Carapuce",
    couleur: "blue",
    picture: internetCarapuce,
    descriptionDuPokemon: "https://pokeapi.co/api/v2/pokemon-species/7/"
  },

  {
    titre: "Bulbizarre", 
    couleur: "green", 
    picture: internetBulbizarre,
    descriptionDuPokemon: "https://pokeapi.co/api/v2/pokemon-species/1/"
  }
]

const Salameche = () => {

  const [id, setId] = useState(0);
  const [descriptPokemon, setDescriptPokemon] = useState('Loading Description of this pokemon...');

  useEffect(() => {
    axios.get(items[id].descriptionDuPokemon)
    .then(response => {
      setDescriptPokemon(response.data.flavor_text_entries[0].flavor_text)
    })
    .catch(error => {
      setDescriptPokemon("La déscription du pokémon n'a pas été trouvé");
    })
  }, [id])
  
  const onClickHandler = () => {
    
    const selectId = Math.floor(Math.random() * items.length);
    setId(selectId);

  }

    return (
      <>
        <Title 
          value={items[id].titre}
          titleStyle={{
            color: items[id].couleur,
          }}
          />
        <img
          style={{
            width: "200px",
            marginBottom: "20px",
          }}
          alt='Salamèche' 
          src={items[id].picture}
        />
        <span
        style={{
          marginBottom: "20px",
          color: "#ff5f00"
        }}
        >
          {descriptPokemon}
        </span>
        <button
          style={{
            backgroundColor: "#AF0000",
            width: "100px",
            height: "50px",
            fontSize: "18px",
          }}
          onClick={() => onClickHandler()}
        >Changer l'image</button>
      </>  
    )
}

export default Salameche
