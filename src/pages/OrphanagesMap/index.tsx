/* eslint-disable no-use-before-define */
import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet';
import mapMarkerImg from '../../images/map-marker.svg';

import './style.css';
import 'leaflet/dist/leaflet.css';

const OrphanagesMap = () => {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>

          <p>Muitas Crianlas estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Bragança</strong>
          <span>Portugal</span>
        </footer>
      </aside>

      <Map
        center={[-27.2892052, -49.6401092]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>

      <Link to="/" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
};

export default OrphanagesMap;
