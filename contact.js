const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('ratingValue');

stars.forEach(star => {
    star.addEventListener('click', function() {
        let rating = this.getAttribute('data-value');
        ratingValue.textContent = rating;

        stars.forEach(s => s.classList.remove('active'));
        for (let i = 0; i < rating; i++) {
            stars[i].classList.add('active');
        }
    });
});
