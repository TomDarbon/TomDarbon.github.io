/* Dates du bandeau « Prochains concerts » affiché sur smartphone.
   Modifier uniquement les quatre entrées ci-dessous pour mettre à jour les sept pages.
   date : date affichée ; lieu : ville ; salle : nom de l'établissement ; horaire : horaires.
*/
const prochainsConcerts = [
  { date: '27/11/26', lieu: 'DIJON (21)', salle: 'Dij'Eat', horaire: '19h30 – 21h' },
  { date: '28/11/26', lieu: 'AUTHUME (39)', salle: 'Soirée rock · 20h30', horaire: 'Dollmen + CYCLOPE' }
  { date: '4/12/26', lieu: 'DOLE (39)', salle: 'Le Parisien', horaire: '19h30 – 23h' },
  { date: '9/01/27', lieu: 'CHOISEY (39)', salle: 'Pub Le Callahan', horaire: '20h – 23h' },
];

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.td-mobile-dates-list').forEach(liste => {
    liste.replaceChildren();
    prochainsConcerts.forEach(concert => {
      const lien = document.createElement('a');
      lien.className = 'td-mobile-date';
      lien.href = 'dates.html';
      const date = document.createElement('strong');
      date.textContent = concert.date;
      const details = document.createElement('span');
      [concert.lieu, concert.salle, concert.horaire].forEach((ligne, i) => {
        if (i) details.appendChild(document.createElement('br'));
        details.appendChild(document.createTextNode(ligne));
      });
      lien.append(date, details);
      liste.appendChild(lien);
    });
  });
});
