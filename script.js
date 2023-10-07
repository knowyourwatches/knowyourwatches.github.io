let bt1 = 'watch-button-1';
let bt2 = 'watch-button-2';
let bt3 = 'watch-button-3';
let bt4 = 'watch-button-4';
let gameAdvance = 'game-advance';
let restart = 'restart';
let stats = 'stats';
let watchImage = 'watch-img';

let correctAnswer = [];
correctAnswer[0] = "";
let indexOfcorrectAnswer;
let Ttemparray = [];

let watches = [
    ["TAG Heuer Monaco", "https://tse1.mm.bing.net/th?id=OIP.0QBDQdRV1_rkJalgrZ59GgHaNb&pid=Api"],
    ["Cartier Santos", "https://tse1.mm.bing.net/th?id=OIP.golPRU3vuXjVUxz7z-oPSwHaJ4&pid=Api"],
    ["Jaeger-LeCoultre Reverso", "https://tse1.mm.bing.net/th?id=OIP.CSuVbIpEAKuZ2xOgmgGycwHaQx&pid=Api"],
    ["Rolex Daytona", "https://tse4.mm.bing.net/th?id=OIP.LmQI0GLIT2XB1liVMHWc6wHaJS&pid=Api"],
    ["Patek Philippe Nautilus", "http://originalwatches.net/uploads/Tovar/46/87/11.png"],
    ["Rolex Datejust", "https://i.postimg.cc/BbjSwcws/one.png"],
    ["Breitling Navitimer", "https://tse3.mm.bing.net/th?id=OIP.GPkvuuq6AlLKxSIkrG1YygHaMI&pid=Api"],
    ["Rolex Submariner", "https://tse1.mm.bing.net/th?id=OIP.__EWPM7J5PL_0roA0gdV0wHaI6&pid=Api"],
    ["Omega Speedmaster Professional", "https://tse4.mm.bing.net/th?id=OIP.6sH7w6IihLXuWG7aVa76ggHaME&pid=Api"],
    ["Audemars Piguet Royal Oak", "https://tse4.mm.bing.net/th?id=OIP.5FzkcGRXERHo6o1G5NchzwHaKC&pid=Api"],
    ["Rolex Day-Date", "https://tse1.mm.bing.net/th?id=OIP.OUlsgX8orUkaejK3WAWTBAHaKW&pid=Api"],
    ["Cartier Tank", "https://tse3.mm.bing.net/th?id=OIP.c7T-fJ_jqdYCnvIvlwCEPwHaQf&pid=Api"],
    ["IWC Big Pilot’s Watch", "https://tse2.mm.bing.net/th?id=OIP.VCbEa6IaAOmCecUmwBrZ3QHaKE&pid=Api"],
    ["Omega Seamaster", "https://tse2.mm.bing.net/th?id=OIP.wyJUrwkVyWtlrpX-enbmewHaMs&pid=Api"],
    ["Patek Philippe Calatrava", "https://tse4.mm.bing.net/th?id=OIP.AVbxeEwZ4WreinQb5DVNUwHaNs&pid=Api"],
    ["Rolex GMT-Master", "https://tse1.explicit.bing.net/th?id=OIP.gvsBdWWbBdNFtTvOhNWTRQHaN5&pid=Api"],
    ["IWC Portugieser Chronograph", "https://tse1.mm.bing.net/th?id=OIP.BMu4J24TR62dwV2YNGwWAAHaMa&pid=Api"],
    ["Casio F-91W", "https://tse4.mm.bing.net/th?id=OIP.b1zmUhqqoHVf5R_SVQfc7QHaHa&pid=Api"],
    ["Timex Easy Reader", "https://tse1.explicit.bing.net/th?id=OIP.WAUW9O8YA2MKUimctaGIgAHaNE&pid=Api"]
]

    let stefan = [-1];
    let score = [];
    let quadlets = [];
    for (let i = watches.length - 1; i >= 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = watches[j];
      watches[j] = watches[i];
      watches[i] = temp;
    }
    for (let n = 0; n <= watches.length - 1; n++) {
      let TempDeck = watches.slice(); 
      let set = [];
      let tempItem = TempDeck[n];
      TempDeck.splice(TempDeck.indexOf(tempItem), 1); 
      for (let f = 0; f <= 2; f++) {
        let randomIndex = Math.floor(Math.random() * TempDeck.length);
        set.push(TempDeck[randomIndex]);
        TempDeck.splice(randomIndex, 1);
      }
      let scoreSet = [];
        scoreSet.push(tempItem[0])
        scoreSet.push(tempItem[1])
        scoreSet.push(0)
        score.push(scoreSet)
      quadlets.push(set);
    }
