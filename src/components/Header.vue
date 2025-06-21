<template>
    <header class="header">
      <nav class="nav">
        <div class="container">
          <div class="nav-content">
            <div class="logo">
              <h2>{{ developerName }}</h2>
            </div>
            <ul class="nav-menu" :class="{ active: isMenuOpen }">
              <li><a href="#home" @click="closeMenu">Home</a></li>
              <li><a href="#about" @click="closeMenu">About</a></li>
              <li><a href="#skills" @click="closeMenu">Skills</a></li>
              <li><a href="#projects" @click="closeMenu">Projects</a></li>
              <li><a href="#contact" @click="closeMenu">Contact</a></li>
            </ul>
            <div class="hamburger" @click="toggleMenu" :class="{ active: isMenuOpen }">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const developerName = ref('John Doe')
  const isMenuOpen = ref(false)
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }
  
  const closeMenu = () => {
    isMenuOpen.value = false
  }
  </script>
  
  <style scoped>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
  }
  
  .logo h2 {
    background: linear-gradient(45deg, #667eea, #764ba2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 1.8rem;
  }
  
  .nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
  }
  
  .nav-menu a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;
  }
  
  .nav-menu a:hover {
    color: #667eea;
  }
  
  .nav-menu a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(45deg, #667eea, #764ba2);
    transition: width 0.3s ease;
  }
  
  .nav-menu a:hover::after {
    width: 100%;
  }
  
  .hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    gap: 4px;
  }
  
  .hamburger span {
    width: 25px;
    height: 3px;
    background: #333;
    transition: all 0.3s ease;
  }
  
  .hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  .hamburger.active span:nth-child(2) {
    opacity: 0;
  }
  
  .hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }
  
  @media (max-width: 768px) {
    .hamburger {
      display: flex;
    }
  
    .nav-menu {
      position: fixed;
      top: 70px;
      left: -100%;
      width: 100%;
      height: calc(100vh - 70px);
      background: rgba(255, 255, 255, 0.98);
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      padding-top: 2rem;
      transition: left 0.3s ease;
    }
  
    .nav-menu.active {
      left: 0;
    }
  
    .nav-menu a {
      font-size: 1.2rem;
      padding: 1rem;
    }
  }
  </style>