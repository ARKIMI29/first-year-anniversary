let counter = 0;
var size = 20;
let counterEl = document.getElementById("counter");
let counter_hitbox = document.getElementById("c_hitbox");
let bl = document.getElementById("bl")
let text_ht = document.getElementById("text_hitbox");
let text = document.getElementById("text");
let main_text = document.getElementById("main_text");
let main_text_container = document.getElementById("main_text_container");
var check = false;

album();

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

let main_sparkles = document.getElementById("main_sparkles");

for(let i = 0; i < 22; i++){
    let s = document.createElement("div");
    s.classList.add("sparkle");
    let top = Math.random() * 30 - 8;
    let left = Math.random() * 30 - 8;
    if(Math.random() > 0.5) left = 100 - left;
    if(Math.random() > 0.5) top = 100 - top;
    s.style.top = top + "%";
    s.style.left = left + "%";
    s.style.animationDuration = (1.4 + Math.random() * 2) + "s";
    s.style.animationDelay = (Math.random() * 2) + "s";
    main_sparkles.appendChild(s);
}

for(var i = 0; i < 25; ++i){

    let hitbox = document.createElement("div");
    let heart = document.createElement("div");

    heart.classList.add("heart");
    hitbox.classList.add("heart_hitbox");

    hitbox.style.top = Math.floor(Math.random() * 1000) + "px";
    hitbox.style.left = Math.random() * 1300 + 100 + "px";


    hitbox.appendChild(heart);
    document.querySelector(".heart_container").appendChild(hitbox);


    move(hitbox, heart ,parseFloat(hitbox.style.top), parseFloat(hitbox.style.left));
    
}

function move(hitbox, heart,  top, hor){
    const TARGET = 10;
    let y_pos = top;
    let angle = 0;
    let rand = 0;
    let locked = false; 

    hitbox.onclick = function(){
        if(check == true && !locked){
            locked = true;

            y_pos = Math.floor(Math.random() * 1000);
            counter += 1;
            counterEl.textContent = counter;
            size += 5;
            counterEl.style.fontSize = size + "px";
            counterEl.style.color = `rgb(  ${(counter * 10)} , 0 , 0)`; 
            countStyle();

            setTimeout(function(){
                locked = false;
            }, 400);
        }
    }
    function smoothFrame() {
        if(y_pos <= (-window.innerHeight - 200)){
            y_pos = Math.floor(Math.random() * 1000);
            hitbox.style.left = Math.random() * window.innerWidth + "px";

            requestAnimationFrame(smoothFrame);
        }
        else{
            y_pos -= 1;
            hitbox.style.top = y_pos + "px";
            while(rand >= -0.008 && rand <= 0.008){
                rand = (Math.random() * 0.015) - 0.015;
            }

            angle += rand;

            hitbox.style.left = (hor + Math.sin(angle) * 75) + "px";

            requestAnimationFrame(smoothFrame);
            
        }
        
    }
    requestAnimationFrame(smoothFrame);


}

