const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", navToggle);

function navToggle() {
    btn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
}

// function to show current page 
document.querySelectorAll(".nav-link")
    .forEach(link => {
        if(link.href === window.location.href) {
            link.setAttribute("aria-current", "page")
        }
    });

const flipButtons = document.querySelectorAll(".flip-btn");
const svgIcons = document.querySelectorAll('.flip-btn-icon')

flipButtons.forEach((button, index) => {
    button.addEventListener("click", (event) => cardFlipEffect(event, index));
});

function cardFlipEffect(event, index) {
    const clickedButton = event.currentTarget;
    const card = clickedButton.closest('.action-card');
    
    card.classList.toggle('flipped');

    // get front and back card
    const front = card.querySelector('.action-front');
    const back = card.querySelector('.action-back');

    front.classList.toggle('flex');
    front.classList.toggle('hidden');
    back.classList.toggle('flex');
    back.classList.toggle('hidden');

    // Update the specific SVG element based on the index
    if (back.classList.contains('flex')) {
        svgIcons[index].innerHTML = '<svg data-v-b3c5db62="" xmlns="http://www.w3.org/2000/svg" width="18" height="17"><path data-v-b3c5db62="" fill="#012F34" fill-rule="evenodd" d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"></path></svg>';
    } else {
        svgIcons[index].innerHTML = '<svg data-v-b3c5db62="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="flip-btn-icon"><path data-v-b3c5db62="" fill="#012F34" fill-rule="evenodd" d="M10 0v5.999L16 6v4h-6v6H6v-6H0V6h6V0h4z"></path></svg>';
    }
    
}

