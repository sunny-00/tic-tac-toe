seriesofactions=['x','o','x','o','x','o','x','o','x','END']
function turndisplay(){
document.getElementById('turn').innerHTML=`Current turn of :- ${seriesofactions[0]}`
}
playerx=[]
playero=[]
turndisplay()
function select(num){
    
    document.getElementById(num).innerHTML=seriesofactions[0]
    if(seriesofactions[0]=='x'){
        playerx.push(num)
        // console.log(playerx);
    }
    else{
        playero.push(num)
        // console.log(playero);
    }
    seriesofactions.shift();
    turndisplay()
    checkWin()

}
winningSeries = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[7,5,3]]

function checkWin(){
    for(i=0;i<winningSeries.length;i++){
        winningX=0
        for(j=0;j<playerx.length;j++){
            for(k=0;k<3;k++){
                if(playerx[j]==winningSeries[i][k]){
                    winningX=winningX+1
                    // console.log(winningX);
                }
            }
        }
        if(winningX==3){
            alert('x wins')
        }
    }

    for(i=0;i<winningSeries.length;i++){
        winningO=0
        for(j=0;j<playero.length;j++){
            for(k=0;k<3;k++){
                if(playero[j]==winningSeries[i][k]){
                    winningO=winningO+1
                    // console.log(winningX);
                }
            }
        }
        if(winningO==3){
            alert('O wins')
        }
    }
}


function newGame() {
    seriesofactions = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x', 'END'];
    playerx = [];
    playero = [];
    turndisplay();
    resetBoard();
  }

  function resetBoard() {
    for (let i = 1; i <= 9; i++) {
      document.getElementById(i).innerHTML = '';
    }
  }
