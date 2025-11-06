<script setup>
import { useHead } from "@vueuse/head";

useHead({
  title: "Shaheer Siddiqi | Full Stack Web Developer | SS Web Services",
  meta: [
    {
      name: "description",
      content:
        "Full-stack developer specializing in Laravel, Livewire, & MySQL for scalable apps. Serving clients in the US, Canada, UK/EU, & UAE with custom solutions.",
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
            "@type": "Organization",
            "@id": "https://shaheer-siddiqi.vercel.app/",
            "name": "Shaheer Siddiqi",
            "url": "https://shaheer-siddiqi.vercel.app/",
            "logo": "https://shaheer-siddiqi.vercel.app/favicon.png",
            "email": "shaheersiddiqi20@gmail.com",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+923078485757",
              "contactType": "Customer Service",
              "areaServed": ["US", "CA", "GB", "EU"],
              "availableLanguage": ["English", "Urdu"],
            },
          },
          {
            "@type": "LocalBusiness",
            "@id": "https://shaheer-siddiqi.vercel.app/#business",
            "name": "Shaheer Siddiqi",
            "image": "https://shaheer-siddiqi.vercel.app/favicon.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "B-6-32 Eden Value Homes",
              "addressLocality": "Lahore",
              "addressRegion": "Punjab",
              "postalCode": "53700",
              "addressCountry": "PK",
            },
            "telephone": "+923078485757",
            "email": "shaheersiddiqi20@gmail.com",
            "url": "https://shaheer-siddiqi.vercel.app/",
            "priceRange": "$$",
            "openingHours": "Mo-Su 00:00-23:59",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "31.5204",
              "longitude": "74.3587",
            },
            "areaServed": {
              "@type": "Place",
              "name": ["United States", "Canada", "United Kingdom", "Europe"],
            },
            "description": "Shaheer Siddiqi — Full Stack Web Developer based in Pakistan, providing professional web development and digital marketing services for clients in the US, Canada, and Europe.",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "27",
            },
          },
          {
            "@type": "FAQPage",
            "@id": "https://shaheer-siddiqi.vercel.app/#faq",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What services does Shaheer Siddiqi offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "I provide full stack web development, SEO, digital marketing, Google Ads, Meta Ads, and content creation for clients in the US, Canada, and Europe.",
                },
              },
              {
                "@type": "Question",
                "name": "Do you work with international clients?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, I collaborate with clients globally, including the US, Canada, and European countries.",
                },
              },
              {
                "@type": "Question",
                "name": "How can I contact Shaheer Siddiqi?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can reach me via email at shaheersiddiqi20@gmail.com or by phone or whatsapp at +92 307 8485757.",
                },
              },
              {
                "@type": "Question",
                "name": "Do you provide SEO and Google Ads services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, I offer SEO, Google Ads, and performance marketing to help businesses grow their online presence in international markets.",
                },
              },
            ],
          },
        ],
      }),
    },
  ],
});
</script>