function album(){
    let bt1 = document.getElementById("btn1");
    let bt2 = document.getElementById("btn2");

    var container = document.getElementById("content");
    var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");
    var img3 = document.getElementById("img3");
    let click = 0;

    bt1.onclick = function(){
        check = true;
        let y_pos = container.offsetTop;
        bt1.onmouseover = null;
        bt1.onmouseleave = null;
        bt2.onmouseover = null;
        bt2.onmouseleave = null;
        counterEl.style.opacity = "1";
        text_ht.style.opacity = "1";
        container.style.opacity = "0";
        bl.style.opacity = "0";

        function smoothFrame() {
            if (y_pos < 2500) {
                y_pos += 2; 
    
                container.style.transform = `translateY(${y_pos - container.offsetTop}px)`;
                
                requestAnimationFrame(smoothFrame);
            }
        }
        requestAnimationFrame(smoothFrame);
        counter_hitbox.style.justifyContent = "center";
    }
    bt2.onclick = function(){
        if((click >= 0) && (click < 2)){
            bt2.style.transform = `translateY(${(Math.random() * 150) - 60}px) translateX(${(Math.random() * 400) - 200 }px)`;
            if((click >= 1) && (click < 2)){
                bt2.style.width = "350px";
                setTimeout(function(){
                    bt2.textContent = "Wrong button, buddy!";
                }, 800);
            }
        }
        else if(click >= 2){
            bt2.style.width = "350px"
            setTimeout(function(){
                bt2.textContent = "Okai, LET ME HELP YOU";
                bt2.style.width = "350px";
            }, 500);

            setTimeout(function(){
                bt2.style.width = "150px";
                bt2.textContent = bt1.textContent;
                bt2.className = bt1.className; 
                bt2.style.transform = ""; 
                bt2.onclick = bt1.onclick; 
                bt2.onmouseleave = bt1.onmouseleave;
                bt2.onmouseover = bt1.onmouseover;
                img3.style.scale = 1.0;
                img2.style.scale = 1.5;
                img3.style.transform = "rotateY(-35deg) translateZ(-40px)";
                img2.style.transform = "rotateY(0deg) translateZ(0px)";
                img2.style.boxShadow = "0px 0px 30px 10px white";
                img3.style.boxShadow = "0px 0px 30px 10px rgb(33, 33, 33)";
                img3.style.opacity = "0.5";
            }, 2000);
        }

        click += 1;


    }

    if(check == false){
            bt1.onmouseleave = function(){
                img1.style.scale = 1.0;
                img2.style.scale = 1.5;
                img1.style.transform = "translateX(0px) rotateY(35deg) translateZ(-40px)";
                img2.style.transform = "rotateY(0deg) translateZ(0px)";
                img1.style.boxShadow = "0px 0px 30px 10px rgb(33, 33, 33)";
                img2.style.boxShadow = "0px 0px 30px 10px white";


            }

            bt1.onmouseover = function() {
                img1.style.scale = 1.5;
                img2.style.scale = 1.0;
                img1.style.transform = "translateX(210px) rotateY(0deg) translateZ(0px)";
                img2.style.transform = "translateX(-330px) rotateY(35deg) translateZ(-40px)";
                img1.style.boxShadow = "0px 0px 30px 10px white";
                img2.style.boxShadow = "0px 0px 30px 10px rgb(33, 33, 33)";
            }

            bt2.onmouseleave = function(){
                img3.style.scale = 1.0;
                img2.style.scale = 1.5;
                img3.style.transform = "rotateY(-35deg) translateZ(-40px)";
                img2.style.transform = "rotateY(0deg) translateZ(0px)";
                img2.style.boxShadow = "0px 0px 30px 10px white";
                img3.style.boxShadow = "0px 0px 30px 10px rgb(33, 33, 33)";

            }

            bt2.onmouseover = function() {
                img3.style.scale = 1.5;
                img2.style.scale = 1.0;
                img3.style.transform = "translateX(-210px) rotateY(0deg) translateZ(0px)";
                img2.style.transform = "translate(330px) rotateY(-35deg) translateZ(-40px)";
                img3.style.boxShadow = "0px 0px 30px 10px white";
                img2.style.boxShadow = "0px 0px 30px 10px rgb(33, 33, 33)";
            }

        }
}

let text_img1 = document.getElementById("first_pic");
let text_img2 = document.getElementById("second_pic");
let text_img3 = document.getElementById("third_pic");
let text_img4 = document.getElementById("fourth_pic");
let text_img5 = document.getElementById("fifth_pic");
let text_img6 = document.getElementById("sixth_pic");

let main_img = document.getElementById("main_text_pic");
let ps = document.getElementById("ps");

