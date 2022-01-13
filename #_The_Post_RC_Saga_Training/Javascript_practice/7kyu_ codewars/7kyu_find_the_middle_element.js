// 7kyu - Find the middle element

function gimme (triplet) {
    let middle = [...triplet].sort((a,b) => a - b)[1];
    for (let i = 0; i < triplet.length; i++) {
      if(triplet[i] === middle) {
        return i;
      }
    }
}