import './Appli.scss';
import Entete from './Entete';
import FrmTache from './FrmTache';
import ListeTaches from './ListeTaches';
import NombreTache from './NombreTache';
import { useEffect, useState } from 'react';

export default function Appli() {

  const [taches, setTaches] = useState(
    () => JSON.parse(localStorage.getItem('taches')) || []
  );

  useEffect(
    () => localStorage.setItem('taches', JSON.stringify(taches))
    , [taches]
  );

  const [filtre, setFiltre] = useState('toutes');

  function ajouterTache(id, texte, timestamp, supprimer) {//changer timestamp pour date 
    setTaches([
      {
        id: id,
        texte: texte,
        date: timestamp,
        completer: false,
        supprimer: false
      },
      ...taches
    ]);
  }   

  function supprimerTachesCompletes() {
    const nouvellesTaches = taches.filter(tache => !tache.completer);
    setTaches(nouvellesTaches);
  }

  let tachesFiltrees;
  if (filtre === 'completes') {
    tachesFiltrees = taches.filter(tache => tache.completer);
  } 
  else if (filtre === 'actives') {
    tachesFiltrees = taches.filter(tache => !tache.completer);
  } 
  else {
    tachesFiltrees = taches;
  }

  return (
    <div className="Appli">
      <Entete 
        supprimerTachesCompletes={supprimerTachesCompletes} 
        setFiltre={setFiltre}
      />
      <section className="contenu-principal">
        <FrmTache 
          ajouterTache={ajouterTache}
        />
        <ListeTaches 
          taches={taches} 
          setTaches={setTaches}
          tachesFiltrees={tachesFiltrees}
        />
      </section>
      <NombreTache 
        taches={taches}
      />
    </div>
  );

}
