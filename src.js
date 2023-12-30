console.log("hi babyy! let's play tic tac toe");
let board=[
    [0,0,0],
    [0,0,0],
    [0,0,0]
    ];

 resetBoard(); 
function resetBoard(){
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            board[i][j]=" ";
        }
    }
}
printBoard();

while(winner==' ' && checkFreeSpaces()!=0){
    printBoard();
    
    playerMove();
    winner=checkWinner();
    if(winner !=' '|| checkFreeSpaces()==0){
        break;
    }
    
    computerMove();
    winner=checkWinner();
    if(winner !=' '|| checkFreeSpaces()==0){
        break;
    }
}

function printBoard(){
    console.log("  |   |  ");
    console.log("-------------");
    console.log("  |   |  ");
    console.log("-------------");
    console.log("  |   |  ");
}

function playerMove(){
    
    let x;
    let y;
    do{
    x=prompt("enter row 1-3:");
    y=prompt("enter col 1-3:");
    x--;
    y--;
    
    if(board[x][y]==" "){
        console.log("invalid ");
    }else{
        board[x][y]="X";
    }
    }while(board[x][y]!=" ");
}

function computerMove(){
    let x;
    let y;
    
    do{
        x = Math.floor((Math.random() *10) /3 );
        y = Math.floor((Math.random() *10) /3 );
        
        if(board[x][y]!=" "){
            board[x][y]="O";
        }
    }while(board[x][y]!=" ");
}
