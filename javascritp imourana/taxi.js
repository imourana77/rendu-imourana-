const musiques = ["Chanson1", "Chanson2", "Chanson3", "Chanson4", "Anissa - Wejdene"];

class Personnage {
  constructor(prenom) {
    this.prenom = prenom
    this.santeMentale = 10
  }

  perdreSanteMentale() {
    this.santeMentale -= 1
  }
}

class Trajet {
  constructor() {
    this.radio = musiques
    this.feuxRouges = 30
    this.nbChangements = 0
  }

  jouerMusique() {
    return this.radio[Math.floor(Math.random() * this.radio.length)]
  }

  faireTrajet(personnage) {
    while (this.feuxRouges > 0) {
      const musique = this.jouerMusique()
      console.log("Musique jouée : " + musique + ", Feux restants : " + this.feuxRouges)
      
      if (musique === "Anissa - Wejdene") {
        personnage.perdreSanteMentale()
        this.nbChangements += 1
      }
      
      this.feuxRouges -= 1
      
      if (personnage.santeMentale === 0) {
        console.log("Explosion !")
        return
      }
    }
    
    console.log("Bien arrivé ! Nombre de changements de taxi : " + this.nbChangements)
  }
}

const john = new Personnage("John")
const trajet = new Trajet()

trajet.faireTrajet(john)
