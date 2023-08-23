class DoSomething {
  static isPrime(num) {
    if (num <= 1) {
      return false;
    }
    if (num <= 3) {
      return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
      return false;
    }
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
      i += 6;
    }
    return true;
  }

  static main() {
    const MAX_VALUE = 1000;
    const ROWS_PER_PAGE = 50;
    const NUM_COLUMNS = 4;
    const primes = [2];
    let oddNum = 3;
    let pageNumber = 1;
    let pageOffset = 0;

    while (primes.length <= MAX_VALUE) {
      if (DoSomethingElse.isPrime(oddNum)) {
        primes.push(oddNum);
      }
      oddNum += 2;
    }

    while (pageOffset + 1 <= MAX_VALUE) {
      console.log("Page ", pageNumber);
      for (let rowOffset = pageOffset; rowOffset <= pageOffset + ROWS_PER_PAGE - 1; rowOffset++) {
        let rowData = [];
        for (let column = 0; column < NUM_COLUMNS; column++) {
          rowData.push(primes[rowOffset + column * ROWS_PER_PAGE]);
        }
        console.log(rowData.join('|'));
      }
      pageNumber++;
      pageOffset += ROWS_PER_PAGE * NUM_COLUMNS;
    }
  }
}

DoSomething.main();