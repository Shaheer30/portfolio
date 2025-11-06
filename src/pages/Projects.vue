<script setup>
import { useHead } from "@vueuse/head";

useHead({
  title: "SS Web Services Portfolio | Projects & Case Studies",
  meta: [
    {
      name: "description",
      content:
        "Explore Shaheer Siddiqi’s project showcase—full-stack web developer from Pakistan specializing in Laravel, Livewire, MySQL, and responsive web design.",
    },
    {
      name: "keywords",
      content:
        "web development, web design, fullstack dev, fullstack dev, website creators, front end developer, backend developer, website development, Graphic design, web design, graphic,website design, motion graphic, webdesigner, vector background, vector art, logo designing, graphic designing, professional logo design, custom logo design, graphic design services, website banner design, graphic design portfolio, digital marketing, SEO, web development, content marketing, social media marketing, , online courses, search engine optimization, fullstack web developer, SEO agency for small business, local SEO services near me, Google Ads management, hire content writer, web development certification, PPC services, buy guest post",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": "https://shaheer-siddiqi.vercel.app/projects#webpage",
            "url": "https://shaheer-siddiqi.vercel.app/projects",
            "name": "Projects | Shaheer Siddiqi - Full Stack Web Developer Portfolio",
            "description": "A portfolio showcasing professional web development projects, SEO implementations, and digital marketing campaigns by Shaheer Siddiqi.",
            "isPartOf": {
              "@type": "WebSite",
              "url": "https://shaheer-siddiqi.vercel.app/",
              "name": "Shaheer Siddiqi"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://shaheer-siddiqi.vercel.app/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Projects",
                  "item": "https://shaheer-siddiqi.vercel.app/projects"
                }
              ]
            },
            "mainEntity": {
              "@type": "CollectionPage",
              "name": "Shaheer Siddiqi's Portfolio Projects",
              "mainEntityOfPage": "https://shaheer-siddiqi.vercel.app/projects",
              "about": "A curated collection of web development and digital marketing projects.",
              "hasPart": [
                {
                  "@type": "CreativeWork",
                  "name": "Project Name Example",
                  "description": "A brief description of the project, technologies used, and the problem solved.",
                  "url": "https://shaheer-siddiqi.vercel.app/projects/project-slug",
                  "image": "https://shaheer-siddiqi.vercel.app/images/project-name-thumbnail.png",
                  "keywords": ["React", "Next.js", "Full Stack", "Web Development"],
                  "creator": {
                    "@type": "Person",
                    "@id": "https://shaheer-siddiqi.vercel.app/#person",
                    "name": "Shaheer Siddiqi"
                  }
                }
              ]
            }
          },
          {
            "@type": "FAQPage",
            "@id": "https://shaheer-siddiqi.vercel.app/projects#faq",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What technologies are used in your projects?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "My projects primarily utilize modern web technologies including Next.js, React, Node.js, and various databases (MongoDB, PostgreSQL). I also focus on headless CMS integration and cloud services like Vercel and AWS."
                }
              },
              {
                "@type": "Question",
                "name": "Can I view the source code for these projects?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For client confidentiality, full source code is not public. However, I often provide links to live demos and, for personal projects, a link to the GitHub repository is available."
                }
              },
              {
                "@type": "Question",
                "name": "Do you only work on front-end development?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, I am a full-stack developer. My work includes front-end implementation, back-end API development, database management, and cloud deployment."
                }
              },
              {
                "@type": "Question",
                "name": "How can I start a project with you?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can start by contacting me through the contact form on the website or by emailing me directly at shaheersiddiqi20@gmail.com to discuss your project requirements and scope."
                }
              }
            ]
          },
          {
            "@type": "Organization",
            "@id": "https://shaheer-siddiqi.vercel.app/#organization",
            "name": "Shaheer Siddiqi - Web Developer",
            "url": "https://shaheer-siddiqi.vercel.app/",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+923078485757",
              "email": "shaheersiddiqi20@gmail.com",
              "contactType": "Customer Service"
            }
          },
          {
            "@type": "Person",
            "@id": "https://shaheer-siddiqi.vercel.app/#person",
            "name": "Shaheer Siddiqi",
            "url": "https://shaheer-siddiqi.vercel.app/",
            "jobTitle": "Full Stack Web Developer & Digital Marketer",
            "alumniOf": "SS Web Services",
            "company": "SS Web Services",
            "knowsAbout": ["Web Development", "SEO", "Google Ads", "Vue.js", "Next.js", "web designng"],
            "sameAs": [
              "https://www.linkedin.com/in/shaheersiddiqi/",
              "https://github.com/ShaheerSiddiqi"
            ]
          }
        ]
      }),
    },
  ],
});
</script>

