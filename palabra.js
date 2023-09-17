function convertirAL33t(frase) {
    const letrasNumeros = {
      'A': '4',
      'E': '3',
      'G': '6',
      'I': '1',
      'L': '7',
      'O': '0',
      'S': '5',
      'T': '7',
    };
  
    let resultado = '';
  
    for (let i = 0; i < frase.length; i++) {
      const letra = frase[i].toUpperCase(); // Convierte la letra a mayúscula para ser caso insensible
  
      if (letrasNumeros.hasOwnProperty(letra)) {
        resultado += letrasNumeros[letra];
      } else {
        resultado += letra; // Si no se encuentra en el mapeo, se mantiene la letra original
      }
    }
  
    return resultado;
  }
  
  // Ejemplo de uso
  const frase = "te amo";
  const resultado = convertirAL33t(frase);
  
  console.log("La frase convertida es:");
  console.log(resultado);
  