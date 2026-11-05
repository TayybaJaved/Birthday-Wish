// =======================
// LOADING SCREEN
// =======================

let loading = document.getElementById("loading");
let welcome = document.getElementById("welcome");
let lockScreen = document.getElementById("lockScreen");
let startBtn = document.getElementById("startBtn");

setTimeout(function () {

    loading.style.display = "none";
    welcome.style.display = "flex";

},3000);


// =======================
// START BUTTON
// =======================

startBtn.addEventListener("click",function(){

    welcome.style.display="none";
    lockScreen.style.display="flex";

});


// =======================
// PIN SYSTEM
// =======================

let correctPin="2026";
let enteredPin="";

let dots=document.querySelectorAll(".dot");

function updateDots(){

    dots.forEach((dot,index)=>{

        if(index<enteredPin.length){

            dot.style.background="#ff4d94";

        }

        else{

            dot.style.background="#ffd6e8";

        }

    });

}

function addNumber(number){

    if(enteredPin.length<4){

        enteredPin+=number;

        updateDots();

    }

}

function removeNumber(){

    enteredPin=enteredPin.slice(0,-1);

    updateDots();

}

function checkPin(){

    if(enteredPin===correctPin){

       lockScreen.style.display="none";

document.getElementById("giftScreen").style.display="flex";

        lockScreen.style.display="none";


    }

    else{

        alert("❌ Wrong PIN");

        enteredPin="";

        updateDots();

    }

}
openGift.onclick = function(){

    document.getElementById("giftScreen").style.display = "none";

    document.getElementById("birthdayIntro").style.display = "flex";
    typeCounter();

}
function typing(){

let text = "💖 Happy Birthday! Wishing you endless happiness, beautiful memories, lots of smiles and all the success in life. Stay happy forever! 🎂✨";

let i = 0;

let target = document.getElementById("letterText");

target.innerHTML = "";

let timer = setInterval(function(){

    target.innerHTML += text.charAt(i);

    i++;

    if(i >= text.length){

        clearInterval(timer);

    }

},40);

}
// ======================
// PHOTO SLIDER
// ======================

new Swiper(".mySlider",{

    loop:true,

    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },

    speed:900,

    slidesPerView:1,

    centeredSlides:true,

    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },

    effect:"coverflow",

    coverflowEffect:{
        rotate:20,
        stretch:0,
        depth:120,
        modifier:1,
        slideShadows:false
    }

});
// ================= FLOATING HEARTS =================

setInterval(function(){

let heart=document.createElement("div");

heart.className="heart";

let hearts=["💖","💕","💗","💝","💞"];

heart.innerHTML=hearts[Math.floor(Math.random()*hearts.length)];

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*25)+"px";

document.body.appendChild(heart);

setTimeout(function(){

heart.remove();

},6000);

},450);
// ================= BALLOONS =================

let balloonBox=document.getElementById("balloons");

setInterval(function(){

let balloon=document.createElement("div");

balloon.className="balloon";

let arr=["🎈","🎀","🌸","✨"];

balloon.innerHTML=arr[Math.floor(Math.random()*arr.length)];

balloon.style.left=Math.random()*100+"vw";

balloon.style.fontSize=(35+Math.random()*30)+"px";

balloon.style.animationDuration=(8+Math.random()*5)+"s";

balloonBox.appendChild(balloon);

setTimeout(function(){

balloon.remove();

},13000);

},900);
// Letter Popup

document.getElementById("letterBtn").onclick = function(){

    document.getElementById("letterPopup").style.display = "flex";

    let message = `Happy Birthday to the most amazing, beautiful and precious person in my life. 🎂💖

On this special day, I just want you to know how much you mean to me.🫂 Every smile of yours makes my day brighter, and every moment with you becomes a beautiful memory.💕

May Allah always bless you with happiness, success, good health and endless smiles.🤗 May all your dreams come true.

Thank you for being such a wonderful person.🫠 Never stop smiling because your smile is my favorite thing in the world. 🌸💕
A
Happy Birthday My Girl! 🎉`;

    let i = 0;
    let target = document.getElementById("letterMessage");

    target.innerHTML = "";

    let typing = setInterval(function(){

        target.innerHTML += message.charAt(i);

        i++;

        if(i >= message.length){
            clearInterval(typing);
        }

    },35);
    

}
document.getElementById("closeLetter").onclick = function(){

    document.getElementById("letterPopup").style.display = "none";

}

document.addEventListener("mousemove",function(e){

let sparkle=document.createElement("div");

sparkle.className="sparkle";

sparkle.innerHTML="✨";

sparkle.style.left=e.pageX+"px";

sparkle.style.top=e.pageY+"px";

document.body.appendChild(sparkle);

setTimeout(function(){

sparkle.remove();

},2000);

});
// ================= FALLING FLOWERS =================

setInterval(function(){

let flower=document.createElement("div");

flower.className="flower";

let flowers=["🌸","🌺","🌷","💮"];

flower.innerHTML=flowers[Math.floor(Math.random()*flowers.length)];

flower.style.left=Math.random()*100+"vw";

flower.style.fontSize=(20+Math.random()*25)+"px";

flower.style.animationDuration=(6+Math.random()*5)+"s";

document.body.appendChild(flower);

setTimeout(function(){

flower.remove();

},11000);

},700);
// ================= IMAGE POPUP =================

document.getElementById("profilePic").onclick = function(){

    document.getElementById("imagePopup").style.display="flex";

    document.getElementById("popupImage").src="images/profile.jpeg";

}

document.getElementById("closeImage").onclick = function(){

    document.getElementById("imagePopup").style.display="none";

}
// ================= PHOTO CLICK POPUP =================

document.querySelectorAll(".swiper-slide img").forEach(function(img){

    img.onclick = function(){

        document.getElementById("imagePopup").style.display = "flex";

        document.getElementById("popupImage").src = this.src;

    }

});
// Lock Screen Profile Popup

document.getElementById("lockProfile").onclick = function(){

    document.getElementById("imagePopup").style.display = "flex";

    document.getElementById("popupImage").src = this.src;

}
function confettiBlast(){

for(let i=0;i<120;i++){

let confetti=document.createElement("div");

confetti.innerHTML=["🎉","✨","🎊","💖","🌸"][Math.floor(Math.random()*5)];

confetti.style.position="fixed";

confetti.style.left=Math.random()*100+"vw";

confetti.style.top="-20px";

confetti.style.fontSize=(20+Math.random()*20)+"px";

confetti.style.zIndex="99999";

confetti.style.transition="4s linear";

document.body.appendChild(confetti);

setTimeout(function(){

confetti.style.top="110vh";

confetti.style.transform="rotate(720deg)";

},50);

setTimeout(function(){

confetti.remove();

},4500);

}

}
document.getElementById("nextPage").onclick = function(){

    document.getElementById("birthdayIntro").style.display = "none";

    document.getElementById("birthdayPage").style.display = "flex";

    typing();

}
function typeCounter(){

    typeText("years","19",80,function(){

        typeText("months","228",50,function(){

            typeText("days","6940",20);
             document.getElementById("nextPage").style.display="inline-block";



        });

    });

}

function typeText(id,text,speed,callback){

    let i=0;

    let target=document.getElementById(id);

    target.innerHTML="";

    let timer=setInterval(function(){

        target.innerHTML+=text.charAt(i);

        i++;

        if(i>=text.length){

            clearInterval(timer);

            if(callback){
                callback();
            }

        }

    },speed);
    
}