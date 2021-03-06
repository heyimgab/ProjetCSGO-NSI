function getAllJoueurs()
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

function genTab(joueurs)
{
    var tab =
    `<thead>
    <tr>
        <th>Joueur</th>
        <th>Tu??s</th>
        <th>Assistances</th>
        <th>Morts</th>
        <th>Ratio Mort/Tu??</th>
    </tr>
    </thead>
    <tbody>`;

    for(i = 0; i < joueurs.length; i++)
    {
        var kill = joueurs[i].kill;
        var dead = joueurs[i].dead;
        var ratio = kill / dead;
    
        if(ratio == Infinity || isNaN(ratio))
        {
            ratio = 0;
        }
        else if(ratio == 0)
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

var AllJoueurs = getAllJoueurs();

if(AllJoueurs.length > 0)
{
    sortJoueur(AllJoueurs);

    document.querySelector('.board').innerHTML = genTab(AllJoueurs);
}
