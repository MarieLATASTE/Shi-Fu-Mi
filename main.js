const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        const user = buttons[i].innerHTML;
        const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
        let result = "";
        
        //  Logique du jeu
        if(user === robot){
            result = "both players are tied";
        }else if((user === "Rock" && robot === "Scissors") ||
                  (user === "Paper" && robot === "Rock") || 
                  (user === "Scissors" && robot === "Paper")){
            result = "You Win";
        }else if((user === "Well" && robot === "Scissors") ||
                   (user === "Well" && robot === "Rock")){
            result = "you win with the secret technique";
        }else{
            result = "You Lose";
         }

         document.querySelector('.result').innerHTML = `
            👤 : ${user} </br></br>
            🤖 : ${robot} </br></br>
            ${result} !
         `;

        // console.log(`user: ${user} vs Robot: ${robot}`);

    });
}