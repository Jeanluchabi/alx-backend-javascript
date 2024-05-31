class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}

const holberton = new HolbertonClass(42, "San Francisco");

console.log(Number(holberton)); 
console.log(String(holberton)); 

