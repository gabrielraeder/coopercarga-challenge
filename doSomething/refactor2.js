class DoSomething {
  static isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
    }
    return true;
  }

  static firstThousandPrimes() {
    const maxLength = 1000;
    const primes = [2];

    for (let oddNum = 3; primes.length <= maxLength; oddNum += 2) {
      if (DoSomething.isPrime(oddNum)) {
        primes.push(oddNum);
      }
    }
    return primes
  }

  static main() {
    const primes = DoSomething.firstThousandPrimes();
    const rowsPerPage = 50;
    const numOfColumns = 4;
    let pageNumber = 1;
    let pageOffset = 0;

    while (pageOffset + 1 < primes.length) {
      console.log("Page ", pageNumber);
      for (let rowOffset = pageOffset; rowOffset < pageOffset + rowsPerPage; rowOffset++) {
        let rowData = [];
        for (let column = 0; column < numOfColumns; column++) {
          rowData.push(primes[rowOffset + column * rowsPerPage]);
        }
        console.log(rowData.join('|'));
      }
      pageNumber++;
      pageOffset += rowsPerPage * numOfColumns;
    }
  }
}

DoSomething.main();