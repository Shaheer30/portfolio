<template>
  <div class="contact">
    <h1 class="page-title">Get In Touch</h1>
    <p class="page-subtitle">Let's discuss your next project</p>

    <div class="contact-container">
      <div class="contact-info">
        <div class="info-item">
          <span class="info-icon">📧</span>
          <div>
            <h3>Email</h3>
            <a href="mailto:shaheersiddiqi20@gmail.com">shaheersiddiqi20@gmail.com</a>
          </div>
        </div>
        <div class="info-item">
          <span class="info-icon">📱</span>
          <div>
            <h3>Phone</h3>
            <a href="tel:+923078485757">+92 (307) 848-5757</a>
          </div>
        </div>
      </div>

      <form @submit.prevent="submitForm" class="contact-form">
        <!-- Success Message -->
        <div v-if="submitStatus === 'success'" class="alert alert-success">
          <span class="alert-icon">✓</span>
          {{ submitMessage }}
        </div>

        <!-- Error Message -->
        <div v-if="submitStatus === 'error'" class="alert alert-error">
          <span class="alert-icon">✗</span>
          {{ submitMessage }}
        </div>

        <!-- Name Field -->
        <div class="form-group">
          <label for="name">Name <span class="required">*</span></label>
          <input v-model="form.name" type="text" id="name" placeholder="Your name" @blur="validateField('name')" />
          <span v-if="errors.name" class="error-message">{{
            errors.name
          }}</span>
        </div>

        <!-- Email Field -->
        <div class="form-group">
          <label for="email">Email <span class="required">*</span></label>
          <input v-model="form.email" type="email" id="email" placeholder="your.email@example.com"
            @blur="validateField('email')" />
          <span v-if="errors.email" class="error-message">{{
            errors.email
          }}</span>
        </div>

        <!-- Company Field -->
        <div class="form-group">
          <label for="company">Company <span class="required">*</span></label>
          <input v-model="form.company" type="text" id="company" placeholder="Your company name"
            @blur="validateField('company')" />
          <span v-if="errors.company" class="error-message">{{
            errors.company
          }}</span>
        </div>

        <!-- Subject Field -->
        <div class="form-group">
          <label for="subject">Subject <span class="required">*</span></label>
          <input v-model="form.subject" type="text" id="subject" placeholder="Message subject"
            @blur="validateField('subject')" />
          <span v-if="errors.subject" class="error-message">{{
            errors.subject
          }}</span>
        </div>

        <!-- Services Checkboxes -->
        <div class="form-group">
          <label class="services-label">Services Interested In <span class="required">*</span></label>
          <div class="checkbox-group">
            <label v-for="service in services" :key="service.id" class="checkbox-label">
              <input type="checkbox" :checked="form.services.includes(service.id)"
                @change="toggleService(service.id)" />
              <span>{{ service.label }}</span>
            </label>
          </div>
          <span v-if="errors.services" class="error-message">{{
            errors.services
          }}</span>
        </div>

        <!-- Message Field -->
        <div class="form-group">
          <label for="message">Message <span class="required">*</span></label>
          <textarea v-model="form.message" id="message" rows="6" placeholder="Your message..."
            @blur="validateField('message')"></textarea>
          <span v-if="errors.message" class="error-message">{{
            errors.message
          }}</span>
        </div>

        <!-- Submit Button -->
        <button type="submit" class="submit-btn" :disabled="isSubmitting">
          {{ isSubmitting ? "Sending..." : "Send Message" }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import emailjs from "@emailjs/browser";

// EmailJS Configuration
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const services = [
  { id: "web-dev", label: "Web Development Services" },
  { id: "web-design", label: "Web Designing Services" },
  { id: "seo", label: "SEO Services" },
];

const form = reactive({
  name: "",
  email: "",
  company: "",
  subject: "",
  message: "",
  services: [],
});

const errors = reactive({});
const isSubmitting = ref(false);
const submitMessage = ref("");
const submitStatus = ref("");

const validateField = (field) => {
  if (field === "name") {
    if (!form.name.trim()) {
      errors.name = "Name is required";
    } else {
      delete errors.name;
    }
  }

  if (field === "email") {
    if (!form.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = "Please enter a valid email";
    } else {
      delete errors.email;
    }
  }

  if (field === "company") {
    if (!form.company.trim()) {
      errors.company = "Company name is required";
    } else {
      delete errors.company;
    }
  }

  if (field === "subject") {
    if (!form.subject.trim()) {
      errors.subject = "Subject is required";
    } else {
      delete errors.subject;
    }
  }

  if (field === "message") {
    if (!form.message.trim()) {
      errors.message = "Message is required";
    } else {
      delete errors.message;
    }
  }
};

const validateForm = () => {
  Object.keys(errors).forEach((key) => delete errors[key]);

  if (!form.name.trim()) {
    errors.name = "Name is required";
  }

  if (!form.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = "Please enter a valid email";
  }

  if (!form.company.trim()) {
    errors.company = "Company name is required";
  }

  if (!form.subject.trim()) {
    errors.subject = "Subject is required";
  }

  if (!form.message.trim()) {
    errors.message = "Message is required";
  }

  if (form.services.length === 0) {
    errors.services = "Please select at least one service";
  }

  return Object.keys(errors).length === 0;
};

const toggleService = (serviceId) => {
  const index = form.services.indexOf(serviceId);
  if (index > -1) {
    form.services.splice(index, 1);
  } else {
    form.services.push(serviceId);
  }
  if (errors.services) {
    delete errors.services;
  }
};

const submitForm = async () => {
  if (!validateForm()) return;

  isSubmitting.value = true;

  const servicesText = form.services
    .map((id) => services.find((s) => s.id === id)?.label)
    .join(", ");

  const templateParams = {
    from_name: form.name,
    from_email: form.email,
    company: form.company,
    subject: form.subject,
    message: form.message,
    services: servicesText,
  };

  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    submitStatus.value = "success";
    submitMessage.value =
      "Message sent successfully! I'll get back to you soon.";

    // Reset form
    form.name = "";
    form.email = "";
    form.company = "";
    form.subject = "";
    form.message = "";
    form.services = [];
    Object.keys(errors).forEach((key) => delete errors[key]);

    setTimeout(() => {
      submitStatus.value = "";
      submitMessage.value = "";
    }, 5000);
  } catch (error) {
    console.error("Email sending failed:", error);
    submitStatus.value = "error";
    submitMessage.value =
      "Failed to send message. Please try again or contact me directly.";

    setTimeout(() => {
      submitStatus.value = "";
      submitMessage.value = "";
    }, 5000);
  } finally {
    isSubmitting.value = false;
  }
};

