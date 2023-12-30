console.log("welcome to Tic Tac Toe");

let board=[
    [' ',' ',' '],
    [' ',' ',' '],
    [' ',' ',' ']
    ];
const PLAYER='X';
const COMPUTER='o';
let winner=' ';
resetBoard();


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

printBoard();
printWinner(winner);

function resetBoard(){
    for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
            board[i][j]=' ';
            
        }
    }
}

function printBoard(){
    console.log("  "+board[0][0]+' | '+board[0][1]+' | '+board[0][2]);
    console.log(" --------")
    console.log(' '+board[1][0]+' | '+board[1][1]+' | '+board[1][2]);
    console.log("--------")
    console.log(" "+board[2][0]+' | '+board[2][1]+' | '+board[2][2]);
    console.log(" --------")
    
}

function checkFreeSpaces(){
    let freeSpaces = 9;
    
    for(let i = 0;i<3; i++){
        for(let j = 0;j<3;j++){
            if(board[i][j]!=' '){
                freeSpaces--;
            }
        }
    }
    return freeSpaces;
}

function playerMove(){
    let x;
    let y;
    do{
    x=prompt("enter row 1-3:")
    x--;
    y=prompt("enter col 1-3:")
    y--;
    
    if(board[x][y]!=' '){
        console.log("invalid move");
    }else{
        board[x][y]=PLAYER;
        break;
    }
    }while(board[x][y]!=' ');
    
}

function computerMove(){
    var x;
    var y;
    
    
    if(checkFreeSpaces()>0){
        do{
            x = Math.floor((Math.random() *10) /3 );
            y = Math.floor((Math.random() *10) /3 );
        }while(board[x][y]!=' ');
        
        board[x][y]=COMPUTER;
    }else{
        printWinner(' ');
    }
}

function checkWinner(){
    for(let i=0;i<3;i++){// check rows
        if(board[i][0]==board[i][1] && board[i][1]==board[i][2]){
            return board[i][0];
        }
    }
    for(let j=0;j<3;j++){// check cols
        if(board[0][j]==board[1][j] && board[0][j]==board[2][j]){
            return board[0][j];
        }
    }
    if(board[0][0]==board[1][1] && board[0][0]==board[2][2]){
            return board[0][0];
        }
    if(board[0][2]==board[1][1] && board[0][2]==board[2][0]){
            return board[0][2];
        }
        return ' ';
    
}

function printWinner(c){
    if(c==PLAYER){
        console.log("You win");
    }else if(c==COMPUTER){
        console.log("You lose!");
    }else{
        console.log("It's draw");
    }
}