var lang = true;
// If it is Hungarian, lang is True

// Válaszok: 1-D, 2-C, 3-A, 4-B, 5-A, 6-C, 7-A

function K1() {
    var valasz = document.getElementById("K1");

    if (valasz.value == "4") {
        document.getElementById("K1B").classList.remove("btn-secondary");
        document.getElementById("K1B").classList.remove("btn-danger");
        document.getElementById("K1B").classList.add("btn-success")
    } else {
        document.getElementById("K1B").classList.remove("btn-secondary");
        document.getElementById("K1B").classList.remove("btn-success");
        document.getElementById("K1B").classList.add("btn-danger")
    }
}

function K2() {
    var valasz = document.getElementById("K2");

    if (valasz.value == "3") {
        document.getElementById("K2B").classList.remove("btn-secondary");
        document.getElementById("K2B").classList.remove("btn-danger");
        document.getElementById("K2B").classList.add("btn-success")
    } else {
        document.getElementById("K2B").classList.remove("btn-secondary");
        document.getElementById("K2B").classList.remove("btn-success");
        document.getElementById("K2B").classList.add("btn-danger")
    }
}

function K3() {
    var valasz = document.getElementById("K3");

    if (valasz.value == "1") {
        document.getElementById("K3B").classList.remove("btn-secondary");
        document.getElementById("K3B").classList.remove("btn-danger");
        document.getElementById("K3B").classList.add("btn-success")
    } else {
        document.getElementById("K3B").classList.remove("btn-secondary");
        document.getElementById("K3B").classList.remove("btn-success");
        document.getElementById("K3B").classList.add("btn-danger")
    }
}

function K4() {
    var valasz = document.getElementById("K4");

    if (valasz.value == "2") {
        document.getElementById("K4B").classList.remove("btn-secondary");
        document.getElementById("K4B").classList.remove("btn-danger");
        document.getElementById("K4B").classList.add("btn-success")
    } else {
        document.getElementById("K4B").classList.remove("btn-secondary");
        document.getElementById("K4B").classList.remove("btn-success");
        document.getElementById("K4B").classList.add("btn-danger")
    }
}

function K5() {
    var valasz = document.getElementById("K5");

    if (valasz.value == "1") {
        document.getElementById("K5B").classList.remove("btn-secondary");
        document.getElementById("K5B").classList.remove("btn-danger");
        document.getElementById("K5B").classList.add("btn-success")
    } else {
        document.getElementById("K5B").classList.remove("btn-secondary");
        document.getElementById("K5B").classList.remove("btn-success");
        document.getElementById("K5B").classList.add("btn-danger")
    }
}

function K6() {
    var valasz = document.getElementById("K6");

    if (valasz.value == "3") {
        document.getElementById("K6B").classList.remove("btn-secondary");
        document.getElementById("K6B").classList.remove("btn-danger");
        document.getElementById("K6B").classList.add("btn-success")
    } else {
        document.getElementById("K6B").classList.remove("btn-secondary");
        document.getElementById("K6B").classList.remove("btn-success");
        document.getElementById("K6B").classList.add("btn-danger")
    }
}

function K7() {
    var valasz = document.getElementById("K7");

    if (valasz.value == "1") {
        document.getElementById("K7B").classList.remove("btn-secondary");
        document.getElementById("K7B").classList.remove("btn-danger");
        document.getElementById("K7B").classList.add("btn-success")
    } else {
        document.getElementById("K7B").classList.remove("btn-secondary");
        document.getElementById("K7B").classList.remove("btn-success");
        document.getElementById("K7B").classList.add("btn-danger")
    }
}

function Translation() {
    if (lang) {
        document.getElementById("sources").innerHTML = "Sources";
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

        var qu0 = document.getElementsByClassName("qu0");
        for (var i = 0; i < qu0.length; i++) {
        qu0[i].innerHTML = "Check";
        }

        var qu1 = document.getElementsByClassName("qu1");
        for (var i = 0; i < qu1.length; i++) {
        qu1[i].innerHTML = "1. Answer";
        }

        var qu2 = document.getElementsByClassName("qu2");
        for (var i = 0; i < qu2.length; i++) {
        qu2[i].innerHTML = "2. Answer";
        }

        var qu3 = document.getElementsByClassName("qu3");
        for (var i = 0; i < qu3.length; i++) {
        qu3[i].innerHTML = "3. Answer";
        }

        var qu4 = document.getElementsByClassName("qu4");
        for (var i = 0; i < qu4.length; i++) {
        qu4[i].innerHTML = "4. Answer";
        }

        lang = false;
    } else {
        document.getElementById("sources").innerHTML = "Források";
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

        var qu0 = document.getElementsByClassName("qu0");
        for (var i = 0; i < qu0.length; i++) {
        qu0[i].innerHTML = "Ellenőrzés";
        }

        var qu1 = document.getElementsByClassName("qu1");
        for (var i = 0; i < qu1.length; i++) {
        qu1[i].innerHTML = "1. Válasz";
        }

        var qu2 = document.getElementsByClassName("qu2");
        for (var i = 0; i < qu2.length; i++) {
        qu2[i].innerHTML = "2. Válasz";
        }

        var qu3 = document.getElementsByClassName("qu3");
        for (var i = 0; i < qu3.length; i++) {
        qu3[i].innerHTML = "3. Válasz";
        }

        var qu4 = document.getElementsByClassName("qu4");
        for (var i = 0; i < qu4.length; i++) {
        qu4[i].innerHTML = "4. Válasz";
        }

        lang = true;
    }
}
