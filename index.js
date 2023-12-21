const rules=document.getElementById('rules');
const aside=document.getElementById('aside');
const close=document.getElementById('close');
const rock=document.getElementById('rock');
const paper=document.getElementById('paper');
const scissor=document.getElementById('scissor');
const rock1=document.getElementById('rock1');
const paper1=document.getElementById('paper1');
const scissor1=document.getElementById('scissor1');
const hr1=document.getElementById('hr1');
const hr2=document.getElementById('hr2');
const hr3=document.getElementById('hr3');
const user=document.getElementById('user');
const pc=document.getElementById('pc');
const result=document.getElementById('result');
let dots=document.querySelector('.dots');
const arr=['rock','paper','scissor'];
let para1=document.getElementById('para1');
let para2=document.getElementById('para2');
let playagain=document.getElementById('playagain');
let userpicked;
let userscore=document.getElementById('userscore');
let pcscore=document.getElementById('pcscore');
let won=false;
const concentric1=document.getElementById('concentric1');
const concentric2=document.getElementById('concentric2');
const next=document.querySelector('#next');
const main=document.querySelector('#main');
let pcScore = parseInt(localStorage.getItem('pcScore')) ||0;
let userScore = parseInt(localStorage.getItem('userScore'))||0;


//functions to display the rules 

let displayRules=()=>aside.style.display='block';
rules.addEventListener('click',displayRules);

//functions to close the rules 

let closeRules=()=>aside.style.display='none'; 
close.addEventListener('click',closeRules);

//function to display user selected option

function displayScores(){
    userscore.textContent=userScore;
    pcscore.textContent=pcScore;
}
displayScores();

function userPickedRock(){
    rock.setAttribute("style","transform:translate(-150px,70px);transition:all 0.6s ease-in-out");
    paper.setAttribute("style","display:none");
    scissor.setAttribute("style","display:none");
    hr1.setAttribute("style","display:none");
    hr2.setAttribute("style","display:none");
    hr3.setAttribute("style","display:none");
    user.style.display='block';
    pc.style.display='block';
    result.style.display='block';
    userpicked='rock';
}
function userPickedScissor(){
    scissor.setAttribute("style","transform:translate(-150px,70px);transition:all 0.6s ease-in-out");
    rock.setAttribute("style","display:none");
    paper.setAttribute("style","display:none");
    hr1.setAttribute("style","display:none");
    hr2.setAttribute("style","display:none");
    hr3.setAttribute("style","display:none");
    user.style.display='block';
    pc.style.display='block';
    result.style.display='block';
    userpicked='scissor';
}
function userPickedPaper(){
    paper.setAttribute("style","transform:translate(-155px,-150px);transition:all 0.6s ease-in-out");
    rock.setAttribute("style","display:none");
    scissor.setAttribute("style","display:none");
    hr1.setAttribute("style","display:none");
    hr2.setAttribute("style","display:none");
    hr3.setAttribute("style","display:none");
    user.style.display='block';
    pc.style.display='block';
    result.style.display='block';
    userpicked='paper';
}

let choice=Math.floor(Math.random()*3);

let loading=function(){
    dots.style.display='block';
    function systemPicked(){
   if(arr[choice]==='rock'){
       setTimeout(()=>{
        rock1.style.display='block'; 
        dots.style.display='none';
        displayContent();
        displayCircles();
        
    },1500);
   }
   else if(arr[choice]==='scissor'){
        setTimeout(()=>{
            scissor1.style.display='block';
            dots.style.display='none';
            displayContent();
            displayCircles();
            
        },1500) 
   }
   else{    
        setTimeout(()=>{
            paper1.style.display='block';
            dots.style.display='none';
            displayContent();
            displayCircles();
        
        },1500) 
   }
}
systemPicked();

}


