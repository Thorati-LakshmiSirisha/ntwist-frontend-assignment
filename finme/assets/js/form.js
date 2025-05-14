let startTime
const form = document.getElementById('contactForm')
const timer = document.getElementById('timer')
const confirmation = document.getElementById('confirmation')

form.addEventListener('focusin', () => {
  if (!startTime) startTime = new Date()
})

form.addEventListener('submit', e => {
  e.preventDefault()
  const endTime = new Date()
  const duration = Math.round((endTime - startTime) / 1000)
  timer.textContent = `You took ${duration} seconds to fill the form.`
  confirmation.textContent = 'Form submitted successfully!'
  confirmation.style.color = 'green'
  form.reset()
  startTime = null
})
