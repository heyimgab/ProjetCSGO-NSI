function genTab()
{
    var tab =
    `<thead>
    <tr>
        <th>Joueur</th>
        <th>Tués</th>
        <th>Assistances</th>
        <th>Morts</th>
        <th>Ratio Mort/Tué</th>
    </tr>
    </thead>
    <tbody>`;

    var matchName = sessionStorage.getItem('currentMatchName');
    var joueurs = JSON.parse(sessionStorage.getItem(matchName));

    for(i = 0; i < joueurs.length; i++)
    {
        var kill = joueurs[i].kill;
        var dead = joueurs[i].dead;
        var ratio = kill / dead;
    
        if(ratio == Infinity || isNaN(ratio))
        {
            ratio = 0;
        }
        else
        {
            ratio = ratio.toFixed(2);
        }
    
        tab +=
        `<tr id="${i}">
            <td>${joueurs[i].name}</td>
            <td>${kill}</td>
            <td>${joueurs[i].assist}</td>
            <td>${dead}</td>
            <td>${ratio}</td>
        </tr>`;
    }

    return tab + `</tbody>`;
}


document.querySelector('.board').innerHTML = genTab();
