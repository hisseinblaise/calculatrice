#  Calculatrice de Marge Agricole

Ce projet est une mini application web qui permet de calculer la marge bénéficiaire ou perte d’une exploitation agricole.
L’utilisateur saisit ses dépenses (semences, engrais, main-d'œuvre, autres frais) et le montant de la vente, puis l’application affiche automatiquement la marge nette.

---

##  Fonctionnalités

 Saisie des coûts de production (semences, engrais, main-d'œuvre, autres).

 Saisie du montant total des ventes.

 Calcul automatique de :

Total des dépenses

Marge (bénéfice ou perte)

Affichage d’un message dynamique :

🟢 Vert si bénéfice.

🟢 Vert si pas de pertes ni bénéfices.

🔴 Rouge si perte.


 Interface simple et responsive utilisable sur mobile ou ordinateur.

<img width="853" height="771" alt="image" src="https://github.com/user-attachments/assets/7cef6c10-4a0a-4683-8855-b246a7a19868" />


---

##   Structure du projet

calculatrice-marge/

│── index.html      # Interface utilisateur

│── style.css       # Styles (optionnel si ajout de CSS)

│── script.js       # Logique JavaScript

│── README.md       # Documentation

<img width="853" height="771" alt="image" src="https://github.com/user-attachments/assets/de99393d-a35f-4907-b67c-f92b30c5125c" />



---

##  Exemple d’utilisation

### 1️ Entrée des données

Semences : 10 000 FCFA

Engrais : 15 000 FCFA

Main d’œuvre : 20 000 FCFA

Autres : 5 000 FCFA

Vente : 60 000 FCFA


<img width="853" height="771" alt="image" src="https://github.com/user-attachments/assets/e500d383-444b-46fe-9057-10b2cd829021" />


---

### 2️ Résultat affiché

Votre marge est de 10 000 FCFA.  Félicitations, vous êtes en bénéfice.

---

##  Technologies utilisées

HTML5 → Structure de la page

CSS3 → Mise en forme (couleurs, style)

JavaScript  → Calcul et affichage dynamique

---

# Reponses aux questions

. Pourquoi est-il important d’utiliser une fonction pour le calcul de la marge bénéficiaire dans ce mini-calculateur, plutôt que de mettre directement le calcul dans le code principal ?

- On utilise la fonction pour le calcul de la marge bénéficiaire pour plusieurs raisons:

1. Lisibilité : Le code est plus clair. Le calcul de la marge est isolé dans une fonction, ce qui rend le programme principal plus compréhensible.
   
2. Réutilisabilité : On peut appeler la fonction plusieurs fois à différents endroits sans répéter la formule.

3. Évolutivité : Si la formule change (ex : ajout de taxes, de remises…), il suffit de modifier la fonction, pas tout le code.
   
4. Débogage facile : S’il y a une erreur dans le calcul, on n’a qu’un seul endroit à vérifier.
   
5. Bonne pratique : Structurer le code en fonctions est une base de la programmation modulaire et propre.

. Quelles conditions pourraient être testées pour afficher un message différent selon que la marge bénéficiaire soit positive, nulle ou négative ?
   
- Les conditions posssibles pour tester la marge sont :

1. marge supperieure à 0 (marge > 0) bénéfice,
   
2. marge égale à 0  (marge = 0) ni perte ni bénéfice et
   
3. marge inférieur à 0  (marge < 0) perte.

---

# Auteur

Projet réalisé par Hissein Blaise

📧 Contact : hisseinblaise7@gmail.com

