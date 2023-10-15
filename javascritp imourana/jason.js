const prenomsSurvivants = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Hannah", "Isaac", "Judy"];

class Jason {
  constructor() {
    this.pointsDeVie = 100;
  }

  attaquerSurvivant(survivant) {
    const probabiliteMourir = Math.random();
    if (probabiliteMourir < survivant.probabiliteMourir) {
      return survivant.nom + " a esquivé et infligé 10 points de dégâts à Jason.";
    } else if (probabiliteMourir < survivant.probabiliteMourir + survivant.probabiliteMourirEnInfligeant) {
      return survivant.nom + " a infligé 15 points de dégâts à Jason, mais est mort en faisant ça.";
    } else {
      this.pointsDeVie -= 10;
      return "Jason a tué " + survivant.nom + ".";
    }
  }
}

class Survivant {
  constructor() {
    this.nom = prenomsSurvivants[Math.floor(Math.random() * prenomsSurvivants.length)];
    this.caracteristique = ["nerd", "sportif", "blonde"][Math.floor(Math.random() * 3)];
    this.probabiliteMourir = Math.random();
    this.probabiliteMourirEnInfligeant = Math.random();
  }
}

const jason = new Jason();
const survivants = Array.from({ length: 5 }, () => new Survivant());

while (jason.pointsDeVie > 0 && survivants.length > 0) {
  const survivantAleatoire = survivants[Math.floor(Math.random() * survivants.length)];
  const action = jason.attaquerSurvivant(survivantAleatoire);
  
  console.log(action);
  
  if (action.includes("a tué")) {
    const index = survivants.indexOf(survivantAleatoire);
    if (index > -1) {
      survivants.splice(index, 1);
    }
  }
}

if (jason.pointsDeVie <= 0) {
  console.log("Les survivants ont gagné, mais RIP à ceux qui sont morts :");
  for (const survivant of survivants) {
    console.log(survivant.nom);
  }
} else {
  console.log("Jason est mort !");
}
