function recapitulatifs()
{
    var allJoueurs = [];

    for(var i = 1; i < sessionStorage.length + 1; i++)
    {
        var match = `Match ${i}`;

        if(match in sessionStorage)
        {
            var joueurs = JSON.parse(sessionStorage.getItem(match));

            for(j = 0; j < joueurs.length; j++)
            {
                addJoueur(allJoueurs, joueurs[j]);
            }
        }
    }

    return allJoueurs;
}

function addJoueur(array, joueur)
{
    for(var i = 0; i < array.length; i++)
    {
        if(array[i].name == joueur.name)
        {
            array[i].kill += joueur.kill;
            array[i].dead += joueur.dead;
            array[i].assist += joueur.assist;
            joueurRatio(array[i]);
            return;
        }
    }

    joueurRatio(joueur);
    array.push(joueur);
}

function joueurRatio(joueur)
{
    var ratio = joueur.kill / joueur.dead;

    if(ratio == Infinity || isNaN(ratio))
    {
        ratio = 0;
    }
    else
    {
        ratio = Number(ratio.toFixed(2));
    }

    joueur.ratio = ratio;
}

function sortJoueur(array)
{
    array.sort(function(a, b)
    {
        if(a.ratio > b.ratio)
        {
            return -1;
        }

        if(a.ratio < b.ratio)
        {
            return 1;
        }

        if(a.kill > b.kill)
        {
            return -1;
        }
        
        if(a.kill < b.kill)
        {
            return 1;
        }
            
        if(a.dead > b.dead)
        {
            return 1;
        }
            
        if(a.dead < b.dead)
        {
            return -1;
        }
                
        if(a.assist > b.assist)
        {
            return -1;
        }

        if(a.assist < b.assist)
        {
            return 1;
        }

        if(a.name > b.name)
        {
            return 1;
        }
        
        if(a.name < b.name)
        {
            return -1;
        }
        
        return 0;
    });
}

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

    var AllJoueurs = recapitulatifs();
    sortJoueur(AllJoueurs);

    for(i = 0; i < AllJoueurs.length; i++)
    {
        var kill = AllJoueurs[i].kill;
        var dead = AllJoueurs[i].dead;
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
            <td>${AllJoueurs[i].name}</td>
            <td>${kill}</td>
            <td>${AllJoueurs[i].assist}</td>
            <td>${dead}</td>
            <td>${ratio}</td>
        </tr>`;
    }

    return tab + `</tbody>`;
}

document.querySelector('.board').innerHTML = genTab();
