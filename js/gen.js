var xhr = new XMLHttpRequest();
xhr.open("GET", "../php/database.php");
xhr.onload = function (){
    var j = this.response;
    console.log(j);
    j = JSON.parse(j);
    console.log(j);
    const blocks = document.getElementById("blocks-p");
    const g = document.getElementById("C").onclick = function cena(){
      j.sort(function(a, b){
        return a.cena - b.cena;
      });

      for(let i=0; i < j.length; i++){
        const block = document.createElement("div");
        block.setAttribute("class", "block-p");
        block.setAttribute("id", "block-p");
        blocks.appendChild(block);
        const ob = document.createElement("img");
        ob.src = "../img/" + j[i]["idzbozi"] + ".png"
        block.appendChild(ob);
        const specs = document.createElement("div");
        specs.setAttribute("class", "specs-p");
        specs.setAttribute("id", "specs-p");
        block.appendChild(specs);
        const price = document.createElement("p");
        price.setAttribute("id", "specs-p");
        price.innerHTML = j[i]["cena"] + " Kč";
        specs.appendChild(price);
        const name = document.createElement("p");
        name.setAttribute("id", "brand");
        name.innerHTML = j[i]["znacka"] + " - " + j[i]["nazev"];
        specs.appendChild(name);
        const stock = document.createElement("p");
        stock.setAttribute("id", "stock");
        stock.innerHTML = j[i]["pocet"] + " ks";
        specs.appendChild(stock);
        }
    };    
    
    const c = document.getElementById("A").onclick = function abeceda(){
      j.sort(function(a, b){
        if(a.nazev < b.nazev){
          return -1;
        }
        if(a.nazev > b.nazev){
          return 1;
        }
        return 0;
       });

      for(let i=0; i < j.length; i++){
        const block = document.createElement("div");
        block.setAttribute("class", "block-p");
        block.setAttribute("id", "block-p");
        blocks.appendChild(block);
        const ob = document.createElement("img");
        ob.src = "../img/" + j[i]["idzbozi"] + ".png"
        block.appendChild(ob);
        const specs = document.createElement("div");
        specs.setAttribute("class", "specs-p");
        specs.setAttribute("id", "specs-p");
        block.appendChild(specs);
        const price = document.createElement("p");
        price.setAttribute("id", "specs-p");
        price.innerHTML = j[i]["cena"] + " Kč";
        specs.appendChild(price);
        const name = document.createElement("p");
        name.setAttribute("id", "brand");
        name.innerHTML = j[i]["znacka"] + " - " + j[i]["nazev"];
        specs.appendChild(name);
        const stock = document.createElement("p");
        stock.setAttribute("id", "stock");
        stock.innerHTML = j[i]["pocet"] + " ks";
        specs.appendChild(stock);
        }
    };
    
    
};
xhr.send();
