function getNthPrime(n) {
	l: for (var primes = [2], i = 3, root; primes.length < n; i += 2) {
		for (root = Math.sqrt(i), j = 0; primes[j] <= root; j++) {
			if (i%primes[j] === 0) continue l;
		}
		primes.push(i);
	}
	return primes[n - 1];
}

console.log('Wait for it...');

console.time('Time it took');
console.log('The ten millionth prime number is: ' + getNthPrime(10000000));
console.timeEnd('Time it took');
