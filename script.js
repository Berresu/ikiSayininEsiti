let sayilar=["0","1","2","3","4","5","6","7","8","9","10"]
let sonuc=document.getElementById("sonuc");
let bul=document.getElementById("btnEsit");
let sayi=10;
let random1=Math.floor(Math.random()*11);
let random2=Math.floor(Math.random()*11);
let toplam=random1+random2;

bul.addEventListener("click", ()=>{
    console.log(random1);
    console.log(random2);
    if(sayi==toplam){
        sonuc.innerHTML="İki Sayının Toplamı 10 Sayısına Eşit.";
    }
    else{
        sonuc.innerHTML="İki Sayının Toplamı "+toplam+" Sayısına Eşit."
    }
});
