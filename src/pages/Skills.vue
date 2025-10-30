<template>
  <div class="skills">
    <div class="page-header">
      <h1 class="page-title">My Skills</h1>
      <p class="page-subtitle">
        Professional expertise in modern web technologies
      </p>
    </div>

    <div class="skills-container">
      <div
        v-for="skillCategory in skillCategories"
        :key="skillCategory.name"
        class="skill-category"
      >
        <h2 class="category-title">{{ skillCategory.name }}</h2>
        <div class="skills-grid">
          <div
            v-for="skill in skillCategory.skills"
            :key="skill.name"
            class="skill-item"
          >
            <div class="skill-header">
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-level">{{ skill.level }}%</span>
            </div>
            <div class="skill-bar">
              <div
                class="skill-progress"
                :style="{ width: skill.level + '%' }"
              ></div>
            </div>
            <p class="skill-description">{{ skill.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <section class="expertise-section">
      <h2 class="section-title">Areas of Expertise</h2>
      <div class="expertise-grid">
        <div
          v-for="expertise in expertiseAreas"
          :key="expertise.title"
          class="expertise-card"
        >
          <div class="expertise-icon">{{ expertise.icon }}</div>
          <h3>{{ expertise.title }}</h3>
          <p>{{ expertise.description }}</p>
          <ul class="expertise-list">
            <li v-for="item in expertise.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Skills',
    data() {
      return {
        skillCategories: [
          {
            name: 'Frontend Development',
            skills: [
              { name: 'Vue.js', level: 45, description: 'Expert in Vue 3, Composition API, and ecosystem' },
              { name: 'JavaScript', level: 50, description: 'Advanced ES6+, async programming, design patterns' },
              { name: 'CSS/SCSS', level: 92, description: 'Advanced styling, animations, responsive design' },
              { name: 'HTML5', level: 95, description: 'Semantic HTML, accessibility, SEO best practices' },
              { name: 'Next.js', level: 48, description: 'Expert in Next.js, React, and the modern JavaScript ecosystem' }
            ]
          },
          {
            name: 'Backend Development',
            skills: [
              { name: 'Laravel', level: 68, description: 'Express, Fastify, middleware, REST APIs' },
              { name: 'MySQL', level: 70, description: 'MongoDB, PostgreSQL, Redis, data modeling' },
              { name: 'API Design', level: 93, description: 'RESTful APIs, API security' },
              { name: 'Authentication', level: 91, description: 'JWT, OAuth2, session management, security' },
            ]
          },
          {
            name: 'Design & UX',
            skills: [
              { name: 'UI Design', level: 88, description: 'Figma, design systems, component design' },
              { name: 'UX Research', level: 85, description: 'User testing, wireframing, prototyping' },
              { name: 'Responsive Design', level: 94, description: 'Mobile-first, cross-browser compatibility' },
              { name: 'Accessibility', level: 90, description: 'WCAG compliance, semantic HTML, ARIA' },
              { name: 'Design Tools', level: 69, description: 'Figma, Adobe XD' },
              { name: 'Web Performance', level: 87, description: 'Optimization, Core Web Vitals, SEO' }
            ]
          },
          {
            name: 'Tools & Platforms',
            skills: [
              { name: 'Git & GitHub', level: 95, description: 'Version control, branching, collaboration' },
              { name: 'Build Tools', level: 90, description: 'Webpack, Vite, Rollup, bundling' },
              { name: 'Docker', level: 70, description: 'Intermediate in Docker, containerization, and scalable deployment workflows' },
            ]
          }
        ],
  expertiseAreas: [
          {
            icon: '🎯',
            title: 'Full Stack Development',
            description: 'End-to-end web application development with modern technologies',
            items: ['Architecture Design', 'Database Design', 'API Development', 'Frontend Implementation', 'Deployment & Maintenance']
          },
          {
            icon: '⚡',
            title: 'Performance Optimization',
            description: 'Building fast, scalable applications that deliver excellent user experience',
            items: ['Code Splitting', 'Lazy Loading', 'Caching Strategies', 'Database Optimization', 'CDN Integration']
          },
          {
            icon: '🔒',
            title: 'Security & Best Practices',
            description: 'Implementing secure, maintainable code following industry standards',
            items: ['Authentication & Authorization', 'Data Encryption', 'Code Review', 'Security Audits']
          },
          {
            icon: '📱',
            title: 'Responsive & Accessible Design',
            description: 'Creating inclusive web experiences that work on all devices',
            items: ['Mobile-First Design', 'Cross-Browser Testing', 'Touch Optimization', 'Screen Reader Support']
          },
          {
            icon: '⚙️',
            title: 'SEO Optimization',
            description: 'Improving website visibility and performance across search engines',
            items: ['Keyword Research', 'On-Page Optimization', 'Technical SEO Audits', 'Performance & Core Web Vitals', 'GMB Creation And Ranking']
          }
        ]
      }
    }
  }
</script>

<style scoped>
.skills {
  animation: fadeIn 0.6s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 1rem 0;
}

.page-subtitle {
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
}

.skills-container {
  margin-bottom: 4rem;
}

.skill-category {
  margin-bottom: 3rem;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.category-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 2rem 0;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f0f0f0;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.skill-item {
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.skill-item:hover {
  background-color: #f0f0f0;
  transform: translateY(-2px);
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.skill-name {
  font-weight: 600;
  color: #1a1a1a;
  font-size: 1rem;
}

.skill-level {
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.skill-bar {
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.75rem;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, #1a1a1a, #333);
  border-radius: 4px;
  transition: width 0.6s ease;
}

.skill-description {
  font-size: 0.85rem;
  color: #666;
  margin: 0;
  line-height: 1.5;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 3rem 0 2rem 0;
  text-align: center;
}

.expertise-section {
  margin: 4rem 0;
}

.expertise-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.expertise-card {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.expertise-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
}

.expertise-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.expertise-card h3 {
  font-size: 1.3rem;
  color: #1a1a1a;
  margin: 1rem 0;
}

.expertise-card p {
  color: #666;
  line-height: 1.6;
  margin: 0 0 1rem 0;
}

.expertise-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.expertise-list li {
  color: #666;
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.expertise-list li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #1a1a1a;
  font-weight: bold;
}


@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .skills-grid,
  .expertise-grid{
    grid-template-columns: 1fr;
  }
}
</style>
