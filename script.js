//n'oubliez pas de chnger l'URL entre les parenthèses
fetch("https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/patisserie.json")
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load JSON data');
        }
        return response.json();
    })
    .then(data => {
       //ici vous ecrivez votre code
       console.log(data);
       let titre = document.getElementById("header");
       let h1 = document.createElement("h1"); 
       let h2 = document.createElement("h2"); 
       let bouton = document.createElement("button"); 


       h1.textContent = data.nomCommercial ;
        h2.textContent = data.phraseAccroche ; 
        bouton.textContent = data.texteAppelAction ; 

        titre.appendChild(h1);
         titre.appendChild(h2);
          titre.appendChild(bouton); 


let produits = document.getElementById("Pro");
data.produits.forEach(element => {
    let h3= document.createElement("h3");
    let p = document.createElement("p");
    let img = document.createElement("img");
    let div = document.createElement("div");
    h3.textContent=element.nom;
    console.log(element.nom)
    p.textContent=element.description;
    produits.appendChild(div);
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(img);
    img.src=element["image-url"];
    
});
let services = document.getElementById("Ser");
data.services.forEach(element => {
    let h3= document.createElement("h3");
    let p = document.createElement("p");
    let div = document.createElement("div");
    h3.textContent=element.nom;
    console.log(element.nom)
    p.textContent=element.description;
    produits.appendChild(div);
    div.appendChild(h3);
    div.appendChild(p);
    
});

let temoignages = document.getElementById("Tém");
data.temoignages.forEach(element => {
    let h3= document.createElement("h3");
    let prenom = document.createElement("p");
    let exp = document.createElement("p");
    let com = document.createElement("p");
    let note = document.createElement("p");
    let div = document.createElement("div");
    h3.textContent=element.nom;
    console.log(element.nom)
    prenom.textContent=element.prenom;
    exp.textContent=element.typeExperience;
    com.textContent=element.commentaire;
    note.textContent=element.note;

    produits.appendChild(div);
    div.appendChild(h3);
    div.appendChild(prenom);
    div.appendChild(exp);
    div.appendChild(com);
    div.appendChild(note);

});






            
            



          

       
    })
    .catch(error => console.error('Error:', error));


    