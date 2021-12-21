// ================= Select DOM =================
const w_paragraph = document.querySelector('.wrapper_paragraph');
const w_title = document.querySelector('.wrapper_title');
const w_subtitle = document.querySelector('.wrapper_subtitle');
const card = document.querySelectorAll('.card_container');
const cardContent = document.querySelectorAll('.card_content');


// ================= Functions =================

// === Navigation bar effects on scroll ===
window.addEventListener("scroll", function(){
    const header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

// === Scroll to top button ===
const scrollTopBtn = document.querySelector("#button_scroll");

window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 100)
})

scrollTopBtn.addEventListener("click", function(){
    document.body.scrollTo = 0;
    document.documentElement.scrollTop = 0;
})

// === Navigation menu items active on page scroll ===
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

        if(window.scrollY > 0){
            document.querySelector("#first").classList.remove("active");
        }else{
            document.querySelector("#first").classList.add("active");
        }
    
    sections.forEach( current => {
        
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(`.navbar_list a[href*=${id}]`).classList.add("active");
        }else{
            document.querySelector(`.navbar_list a[href*=${id}]`).classList.remove("active")
        }
    });
});

// ==== Navagation ====
// === //Parameter passed from button ===
/*function activeOption(value){
    //Option class code
    let options = document.querySelectorAll(".list_item");
    options.forEach(option => {
        //check if value equals innerText
        if(value.toUpperCase() == option.innerText.toUpperCase()){
            option.classList.add("active");
        }else{
            option.classList.remove("active");
        }
    })
}*/





// ==== Machine Effect ====
function typeWrite(p, t, s){
    const paragraph = p.innerHTML.split('');
    const title = t.innerHTML.split('');
    const subtitle = s.innerHTML.split('');

    
    p.innerHTML = '';
    t.innerHTML = '';
    s.innerHTML = '';

    paragraph.forEach( (letter, index) => {
        setTimeout(() => {
            p.innerHTML += letter;
        }, 75 * index)
    });

    setTimeout(() => {
        title.forEach((letter, index) => {
            setTimeout(() => {
                t.innerHTML += letter
            }, 75 * index)
        });
    }, 750)
    
    setTimeout(() => {
        subtitle.forEach((letter, index) => {
            setTimeout(() => {
                s.innerHTML += letter
            }, 75 * index);
        });
    }, 1800)

}

typeWrite(w_paragraph, w_title, w_subtitle);

// === Cards Effects ===

card.forEach((element, i) => {

    element.addEventListener('mouseover', () => {
        switch(i){
            case 0:
                cardContent[0].style.transform = "none";
                break;
            case 1:
                cardContent[1].style.transform = "none";
                break;
            case 2:
                cardContent[2].style.transform = "none";
                break;
            case 3:
                cardContent[3].style.transform = "none";
                break;
            case 4:
                cardContent[4].style.transform = "none";
                break;
            case 5:
                cardContent[5].style.transform = "none";
                break;
            case 6:
                cardContent[6].style.transform = "none";
                break;
            case 7:
                cardContent[7].style.transform = "none";
                break;
            case 8:
                cardContent[8].style.transform = "none";
                break;
            case 9:
                cardContent[9].style.transform = "none";
                break;
            default:
               break;
        }
    })

    element.addEventListener('mouseout', () => {
        switch(i){
            case 0:
                cardContent[0].style.transform = "translateY(70%)";
                break;
            case 1:
                cardContent[1].style.transform = "translateY(70%)";
                break;
            case 2:
                cardContent[2].style.transform = "translateY(70%)";
                break;
            case 3:
                cardContent[3].style.transform = "translateY(70%)";
                break;
            case 4:
                cardContent[4].style.transform = "translateY(70%)";
                break;
            case 5:
                cardContent[5].style.transform = "translateY(70%)";
                break;
            case 6:
                cardContent[6].style.transform = "translateY(70%)";
                break;
            case 7:
                cardContent[7].style.transform = "translateY(70%)";
                break;
            case 8:
                cardContent[8].style.transform = "translateY(70%)";
                break;
            case 9:
                cardContent[9].style.transform = "translateY(70%)";
                break;
            default:
               break;
        }
    })

})

// ==== Portfolio Buttons ====

function filterOption(value){
    //Option class code
    let buttons = document.querySelectorAll(".portfolio_btn");
        buttons.forEach(option => {
        //check if value equals innerText
        if(value.toUpperCase() == option.innerText.toUpperCase()){
            option.classList.add("active_btn");
        }else{
            option.classList.remove("active_btn");
        }
    })

    //Select all card
    let elements = document.querySelectorAll(".card_container");

    elements.forEach( element => {
       if(value == "todos"){
           element.classList.remove("hide");

       }else{
           if(element.classList.contains(value) == false){
               element.classList.remove("hide");

           }else{
               element.classList.add("hide")
           }
       }
   })
}