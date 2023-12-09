import './FrmTache.scss';
import { useState } from 'react';

export default function FrmTache({ajouterTache, texte_t=''}) {
  const [texte, setTexte] = useState(texte_t); 

  function envoiFormulaire(event) {

    event.preventDefault(); 

    if (texte.trim()) {
      let timestamp = new Date().getTime();
      let id = crypto.randomUUID();
      ajouterTache(id, texte, timestamp);
      setTexte(''); 
    }
    
  }
  
  function changement(event) {
    setTexte(event.target.value);
  }

  return (
    <div className='FrmTache'>
      <form onSubmit={envoiFormulaire}> 
        <input
          type="text"
          placeholder="Ajouter une tâche"
          value={texte}
          onChange={changement}
        />
        <button type="submit" className='btn-ajouter'>Ajouter</button>
      </form>
  </div>
  );
  
}
