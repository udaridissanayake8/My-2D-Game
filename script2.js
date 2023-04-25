var runStart=0;
function keyCheck(event){

    //Enter Key
    if(event.which==13){
        if(runWarkerId==0){
        runWarkerId=setInterval(run,100);
        runSound.play();
        runStart=1;
        backgroundWarkerId=setInterval(moveBackground,100);
        scoreWorkerId=setInterval(updateScore,100);
        createBlockId=setInterval(createBlock,100);
        createBlockId2=setInterval(createBlock2,100);
        moveBlockId=setInterval(moveBlocks,100);
        moveBlockId2=setInterval(moveBlocks2,100);

    }
    }

    //Space Key
    if(event.which==32){
        if(runStart==1){
        if(JumpWarkerId==0){
            clearInterval(runWarkerId);
            runSound.pause()
            JumpWarkerId=setInterval(jump,100);
            jumpSound.play();
        }
    }

    }

    slideSound=new Audio("slide.mp3");
    //Down Arrow key
    if(event.which==40){
        if(runStart==1){
            if(slideWorkerId==0){
                clearInterval(runWarkerId);
                runSound.pause()
                slideWorkerId=setInterval(slide,200);
                slideSound.play();
            }
        }
    }
}


runSound=new Audio("run.wav");
runSound.loop=true;
//Run Function
var player=document.getElementById("player");
var runImageNumber=0;
var runWarkerId=0;
function run(){
    runImageNumber++;
    if(runImageNumber==10){
        runImageNumber=0;
    }
    player.src="Run__00"+runImageNumber+".png";
}

jumpSound=new Audio("jump.mp3");
//Jump Function
var jumpImageNumber=0;
var JumpWarkerId=0;
var playerMarginTop=480;
function jump(){
    jumpImageNumber++;
    if(jumpImageNumber<=5){
        playerMarginTop=playerMarginTop-50;
        player.style.marginTop=playerMarginTop+"px";
    }
    if(jumpImageNumber>=6){
        playerMarginTop=playerMarginTop+50;
        player.style.marginTop=playerMarginTop+"px";
        
    }
    if(jumpImageNumber==10){
        jumpImageNumber=0;
        clearInterval(JumpWarkerId);
        JumpWarkerId=0;
        runWarkerId=setInterval(run,100);
        runSound.play();

     }
    player.src="Jump__00"+jumpImageNumber+".png";
}

//Slide Function

var slideImageNumber=0;
var slideWorkerId=0;

function slide(){
    slideImageNumber++;
    if(slideImageNumber==10){
        slideImageNumber=0
        
        clearInterval(slideWorkerId);
        slideWorkerId=0;
        runWarkerId=setInterval(run,100);
        runSound.play();
    }
    player.src="Slide__00"+slideImageNumber+".png";
    
    
}

//bacground move
var background=document.getElementById("background");
var backgroundX=0;
var backgroundWarkerId=0;
function moveBackground(){
    backgroundX=backgroundX-20;
    background.style.backgroundPositionX=backgroundX+"px";
}

//Update score
var scoreWorkerId=0;
var newScore=0;
var score=document.getElementById("score");
function updateScore(){
    newScore++;
    score.innerHTML=newScore;

}

//Create blocks

var createBlockId=0;
var blockMarginleft=600;
var blockId=1;
function createBlock(){
    var block=document.createElement("div");
    block.className="block";

    block.id="block"+blockId;
    blockId++;
    var gap=800;
    blockMarginleft=blockMarginleft+gap;
    block.style.marginLeft=blockMarginleft+"px";
   
    background.appendChild(block);
}

var createBlockId2=0;
var block2Marginleft=600;
var block2Id=1;
function createBlock2(){
    var block2=document.createElement("div");
    block2.className="block2";
    block2.id="block2"+block2Id;
    block2Id++;
    var gap=800;
    block2Marginleft=block2Marginleft+gap;
    block2.style.marginLeft=block2Marginleft+"px";
    background.appendChild(block2);
}

//Move Blocks
var moveBlockId=0;
function moveBlocks(){
    for(var i=1; i<=blockId;i++){
        var currentBlock=document.getElementById("block"+i);
        var currentMarginLeft=currentBlock.style.marginLeft;
        var newMarginLeft=parseInt(currentMarginLeft)-20;
        currentBlock.style.marginLeft=newMarginLeft+"px";

        if(newMarginLeft<=123){
            if(newMarginLeft>=43){
                if(playerMarginTop<=520){
                    if(playerMarginTop>=410){
                        clearInterval(runWarkerId);
                        clearInterval(JumpWarkerId);
                        clearInterval(backgroundWarkerId);
                        clearInterval(scoreWorkerId);
                        clearInterval(createBlockId);
                        clearInterval(moveBlockId);
                        clearInterval(slideWorkerId);
                        clearInterval(moveBlockId2);

                        JumpWarkerId=-1;
                        slideWorkerId=-1;
                        runSound.pause();
                        deadWorkerId=setInterval(dead,100);
                        deadSound.play();


                    }
                }
            }
        }
    }
    
}
var moveBlockId2=0;
function moveBlocks2(){
    for(var i=1; i<=block2Id;i++){
        var currentBlock2=document.getElementById("block2"+i);
        var currentMarginLeft2=currentBlock2.style.marginLeft;
        var newMarginLeft2=parseInt(currentMarginLeft2)-20;
        currentBlock2.style.marginLeft=newMarginLeft2+"px";

        if(newMarginLeft2<=123){
            if(newMarginLeft2>=43){
                
                    if(playerMarginTop<=400){
                        clearInterval(runWarkerId);
                        clearInterval(JumpWarkerId);
                        clearInterval(backgroundWarkerId);
                        clearInterval(scoreWorkerId);
                        clearInterval(createBlockId);
                        clearInterval(moveBlockId);
                        clearInterval(moveBlockId2);
                        clearInterval(slideWorkerId);
                        JumpWarkerId=-1;
                        slideWorkerId=-1;
                        runSound.pause();
                        deadWorkerId=setInterval(dead,100);
                        deadSound.play();


                    }
                
            }
        }
    }
    
}
deadSound=new Audio("dead.mp3");
//Dead Function
deadImageNumber=0;
var deadWorkerId=0;
function dead(){
    deadImageNumber++;
    if(deadImageNumber==10){
        deadImageNumber=9;
        player.style.marginTop="480px";
        document.getElementById("endScore").innerHTML=newScore;
        document.getElementById("gameOver").style.visibility="visible";

    }
    player.src="Dead__00"+deadImageNumber+".png";
}
function re(){
    location.reload();
}