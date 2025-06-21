<template>
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div>
            <h3>About Us</h3>
            <p>
                I'm a passionate full stack developer focused on creating clean, responsive, and user-friendly websites. I specialize in Laravel, JavaScript, HTML, and CSS, and I'm currently expanding my skills with Vue.js and Next.js.
            </p>
          </div>
          <div>
            <h3>Contact Info</h3>
            <ul>
              <li>Email: shaheersiddiqi20@gmail.com</li>
              <li>Phone: +92 (307) 848-5757</li>
              <li>Address: Lahore, Pakistan</li>
            </ul>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 Shaheer Siddiq. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped>
  .footer {
    background: #2c3e50;
    color: white;
    padding: 3rem 0 1rem;
    position: relative;
    z-index: 10;
    margin-top: 0;
  }
  
  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
    min-height: 200px;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .footer-content > div {
    margin-bottom: 1rem;
  }
  
  .footer-content h3 {
    margin-bottom: 1rem;
  }
  
  .footer-content ul {
    list-style: none;
    padding: 0;
  }
  
  .footer-content ul li {
    margin-bottom: 0.5rem;
  }
  
  .footer-content a {
    color: white;
    text-decoration: none;
  }
  
  .footer-bottom {
    text-align: center;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  </style>
  