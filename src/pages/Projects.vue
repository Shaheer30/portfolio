<template>
  <div class="projects">
    <div class="page-header">
      <h1 class="page-title">My Projects</h1>
      <p class="page-subtitle">Showcasing my best work and technical expertise</p>
    </div>

    <div class="filters">
      <button 
        v-for="category in categories" 
        :key="category"
        @click="selectedCategory = category"
        :class="{ active: selectedCategory === category }"
        class="filter-btn"
      >
        {{ category }}
      </button>
    </div>

    <div class="projects-container">
      <div 
        v-for="project in filteredProjects" 
        :key="project.id"
        class="project-item"
      >
        <div class="project-header">
          <img :src="project.image" :alt="project.title" class="project-image" />
          <div class="project-meta">
            <span class="category-badge">{{ project.category }}</span>
            <span class="year-badge">{{ project.year }}</span>
          </div>
        </div>
        <div class="project-content">
          <h2>{{ project.title }}</h2>
          <p class="project-description">{{ project.description }}</p>
          <div class="project-details">
            <div class="detail">
              <span class="label">Technologies:</span>
              <div class="tech-stack">
                <span v-for="tech in project.technologies" :key="tech" class="tech">{{ tech }}</span>
              </div>
            </div>
            <div class="detail">
              <span class="label">Role:</span>
              <span class="value">{{ project.role }}</span>
            </div>
          </div>
          <div class="project-links">
            <a :href="project.link" target="_blank" rel="noopener" class="link-btn">View Live →</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      selectedCategory: 'All',
      categories: ['All', 'Full Stack', 'Frontend', 'Backend', 'UI/UX'],
      projects: [
        {
          id: 1,
          image: '/images/atllogo.webp',
          title: 'ATL Airports Limo',
          category: 'Full Stack',
          year: '2024',
          description: 'It is Atlanta, GA based a luxury limo service site.',
          technologies: ['Livewire', 'CSS', 'Alpine.js', 'Laravel', 'MySQL'],
          role: 'Full Stack Developer',
          link: 'https://atlairportslimo.com/'
        },
        {
          id: 2,
          image: '/images/edlogo.webp',
          title: 'Expert Drive',
          category: 'Full Stack',
          year: '2024',
          description: 'It is a UK based driving school site where clients get classes and to pass there driving test.',
          technologies: ['HTML', 'CSS', 'JS', 'Laravel', 'MySQL'],
          role: 'Full Stack',
          link: 'https://expertdrive.co.uk/'
        },
        {
          id: 3,
          image: '/images/tslogo.webp',
          title: 'Tinystars',
          category: 'UI/UX',
          year: '2025',
          description: 'A daycare site Based in Alberta, Canada',
          technologies: ['Figma', 'HTML', 'CSS', 'JS', 'laravel'],
          role: 'Full Stack',
          link: 'https://tinystars.ca/'
        },
        {
          id: 4,
          image: '/images/wtylogo.webp',
          title: 'Whistler to YVR',
          category: 'Full Stack',
          year: '2025',
          description: 'A shuttle booking site for a company based in Whistler, BC, Canada',
          technologies: ['HTML', 'CSS', 'JS', 'laravel', 'MySQL'],
          role: 'Full Stack',
          link: 'https://whistlertoyvr.com/'
        },
        {
          id: 5,
          image: '/images/kplogo.webp',
          title: 'Kids Planet',
          category: 'Frontend',
          year: '2024',
          description: 'It is a daycare website that is based in Alberta, Canada in different location.',
          technologies: ['HTML', 'CSS', 'JS', 'Laravel'],
          role: 'Frontend Developer',
          link: 'https://thekidsplanet.ca/'
        },
      ]
    }
  },
  computed: {
    filteredProjects() {
      if (this.selectedCategory === 'All') {
        return this.projects;
      }
      return this.projects.filter(p => p.category === this.selectedCategory);
    }
  }
}
</script>

<style scoped>
.projects {
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

.filters {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.5rem 1.25rem;
  border: 2px solid #e0e0e0;
  background-color: #ffffff;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  color: #666;
}

.filter-btn:hover {
  border-color: #1a1a1a;
  color: #1a1a1a;
}

.filter-btn.active {
  background-color: #1a1a1a;
  color: #ffffff;
  border-color: #1a1a1a;
}

.projects-container {
  display: grid;
  gap: 3rem;
}

.project-item {
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.project-item:hover {
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
  transform: translateY(-4px);
}

.project-header {
  background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.project-image {
  border-radius: 15px;
}

.project-meta {
  display: flex;
  gap: 1rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.category-badge,
.year-badge {
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.project-content {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.project-content h2 {
  font-size: 1.8rem;
  color: #1a1a1a;
  margin: 0 0 1rem 0;
}

.project-description {
  color: #666;
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
}

.project-details {
  margin: 1.5rem 0;
}

.detail {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
}

.label {
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.value {
  color: #666;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech {
  background-color: #f0f0f0;
  color: #666;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
}

.project-links {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.link-btn {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  display: inline-block;
  background-color: #1a1a1a;
  color: #ffffff;
}

.link-btn:hover {
  background-color: #333;
  transform: translateX(4px);
}

.link-btn.secondary {
  background-color: transparent;
  color: #1a1a1a;
  border: 2px solid #1a1a1a;
}

.link-btn.secondary:hover {
  background-color: #1a1a1a;
  color: #ffffff;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .project-item {
    grid-template-columns: 1fr;
  }

  .project-header {
    padding: 2rem;
  }

  .project-content {
    padding: 1.5rem;
  }

  .project-content h2 {
    font-size: 1.5rem;
  }
}
</style>
