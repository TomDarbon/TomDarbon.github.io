/* Dates du bandeau « Prochains concerts » affiché sur smartphone.
   Modifier uniquement les quatre entrées ci-dessous pour mettre à jour les sept pages.
   date : date affichée ; lieu : ville ; salle : nom de l'établissement ; horaire : horaires.
*/
const prochainsConcerts = [
  { date: '04/11/26', lieu: 'DIJON (21)', salle: 'Barbarian’s Pub', horaire: '19h15 – 19h45' },
  { date: '11/11/26', lieu: 'CHEVIGNY (21)', salle: 'M’Beer', horaire: '19h – 22h30' },
  { date: '13/11/26', lieu: 'DOLE (39)', salle: 'MJC de Dole', horaire: '20h – 21h' },
  { date: '28/11/26', lieu: 'AUTHUME (39)', salle: 'Soirée rock · 20h30', horaire: 'Dollmen + Cyclope' }
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