import { useHead } from "@vueuse/head";

useHead({
  title: "Hire a Full-Stack Web Developer | Laravel & Livewire Expert",
  meta: [
    {
      name: "description",
      content:
        "Contact Shaheer Siddiqi, a Pakistan-based full-stack developer skilled in Laravel, Livewire, MySQL, and responsive web design to discuss your next project.",
    },
    {
      name: "keywords",
      content:
        "contact full stack developer, hire web developer, seo consultant contact, web design quote, freelance developer contact",
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
            "@id": "https://shaheer-siddiqi.vercel.app/contact#webpage",
            "url": "https://shaheer-siddiqi.vercel.app/contact",
            "name": "Contact | Shaheer Siddiqi",
            "description": "Contact Shaheer Siddiqi for web development and digital marketing services.",
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
                  "name": "Contact",
                  "item": "https://shaheer-siddiqi.vercel.app/contact"
                }
              ]
            },
            "mainEntity": {
              "@type": "ContactPage",
              "name": "Get in Touch with Shaheer Siddiqi",
              "about": "Contact information and form for Shaheer Siddiqi.",
              "contactType": "Sales and Support",
              "image": "https://shaheer-siddiqi.vercel.app/images/contact-image.png"
            }
          },
          {
            "@type": "Organization",
            "@id": "https://shaheer-siddiqi.vercel.app/#organization",
            "name": "Shaheer Siddiqi - Web Developer",
            "url": "https://shaheer-siddiqi.vercel.app/",
            "logo": "https://shaheer-siddiqi.vercel.app/images/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+923078485757", // Replace with your actual phone number
              "email": "shaheersiddiqi20@gmail.com",
              "contactType": "Customer Service"
            }
          },
          {
            "@type": "Person",
            "@id": "https://shaheer-siddiqi.vercel.app/#person",
            "name": "Shaheer Siddiqi",
            "url": "https://shaheer-siddiqi.vercel.app/",
            "jobTitle": "Full Stack Web Developer & Digital Marketing Specialist",
            "alumniOf": "The University of Lahore",
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

<style scoped>
.alert {
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 500;
}

.alert-icon {
  font-size: 1.25rem;
  font-weight: bold;
}

.alert-success {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.alert-error {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.required {
  color: #e74c3c;
}

.error-message {
  display: block;
  color: #e74c3c;
  font-size: 0.85rem;
  margin-top: 0.25rem;
}

.services-label {
  display: block;
  margin-bottom: 0.75rem;
  font-weight: 600;
  color: #1a1a1a;
  font-size: 0.95rem;
}

.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.checkbox-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
  color: #333;
}

.checkbox-label input {
  width: 18px;
  height: 18px;
  margin-right: 0.75rem;
  cursor: pointer;
  accent-color: #000;
}

.contact {
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
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 2rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-item {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.info-icon {
  font-size: 2rem;
  min-width: 50px;
  text-align: center;
}

.info-item h3 {
  font-size: 1.2rem;
  color: #1a1a1a;
  margin: 0 0 0.5rem 0;
}

.info-item a {
  color: #666;
  margin: 0;
  text-decoration: none;
}

.contact-form {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #1a1a1a;
}

.submit-btn {
  width: 100%;
  padding: 0.75rem;
  background-color: #1a1a1a;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  background-color: #333;
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.success-message {
  color: #4caf50;
  text-align: center;
  margin-top: 1rem;
  font-weight: 600;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .contact-container {
    grid-template-columns: 1fr;
  }
}
</style>
