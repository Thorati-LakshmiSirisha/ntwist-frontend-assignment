const list = document.getElementById('nameList')
const button = document.getElementById('sortBtn')

button.addEventListener('click', () => {
  const items = Array.from(list.children)
  items.sort((a, b) => a.textContent.localeCompare(b.textContent))
  list.innerHTML = ''
  items.forEach(item => list.appendChild(item))
})

// Star rating
const stars = document.querySelectorAll('.star-rating span')
const ratingText = document.getElementById('ratingValue')
let currentRating = 0

stars.forEach(star => {
  star.addEventListener('click', () => {
    currentRating = star.dataset.value
    ratingText.textContent = `You rated: ${currentRating} stars`
    stars.forEach(s => s.classList.remove('rated'))
    for (let i = 0; i < currentRating; i++) {
      stars[i].classList.add('rated')
    }
  })
})
