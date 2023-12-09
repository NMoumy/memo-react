import './Entete.scss';

export default function Entete({supprimerTachesCompletes, setFiltre}) {
  return (
    <header className="Entete">
      <div className="logo">
        <h1>Le Memo</h1>
      </div>
      <div className="gestion-site">
        <button className='btn-toute' onClick={() => setFiltre('toutes')}>Toutes</button>
        <button className='btn-complete' onClick={() => setFiltre('completes')}>Complétées</button>
        <button className='btn-actives' onClick={() => setFiltre('actives')}>Actives</button>
        <button className='btn-supprimer' onClick={() => supprimerTachesCompletes()}>Supprimer complétées</button>
      </div>
    </header>
  );
}