//##################
// Debut du script #
//##################
console.log("Debut du script\n-----------------");

// Pas de saut de ligne
document.onkeypress = function (e)
{
  if (e.keyCode == '13') return false;
}

// Questions/réponses
var displayViewReply = false;

function viewReply()
{
  displayViewReply = displayViewReply ? false : true;
  document.getElementsByTagName('form')[0].style.display = !displayViewReply ? 'none' : 'block';
}

// Les champs
var answer =
{
  nbAnswer: 0,

  answerText: function(text, log, id)
  {
    this.nbAnswer++;

    var reply = prompt("Question "+ this.nbAnswer +"/10\n" + text);
    while (!reply)
    reply = prompt("Le champ ne dois pas être vide !");

    console.log(log + ' = ' + reply);
    document.getElementById(id).value = reply;
    return this.formatSpan(reply);
  },

  // Champs numerique
  answerNum: function(text, log, id)
  {
    this.nbAnswer++;

    var reply = prompt("Question "+ this.nbAnswer +"/10\n" + text);
    while (!reply.match(/^[0-9]+$/))
    reply = prompt("Seul un nombre est attendu !");

    console.log(log + ' = ' + reply);
    document.getElementById(id).value = reply;
    return this.formatSpan(reply);
  },

  answerHex: function(log, id)
  {
    this.nbAnswer++;

    var reply = prompt("Question "+ this.nbAnswer +"/10\n" + "De quelle couleur voulez vous affichier les réponses ?");
    while (!reply.match(/^[0-9a-f]{6}$/i))
    reply = prompt("Le code couleur doit être en hexadécimal sans le dièse !");

    document.getElementById(id).value = reply;
    console.log(log + ' = ' + reply);
    return reply;
  },

  // Champs booléen
  answerBool: function(log, id)
  {
    this.nbAnswer++;

    var reply = prompt("Question "+ this.nbAnswer +"/10\nComment envisagez-vous l'avenir de ce monde ? Etes-vous plutôt pessimiste ou optimiste ?");
    while(!reply.match(/pessimiste/i) && !reply.match(/optimiste/i))
    reply = prompt("Ne répondez que par le mot pessimiste ou optimiste");

    document.getElementById(id).value = reply;
    console.log(log + ' = ' + reply);
    return reply.match(/optimiste/i);
  },

  formatSpan: function(text)
  {
    return '<span style="color:#'+ color +';" contenteditable="true">' + text + '</span>';
  }
}

// Les questions
var color = answer.answerHex("Code couleur", 'color');
var name = answer.answerText("Quel est votre prénom ?", "Prénom ", 'name');
var years = answer.answerNum("Quel est votre age ?", "Age", 'age');
var town = answer.answerText("Dans qu'elle ville habitez-vous ?", "Ville", 'town');
var cataclyste = answer.answerText("Qu'elle serait pour vous la pire catastrophe planétaire ?", "Catastrophe", 'cataclyste');
var survivor = answer.answerNum("Combien avez-vous d'amie proche ?", "Survivant", 'survivor');
var personLike = answer.answerText("Qu'elle est la personne qui compte le plus à vos yeux ?", "Personne disparue", 'personLike');
var itemLike = answer.answerText("Quel est le monument que vous préféré ?", "Monument préféré", 'itemLike');
var futur = answer.answerBool("Fin de l'histoire", 'futur');

// Formatage de l'histoire
var story = "Je m'appelle " + name + " et j'ai " + years + " ans.<br />";
story += "Je vivais à " + town + " avant que ce monde subisse un " + cataclyste + ".<br /><br />";
story += "Nous somme désormais que " + survivor + " survivant" + ((survivor.length >= 1) ? "s" : "") + " et vivons sous terre. ";
story += "Nous manquons également de nouriture au point que nous somme parfois obligé de pratiquer le canibalisme. ";
story += personLike + "</span> a disparu ainsi que toutes les autres personnes qui m'étaient chères. ";
story += itemLike + " n'existe plus tout comme les infrastuctures qui faisaient notre société<br /><br />";

if (futur)
{
  story += "La situation est critique mais les choses sont sur le point de changer. L'air à la survace devient peu à peu respirable"
  story += "et nous allons recontruire notre monde en espérant avoir cette fois ci retenue la lesson...";
}
else
{
  story += "La situation est totalement désepérée, bientôt nos dernières vivres seront épuisées ";
  story += "et nous mourrons tous. J'écris ces mots pour que peut être qu'un jours, d'autres civilisations tombent dessus et connaissent la vérité...";
}

// Affichage de l'histoire
document.getElementsByTagName('p')[0].innerHTML = story;

//################
// Fin du script #
//################
console.log("-----------------\nFin du script");
