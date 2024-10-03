function kelompokkanBilangan(bilangan) {
    if (bilangan % 4 === 0) {
      return "Genap dan habis dibagi 4";
    } else if (bilangan % 2 === 0) {
      return "Genap tetapi tidak habis dibagi 4";
    } else {
      return "Ganjil";
    }
  }
  
  exports = { kelompokkanBilangan };

  