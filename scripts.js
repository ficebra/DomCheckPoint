function incrementArt(i) {
    
    var dg;
    var sousTotalArt;
    var totalOrder;
    if(i == 1){
        dg = document.getElementById("nbrArt"+i).textContent;
        dg++;
        document.getElementById("nbrArt"+i).textContent = dg;

        sousTotalArt = parseInt(document.getElementById("priceArt"+i).textContent) + 25000;
        document.getElementById("priceArt"+i).textContent = sousTotalArt;
        
        totalOrder = parseInt(document.getElementById("total").textContent);
        document.getElementById("total").textContent = totalOrder + 25000;
        // alert(totalOrder);
    } 
    if(i == 2){
        dg = document.getElementById("nbrArt"+i).textContent;
        dg++;
        document.getElementById("nbrArt"+i).textContent = dg;
        
        sousTotalArt = parseInt(document.getElementById("priceArt"+i).textContent) + 40000;
        document.getElementById("priceArt"+i).textContent = sousTotalArt;
        
        totalOrder = parseInt(document.getElementById("total").textContent);
        document.getElementById("total").textContent = totalOrder + 40000;
    } 
    if(i == 3){
        dg = document.getElementById("nbrArt"+i).textContent;
        dg++;
        document.getElementById("nbrArt"+i).textContent = dg;
        
        sousTotalArt = parseInt(document.getElementById("priceArt"+i).textContent) + 18500;
        document.getElementById("priceArt"+i).textContent = sousTotalArt;
        
        totalOrder = parseInt(document.getElementById("total").textContent);
        document.getElementById("total").textContent = totalOrder + 18500;
    } 

}

function decrementArt(i) {
    
    var dg;
    var sousTotalArt;
    var totalOrder;
    if(i == 1){
        dg = document.getElementById("nbrArt"+i).textContent;
        if(dg > 1){
            dg--;
            document.getElementById("nbrArt"+i).textContent = dg;
            
            sousTotalArt = parseInt(document.getElementById("priceArt"+i).textContent) - 25000;
            document.getElementById("priceArt"+i).textContent = sousTotalArt;
            
            totalOrder = parseInt(document.getElementById("total").textContent);
            document.getElementById("total").textContent = totalOrder - 25000;
        }
    }
    if(i == 2){
        dg = document.getElementById("nbrArt"+i).textContent;
        if(dg > 1){
            dg--;
            document.getElementById("nbrArt"+i).textContent = dg;
            
            sousTotalArt = parseInt(document.getElementById("priceArt"+i).textContent) - 40000;
            document.getElementById("priceArt"+i).textContent = sousTotalArt;
            
            totalOrder = parseInt(document.getElementById("total").textContent);
            document.getElementById("total").textContent = totalOrder - 40000;
        }
    }
    if(i == 3){
        dg = document.getElementById("nbrArt"+i).textContent;
        if(dg > 1){
            dg--;
            document.getElementById("nbrArt"+i).textContent = dg;
            
            sousTotalArt = parseInt(document.getElementById("priceArt"+i).textContent) - 18500;
            document.getElementById("priceArt"+i).textContent = sousTotalArt;
            
            totalOrder = parseInt(document.getElementById("total").textContent);
            document.getElementById("total").textContent = totalOrder - 18500;
        }
    }

}

function likeArt(i) {
    
    var dg;
    if(i == 1){
        dg = document.getElementById("likeArt"+i);
        dg.querySelector("svg").setAttribute("class", "fill-sky-900");
        dg.querySelector("svg").removeAttribute("onclick");
        dg.querySelector("svg").setAttribute("onclick", "unLikeArt(1)");
    }

    if(i == 2){
        dg = document.getElementById("likeArt"+i);
        dg.querySelector("svg").setAttribute("class", "fill-sky-900");
        dg.querySelector("svg").removeAttribute("onclick");
        dg.querySelector("svg").setAttribute("onclick", "unLikeArt(2)");
    }
    
    if(i == 3){
        dg = document.getElementById("likeArt"+i);
        dg.querySelector("svg").setAttribute("class", "fill-sky-900");
        dg.querySelector("svg").removeAttribute("onclick");
        dg.querySelector("svg").setAttribute("onclick", "unLikeArt(3)");
    }
}

function unLikeArt(i) {

    var dg;
    if(i == 1){
        dg = document.getElementById("likeArt"+i);
        dg.querySelector("svg").removeAttribute("class");
        dg.querySelector("svg").removeAttribute("onclick");
        dg.querySelector("svg").setAttribute("onclick", "likeArt(1)");
    }

    if(i == 2){
        dg = document.getElementById("likeArt"+i);
        dg.querySelector("svg").removeAttribute("class");
        dg.querySelector("svg").removeAttribute("onclick");
        dg.querySelector("svg").setAttribute("onclick", "likeArt(2)");
    }

    if(i == 3){
        dg = document.getElementById("likeArt"+i);
        dg.querySelector("svg").removeAttribute("class");
        dg.querySelector("svg").removeAttribute("onclick");
        dg.querySelector("svg").setAttribute("onclick", "likeArt(3)");
    }
}

function removeArt(i){

    var dg;
    var totalOrder;
    var confirmation;

    if(i == 1){

        confirmation = confirm("Voulez-vous vraiment supprimer l'article ?");

        if(confirmation){

            dg = document.getElementById("detailArt"+i);
            dg.remove();
            totalOrder = parseInt(document.getElementById("total").textContent);
            document.getElementById("total").textContent = totalOrder - 25000;
        }
    }
    if(i == 2){

        confirmation = confirm("Voulez-vous vraiment supprimer l'article ?");

        if(confirmation){

            dg = document.getElementById("detailArt"+i);
            dg.remove();
            totalOrder = parseInt(document.getElementById("total").textContent);
            document.getElementById("total").textContent = totalOrder - 40000;
        }
    }
    if(i == 3){

        confirmation = confirm("Voulez-vous vraiment supprimer l'article ?");

        if(confirmation){

            dg = document.getElementById("detailArt"+i);
            dg.remove();
            totalOrder = parseInt(document.getElementById("total").textContent);
            document.getElementById("total").textContent = totalOrder - 18500;
        }
    }
}