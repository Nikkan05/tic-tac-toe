let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newgame=document.querySelector("#newbtn");
let newmsg=document.querySelector("#msg");
let newcontainer=document.querySelector(".msgcontainer")
let drawmsg=document.querySelector(".draw");
let count=0;

let turnO=true;
const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        newcontainer.classList.add("hide");
    }
}

const resetgame=()=>{
    turnO=true;
    enableboxes();
    count=0;

}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        count++;
        if(turnO){
            box.innerText="O"
            turnO=false
        }else{
            box.innerText="X"
            turnO=true

        }
        box.disabled=true;
        checkwinner()
    })
})
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    newcontainer.classList.remove("hide");
    disableboxes();
}
const drawgame=()=>{
    msg.innerText="Game is draw";
    newcontainer.classList.remove("hide");
    disableboxes();
    count=0;
} 
const checkwinner=()=>{
    for(let pattern of winpatterns){
        let pos1val=boxes[pattern[0]].innerText
        let pos2val=boxes[pattern[1]].innerText
        let pos3val=boxes[pattern[2]].innerText
        if(pos1val!=""&&pos2val!=""&&pos3val!=""){
            if(pos1val===pos2val&&pos2val===pos3val){
                console.log("winner",pos1val);
                console.log(count)
                console.log(pos1val,pos2val,pos3val);
                showWinner(pos1val);
                
                count=0;
            }
            else if(count==9&&drawgame()){
                count=0;
            }
        }
    } 
}
newgame.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
