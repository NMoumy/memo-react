import './ListeTaches.scss';
import Tache from './Tache';

export default function ListeTaches({taches, setTaches, tachesFiltrees}) {

  function supprimerTache(idd) {

    const nouvellesTaches = taches.map(tache => {
      if (tache.id === idd) {
        return {...tache, supprimer: !tache.supprimer};
      } 
      else {
        return tache;
      }
    });
    setTaches(nouvellesTaches);

    setTimeout(() => {
      setTaches(taches.filter(tache => tache.id !== idd));
    }, 500); 
  }

  const clickCompleter = (idd) => {
    const nouvellesTaches = taches.map(tache => {
      if (tache.id === idd) {
        return {...tache, completer: !tache.completer};
      } 
      else {
        return tache;
      }
    });
    setTaches(nouvellesTaches);
  }

  return (
    taches.length > 0 
    ? // si oui
      <section className="ListeTaches">
        {
          tachesFiltrees.map
            (tache => (
                <Tache key={tache.id} {...tache} supprimerTache={supprimerTache} clickCompleter={clickCompleter}/>
            ))
        }
      </section>
    : // si non
      <div className='aucune-tache'><h2>Aucune tache</h2></div>
  );

}

