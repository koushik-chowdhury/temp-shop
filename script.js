const track = document.querySelector('.review-track');
const items = document.querySelectorAll('.review-items');
const dotsContainer = document.querySelector('.review-dots');

let index = 0;

// Create dots dynamically
items.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.classList.add('review-dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => moveToSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.review-dot');

function moveToSlide(i) {
  index = i;
  track.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach((d) => d.classList.remove('active'));
  dots[index].classList.add('active');
}

// Auto-slide every 4 seconds
setInterval(() => {
  index = (index + 1) % items.length;
  moveToSlide(index);
}, 4000);

// FAQ

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  item.addEventListener('click', () => {
    // Close all others
    faqItems.forEach((i) => {
      if (i !== item) i.classList.remove('active');
      if (i !== item) i.querySelector('.faq-answer').style.maxHeight = null;
    });

    // Toggle current
    item.classList.toggle('active');
    const answer = item.querySelector('.faq-answer');

    if (item.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
      answer.style.maxHeight = null;
    }
  });
});
