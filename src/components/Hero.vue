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
            <div class="image-placeholder">
                <img :src="me2" alt="Profile Image" width="120" height="120" class="profile" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import me2 from '@/assets/me2.jpg'
  import { User as UserIcon } from 'lucide-vue-next'
  
  const name = ref('Shaheer Siddiqi')
  const title = ref('Full Stack Developer')
  const description = ref('I create functional and responsive websites using Laravel, HTML, CSS, and JavaScript. While I mainly work with core web technologies, I\'m also exploring Vue.js and Next.js to expand my frontend skills. I focus on clean code, performance, and delivering user-friendly experiences.');

  </script>
  
  <style scoped>
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding-top: 80px;
  }
  
  .hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }
  
  .hero-title {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.2;
  }
  
  .highlight {
    background: linear-gradient(45deg, #ffd89b, #19547b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 1.5rem;
    opacity: 0.9;
  }
  
  .hero-description {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    opacity: 0.8;
  }
  
  .hero-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  
  .btn-primary {
    background: rgba(255, 255, 255, 0.2);
    border: 2px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
  }
  
  .btn-secondary {
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.5);
  }
  
  .btn-secondary:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  .hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .image-placeholder {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
    border: 3px solid rgba(255, 255, 255, 0.2);
  }

  .profile {
    border-radius: 50%;
    width: 300px;
    height: 300px;
  }
  
  @media (max-width: 768px) {
    .hero-content {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 2rem;
    }
  
    .hero-title {
      font-size: 2.5rem;
    }
  
    .hero-subtitle {
      font-size: 1.3rem;
    }
  
    .image-placeholder {
      width: 200px;
      height: 200px;
    }
  
    .hero-buttons {
      justify-content: center;
    }
  }
  
  @media (max-width: 480px) {
    .hero-title {
      font-size: 2rem;
    }
  
    .hero-buttons {
      flex-direction: column;
      align-items: center;
    }
  }
  </style>