let updateGame = () => {
    document.getElementById(bt1).style.backgroundColor = "#4361ee"
    document.getElementById(bt2).style.backgroundColor = "#4361ee"
    document.getElementById(bt3).style.backgroundColor = "#4361ee"
    document.getElementById(bt4).style.backgroundColor = "#4361ee"
    let indexOfcorrectAnswer = 0;
    let Ttemparray = [];
    stefan[0] += 1;
    if (stefan[0] >= quadlets.length) {stefan[0] = 0}
    console.log("stefan:", stefan)
    console.log("score:", score)
    console.log("quadlets:", quadlets)
    for (johan = 2; johan > -1; johan--) {
        Ttemparray.push(quadlets[stefan[0]][johan][0])
    }
    Ttemparray.push(score[stefan[0]][0])
    for (Ti = 3; Ti > -1; Ti--) {
        let randomT = Math.floor(Math.random() * (4))
        console.log(randomT)
        let tempT = Ttemparray[randomT];
        Ttemparray[randomT] = Ttemparray[Ti];
        Ttemparray[Ti] = tempT;
    }    
    console.log(score[stefan[0]][1])
    document.getElementById(gameAdvance).innerHTML = (stefan[0] + "/" + (quadlets.length + 1))
    document.getElementById(watchImage).src = score[stefan[0]][1]
    document.getElementById(bt1).innerHTML = Ttemparray[0]
    document.getElementById(bt2).innerHTML = Ttemparray[1]
    document.getElementById(bt3).innerHTML = Ttemparray[2]
    document.getElementById(bt4).innerHTML = Ttemparray[3]
    correctAnswer[0] = score[stefan[0]][0]
    indexOfcorrectAnswer = Ttemparray.indexOf(correctAnswer[0]);
    console.log(correctAnswer[0])
}
let bt1pressed = () => {
    if (document.getElementById(bt1).innerHTML == correctAnswer[0]) {
        document.getElementById(bt1).style.backgroundColor = "#31D843"
        setTimeout(() => {
            updateGame(score, quadlets, bt1, bt2, bt3, bt4, gameAdvance, watchImage, stefan);
        }, 500);
    }
    else {
        document.getElementById(bt1).style.backgroundColor = "#FF5E5B"
    }
}
let bt2pressed = () => {
    if (document.getElementById(bt2).innerHTML == correctAnswer[0]) {
        document.getElementById(bt2).style.backgroundColor = "#31D843"
        setTimeout(() => {
            updateGame(score, quadlets, bt1, bt2, bt3, bt4, gameAdvance, watchImage, stefan);
        }, 500);
    }
    else {
        document.getElementById(bt2).style.backgroundColor = "#FF5E5B"
    }
}
let bt3pressed = () => {
    if (document.getElementById(bt3).innerHTML == correctAnswer[0]) {
        document.getElementById(bt3).style.backgroundColor = "#31D843"
        setTimeout(() => {
            updateGame(score, quadlets, bt1, bt2, bt3, bt4, gameAdvance, watchImage, stefan);
        }, 500);
    }
    else {
        document.getElementById(bt3).style.backgroundColor = "#FF5E5B"
    }
}
let bt4pressed = () => {
    if (document.getElementById(bt4).innerHTML == correctAnswer[0]) {
        document.getElementById(bt4).style.backgroundColor = "#31D843"
        setTimeout(() => {
            updateGame(score, quadlets, bt1, bt2, bt3, bt4, gameAdvance, watchImage, stefan);
        }, 500);
    }
    else {
        document.getElementById(bt4).style.backgroundColor = "#FF5E5B"
    }
}