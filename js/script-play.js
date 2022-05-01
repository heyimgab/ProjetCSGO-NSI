class Joueur
{
    constructor(name)
    {
        this.name = name;
        this.kill = 0;
        this.assist = 0;
        this.dead = 0;
    }
}

function kill(obj)
{
    var id = obj.parentNode.id;
    var joueur = joueurs[id];
    joueur.kill++;
    update()
}

function assist(obj)
{
    var id = obj.parentNode.id;
    var joueur = joueurs[id];
    joueur.assist++;
    update()
}

function dead(obj)
{
    var id = obj.parentNode.id;
    var joueur = joueurs[id];
    joueur.dead++;
    update()
}

function updatePlayerName(obj)
{
    var id = obj.parentNode.id;
    var joueur = joueurs[id];
    joueur.name = obj.value;
    update()
}

function update()
{
    sessionStorage.setItem(matchName, JSON.stringify(joueurs));
}

function videoEnded()
{
    window.location.href = "recapitulatifMatch.html";
}

var joueurs = [new Joueur("Joueur 1"), new Joueur("Joueur 2"), new Joueur("Joueur 3"), new Joueur("Joueur 4")];
var matchName = sessionStorage.getItem('currentMatchName');
