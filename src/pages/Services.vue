<script setup>
import { useHead } from "@vueuse/head";

useHead({
  title: "Web Development Services | Laravel, Livewire & Custom Web Apps",
  meta: [
    {
      name: "description",
      content:
        "Discover how Pakistan-based full-stack developer Shaheer Siddiqi creates scalable web solutions with Laravel, Livewire, MySQL, and responsive design.",
    },
    {
      name: "keywords",
      content:
        "web development services, seo services, google ads management, web design agency, next.js development, laravel services, full stack developer services",
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
            "@id": "https://shaheer-siddiqi.vercel.app/services#webpage",
            "url": "https://shaheer-siddiqi.vercel.app/services",
            "name": "Services Offered | Shaheer Siddiqi",
            "description": "Professional full stack web development, SEO, and digital marketing services.",
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
                  "name": "Services",
                  "item": "https://shaheer-siddiqi.vercel.app/services"
                }
              ]
            },
            "mainEntity": {
              "@type": "ServicePage",
              "name": "Web Development and Digital Marketing Services",
              "description": "A catalog of services including full stack development, SEO, and paid advertising.",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Primary Services Catalog",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Full Stack Web Development",
                      "description": "Building modern, scalable web applications using **Next.js**, **Vue.js**, and **Laravel** with database solutions like **MySQL**.",
                      "serviceType": "Custom Web Application Development"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Search Engine Optimization (SEO)",
                      "description": "Comprehensive **SEO** services including technical optimization, keyword research, and content strategy to improve organic rankings and drive targeted traffic.",
                      "serviceType": "Organic Visibility and Ranking Improvement"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Google Ads Management",
                      "description": "Creation, optimization, and management of **Google Ads (PPC)** campaigns to maximize ROI and generate immediate leads and sales.",
                      "serviceType": "Paid Search and PPC Campaigns"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Web Designing",
                      "description": "Professional **UI/UX** and front-end design focused on creating intuitive, high-converting interfaces and modern user experiences.",
                      "serviceType": "UI/UX and Front-End Design"
                    }
                  }
                ]
              }
            }
          },
          {
            "@type": "FAQPage",
            "@id": "https://shaheer-siddiqi.vercel.app/services#faq",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is included in your Full Stack Web Development service?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "My development service covers the entire process from planning and design to front-end (Next.js/Vue.js) and back-end development (Laravel/Node.js), database setup (MySQL), and final deployment."
                }
              },
              {
                "@type": "Question",
                "name": "How long does a typical SEO project take to show results?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SEO is a long-term strategy. You typically start seeing significant positive trends in organic visibility and rankings within 3 to 6 months, depending on the competitiveness of your industry."
                }
              },
              {
                "@type": "Question",
                "name": "Can you manage my existing Google Ads campaign?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, I can audit and take over the management of your existing Google Ads campaigns to optimize performance, lower cost-per-conversion, and improve targeting efficiency."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer ongoing support after a website launch?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, I offer various support packages that cover maintenance, security updates, bug fixes, and continuous feature development after the initial website launch."
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
            "jobTitle": "Full Stack Web Developer",
            "sameAs": [
              "https://www.linkedin.com/in/shaheersiddiqi/",
              "https://github.com/ShaheerSiddiqi"
            ]
          }
        ]
      })
    }
  ]
});
</script>

<template>
  <div class="services">
    <h1 class="page-title">My Services</h1>
    <p class="page-subtitle">Comprehensive solutions for your web development needs</p>

    <div class="services-container">
      <div v-for="service in services" :key="service.id" class="service-item">
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
