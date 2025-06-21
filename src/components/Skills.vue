<template>
    <section id="skills" class="section skills-section">
      <div class="container">
        <h2 class="section-title">Skills & Technologies</h2>
        <div class="skills-content">
          <div class="skills-grid">
            <div class="skill-category" v-for="category in skillCategories" :key="category.name">
              <h3 class="category-title">{{ category.name }}</h3>
              <div class="skills-list">
                <div class="skill-item" v-for="skill in category.skills" :key="skill.name">
                  <div class="skill-info">
                    <span class="skill-name">{{ skill.name }}</span>
                    <span class="skill-percentage">{{ skill.level }}%</span>
                  </div>
                  <div class="skill-bar">
                    <div 
                      class="skill-progress" 
                      :style="{ width: skill.level + '%' }"
                      :data-level="skill.level"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const skillCategories = ref([
    {
      name: 'Frontend',
      skills: [
        { name: 'JavaScript', level: 35 },
        { name: 'Vue.js', level: 10 },
        { name: 'Next.js', level: 15 },
        { name: 'HTML/CSS', level: 95 },
      ]
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Laravel', level: 40 },
        { name: 'MySQL', level: 55 },
      ]
    },
    {
      name: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Figma', level: 60 },
        { name: 'Docker', level: 40 },
      ]
    }
  ])
  </script>
  
  <style scoped>
  .skills-section {
    background: #f8f9fa;
  }
  
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
  }
  
  .skill-category {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .skill-category:hover {
    transform: translateY(-5px);
  }
  
  .category-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 1.5rem;
    text-align: center;
    position: relative;
  }
  
  .category-title::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 2px;
    background: linear-gradient(45deg, #667eea, #764ba2);
  }
  
  .skills-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .skill-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .skill-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .skill-name {
    font-weight: 500;
    color: #2c3e50;
  }
  
  .skill-percentage {
    font-size: 0.9rem;
    color: #667eea;
    font-weight: 600;
  }
  
  .skill-bar {
    height: 8px;
    background: #e9ecef;
    border-radius: 4px;
    overflow: hidden;
  }
  
  .skill-progress {
    height: 100%;
    background: linear-gradient(45deg, #667eea, #764ba2);
    border-radius: 4px;
    transition: width 1s ease-in-out;
    position: relative;
  }
  
  .skill-progress::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: shimmer 2s infinite;
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  @media (max-width: 768px) {
    .skills-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  
    .skill-category {
      padding: 1.5rem;
    }
  }
  </style>