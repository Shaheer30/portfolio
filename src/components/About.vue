<template>
    <section id="about" class="section">
      <div class="container">
        <h2 class="section-title">About Me</h2>
        <div class="about-content">
          <div class="about-text">
            <p class="about-intro">{{ intro }}</p>
            <p class="about-details">{{ details }}</p>
            <div class="about-stats">
              <div class="stat" v-for="stat in stats" :key="stat.label">
                <h3>{{ stat.value }}</h3>
                <p>{{ stat.label }}</p>
              </div>
            </div>
          </div>
          <div class="about-image">
            <div class="image-container">
              <CodeIcon :size="80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Code as CodeIcon } from 'lucide-vue-next'
  
  const intro = ref("I'm a passionate full-stack developer with almost 1 year of experience creating digital solutions that make a difference.")
  
  const details = ref("I specialize in modern web technologies and love turning complex problems into simple, beautiful designs. When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or sharing knowledge with the developer community.")
  
  const stats = ref([
    { value: '10+', label: 'Projects Completed' },
    { value: '1+', label: 'Years Experience' },
    { value: '10+', label: 'Happy Clients' },
    { value: '100%', label: 'Satisfaction Rate' }
  ])
  </script>
  
  <style scoped>
  .about-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 4rem;
    align-items: center;
  }
  
  .about-intro {
    font-size: 1.3rem;
    font-weight: 500;
    color: #2c3e50;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
  
  .about-details {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #666;
    margin-bottom: 2rem;
  }
  
  .about-stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  .stat {
    text-align: center;
    padding: 1.5rem;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border-radius: 10px;
    transition: transform 0.3s ease;
  }
  
  .stat:hover {
    transform: translateY(-5px);
  }
  
  .stat h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  
  .stat p {
    font-size: 0.9rem;
    opacity: 0.9;
  }
  
  .about-image {
    display: flex;
    justify-content: center;
  }
  
  .image-container {
    width: 200px;
    height: 200px;
    border-radius: 20px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
  }
  
  @media (max-width: 768px) {
    .about-content {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  
    .about-stats {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
  
    .stat {
      padding: 1rem;
    }
  
    .stat h3 {
      font-size: 1.5rem;
    }
  }
  
  @media (max-width: 480px) {
    .about-stats {
      grid-template-columns: 1fr;
    }
  
    .about-intro {
      font-size: 1.1rem;
    }
  }
  </style>