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
}

function assist(obj)
{
    var id = obj.parentNode.id;
    var joueur = joueurs[id];
    joueur.assist++;
}

function dead(obj)
{
    var id = obj.parentNode.id;
    var joueur = joueurs[id];
    joueur.dead++;
}

function updatePlayerName(obj)
{
    var id = obj.parentNode.id;
    var joueur = joueurs[id];
    joueur.name = obj.value;
}

function videoEnded()
{
    sessionStorage.setItem(matchName, JSON.stringify(joueurs));
    window.location.href = "recapitulatifMatch.html";
}

var joueurs = [new Joueur("Joueur 1"), new Joueur("Joueur 2"), new Joueur("Joueur 3"), new Joueur("Joueur 4")];
var matchName = sessionStorage.getItem('currentMatchName');
