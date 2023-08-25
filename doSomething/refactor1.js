class DoSomething {
  static main() {
    const M = 1000;
    const RR = 50;
    const CC = 4;
    const P = Array(M).fill(0);
    const MULT = Array(31).fill(0);
    let PAGENUMBER = 1;
    let PAGEOFFSET = 1;
    let J = 1;
    let K = 1;
    let ITIS = true;
    let ORD = 2;
    let SQUARE = 9;
    P[1] = 2;

    while (K < M) {
      do {
        J += 2;
        if (J == SQUARE) {
          ORD++;
          SQUARE = P[ORD] * P[ORD];
          MULT[ORD - 1] = J;
        }
        let N = 2;
        ITIS = true;
        while (N < ORD && ITIS) {
          if (MULT[N] < J) {
            MULT[N] += P[N] + P[N];
          }
          else if (MULT[N] === J) {
            ITIS = false;
          }
          N++;
        }
      } while (!ITIS);
      K++;
      P[K] = J;
    }

    while (PAGEOFFSET <= M) {
      console.log("Page ", PAGENUMBER);
      for (
        let ROWOFFSET = PAGEOFFSET;
        ROWOFFSET < PAGEOFFSET + RR;
        ROWOFFSET++
      ) {
        let aux = [];
        for (let C = 0; C < CC; C++) {
          aux.push(P[ROWOFFSET + C * RR]);
        }
        console.log(aux.join('|'));
      }
      PAGENUMBER++;
      PAGEOFFSET += RR * CC;
    }
  }
}


DoSomething.main();

