function encryptThis(mensagem) {
    const words = mensagem.split(' ');
    const encryptedWords = [];
  
    for (const word of words) {
      if (word.trim().length >= 2) {
        const primeiroCaractere = word.charCodeAt(0).toString();
        const segundoCaractere = word[1];
        const ultimoCaractere = word[word.length - 1];
        const palavraTroca = ultimoCaractere + word.slice(2, -1) + segundoCaractere;
        encryptedWords.push(primeiroCaractere + palavraTroca);

      } else if (word.trim().length === 1) {
        encryptedWords.push(word.charCodeAt(0).toString());

      } else {
        encryptedWords.push('');
        
      }

    }
  
    return encryptedWords.join(' ');
  }

    // Teste de caracter 1: Palavra com 4 letras !
    function PalavraQuatroLetras() {
        const resultado = encryptThis("good");
        if (resultado === '103doo') {
        console.log("Teste caracter 1 executado com sucesso.");
        } else {
        console.log("Teste caracter 1 falhou.");
        }
    }

    // Teste de caracter 2: Palavra com 5 letras !
    function PalavraCincoLetras() {
        const resultado = encryptThis("Hello");
        if (resultado === '72olle') {
        console.log("Teste caracter 2 executado com sucesso.");
        } else {
        console.log("Teste caracter 2 falhou.");
        }
    }
    
    // Teste de frase: Frase com 2 palavras !
    function DuasPalavras() {
        const resultado = encryptThis("hello world");
        if (resultado === '104olle 119drlo') {
        console.log("Teste de frase executado com sucesso.");
        } else {
        console.log("Teste de frase falhou.");
        }
    }
    
    // Teste sem nem um caracter !
    function MensagemVazia() {
        const resultado = encryptThis("");
        if (resultado === '') {
        console.log("Teste sem caracter executado com sucesso.");
        } else {
        console.log("Teste sem caracter falhou.");
        }
    }

    // Teste de palavra com apenas um caracter !
    function PalavraUmCaractere() {
        const resultado = encryptThis("A");
        if (resultado === '65') {
        console.log("Teste de um caracter executado com sucesso.");
        } else {
        console.log("Teste de um caracter falhou.");
        }
    }

    PalavraQuatroLetras()
    PalavraCincoLetras()
    DuasPalavras()
    MensagemVazia()
    PalavraUmCaractere()
    
  