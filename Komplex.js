var lang = true;
// If it is Hungarian, lang is True

function Translation() {
    if (lang) {
        document.getElementById("h1").innerHTML = "Complex numbers - query";
        document.getElementById("h2-1").innerHTML = "With what letter do we represent complex numbers?";
        document.getElementById("h2-2").innerHTML = "Why do we need complex numbers?";
        document.getElementById("h2-3").innerHTML = "Which matematican did not compete in discovering the quadratic equations solving formula?";
        document.getElementById("h2-4").innerHTML = "The term we use to express complex numbers";
        document.getElementById("h2-5").innerHTML = "How do we call the plane that we represent the complex numbers on?";
        document.getElementById("h2-6").innerHTML = "The sum of the following complex numbers z<sub>1</sub> = a<sub>1</sub> + b<sub>1</sub>i and z<sub>2</sub> = a <sub> 2</sub> + b <sub> 2</sub> i is: ";
        document.getElementById("h2-7").innerHTML = "What do we NOT use the complex numbers for?";
        document.getElementById("li1").innerHTML = "So that we can always subtract.";
        document.getElementById("li2").innerHTML = "So that they can give the result of the division.";
        document.getElementById("li3").innerHTML = "So that we can square root the negative numbers.";
        document.getElementById("li4").innerHTML = "So that we can use the binary system.";
        document.getElementById("li5").innerHTML = "Gauss-like number plane";
        document.getElementById("li6").innerHTML = "Neumann plane";
        document.getElementById("li7").innerHTML = "Descartes-like plane";
        document.getElementById("li8").innerHTML = "Cardano-like number plane";
        document.getElementById("li9").innerHTML = "Combinatorics";
        document.getElementById("li10").innerHTML = "Solving equations";
        document.getElementById("li11").innerHTML = "Understanding geometry shapes and real functions";
        document.getElementById("li12").innerHTML = "Quantum mechanics";
        document.getElementsByClassName("qu0").innerText = "Answers:";
        document.getElementsByClassName("qu1").innerHTML = "1. Answer";
        document.getElementsByClassName("qu2").innerHTML = "2. Answer";
        document.getElementsByClassName("qu3").innerHTML = "3. Answer";
        document.getElementsByClassName("qu4").innerHTML = "4. Answer";
        lang = false;
    } else {
        document.getElementById("h1").innerHTML = "Komplex számok - kérdések";
        document.getElementById("h2-1").innerHTML = "Milyen betűvel jelöljük a komplex számok halmazát?";
        document.getElementById("h2-2").innerHTML = "Miért volt szükség a komplex számokra?";
        document.getElementById("h2-3").innerHTML = "Melyik matematikus NEM versengett a harmadfokú egyenlet megoldóképletének felfedezéséért?";
        document.getElementById("h2-4").innerHTML = "A komplex számok jelölésére használt kifejezés";
        document.getElementById("h2-5").innerHTML = "A komplex számok ábrázolására használt síkot hogyan szokás nevezni?";
        document.getElementById("h2-6").innerHTML = "A z<sub>1</sub> = a<sub>1</sub> + b<sub>1</sub>i és z<sub>2</sub> = a<sub>2</sub> + b<sub>2</sub>i komplex számok összege";
        document.getElementById("h2-7").innerHTML = "Mire NEM használjuk a komplex számokat?";
        document.getElementById("li1").innerHTML = "Mindig elvégezhető legyen a kivonás.";
        document.getElementById("li2").innerHTML = "Azért, hogy az osztások eredményét meg tudják adni.";
        document.getElementById("li3").innerHTML = "A negatív számokból is lehessen gyököt vonni.";
        document.getElementById("li4").innerHTML = "A kettes számrendszer használatához.";
        document.getElementById("li5").innerHTML = "Gauss-féle számsík";
        document.getElementById("li6").innerHTML = "Neumann sík";
        document.getElementById("li7").innerHTML = "Descartes-féle sík";
        document.getElementById("li8").innerHTML = "Cardano-féle számsík";
        document.getElementById("li9").innerHTML = "Kombinatorika";
        document.getElementById("li10").innerHTML = "Egyenletek megoldása";
        document.getElementById("li11").innerHTML = "Geometriai alakzatok, valós függvények megértése";
        document.getElementById("li12").innerHTML = "Kvantummechanika";
        document.getElementsByClassName("qu0").innerHTML = "Válaszok:";
        document.getElementsByClassName("qu1").innerHTML = "1. Válasz";
        document.getElementsByClassName("qu2").innerHTML = "2. Válasz";
        document.getElementsByClassName("qu3").innerHTML = "3. Válasz";
        document.getElementsByClassName("qu4").innerHTML = "4. Válasz";
        lang = true;
    }
}
