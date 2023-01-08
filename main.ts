function towerOfHanoi(n: number, initPeg: number, endPeg: number, tmpPeg: number): void {
  if (n === 1) {
    console.log(`${initPeg} -> ${endPeg}`);
  } else {
    towerOfHanoi(n - 1, initPeg, tmpPeg, endPeg);
    console.log(`${initPeg} -> ${endPeg}`);
    towerOfHanoi(n - 1, tmpPeg, endPeg, initPeg);
  }
}

function main(): void {
  towerOfHanoi(3, 1, 3, 2);

  console.log("OH NO! THE PRIESTS BEAT THE TOWER OF HANOI!! THE WORLD HAS ENDED!!!!!!!");
}

main();
