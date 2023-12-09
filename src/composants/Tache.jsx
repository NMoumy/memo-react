import './Tache.scss';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

export default function Tache({texte, date, supprimerTache, id, clickCompleter, completer, supprimer}) {

  return (
    <div className={`Tache ${supprimer ? 'supprime' : ''} ${completer ? 'complete' : ''}`}>
      <IconButton className="btn-complete" aria-label="supprimer" size="small" onClick={() => clickCompleter(id)}>
        <TaskAltIcon/>
      </IconButton>
      <div className='contenue-texte'>
        <h2>{texte}</h2>
        <p> Ajouter le : {new Date(date).toLocaleString('fr-FR', { //pour afficher les deux petits point changer CA pour FR
            day: 'numeric',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
          })} 
        </p>
      </div>
      <IconButton className="supprimer" aria-label="supprimer" size="small" onClick={() => supprimerTache(id)}>
        <ClearIcon/>
      </IconButton>
    </div>
  );
  
}
