let img1 = document.querySelector("#img-1");
let img2 = document.querySelector("#img-2");
let dec = document.querySelector("#declared");
let Bt = document.querySelector("#roll");

function result(a,b){
    if(a>b){
        return( dec.innerHTML="<p><h1 style='color:green;'>A</h2> won</p>"
        )
    }
    else if(b>a){
        return dec.innerHTML="<p><h1 style='color:Red;'>B</h1> won</p>"
    }
    else if(a=b){
        return dec.innerHTML="<p>it's a draw</p>"
    }
}


Bt.addEventListener('click',function work(){

    let a = Math.floor(Math.random()*6)+1;
    let b = Math.floor(Math.random()*6)+1;
    img1.src= `images/dice ${a}.png`;
    img2.src= `images/dice ${b}.png`;
    // Bt.innerHTML='Rolled';
    Bt.innerHTML='Roll again';
    
    result(a,b);
})

// function result(a,b){
//     // return(
//     if (a>b){
//         return dec.innerHTML=<p>a won</p>
//     }
//     else if (b>a){
//         return dec.innerHTML=<p>b won</p>
//     }
//     else if (a=b){
//         return dec.innerHTML=<p>it's a draw</p>
//     }
//     // )
// }
// Bt.innerHTML='Roll';