<template>
  <div class="home">
    <!-- Enhanced hero section with better visual hierarchy -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Hi, I'm a Full-Stack Developer</h1>
        <p class="hero-subtitle">Crafting beautiful, scalable web experiences with modern technologies</p>
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-number">50+</span>
            <span class="stat-label">Projects Completed</span>
          </div>
          <div class="stat">
            <span class="stat-number">1.5+</span>
            <span class="stat-label">Years Experience</span>
          </div>
          <div class="stat">
            <span class="stat-number">95%</span>
            <span class="stat-label">Happy Clients</span>
          </div>
        </div>
        <div class="hero-buttons">
          <router-link to="/projects" class="btn btn-primary">View My Work</router-link>
          <router-link to="/contact" class="btn btn-secondary">Get in Touch</router-link>
        </div>
      </div>
    </section>

    <!-- Added featured projects section -->
    <section class="featured-projects">
      <h2 class="section-title">Featured Projects</h2>
      <div class="projects-grid">
        <div v-for="project in featuredProjects" :key="project.id" class="project-card">
          <img :src="project.image" :alt="project.title" />
          <h3>{{ project.title }}</h3>
          <p class="project-category">{{ project.category }}</p>
          <p>{{ project.description }}</p>
          <div class="project-tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
          <a :href="project.link" target="_blank" rel="noopener" class="view-more">View Project →</a>
        </div>
      </div>
    </section>

    <section class="featured-services">
      <h2 class="section-title">Featured Services</h2>
      <div class="services-grid">
        <div v-for="service in featuredServices" :key="service.id" class="service-card">
          <div class="service-icon">{{ service.icon }}</div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </section>

    <!-- <section class="recent-blogs">
      <h2 class="section-title">Recent Articles</h2>
      <div class="blogs-preview">
        <div 
          v-for="blog in recentBlogs" 
          :key="blog.id"
          class="blog-preview-card"
          @click="goToBlog(blog.id)"
        >
          <h3>{{ blog.title }}</h3>
          <p class="blog-date">{{ formatDate(blog.date) }}</p>
          <p class="blog-excerpt">{{ blog.excerpt }}</p>
          <span class="read-more">Read More →</span>
        </div>
      </div>
    </section> -->
  </div>
  <section class="cta-section">
    <div class="cta-container">
      <!-- Main Heading -->
      <h2 class="cta-heading">
        Ready to Bring Your Ideas to Life?
      </h2>

      <!-- Description -->
      <p class="cta-description">
        Let's collaborate to create stunning, scalable web experiences that drive results for your business. Whether you
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
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      featuredProjects: [
        {
          id: 1,
          image: '/images/allogo.webp',
          title: 'Airports Limo',
          category: 'Frontend',
          description: 'A fornt-end application for limo company that help to find best price for limo trips in USA',
          tags: ['Livewire', 'css', 'alpine.js'],
          link: 'https://airports-limo.com/'
        },
        {
          id: 2,
          image: '/images/slogo.webp',
          title: 'Sizzlerz',
          category: 'Frontend',
          description: 'A responsive restraunt website that help to get best asian food in UK',
          tags: ['Livewire', 'css', 'alpine.js'],
          link: 'https://sizzlerzrestaurant.co.uk/'
        },
        {
          id: 3,
          image: '/images/salogo.webp',
          title: 'SA Car Traders',
          category: 'Full Stack',
          description: 'It is a car trading and renting website that has an admin panel to add make, model and varient including the car details. Business in UK',
          tags: ['HTML', 'CSS', 'Bootstrap', 'JS', 'Laravel', 'MySQL'],
          link: 'https://sacartraders.bmglobalinc.com/'
        }
      ],
      featuredServices: [
        {
          id: 1,
          icon: '🎨',
          title: 'UI/UX Design',
          description: 'Creating beautiful and intuitive user interfaces',
        },
        {
          id: 2,
          icon: '⚡',
          title: 'Web Development',
          description: 'Building fast and responsive web applications',
          blogId: 2
        },
        {
          id: 3,
          icon: '🔧',
          title: 'Full Stack Solutions',
          description: 'End-to-end development with modern technologies',
          blogId: 3
        }
      ],
      recentBlogs: [
        {
          id: 1,
          title: 'Getting Started with Vue 3',
          date: new Date('2024-01-15'),
          excerpt: 'Learn the fundamentals of Vue 3 and how to build reactive applications...'
        },
      ]
    }
  },
  methods: {
    goToProject(projectId) {
      this.$router.push(`/project/${projectId}`);
    },
    goToBlog(blogId) {
      this.$router.push(`/blog/${blogId}`);
    },
    formatDate(date) {
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.home {
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

.hero {
  padding: 4rem 0;
  text-align: center;
}

.hero-content {
  max-width: 700px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 1rem 0;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #666;
  margin: 0 0 2rem 0;
  line-height: 1.6;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 3rem 0;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.stat {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  word-wrap: break-word;
}

.stat-label {
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.5rem;
  word-wrap: break-word;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  display: inline-block;
  cursor: pointer;
  border: none;
  white-space: nowrap;
}

.btn-primary {
  background-color: #1a1a1a;
  color: #ffffff;
}

.btn-primary:hover {
  background-color: #333;
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.btn-secondary {
  background-color: transparent;
  color: #1a1a1a;
  border: 2px solid #1a1a1a;
}

.btn-secondary:hover {
  background-color: #1a1a1a;
  color: #ffffff;
  transform: translateY(-2px);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 3rem 0 2rem 0;
  text-align: center;
  word-wrap: break-word;
}

.featured-projects {
  margin: 4rem 0;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.project-card {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  min-width: 0;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
}

.project-card img {
  border-radius: 12px;
  max-width: 100%;
  height: auto;
  display: block;
}

.project-card h3 {
  font-size: 1.5rem;
  color: #1a1a1a;
  margin: 1rem 0;
  word-wrap: break-word;
}

.project-category {
  color: #999;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0 0 0.5rem 0;
}

.project-card p {
  color: #666;
  line-height: 1.6;
  margin: 0 0 1rem 0;
  word-wrap: break-word;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
}

.tag {
  background-color: #f0f0f0;
  color: #666;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  white-space: nowrap;
}

.view-more {
  color: #1a1a1a;
  font-weight: 600;
  display: inline-block;
  transition: transform 0.3s ease;
  cursor: pointer;
  text-decoration: none;
}

.project-card:hover .view-more {
  transform: translateX(4px);
}

.featured-services {
  margin: 4rem 0;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.service-card {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
  min-width: 0;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
}

.service-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.service-card h3 {
  font-size: 1.5rem;
  color: #1a1a1a;
  margin: 1rem 0;
  word-wrap: break-word;
}

.service-card p {
  color: #666;
  line-height: 1.6;
  margin: 0 0 1rem 0;
  word-wrap: break-word;
}

.read-more {
  color: #1a1a1a;
  font-weight: 600;
  display: inline-block;
  transition: transform 0.3s ease;
}

.service-card:hover .read-more {
  transform: translateX(4px);
}

.recent-blogs {
  margin: 4rem 0;
}

.blogs-preview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.blog-preview-card {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
  border-left: 4px solid #1a1a1a;
  min-width: 0;
}

.blog-preview-card:hover {
  transform: translateX(8px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.blog-preview-card h3 {
  font-size: 1.3rem;
  color: #1a1a1a;
  margin: 0 0 0.5rem 0;
  word-wrap: break-word;
}

.blog-date {
  color: #999;
  font-size: 0.9rem;
  margin: 0 0 1rem 0;
}

.blog-excerpt {
  color: #666;
  line-height: 1.6;
  margin: 0 0 1rem 0;
  word-wrap: break-word;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .hero-stats {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .projects-grid,
  .services-grid,
  .blogs-preview {
    grid-template-columns: 1fr;
  }
}

/* Extra small devices (375px and below) */
@media (max-width: 375px) {
  .hero {
    padding: 2rem 0;
  }

  .hero-title {
    font-size: 1.75rem;
  }

  .hero-subtitle {
    font-size: 0.9rem;
  }

  .hero-stats {
    grid-template-columns: 1fr;
    gap: 0.75rem;
    padding: 1rem;
    margin: 1.5rem 0;
  }

  .stat-number {
    font-size: 1.5rem;
  }

  .stat-label {
    font-size: 0.8rem;
  }

  .hero-buttons {
    gap: 0.5rem;
  }

  .btn {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }

  .section-title {
    font-size: 1.5rem;
    margin: 2rem 0 1.5rem 0;
  }

  .featured-projects,
  .featured-services {
    margin: 2rem 0;
  }

  .projects-grid,
  .services-grid {
    gap: 1rem;
  }

  .project-card,
  .service-card {
    padding: 1.5rem;
  }

  .project-card h3,
  .service-card h3 {
    font-size: 1.2rem;
    margin: 0.75rem 0;
  }

  .project-card p,
  .service-card p {
    font-size: 0.9rem;
  }

  .project-category {
    font-size: 0.75rem;
  }

  .project-tags {
    gap: 0.35rem;
    margin: 0.75rem 0;
  }

  .tag {
    font-size: 0.7rem;
    padding: 0.2rem 0.5rem;
  }

  .view-more {
    font-size: 0.9rem;
  }

  .service-icon {
    font-size: 2rem;
    margin-bottom: 0.75rem;
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
