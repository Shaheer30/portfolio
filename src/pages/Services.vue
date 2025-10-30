<template>
  <div class="services">
    <h1 class="page-title">My Services</h1>
    <p class="page-subtitle">Comprehensive solutions for your web development needs</p>

    <div class="services-container">
      <div 
        v-for="service in services" 
        :key="service.id"
        class="service-item"
      >
        <div class="service-header">
          <span class="service-number">{{ String(service.id).padStart(2, '0') }}</span>
          <span class="service-icon">{{ service.icon }}</span>
        </div>
        <h2>{{ service.title }}</h2>
        <p class="service-description">{{ service.description }}</p>
        <ul class="service-features">
          <li v-for="feature in service.features" :key="feature">{{ feature }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      services: [
        {
          id: 1,
          icon: '🎨',
          title: 'UI/UX Design',
          description: 'Creating beautiful, intuitive, and user-centered interfaces that engage and delight users.',
          features: ['Wireframing', 'Prototyping', 'User Research', 'Design Systems'],
        },
        {
          id: 2,
          icon: '⚡',
          title: 'Web Development',
          description: 'Building fast, responsive, and scalable web applications using modern technologies.',
          features: ['Frontend Development', 'Backend Development', 'API Integration', 'Performance Optimization'],
        },
        {
          id: 3,
          icon: '🔧',
          title: 'Full Stack Solutions',
          description: 'End-to-end development services combining design and development expertise.',
          features: ['Architecture Design', 'Database Design', 'DevOps', 'Maintenance & Support'],
        },
        {
          id: 4,
          icon: '📱',
          title: 'Responsive Design',
          description: 'Ensuring your website looks perfect on all devices and screen sizes.',
          features: ['Mobile First', 'Cross-browser Testing', 'Accessibility', 'SEO Optimization'],
        },
        {
          id: 5,
          icon: '⚙️',
          title: 'SEO Optimization',
          description: 'Improving website visibility and performance across search engines',
          features: ['Keyword Research', 'On-Page Optimization', 'Technical SEO Audits', 'Performance & Core Web Vitals', 'GMB Creation And Ranking'],
        }
      ]
    }
  }
}
</script>

<style scoped>
.services {
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

.page-title {
  font-size: 3rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 1rem 0;
  text-align: center;
}

.page-subtitle {
  font-size: 1.2rem;
  color: #666;
  text-align: center;
  margin: 0 0 3rem 0;
  line-height: 1.6;
}

.services-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.service-item {
  background-color: #ffffff;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  /* Removed cursor: pointer since cards are no longer clickable */
  position: relative;
  overflow: hidden;
}

.service-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #1a1a1a, #666);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.service-item:hover::before {
  transform: scaleX(1);
}

.service-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
}

.service-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.service-number {
  font-size: 2rem;
  font-weight: 700;
  color: #e0e0e0;
}

.service-icon {
  font-size: 2.5rem;
}

.service-item h2 {
  font-size: 1.5rem;
  color: #1a1a1a;
  margin: 1rem 0;
}

.service-description {
  color: #666;
  line-height: 1.6;
  margin: 1rem 0;
}

.service-features {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
}

.service-features li {
  color: #666;
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.service-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #1a1a1a;
  font-weight: bold;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .services-container {
    grid-template-columns: 1fr;
  }
}
</style>
