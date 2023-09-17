function fraseACodigoMorse(frase) {
    const morseMap = {
      'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
      'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
      'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
      '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
      '8': '---..', '9': '----.',
      ' ': '/',
      '/': ' '
    };
  
    const fraseMayusculas = frase.toUpperCase();
    let codigoMorse = '';
  
    for (let i = 0; i < fraseMayusculas.length; i++) {
      const caracter = fraseMayusculas[i];
      if (morseMap.hasOwnProperty(caracter)) {
        codigoMorse += morseMap[caracter] + '/'; // Agrega "//" entre palabras
      }
    }
  
    return codigoMorse;
  }
  
  // Ejemplo de uso
  const frase = "Hola Mundo";
  const codigoMorse = fraseACodigoMorse(frase);

  console.log("Código Morse:", codigoMorse);
  