/* 
 * Filename: complex_code.js
 * Description: Complex code example with advanced concepts and features
 */

// Define a complex class
class Complex {
  constructor(real, imag) {
    this.real = real;
    this.imag = imag;
  }

  // Get the modulus of the complex number
  modulus() {
    return Math.sqrt(this.real * this.real + this.imag * this.imag);
  }

  // Get the argument of the complex number
  argument() {
    return Math.atan2(this.imag, this.real);
  }

  // Add two complex numbers
  static add(c1, c2) {
    return new Complex(c1.real + c2.real, c1.imag + c2.imag);
  }

  // Subtract two complex numbers
  static subtract(c1, c2) {
    return new Complex(c1.real - c2.real, c1.imag - c2.imag);
  }

  // Multiply two complex numbers
  static multiply(c1, c2) {
    return new Complex(
      c1.real * c2.real - c1.imag * c2.imag,
      c1.real * c2.imag + c1.imag * c2.real
    );
  }

  // Divide two complex numbers
  static divide(c1, c2) {
    const denominator = c2.real * c2.real + c2.imag * c2.imag;
    return new Complex(
      (c1.real * c2.real + c1.imag * c2.imag) / denominator,
      (c1.imag * c2.real - c1.real * c2.imag) / denominator
    );
  }
}

// Create two complex numbers
const c1 = new Complex(2, 3);
const c2 = new Complex(-1, 4);

// Perform complex number operations
const c3 = Complex.add(c1, c2);
const c4 = Complex.subtract(c1, c2);
const c5 = Complex.multiply(c1, c2);
const c6 = Complex.divide(c1, c2);

// Print the results
console.log("Complex numbers:");
console.log("c1 =", c1.real, "+", c1.imag, "i");
console.log("c2 =", c2.real, "+", c2.imag, "i");
console.log("c3 =", c3.real, "+", c3.imag, "i");
console.log("c4 =", c4.real, "+", c4.imag, "i");
console.log("c5 =", c5.real, "+", c5.imag, "i");
console.log("c6 =", c6.real, "+", c6.imag, "i");

// Additional complexity and creativity can be added here...