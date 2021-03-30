// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health
        this.strength = strength
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        return this.health;
    }
}


// Viking 

//I really don´t know why it throws error here


class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength)
        this.name = name
    }
        attack(){
            return this.strength;
        }
    receiveDamage(damage) {
        this.health = this.health - damage
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        }   else if (this.health < 0) {
            return `${this.name} has passed in a combat`
        }
    }
    battleCry() {
            return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage (damage) {
        if (this.health > 0) {
            return `A saxon has received ${damage} points of damage.`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(){
        this.vikingArmy.push(viking)

    }
    
    addSaxon(){
        this.saxonArmy.push(saxon)

    }

    vikingAttack(){
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let randomViking = this.vikingArmy[Math.floor(Math.random,() * this.vikingArmy.length)]

        let fight = randomSaxon.receiveDamage(randomViking.strength)
        if (randomSaxon.health <= 0) {
            return this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon, 1))
        }
        return flight
    }

    saxonAttack(){

    }

    showStatus(){

    }
}

