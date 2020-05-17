import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import api from '../../services/api';

import './style.css';

export default function Dashboard(){
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    async function loadSpots(){
      const user_id = localStorage.getItem('user');
      const response = await api.get('/dashboard', {
        headers: { user_id }
      });
      //console.log(response.data);
      setSpots(response.data);
    };
    loadSpots();
  }, []);
  return (
    <>
    <ul className="spot-list">
      {spots.map(spots => (
        <li key={spots._id} >
          <header style={{backgroundImage: `url(${spots.thumbnail_url})`}} />
          <strong>{spots.company}</strong>
          <span>{spots.price ? `R$ ${spots.price}/dia` : 'GRATUITO'}</span>

        </li>
      ))}
    </ul>
    <Link to="/new ">
      <button className="btn">Cadastrar Novo Spot</button>
    </Link>
    </>
  );
}