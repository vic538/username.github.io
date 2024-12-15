let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
    const sliderContainer = document.querySelector('.slider-container');
    const offset = -index * 100; 
    sliderContainer.style.transform = `translateX(${offset}%)`; 
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; 
    showSlide(currentSlide);
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("excursion-form");
    const responseMessage = document.getElementById("response-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();


        const formData = new FormData(form);
        const name = formData.get("name");
        const email = formData.get("email");
        const date = formData.get("date");
        const message = formData.get("message");

        // Здесь вы можете добавить код для отправки данных на сервер
        // Например, с использованием fetch или XMLHttpRequest


        responseMessage.innerHTML = `<h4>Спасибо, ${name}! Ваша заявка на экскурсию отправлена.</h4>`;
        

        form.reset();
    });
});

setInterval(nextSlide, 5000);


showSlide(currentSlide);