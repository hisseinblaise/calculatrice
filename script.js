 function calculerMarge() {
      const semences = Number(document.getElementById("semences").value) || 0;
      const engrais = Number(document.getElementById("engrais").value) || 0;
      const main = Number(document.getElementById("main").value) || 0;
      const autres = Number(document.getElementById("autres").value) || 0;
      const vente = Number(document.getElementById("vente").value) || 0;

      const coutTotal = semences + engrais + main + autres;
      const marge = vente - coutTotal;

      let message = `Votre marge est de ${marge} FCFA.`;
      if (marge < 0) {
        message += " Attention, vous êtes en perte.";
      }
      document.getElementById("resultat").textContent = message;
    }