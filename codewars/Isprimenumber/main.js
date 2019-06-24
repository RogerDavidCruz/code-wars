function isPrime(num){

    //1 not prime
    if (num<=1) return false;

    // 2 and 3 are prime
    if (num==2 || num==3 ) return true;

    //  square root is zero then its not prime
    if (num % Math.sqrt(num)==0 ) return false;

    // Run loop till square root 
    for(let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {

        // If mod is zero then its not prime
        if(num % i === 0) return false;
    }

    // Otherwise the number is prime
    return true;
   }
