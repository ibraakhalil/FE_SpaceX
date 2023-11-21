(function (){

    let socials = document.querySelectorAll(".social i");
    let array = ["0.25s","0.4s","0.55s","0.7s"]

    socials.forEach(function(social,index){
        socials[index].setAttribute("style",`animation:moveIn ${array[index]} ease-in-out forwards 0.3s;`)
    })






    

    let rocket= document.querySelector(".rocket");
    let rocketImg= document.querySelector(".rocket .rocket-image");
    let rocketImgDiv= document.querySelector(".rocket .rocket-image div");
    let blockRight6 = document.querySelector(".block-right-6 img");
    let trigger = window.innerHeight/5;

    window.addEventListener("scroll", (e) => {
        if(window.scrollY > (rocket.offsetTop - trigger)) {
            rocketImg.classList.add("active");
        } else {
            rocketImg.classList.remove("active");
        }

        if(window.scrollY > (rocket.offsetTop + rocket.clientHeight/2.5 - trigger)) {
            rocketImgDiv.classList.add("active");
        } else {
            rocketImgDiv.classList.remove("active");
        }       

        if(window.scrollY > rocket.offsetTop) {
            blockRight6.setAttribute("style",`transform:rotate(${(window.scrollY - rocket.offsetTop)/3}deg);`)
        }  else {
            blockRight6.setAttribute("style",`transform:rotate(0deg);`)
        }
        
    })
    
}());



















