var brojac=0;
var igrac1=0;
var igrac2=0;
var vrijednost=0;
var zavrsilo=0;
var snimljeno1=false;
var snimljeno2=false;
var pb=0;
var bv=0;
/*function PromijeniIme1()
{
var ime=document.getElementById("player1").value;
localStorage.setItem("pl1",ime);
document.getElementById("pl1").innerHTML=localStorage.getItem("pl1");
}
function snimljenoIme()
{
    document.getElementById("pl2").innerHTML=localStorage.getItem("pl2");
    document.getElementById("pl1").innerHTML=localStorage.getItem("pl1");
    if(document.getElementById("pl2").innerHTML.length==0)
    document.getElementById("pl2").innerHTML="Player 2";
    if(document.getElementById("pl1").innerHTML.length==0)
    document.getElementById("pl1").innerHTML="Player 1";
}
function PromijeniIme2()
{
var ime=document.getElementById("player2").value;
localStorage.setItem("pl2",ime);
document.getElementById("pl2").innerHTML=localStorage.getItem("pl2");
}*/
function uzmiVrijednost(polje)
{
console.log("Poziva se funkcija uzmiVrijednost");
    var uzeta=polje.id;
    staviZnak(uzeta);
}
function JelSlobodno(slobodno)
{
console.log("Poziva se funkcija JelSlobodno");
    if(slobodno==' ')
    return true;
    else
    return false;
}
function jelIsti(prvi,drugi,treci)
{
console.log("Poziva se funkcija jelIsti");
    if(prvi==drugi && prvi==treci)
    return true;
    return false;
}
function staviZnak(idPolja){
console.log("Poziva se funkcija staviZnak");
var izabrano=document.getElementById(idPolja);
if (!JelSlobodno(izabrano.innerHTML))
{
    alert("ovo mjesto je vec zauzeto");
    return;
}
if(brojac%2==0)
{
    izabrano.innerHTML='X';

}
else{
    izabrano.innerHTML='O';  
}
brojac++;

setTimeout(function(){
    pobjednickaKombinacija();
},20);
}
brojac=bv;
function ZaustaviVrijeme()
{
console.log("Poziva se funkcija ZaustaviVrijeme");
    var xPob=document.getElementById("pl1").innerHTML;
    var yPob=document.getElementById("pl2").innerHTML;
    if(pb==0)
    alert("Neriješeno!!!");
     else if(pb=='X')
    alert("igra je gotova. Pobjednik je "+xPob.substr(2,xPob.length));
    else if(pb='O')
    alert("igra je gotova. Pobjednik je "+yPob.substr(2,yPob.length));
    Rstrt();
    bv++;

}
function Rstrt()
{
console.log("Poziva se funkcija Rstrt");

    var nizel=document.getElementsByClassName("td");
    for(var i=0;i<9;i++)
    {
     nizel[i].innerHTML=' ';
    }
    pb=0;
   // if(bv%2!=0)
//brojac++;

}
function pobjednickaKombinacija()//pravila
{
console.log("Poziva se funkcija pobjednickaKombinacija");
    var niz=[];
    for(var i=0;i<9;i++)
    {
        niz.push(document.getElementById('p'+(i+1)).innerHTML);
    }
    if(jelIsti(niz[0],niz[1],niz[2]) && niz[0]!=' ')
    {
        vrijednost=niz[0];
    }
    else if(jelIsti(niz[3],niz[4],niz[5]) && niz[3]!=' ')
    {
        vrijednost=niz[3];
    }
    else if(jelIsti(niz[6],niz[7],niz[8]) && niz[6]!=' ')
    {
        vrijednost=niz[6];
    }
    else if(jelIsti(niz[0],niz[4],niz[8]) && niz[0]!=' ')
    {
        vrijednost=niz[0];
    }
    else if(jelIsti(niz[2],niz[4],niz[6]) && niz[2]!=' ')
    {
        vrijednost=niz[2];
    }
    else  if(jelIsti(niz[0],niz[3],niz[6]) && niz[0]!=' ')
    {
        vrijednost=niz[0];
    }
    else  if(jelIsti(niz[1],niz[4],niz[7]) && niz[1]!=' ')
    {
        vrijednost=niz[1];
    }
    else if(jelIsti(niz[2],niz[5],niz[8]) && niz[2]!=' ')
    {
        vrijednost=niz[2];
    }
    for(var i=0;i<niz.length;i++)
    {
     if(niz[i]!=' ')
     zavrsilo++;
    }
    if(zavrsilo==niz.length && vrijednost==0)
    {
        brojac=0;
brojac=bv;
        
       ZaustaviVrijeme();   
       Pocetni(); 
    }
    else{
        if(vrijednost=='X')
    {
        pb='X';
        igrac1++;
        brojac=0;
        console.log(brojac+" brojac i bv "+bv);

brojac=bv;

      ZaustaviVrijeme();
      Pocetni();

    }
    else if(vrijednost=='O')
    {
        pb='O';
        igrac2++;
        brojac=0;
        console.log(brojac+" brojac i bv "+bv);
brojac=bv;

        ZaustaviVrijeme();
        Pocetni();

    } 

    zavrsilo=0;
    vrijednost=0;
    document.getElementById("prvi").innerHTML=igrac1;
    document.getElementById("drugi").innerHTML=igrac2;
    }
}
function Zamijeni()
{
console.log("Poziva se funkcija Zamijeni");
    var tmp1,tmp2;
    tmp1=document.getElementById("pl1").innerHTML;
    document.getElementById("pl1").innerHTML=document.getElementById("pl2").innerHTML;
    document.getElementById("pl2").innerHTML=tmp1;
    tmp2=document.getElementById("prvi").innerHTML;
    document.getElementById("prvi").innerHTML=document.getElementById("drugi").innerHTML;
    document.getElementById("drugi").innerHTML=tmp2;
}
function RestartujIgru()
{
console.log("Poziva se funkcija RestartujIgru");
    /*var tmp_parnepar=document.getElementById("parnepar").value;
    tmp_parnepar++
    document.getElementById("parnepar").value = tmp_parnepar;*/
    Rstrt();
    //ZaustaviVrijeme();
    zavrsilo=0;
    vrijednost=0;
    brojac=bv+1;
    //brojac=0;
    Pocetni();
    
}
function Pocetni()
{
console.log("Poziva se funkcija Pocetni");
    if(bv%2==0)
    {
        document.getElementById("potez").innerHTML="Na potezu je "+izvadi_ime("pl2");
        document.getElementById("pl1").style.backgroundColor="white";
        document.getElementById("pl2").style.backgroundColor="green";
    }
    else{
        document.getElementById("potez").innerHTML="Na potezu je "+izvadi_ime("pl1");
        document.getElementById("pl1").style.backgroundColor="green";
        document.getElementById("pl2").style.backgroundColor="white";
    }
}
function RestartujSkor()
{
console.log("Poziva se funkcija RestartujSkor");
    igrac1=0;
    igrac2=0;
    document.getElementById("prvi").innerHTML=0;
    document.getElementById("drugi").innerHTML=0;
}
var spasi;
function Izleti(e)
{
console.log("Poziva se funkcija Izleti");
    var div=document.getElementById("podaci");
    var tmp_var = e.innerHTML;
    document.getElementById("box").value=tmp_var.substr(2,tmp_var.length-1);
    div.style.display="block";
    spasi=e.id;
    document.getElementById("box").focus();
}
function zatvori()
{  
console.log("Poziva se funkcija zatvori");

    var div=document.getElementById("podaci");
    var ime=document.getElementById("box").value;
    if(ime.length==0)
    ime="Prazno";
    if(spasi=="pl1")
    {
        localStorage.setItem("pname","X-"+ime);
        var spremi=localStorage.getItem("pname");

    }
    else if(spasi=="pl2")
    {
    localStorage.setItem("pname2","O-"+ime);
    var spremi=localStorage.getItem("pname2");
    }
    document.getElementById(spasi).innerHTML=spremi;
    div.style.display="none";
}
function snimljenoIme()
{
console.log("Poziva se funkcija snimljenoIme");

    document.getElementById("pl2").innerHTML=localStorage.getItem("pname2");
    document.getElementById("pl1").innerHTML=localStorage.getItem("pname");
    if(document.getElementById("pl2").innerHTML.length==0)
    document.getElementById("pl2").innerHTML="O-Player 2";
    if(document.getElementById("pl1").innerHTML.length==0)
    document.getElementById("pl1").innerHTML="X-Player 1";
    document.getElementById("potez").innerHTML="Na potezu je "+izvadi_ime("pl1");
    document.getElementById("pl1").style.backgroundColor="green";
    document.getElementById("pl2").style.backgroundColor="white";
    bv++;
}
function Ocisti()
{
console.log("Poziva se funkcija Ocisti");
    localStorage.clear();
}
function Vrati()
{
console.log("Poziva se funkcija Vrati");
    document.getElementById("pl1").innerHTML="X-Player 1";
    document.getElementById("pl2").innerHTML="O-Player 2";
}
function Potez()
{
console.log("Poziva se funkcija Potez");
    if(brojac%2!=0)
    {
        var pl=document.getElementById("pl2");
        document.getElementById("potez").innerHTML="Na potezu je "+izvadi_ime("pl2");
        pl.style.backgroundColor="green";
        document.getElementById("pl1").style.backgroundColor="white";
    }
    else
    {
        var pl=document.getElementById("pl1");
        document.getElementById("potez").innerHTML="Na potezu je "+izvadi_ime("pl1");
        pl.style.backgroundColor="green";
        document.getElementById("pl2").style.backgroundColor="white";
    }
}

function izvadi_ime(polje,start=2)
{
console.log("Poziva se funkcija izvadi_ime");
    var tmp_ime = document.getElementById(polje).innerHTML;
    var ime_bez_predznaka = tmp_ime.substr(start,tmp_ime.length-1);
    return ime_bez_predznaka
}
function Cancel()
{
console.log("Poziva se funkcija Cancel");
    var div=document.getElementById("podaci");
    div.style.display="none";
}
function Pomoc()
{
console.log("Poziva se funkcija Pomoc");
   var help=document.getElementById("help");
   help.style.display="block";
}
function PotvrdiPomoc()
{
console.log("Poziva se funkcija PotvrdiPomoc");
    document.getElementById("help").style.display="none";
}
function DodajNaIme()
{
console.log("Poziva se funkcija DodajNaIme");
    var dodatakX="X-";
    var dodatakY="Y-";
    var ig1=document.getElementById("pl1").innerHTML;
    var ig2=document.getElementById("pl2").innerHTML;
    ig1=dodatakX+igrac1;
    ig2=dodatakY+igrac2;
}
