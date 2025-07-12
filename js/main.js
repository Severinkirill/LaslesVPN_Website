const selectButtons = document.querySelectorAll('#plans .select-btn');

selectButtons.forEach(button => {
    button.addEventListener('click', () => {
        const plan = button.closest('.plan');
        const planContainer = document.querySelector('.plans-container');

        planContainer.querySelectorAll('.plan').forEach(p => p.classList.remove('active'));

        plan.classList.add('active');
    });
});

const testimonialsContainer = document.querySelector('.testimonials-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

if (prevBtn && nextBtn && testimonialsContainer) {
    prevBtn.addEventListener('click', () => {
        testimonialsContainer.scrollLeft -= testimonialsContainer.offsetWidth;
    });

    nextBtn.addEventListener('click', () => {
        testimonialsContainer.scrollLeft += testimonialsContainer.offsetWidth;
    });
}