function countStyle(){
    if(counter == 29){
        check = false;
        counterEl.style.textShadow = "0px 0px 15px white, 0px 0px 30px white, 0px 0px 45px white";
        text.style.textShadow = "0px 0px 15px white, 0px 0px 30px white, 0px 0px 45px white";
        bl.style.opacity = "1";
        bl.style.backgroundColor = " rgba(96, 96, 96, 0.57)";
        setTimeout(function(){
            text.style.opacity = "0";
            counterEl.style.opacity = "0";
            counter_hitbox.style.opacity = "0";
            setTimeout(function(){
                main_text_container.style.width = "90vw";
                main_text_container.style.height ="120vw"; 
                main_text_container.style.opacity = "1";
                setTimeout(function(){
                    main_text.style.opacity = "1";

                    setTimeout(function(){
                        let par1 = document.querySelector(".par_1 h1");
                        let par2 = document.querySelector(".par_2 h1");
                        let par3 = document.querySelector(".par_3 h1");
                        let par4 = document.querySelector(".par_4 h1");
                        let loveLine = document.getElementById("love_line");
                        let sigLine = document.getElementById("signature_line");

                        let speed = 5; // faster since paragraphs are long

                        text_img1.style.pointerEvents = "auto";
                        text_img2.style.pointerEvents = "auto";
                        text_img3.style.pointerEvents = "auto";
                        text_img4.style.pointerEvents = "auto";
                        text_img5.style.pointerEvents = "auto";
                        text_img6.style.pointerEvents = "auto";


                        function revealNext(el, nextSpeed, callback){
                            let dur = typewriterReveal(el, nextSpeed);
                            el.style.opacity = "1";
                            setTimeout(callback, dur + 300);
                        }

                        revealNext(par1, speed, function(){
                            text_img1.style.opacity = "1";
                            text_img2.style.opacity = "1";
                            revealNext(par2, speed, function(){
                                text_img3.style.opacity = "1";
                                text_img4.style.opacity = "1";
                                revealNext(par3, speed, function(){
                                    text_img5.style.opacity = "1";
                                    text_img6.style.opacity = "1";
                                    revealNext(par4, speed, function(){
                                        revealNext(loveLine, 40, function(){
                                            revealNext(sigLine, 60, function(){
                                                main_img.style.opacity = "1";
                                                ps.style.opacity = "1";
                                                main_sparkles.style.opacity = "1";

                                            });
                                        });
                                    });
                                });
                            });
                        });

                    }, 1000);

                }, 3000);
            }, 1000);
        }, 1000);
    }
}

function typewriterReveal(element, speed = 30) {
    function wrapTextNodes(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            const frag = document.createDocumentFragment();
            const chars = node.textContent.split("");
            chars.forEach(char => {
                const span = document.createElement("span");
                span.textContent = char;   // keep the real space, don't swap to nbsp
                span.style.opacity = "0";
                span.classList.add("letter");
                frag.appendChild(span);
            });
            node.parentNode.replaceChild(frag, node);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            Array.from(node.childNodes).forEach(wrapTextNodes);
        }
    }

    Array.from(element.childNodes).forEach(wrapTextNodes);

    const letters = element.querySelectorAll(".letter");
    letters.forEach((letter, i) => {
        setTimeout(() => {
            letter.style.transition = "opacity 0.05s linear";
            letter.style.opacity = "1";
        }, i * speed);
    });

    return letters.length * speed;
}

let photo_stage = document.querySelector(".photo_stage");

photo_stage.onmousemove = function(e){
    const rect = main_img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = (x - rect.width / 2) / (rect.width / 2);
    const percentY = (y - rect.height / 2) / (rect.height / 2);

    const clampedX = Math.max(-1, Math.min(1, percentX));
    const clampedY = Math.max(-1, Math.min(1, percentY));

    const maxTilt = 14;
    const rotateY = clampedX * maxTilt;
    const rotateX = -clampedY * maxTilt;

    main_img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;

    const shadowStrength = Math.sqrt(clampedX*clampedX + clampedY*clampedY);
    const shadowX = -clampedX * 30;
    const shadowY = -clampedY * 30 + 10;
    const blur = 20 + shadowStrength * 20;

    main_img.style.boxShadow = `${shadowX}px ${shadowY}px ${blur}px rgba(0,0,0,${0.4 + shadowStrength*0.15})`;
};

photo_stage.onmouseleave = function(){
    main_img.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    main_img.style.boxShadow = "none";
};
