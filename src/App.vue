<template>
  <div class="app">
    <nav class="navbar">
      <div class="nav-container">
        <router-link to="/" class="logo"><img src="/images/logo.png" alt="Full Stack Dev Portfolio logo" /></router-link>
        <!-- Added hamburger menu button for mobile navigation -->
        <button class="nav-toggler" @click="toggleMenu" :class="{ active: menuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <!-- Added mobile menu state class -->
        <ul class="nav-links" :class="{ open: menuOpen }">
          <li><router-link to="/" :class="{ active: $route.path === '/' }" @click="menuOpen = false">Home</router-link></li>
          <li><router-link to="/projects" :class="{ active: $route.path === '/projects' }" @click="menuOpen = false">Projects</router-link></li>
          <li><router-link to="/skills" :class="{ active: $route.path === '/skills' }" @click="menuOpen = false">Skills</router-link></li>
          <li><router-link to="/services" :class="{ active: $route.path === '/services' }" @click="menuOpen = false">Services</router-link></li>
          <!-- <li><router-link to="/blogs" :class="{ active: $route.path === '/blogs' }" @click="menuOpen = false">Blog</router-link></li> -->
          <li><router-link to="/contact" :class="{ active: $route.path === '/contact' }" @click="menuOpen = false">Contact</router-link></li>
        </ul>
      </div>
    </nav>

    <main class="main-content">
      <router-view />
    </main>

    <footer class="footer">
      <div class="footer-content">
        <!-- Updated about section with better description -->
        <div class="footer-section">
          <img src="/images/logo-footer.png" alt="Full Stack Dev Portfolio logo" />
          <p>
            Building modern, scalable, and user-focused web applications with clean code and performance in mind.
          </p>
        </div>

        <!-- Added contact details column -->
        <div class="footer-section">
          <h4>Contact Details</h4>
          <div class="contact-details">
            <div class="contact-item">
              <span class="contact-icon">📧</span>
              <div>
                <p class="contact-label">Email</p>
                <a href="mailto:shaheersiddiqi20@gmail.com">shaheersiddiqi20@gmail.com</a>
              </div>
            </div>
            <div class="contact-item">
              <span class="contact-icon">📱</span>
              <div>
                <p class="contact-label">Phone</p>
                <a href="tel:+923078485757">+92 (307) 848-5757</a>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul class="footer-links">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/projects">Projects</router-link></li>
            <li><router-link to="/skills">Skills</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>

        <!-- Replaced text social links with professional social icons -->
        <div class="footer-section">
          <h4>Connect With Me</h4>
          <div class="social-links">
            <a href="https://github.com/Shaheer30" target="_blank" rel="noopener noreferrer" class="social-icon" title="GitHub">
              <i class="bi bi-github"></i>
            </a>
            <a href="www.linkedin.com/in/shaheer-alam-siddiqui-5a916b281" target="_blank" rel="noopener noreferrer" class="social-icon" title="LinkedIn">
              <i class="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Shaheer Siddiqi. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  }
}
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f8f9fa;
}

.navbar {
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  text-decoration: none;
  letter-spacing: -0.5px;
}

/* Added hamburger menu button styles */
.nav-toggler {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  gap: 0.4rem;
}

.nav-toggler span {
  width: 25px;
  height: 3px;
  background-color: #1a1a1a;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.nav-toggler.active span:nth-child(1) {
  transform: rotate(45deg) translate(10px, 10px);
}

.nav-toggler.active span:nth-child(2) {
  opacity: 0;
}

.nav-toggler.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-links a {
  text-decoration: none;
  color: #666;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.3s ease;
  position: relative;
}

.nav-links a:hover {
  color: #1a1a1a;
}

.nav-links a.active {
  color: #1a1a1a;
}

.nav-links a.active::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #1a1a1a;
}

.main-content {
  flex: 1;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
}

.footer {
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 3rem 2rem 1rem;
  margin-top: 4rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h4 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #ffffff;
}

.footer-section p {
  color: #aaa;
  line-height: 1.6;
  font-size: 0.95rem;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: #aaa;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #ffffff;
}

.social-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.social-icon svg {
  width: 20px;
  height: 20px;
}

.social-icon:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-3px);
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.contact-item {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
}

.contact-icon {
  font-size: 1.5rem;
  min-width: 30px;
  text-align: center;
}

.contact-item div {
  flex: 1;
}

.contact-label {
  font-size: 0.85rem;
  color: #999;
  margin: 0 0 0.25rem 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.contact-item a,
.contact-item p {
  color: #aaa;
  text-decoration: none;
  font-size: 0.95rem;
  margin: 0;
  transition: color 0.3s ease;
}

.contact-item a:hover {
  color: #ffffff;
}

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 2rem;
  border-top: 1px solid #333;
  text-align: center;
  color: #666;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .nav-container {
    flex-direction: row;
    gap: 0;
  }

  /* Show hamburger menu on mobile */
  .nav-toggler {
    display: flex;
  }

  /* Mobile menu styles with smooth animation */
  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #ffffff;
    flex-direction: column;
    gap: 0;
    padding: 1rem 2rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }

  .nav-links.open {
    max-height: 400px;
  }

  .nav-links li {
    padding: 0.75rem 0;
    border-bottom: 1px solid #f0f0f0;
  }

  .nav-links li:last-child {
    border-bottom: none;
  }

  .nav-links a {
    display: block;
  }

  .nav-links a.active::after {
    display: none;
  }

  .nav-links a.active {
    color: #1a1a1a;
    font-weight: 600;
  }

  .footer-content {
    grid-template-columns: 1fr;
  }

  .main-content {
    padding: 1rem;
  }

  .contact-item {
    gap: 0.5rem;
  }

  .social-links {
    gap: 0.75rem;
  }

  .social-icon {
    width: 36px;
    height: 36px;
  }

  .social-icon svg {
    width: 18px;
    height: 18px;
  }
}
</style>
