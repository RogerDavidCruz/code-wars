//7kyu - Two fighters, one winner.
//https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/train/javascript

// Create a function that returns the name of the winner in a fight between two fighters.
// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.
// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.
// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

const declareWinner = (fighter1, fighter2, firstAttacker) => {
  const finalHealthF1 = Math.ceil(fighter1.health / fighter2.damagePerAttack)
  const finalHealthF2 = Math.ceil(fighter2.health / fighter1.damagePerAttack)
  return finalHealthF1 < finalHealthF2 ? fighter2.name : (finalHealthF2 < finalHealthF1 ? fighter1.name : firstAttacker)
}