<template>
  <div class="projects">
    <div class="page-header">
      <h1 class="page-title">My Projects</h1>
      <p class="page-subtitle">Showcasing my best work and technical expertise</p>
    </div>

    <div class="filters">
      <button v-for="category in categories" :key="category" @click="selectedCategory = category"
        :class="{ active: selectedCategory === category }" class="filter-btn">
        {{ category }}
      </button>
    </div>

    <div class="projects-container">
      <div v-for="project in filteredProjects" :key="project.id" class="project-item">
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
    <section class="cta-section">
      <div class="cta-container">
        <!-- Main Heading -->
        <h2 class="cta-heading">
          Ready to Bring Your Ideas to Life?
        </h2>

        <!-- Description -->
        <p class="cta-description">
          Let's collaborate to create stunning, scalable web experiences that drive results for your business. Whether
          you
          need a new project or want to enhance an existing one, I'm here to help.
        </p>

        <!-- CTA Buttons -->
        <div class="cta-buttons">
          <a href="tel:+923078485757" class="btn btn-primary">
            Start Your Project
          </a>
          <router-link to="/contact" class="btn btn-secondary">
            Schedule a Consultation
          </router-link>
        </div>

        <!-- Additional Info -->
        <p class="cta-info">
          💬 Response within 24 hours • No obligation • Free initial consultation
        </p>
      </div>
    </section>
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
  margin-bottom: 96px;
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
  max-width: 100%;
  height: auto;
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

/* Tablet Breakpoint */
@media (max-width: 1024px) {
  .page-title {
    font-size: 2.5rem;
  }

  .project-header {
    padding: 2.5rem 2rem;
  }

  .project-content {
    padding: 2rem;
  }

  .project-content h2 {
    font-size: 1.6rem;
  }

  .project-description {
    font-size: 0.95rem;
  }
}

/* Mobile Breakpoint */
@media (max-width: 768px) {
  .page-header {
    margin-bottom: 2rem;
  }

  .page-title {
    font-size: 1.75rem;
  }

  .page-subtitle {
    font-size: 1rem;
  }

  .filters {
    gap: 0.75rem;
    margin-bottom: 2rem;
  }

  .filter-btn {
    padding: 0.4rem 1rem;
    font-size: 0.85rem;
  }

  .projects-container {
    gap: 2rem;
  }

  .project-item {
    grid-template-columns: 1fr;
  }

  .project-header {
    padding: 2rem;
    min-height: 250px;
  }

  .project-image {
    max-width: 200px;
  }

  .project-content {
    padding: 1.5rem;
  }

  .project-content h2 {
    font-size: 1.4rem;
    margin-bottom: 0.75rem;
  }

  .project-description {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .project-details {
    margin: 1rem 0;
  }

  .detail {
    margin-bottom: 0.75rem;
  }

  .label {
    font-size: 0.8rem;
    margin-bottom: 0.35rem;
  }

  .tech {
    font-size: 0.75rem;
    padding: 0.2rem 0.6rem;
  }

  .project-links {
    margin-top: 1rem;
  }

  .link-btn {
    padding: 0.4rem 0.8rem;
    font-size: 0.85rem;
  }

  .project-meta {
    top: 0.75rem;
    right: 0.75rem;
  }

  .category-badge,
  .year-badge {
    padding: 0.2rem 0.6rem;
    font-size: 0.7rem;
  }
}

/* Small Mobile Breakpoint */
@media (max-width: 480px) {
  .page-title {
    font-size: 1.5rem;
  }

  .page-subtitle {
    font-size: 0.9rem;
  }

  .filters {
    gap: 0.5rem;
  }

  .filter-btn {
    padding: 0.35rem 0.85rem;
    font-size: 0.8rem;
  }

  .projects-container {
    gap: 1.5rem;
  }

  .project-header {
    padding: 1.5rem;
    min-height: 200px;
  }

  .project-image {
    max-width: 160px;
  }

  .project-content {
    padding: 1rem;
  }

  .project-content h2 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  .project-description {
    font-size: 0.85rem;
    margin-bottom: 0.75rem;
  }

  .project-details {
    margin: 0.75rem 0;
  }

  .tech-stack {
    gap: 0.35rem;
  }

  .tech {
    font-size: 0.7rem;
    padding: 0.15rem 0.5rem;
  }

  .link-btn {
    padding: 0.35rem 0.7rem;
    font-size: 0.8rem;
  }
}

.cta-section {
  width: 100%;
  background-color: #000000;
  padding: 80px 16px;
}

.cta-container {
  max-width: 56rem;
  margin: 0 auto;
  text-align: center;
}

.cta-heading {
  font-size: 2.25rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 24px;
  line-height: 1.2;
}

@media (min-width: 768px) {
  .cta-heading {
    font-size: 3rem;
  }
}

.cta-description {
  font-size: 1.125rem;
  color: #d1d5db;
  margin-bottom: 32px;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.cta-buttons {
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
}

@media (min-width: 640px) {
  .cta-buttons {
    flex-direction: row;
  }
}

.btn {
  padding: 16px 32px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.btn-primary {
  background-color: #ffffff;
  color: #000000;
}

.btn-primary:hover {
  background-color: #f3f4f6;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.btn-secondary {
  background-color: #000000;
  color: #ffffff;
  border: 2px solid #ffffff;
}

.btn-secondary:hover {
  background-color: #ffffff;
  color: #000000;
}

.cta-info {
  font-size: 0.875rem;
  color: #9ca3af;
}
</style>