function displayContent(){
    if(userpicked==='rock'&&arr[choice]==='scissor'){
        para1.textContent='YOU WIN';
        para2.textContent='AGAINST PC';
        playagain.style.display='block';
        playagain.textContent='PLAY AGAIN';
        rock.removeEventListener('click',userPickedRock);
        paper.removeEventListener('click',userPickedPaper);
        scissor.removeEventListener('click',userPickedScissor);
        rock.removeEventListener('click',loading);
        paper.removeEventListener('click',loading);
        scissor.removeEventListener('click',loading);
        won=!won;
    }
    else if(userpicked==='scissor'&&arr[choice]==='rock'){
        para1.textContent='YOU LOST';
        para2.textContent='AGAINST PC';
        playagain.style.display='block';
        playagain.textContent='PLAY AGAIN';
        rock.removeEventListener('click',userPickedRock);
        paper.removeEventListener('click',userPickedPaper);
        scissor.removeEventListener('click',userPickedScissor);
        rock.removeEventListener('click',loading);
        paper.removeEventListener('click',loading);
        scissor.removeEventListener('click',loading);
    }
    else if(userpicked==='scissor'&&arr[choice]==='paper'){
        para1.textContent='YOU WIN';
        para2.textContent='AGAINST PC';
        playagain.style.display='block';
        playagain.textContent='PLAY AGAIN';
        rock.removeEventListener('click',userPickedRock);
        paper.removeEventListener('click',userPickedPaper);
        scissor.removeEventListener('click',userPickedScissor);
        rock.removeEventListener('click',loading);
        paper.removeEventListener('click',loading);
        scissor.removeEventListener('click',loading);
        won=!won;
    }
    else if(userpicked==='paper'&&arr[choice]==='scissor'){
        para1.textContent='YOU LOST';
        para2.textContent='AGAINST PC';
        playagain.style.display='block';
        playagain.textContent='PLAY AGAIN';
        rock.removeEventListener('click',userPickedRock);
        paper.removeEventListener('click',userPickedPaper);
        scissor.removeEventListener('click',userPickedScissor);
        rock.removeEventListener('click',loading);
        paper.removeEventListener('click',loading);
        scissor.removeEventListener('click',loading);
    }
    else if(userpicked==='paper'&& arr[choice]==='rock'){
        para1.textContent='YOU WIN';
        para2.textContent='AGAINST PC';
        playagain.style.display='block';
        playagain.textContent='PLAY AGAIN';
        rock.removeEventListener('click',userPickedRock);
        paper.removeEventListener('click',userPickedPaper);
        scissor.removeEventListener('click',userPickedScissor);
        rock.removeEventListener('click',loading);
        paper.removeEventListener('click',loading);
        scissor.removeEventListener('click',loading);
        won=!won;
        
    }
    else if(userpicked==='rock'&&arr[choice]==='paper'){
        
        para1.textContent='YOU LOST';
        para2.textContent='AGAINST PC';
        playagain.style.display='block';
        playagain.textContent='PLAY AGAIN';
        rock.removeEventListener('click',userPickedRock);
        paper.removeEventListener('click',userPickedPaper);
        scissor.removeEventListener('click',userPickedScissor);
        rock.removeEventListener('click',loading);
        paper.removeEventListener('click',loading);
        scissor.removeEventListener('click',loading);
    }
    else{
        para1.textContent='TIE UP';
        para2.textContent='';
        playagain.style.display='block';
        playagain.textContent='REPLAY';
        rock.removeEventListener('click',userPickedRock);
        paper.removeEventListener('click',userPickedPaper);
        scissor.removeEventListener('click',userPickedScissor);
        rock.removeEventListener('click',loading);
        paper.removeEventListener('click',loading);
        scissor.removeEventListener('click',loading);
        won=null;
    }
}

function displayCircles(){
    if(won){
        concentric1.style.visibility='visible';
        next.style.visibility='visible';
        userScore=userScore+1;
        userscore.textContent=userScore;
        pcScore=pcScore;
        pcscore.textContent=pcScore;
        localStorage.setItem('userScore', userScore);     
        
    }
    else if(won==false){
        concentric2.style.visibility='visible';
        pcScore=pcScore+1;
        pcscore.textContent=pcScore;
        userScore=userScore;
        userscore.textContent=userScore;
        localStorage.setItem('pcScore', pcScore);
        
    }
    else if(won==null){
        concentric1.style.visibility='hidden';
        concentric2.style.visibility='hidden';
        userScore=userScore;
        userscore.textContent=userScore;
        pcScore=pcScore;
        pcscore.textContent=pcScore;
    }
}
function playAgain(){
   window.location.reload();
   userscore.textContent=userScore;
   pcscore.textContent=pcScore;
   
}

rock.addEventListener('click',userPickedRock);
paper.addEventListener('click',userPickedPaper);
scissor.addEventListener('click',userPickedScissor);
rock.addEventListener('click',loading);
paper.addEventListener('click',loading);
scissor.addEventListener('click',loading);
playagain.addEventListener('click',playAgain)


