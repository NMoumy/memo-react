import './NombreTache.scss';

export default function NombreTache({taches}) {
  
  const tachesActives = taches.filter(tache => !tache.completer);
  
  return (
    <footer className='NombreTache'>
      <h2>{tachesActives.length} tâche{(tachesActives.length>1) ? "s" : ""}  active{(tachesActives.length>1) ? "s" : ""}</h2>
    </footer>
  );

}