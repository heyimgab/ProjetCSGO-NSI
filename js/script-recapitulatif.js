var joueurs = JSON.parse(sessionStorage.getItem('clé'));

var tab =
`<thead>
<tr>
    <th>Joueur</th>
    <th>Tués</th>
    <th>Assistances</th>
    <th>Morts</th>
</tr>
</thead>
<tbody>`;

for(i = 0; i < joueurs.length; i++)
{
    tab +=
    `<tr id="${i}">
        <td>${joueurs[i].name}</td>
        <td>${joueurs[i].kill}</td>
        <td>${joueurs[i].assist}</td>
        <td>${joueurs[i].dead}</td>
    </tr>`;
}

tab += `</tbody>`;

document.querySelector('.board').innerHTML = tab;