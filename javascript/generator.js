let pseudo = {
    words: {
        pseudo_adjectif: [
            "Mystérieux",
            "Admirable",
            "Gentil",
            "Sot",
            "Maléfique",
            "Hilarant"
        ],
        pseudo_nom: [
            "Panda",
            "Dauphin",
            "Pavet",
            "Saucisson",
            "Carton",
            "Serpent",
            "Piano"
        ]
    },
    afficherSurPage: function(chaine) {
        let resultat = document.getElementById("pseudo");
        resultat.innerHTML = "<h2 class=\"fw-light\"> Voici votre pseudo : " + chaine + " </h2>";
        resultat.value = "";
    },
    generate: function() {
        let pseudoGenerated = "";
        pseudoGenerated += this.words.pseudo_nom[Math.floor((Math.random() * this.words.pseudo_nom
            .length))];
        pseudoGenerated += this.words.pseudo_adjectif[Math.floor((Math.random() *
            this.words.pseudo_adjectif.length))];
        console.log(pseudoGenerated);
        pseudo.afficherSurPage(pseudoGenerated);
    },
    init: function() {
        let _try = document.getElementById("generate-pseudo").addEventListener("click", function(e) {
            pseudo.generate();
        });
    }
}

pseudo.init();