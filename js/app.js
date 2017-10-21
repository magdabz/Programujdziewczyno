//Liczby i stringi
console.log("działa!");
console.log(2+2);
var myNumber = 2.2;
var myNumber2 = 8;

var myText1 = "lalalala";
var xx = "34";

console.log(myText1);
console.log(myNumber + 2);
console.log(myNumber + myNumber2);

console.log(xx+2);
console.log(xx+"lalala");

//Wartości logiczne
var prawda = true;
var falsz = false;

console.log(prawda);

//Tablice
var tablica = [100,2,3]; //ile jest tu elementów? 3
// Na jakiej pozycji jest liczba 2? Na pierwszej, ponieważ liczymy pozycję od 0.
console.log(tablica);
console.log(tablica[1]); //wpisuję liczbę na danej pozycji
console.log(tablica[0]);

//Pobrać długość tablicy
tablica.length; //Wartość jest pobrana, ale nie wyświetlona, dlatego się nie wyświetla
console.log(tablica.length);

var tablica2 = ["jabłko", "gruszka"];
console.log(tablica2);
console.log(tablica[1]);

//tablica z mieszanymi danymi
var tablica3 = ["jabłko", "gruszka", 3, 5, true];
console.log(tablica3);

//tablica z wbudowaną inną tablicą
var tablica4 = ["jabłko", "gruszka", 3, 5, true, [7]];
console.log(tablica4);

//Funkcje (wypisywanie to słowo kluczowe; dalej musi być nawias okrągły i nawias klamrowy)
function wypisywanie(owoc) { //var owoc = "marchewka" albo 2, albo cokolwiek co podstawiamy <--JS sama ją deklaruje, ale jest ona widoczna tylko iw ramach funkcji.
    console.log("miksowanie", owoc);
    var sok = "miksowanie", owoc;
    return sok; //zwracanie danych
}

var otrzymanySok = wypisywanie("marchewka");
wypisywanie("marchewka"); //uruchamianie fukcji albo wywoływanie
wypisywanie("banan");
console.log(wypisywanie(126));

//"miksowanie" + owoc ===== sok ==== wypisywanie ("marchewka") ===== otrzymanySok


//Instrukcje warunkowe
if(true){
  console.log("Weź parasol")
} else {
  console.log("weź okulary przeciwsłoneczne");
}

if(1>2){
  console.log("Weź parasol")
} else {
  console.log("weź okulary przeciwsłoneczne");
}

if(128==128){  //podwójne lub potrójne =, żeby porównać liczy
  console.log("Weź parasol")
} else {
  console.log("weź okulary przeciwsłoneczne");
}



function isRain() {
  console.log("Sprawdzam pogodę");
  //algorytm
  return true;
}

var czyPada = true;
if(czyPada){  //podwójne lub potrójne =, żeby porównać liczy
  console.log("Weź parasol")
} else {
  console.log("weź okulary przeciwsłoneczne");
}

//Pętle
for(var i = 91; i < 100; i=i+1) { //można również wpisać i++ co oznacza tyle co i+1
  console.log("Cześć ", i);
    isRain();
}

//Teraz moje ćwiczenia (Ctrl+a, ctrl+/ - żeby wszystko zakomentować)

var mojeImie = "Magda";
console.log(mojeImie);

var tablica_moja = ["Zosia", "Magda1", "Magda2", "Natalia"];
  console.log(tablica_moja[1]);

var liczba1 = 14;
var liczba2 = 7.5;
if(liczba1 > liczba2){
  console.log("hurra!")
}

for(var i = 0; i < 4; i++)
  console.log(tablica_moja[i]);


//DOM Api
var ppp = document.querySelector(".jumbotron"); //jego jeszcze nie ma
ppp.style.border = "3px solid red"

var divs = document.querySelectorAll ("div")
console.log(divs.length);
divs[0].style.display = "none"
