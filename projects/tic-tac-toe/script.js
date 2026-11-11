let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset_btn");
let newGameBtn = document.querySelector("#newGame_btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");

let turnO = true;
let count = 0;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = ()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count=0;
};


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        count++;
        if(turnO)
        {
            box.innerText = "O";
            turnO = false;
        }
        else
        {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        const win = checkerWinner();

        if(count===9 && !win)
        {
            showDraw();
        }
    });
});

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
        box.innerText = "";
    }
};

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) =>{
    msg.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    count=0;
};

const showDraw = ()=>{
    msg.innerText = "Draw";
    msgContainer.classList.remove("hide");
    disableBoxes();
    count=0;
}

const checkerWinner = () =>{
    for(let pattern of winPatterns)
    {
        let p1 = boxes[pattern[0]].innerText;        
        let p2 = boxes[pattern[1]].innerText;        
        let p3 = boxes[pattern[2]].innerText;        
     
        if(p1!="" && p2!="" && p3!="")
        {
            if(p1===p2 && p2===p3)
            {
                showWinner(p1);
                return true;
            }
        }
    }
    return false;
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);