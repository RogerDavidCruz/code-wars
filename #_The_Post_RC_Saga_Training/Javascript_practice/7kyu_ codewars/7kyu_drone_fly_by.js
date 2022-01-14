// 7 kyu - Drone Fly-By
// codewars.com/kata/58356a94f8358058f30004b5/train/javascript

function flyBy(lamps, drone){
    if (drone.length > lamps.length) return 'o'.repeat(lamps.length);
    return 'o'.repeat(drone.length) + 'x'.repeat(lamps.length - drone.length);
}
  