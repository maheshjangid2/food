





document.addEventListener('scroll', function () {
    const targetElement = document.getElementById('targetElement');
    const maxCount = 120;
let count = 0;
const counterElement = document.querySelector('#counter');
    const rect = targetElement.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

    if (isVisible) {
        console.log('Target element is now visible!');
        const interval = setInterval(() => {
            counterElement.textContent = ` ${count}k+`;
            count++;
            if (count > maxCount) {
                clearInterval(interval);
            }
        }, 100);
    }
});




document.addEventListener('scroll', function () {
    const targetElement = document.getElementById('targetElement');
    const rect = targetElement.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

    if (isVisible) {
        console.log('Target element is now visible!');
        let count = 0;
        const counterElement1 = document.querySelector('#call');
        const largecount = 210;
        const interval1 = setInterval(() => {
            counterElement1.textContent = ` ${count}k+`;
            count++;
            if (count > largecount) {
                clearInterval(interval1);
            }
        }, 100);
    }
});


document.addEventListener('scroll', function () {
    const targetElement = document.getElementById('targetElement');
    const rect = targetElement.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

    if (isVisible) {
        console.log('Target element is now visible!');
        let count = 0;
        const counterElement2 = document.querySelector('#tall');
        const highcount = 190;
        const interval2 = setInterval(() => {
            counterElement2.textContent = ` ${count}k+`;
            count++;
            if (count > highcount) {
                clearInterval(interval2);
            }
        }, 10);
    }
});



const maxCount = 10;
let count = 0;

function updateCount() {
    if (count <= maxCount) {
        console.log(`Count: ${count}`);
        count++;
        setTimeout(updateCount, 1000); // Call this function again after 1 second
    } else {
        console.log('Done!');
    }
}



const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});