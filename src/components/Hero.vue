<template>
  <section id="home" class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            Hi, I'm <span class="highlight">{{ name }}</span>
          </h1>
          <h2 class="hero-subtitle">{{ title }}</h2>
          <p class="hero-description">{{ description }}</p>
          <div class="hero-buttons">
            <a href="#projects" class="btn btn-primary">View My Work</a>
            <a href="#contact" class="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div class="hero-image">
          <div class="image-container">
            <img :src="me2" alt="Profile Image" class="profile" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import me2 from '@/assets/me2.jpg'
const name = ref('Shaheer Siddiqi')
const title = ref('Full Stack Developer')
const description = ref('I create functional and responsive websites using Laravel, HTML, CSS, and JavaScript. While I mainly work with core web technologies, I\'m also exploring Vue.js and Next.js to expand my frontend skills. I focus on clean code, performance, and delivering user-friendly experiences.')
const profileImage = ref('/placeholder.svg?height=300&width=300')
</script>

<style scoped>
.hero {
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: clamp(1rem, 5vw, 2rem);
  padding-top: clamp(5rem, 10vh, 8rem);
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem);
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: center;
}

.hero-text {
  order: 2;
}

.hero-image {
  order: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-title {
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-weight: 700;
  margin-bottom: clamp(0.5rem, 2vw, 1rem);
  line-height: 1.1;
  text-align: center;
}

.highlight {
  background: linear-gradient(45deg, #ffd89b, #19547b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
}

.hero-subtitle {
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  font-weight: 300;
  margin-bottom: clamp(1rem, 3vw, 1.5rem);
  opacity: 0.9;
  text-align: center;
}

.hero-description {
  font-size: clamp(0.95rem, 2.5vw, 1.1rem);
  line-height: 1.6;
  margin-bottom: clamp(1.5rem, 4vw, 2rem);
  opacity: 0.85;
  text-align: center;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-buttons {
  display: flex;
  gap: clamp(0.75rem, 2vw, 1rem);
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem);
  border-radius: 50px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  font-size: clamp(0.9rem, 2vw, 1rem);
  transition: all 0.3s ease;
  text-align: center;
  min-width: 140px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-primary {
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.btn-primary:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.image-container {
  width: clamp(200px, 40vw, 300px);
  height: clamp(200px, 40vw, 300px);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  border: 3px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
  position: relative;
}

.profile {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

/* Tablet and larger screens */
@media (min-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr 1fr;
    gap: clamp(3rem, 6vw, 4rem);
  }
  
  .hero-text {
    order: 1;
  }
  
  .hero-image {
    order: 2;
  }
  
  .hero-title,
  .hero-subtitle,
  .hero-description {
    text-align: left;
  }
  
  .hero-description {
    margin-left: 0;
    margin-right: 0;
  }
  
  .hero-buttons {
    justify-content: flex-start;
  }
}

/* Large screens */
@media (min-width: 1200px) {
  .hero {
    padding-top: clamp(6rem, 12vh, 10rem);
  }
  
  .image-container {
    width: clamp(280px, 25vw, 350px);
    height: clamp(280px, 25vw, 350px);
  }
}

/* Very small screens */
@media (max-width: 480px) {
  .hero-buttons {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  
  .btn {
    width: 100%;
    max-width: 280px;
  }
  
  .hero {
    padding-top: clamp(4rem, 8vh, 6rem);
  }
}

/* Landscape mobile optimization */
@media (max-height: 600px) and (orientation: landscape) {
  .hero {
    min-height: auto;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  
  .hero-content {
    gap: 2rem;
  }
  
  .image-container {
    width: clamp(150px, 30vw, 200px);
    height: clamp(150px, 30vw, 200px);
  }
}
</style>