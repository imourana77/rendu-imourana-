//alert("je suis bien lié à l'index.html");
/*let a = "jean" 
let b = "paul"
let  result = checkName (a, b)

function checkName(prénom1, prénom2){
   if (prénom1 == prénom2){
        return "les deux prénom sont identiques"
   
   } else {
     return 'les deux prénom ne sont pas identiques'
   }
   
}

console.log (result)*/


/*let names[];
names.push('Vincent','Paul',Arthur');

names.forEach(name=>{
    names += "va à la plage"
    console.log(names)
}*/

/*let student = {
    name: "arthur",
    favoriteFood:"hamburger",
    City:"paris",
}
 let values= Object.values(student)
 let nombreDeLettres= 0

 values.forEach((value) => {
     nombreDeLettres+= value.length
 })
 
console.log(nombreDeLettres)

 if(nombreDeLettres % 2=== 1) {
    console.log("impair")
 } else{
    console.log("pair")
}*/

/*class Pokemon {
    constructor(name, attack, defense, hp, luck) {
      this.name = name
      this.attack = attack
      this.defense = defense
      this.hp = hp
      this.luck = luck
    }
  
    isLucky() {
      return Math.random() < this.luck / 100
    }
  
    attackPokemon(target) {
      if (this.isLucky()) {
        const damage = this.attack - target.defense
        if (damage > 0) {
          target.hp -= damage
        }
        console.log(this.name + " attaque " + target.name + " et inflige " + damage + " dégâts.")
      } else {
        console.log(this.name + " rate son attaque contre " + target.name + ".")
      }
    }
  }
  
  const salameche = new Pokemon("Salameche", 50, 14, 70, 30)
  const carapuce = new Pokemon("Carapuce", 40, 15, 40, 40)
  
  while (salameche.hp > 0 && carapuce.hp > 0) {
    if (salameche.isLucky()) {
      salameche.attackPokemon(carapuce)
      console.log(carapuce.name + " a " + carapuce.hp + " points de vie restants.")
      if (carapuce.hp <= 0) {
        console.log(carapuce.name + " est KO. " + salameche.name + " gagne le combat!")
        break
      }
    } else {
      console.log(salameche.name + " rate son attaque contre " + carapuce.name + ".")
    }
  
    if (carapuce.isLucky()) {
      carapuce.attackPokemon(salameche)
      console.log(salameche.name + " a " + salameche.hp + " points de vie restants.")
      if (salameche.hp <= 0) {
        console.log(salameche.name + " est KO. " + carapuce.name + " gagne le combat!")
        break
      }
    } else {
      console.log(carapuce.name + " rate son attaque contre " + salameche.name + ".")
    }
  }*/
  










