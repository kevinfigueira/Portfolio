// ================= Select DOM =================
const w_paragraph = document.querySelector('.wrapper_paragraph');
const w_title = document.querySelector('.wrapper_title');
const w_subtitle = document.querySelector('.wrapper_subtitle');


// ================= Functions =================


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
        w_paragraph.setAttribute('data-content', '|')
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