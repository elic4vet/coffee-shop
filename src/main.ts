import './style.css'
import { homeContent } from './home'
import { aboutContent } from './about'
import { contactContent } from './contact'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <nav>
      <ul class="menu">
        <li><a href="#" id="home-link">Home</a></li>
        <li><a href="#" id="about-link">About</a></li>
        <li><a href="#" id="contact-link">Contact</a></li>
      </ul>
    </nav>
    <main id="main-content">
      <img src="/assets/hero.jpg" alt="Coffee Shop" class="hero" />
      <h1>Welcome to the Coffee Shop</h1>
      <p>Click on the menu to navigate.</p>
    </main>
  </div>
`

// Handle navigation
const mainContent = document.querySelector<HTMLDivElement>('#main-content')!

document.querySelector('#home-link')!.addEventListener('click', () => {
  mainContent.innerHTML = homeContent
})

document.querySelector('#about-link')!.addEventListener('click', () => {
  mainContent.innerHTML = aboutContent
})

document.querySelector('#contact-link')!.addEventListener('click', () => {
  mainContent.innerHTML = contactContent
})