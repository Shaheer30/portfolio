<template>
    <section id="projects" class="section">
      <div class="container">
        <h2 class="section-title">Featured Projects</h2>
        <div class="projects-grid">
          <div class="project-card" v-for="project in projects" :key="project.id">
            <div class="project-image">
              <div class="image-placeholder">
                <FolderIcon :size="40" />
              </div>
              <div class="project-overlay">
                <div class="project-links">
                  <a :href="project.demo" class="project-link" target="_blank" rel="noopener">
                    <ExternalLinkIcon :size="20" />
                  </a>
                  <!-- <a :href="project.github" class="project-link" target="_blank" rel="noopener">
                    <GithubIcon :size="20" />
                  </a> -->
                </div>
              </div>
            </div>
            <div class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-tech">
                <span class="tech-tag" v-for="tech in project.technologies" :key="tech">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Folder as FolderIcon, ExternalLink as ExternalLinkIcon, Github as GithubIcon } from 'lucide-vue-next'
  
  const projects = ref([
    {
      id: 1,
      title: 'Airports Limo',
      description: 'A fornt-end application for limo company that help to find best price for limo trips.',
      technologies: ['Laravel', 'Html', 'Css', 'Bootstrap'],
      demo: 'https://airports-limo.com/',
    //   github: 'https://github.com'
    },
    {
      id: 2,
      title: 'Miami Airports Limo',
      description: 'A fornt-end application for limo company that help to find best price for limo trips.',
      technologies: ['Laravel', 'Html', 'Css', 'Bootstrap'],
      demo: 'https://miamiairportslimo.com/',
      github: 'https://github.com'
    },
    {
      id: 3,
      title: 'Sizzlerz',
      description: 'A responsive restraunt website that help to find best food .',
      technologies: ['Laravel', 'Html', 'Css', 'Bootstrap'],
      demo: 'https://sizzler.bmglobalinc.com/',
    //   github: 'https://github.com'
    },
    {
      id: 4,
      title: 'Whistler to YVR',
      description: 'A shuttle service webiste in whistler. In this the booking form is submitting in the backend and the bookings are shown on the admin panel. There are the services CRUD to add the services and these services can be accessed in the booking form in the client side',
      technologies: ['Laravel', 'Html', 'Css', 'Bootstrap', 'MySQL', 'Js'],
      demo: 'https://whistlertoyvr.com/',
    //   github: 'https://github.com'
    },
    {
      id: 5,
      title: 'SA Car Traders',
      description: 'It is a car trading and renting website that has an admin panel to add make, model and varient including the car details.',
      technologies: ['Laravel', 'Html', 'Css', 'Bootstrap', 'MySQL', 'Js'],
      demo: 'https://sacartraders.bmglobalinc.com/',
    //   github: 'https://github.com'
    },
  ])
  </script>
  
  <style scoped>
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
  }
  
  .project-card {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .project-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
  
  .project-image {
    position: relative;
    height: 200px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    overflow: hidden;
  }
  
  .image-placeholder {
    opacity: 0.7;
  }
  
  .project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .project-card:hover .project-overlay {
    opacity: 1;
  }
  
  .project-links {
    display: flex;
    gap: 1rem;
  }
  
  .project-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
  }
  
  .project-link:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }
  
  .project-content {
    padding: 1.5rem;
  }
  
  .project-title {
    font-size: 1.3rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 0.5rem;
  }
  
  .project-description {
    color: #666;
    line-height: 1.6;
    margin-bottom: 1rem;
    font-size: 0.95rem;
  }
  
  .project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .tech-tag {
    background: linear-gradient(45deg, #667eea, #764ba2);
    color: white;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 500;
  }
  
  @media (max-width: 768px) {
    .projects-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  
    .project-card {
      margin: 0 auto;
      max-width: 400px;
    }
  }
  
  @media (max-width: 480px) {
    .projects-grid {
      grid-template-columns: 1fr;
    }
  
    .project-content {
      padding: 1rem;
    }
  }
  </style>