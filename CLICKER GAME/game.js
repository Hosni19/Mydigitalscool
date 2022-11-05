let score = 0;
let clickers = 1;
let autoClickers = 0;

document.querySelector("#score").addEventListener("click", function () {
    score = score + clickers;
    document.querySelector("#scoreText").innerText = "Score: " + score + " " + "Likes";
    if (score>100) {
        document.querySelector("#score").style.display="none" ;
        document.querySelector("#score2").style.display="block" ;
        }
});
document.querySelector("#score2").addEventListener("click", function () {
    score = score + clickers;
    document.querySelector("#scoreText").innerText = "Score: " + score + " " + "Likes";
    if (score>100) {
        document.querySelector("#score").style.display="none" ;
        document.querySelector("#score2").style.display="block" ;
        }
});




let n = 10;
document.querySelector("#buy").addEventListener("click", function () {
    if (score < n) {
        alert("vous n'avez pas assez de clicks!");
    } else if (score >= n) {
        
        clickers = clickers + 1;
        score = score - n;
        n = n * 2
        document.querySelector("#clicker").innerText = "x" + clickers;
        document.querySelector("#scoreText").innerText = "Score: " + score + " " + "Likes";
        document.querySelector("#clicker1").innerHTML = 'Clicker Price : ' + n + ' clicks <img class="likess" src="images/facebook-love-png-3.png"> ';
    }
});


let x = 100;
document.querySelector("#buy-auto-clicker").addEventListener("click", function () {
    if (score < x) {
        alert("vous n'avez pas assez de clicks!");
    } else if (score >= x) {
        autoClickers = autoClickers + 1;
        score = score - x;
        x = x * 2;
        document.querySelector("#scoreText").innerText = "Score: " + score;
        document.querySelector("#auto-clickers").innerText = "x" + autoClickers;
        document.querySelector("#auto").innerHTML = "Auto clicker Price : " + x + ' clicks <img class="likess" src="images/[CITYPNG.COM]Cute Fb Care React Reaction Emoji - 720x720.png"> ';


        setInterval(function () {
            score = score + clickers;
            document.querySelector("#scoreText").innerText = "Score: " + score + " " + "Likes";
        }, 1000);
    }
});
document.querySelector("#reset").addEventListener("click", function () {
   
    reset();
});