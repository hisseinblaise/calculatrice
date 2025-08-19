function calculerMarge() {
  const semences = Number(document.getElementById("semences").value) || 0;
  const engrais = Number(document.getElementById("engrais").value) || 0;
  const main = Number(document.getElementById("main").value) || 0;
  const autres = Number(document.getElementById("autres").value) || 0;
  const vente = Number(document.getElementById("vente").value) || 0;

  const depenseTotal = semences + engrais + main + autres;
  const marge = vente - depenseTotal;

  let message = `Votre marge est de: ${marge} FCFA.`;
  if (marge < 0) {
    message += " Attention, vous êtes en perte.";
    document.getElementById("resultat").style.color = "red";
    document.getElementById("resultat").style.fontSize = "30px";
  } else if (marge ===0) {
    message += "Vous êtes en équilibre.";
    document.getElementById("resultat").style.color = "green";
    document.getElementById("resultat").style.fontSize = "25px";
  } 
    document.getElementById("resultat").textContent = message;
    // document.getElementById("resultat").style.color = "green";
    // document.getElementById("resultat").style.fontSize = "25px";
}