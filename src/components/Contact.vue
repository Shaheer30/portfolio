<template>
    <section id="contact" class="section contact-section">
        <div class="container">
            <h2 class="section-title">Get In Touch</h2>
            <div class="contact-content">
                <div class="contact-info">
                    <h3>Let's work together!</h3>
                    <p>I'm always interested in new opportunities and exciting projects. Feel free to reach out if you'd
                        like to collaborate or just say hello!</p>

                    <div class="contact-methods">
                        <div class="contact-method">
                            <div class="method-header">
                                <MailIcon :size="20" />
                                <h4>Email</h4>
                            </div>
                            <p>{{ contactInfo.email }}</p>
                        </div>
                        <div class="contact-method">
                            <div class="method-header">
                                <PhoneIcon :size="20" />
                                <h4>Phone</h4>
                            </div>
                            <p>{{ contactInfo.phone }}</p>
                        </div>
                        <div class="contact-method">
                            <div class="method-header">
                                <MapPinIcon :size="20" />
                                <h4>Location</h4>
                            </div>
                            <p>{{ contactInfo.location }}</p>
                        </div>
                    </div>

                    <div class="social-links">
                        <a href="https://github.com/Shaheer30" class="social-link">
                            <GithubIcon :size="24" />
                        </a>
                        <a href="https://www.linkedin.com/in/shaheer-alam-5a916b281/" class="social-link">
                            <LinkedinIcon :size="24" />
                        </a>
                        <!-- <a href="#" class="social-link">
                            <TwitterIcon :size="24" />
                        </a> -->
                    </div>
                </div>

                <form class="contact-form" @submit.prevent="submitForm">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="from_name" v-model="form.name" required
                            :class="{ error: errors.name }">
                        <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
                    </div>

                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="from_email" v-model="form.email" required
                            :class="{ error: errors.email }">
                        <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
                    </div>

                    <div class="form-group">
                        <label for="subject">Subject</label>
                        <input type="text" id="subject" name="subject" v-model="form.subject" required
                            :class="{ error: errors.subject }">
                        <span v-if="errors.subject" class="error-message">{{ errors.subject }}</span>
                    </div>

                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" v-model="form.message" rows="5" required
                            :class="{ error: errors.message }"></textarea>
                        <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
                    </div>

                    <button type="submit" class="btn submit-btn" :disabled="isSubmitting">
                        <span v-if="!isSubmitting">Send Message</span>
                        <span v-else>Sending...</span>
                    </button>

                    <div v-if="submitMessage" class="submit-message" :class="submitStatus">
                        {{ submitMessage }}
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import emailjs from '@emailjs/browser'
import {
    Mail as MailIcon,
    Phone as PhoneIcon,
    MapPin as MapPinIcon,
    Github as GithubIcon,
    Linkedin as LinkedinIcon,
    Twitter as TwitterIcon
} from 'lucide-vue-next'

// EmailJS Configuration
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const contactInfo = ref({
    email: 'shaheersiddiqi20@gmail.com',
    phone: '+92 (307) 848-5757',
    location: 'Lahore, Pakistan'
})

const form = reactive({
    name: '',
    email: '',
    subject: '',
    message: ''
})

const errors = reactive({})
const isSubmitting = ref(false)
const submitMessage = ref('')
const submitStatus = ref('')

const validateForm = () => {
    Object.keys(errors).forEach(key => delete errors[key])

    if (!form.name.trim()) {
        errors.name = 'Name is required'
    }

    if (!form.email.trim()) {
        errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
        errors.email = 'Email is invalid'
    }

    if (!form.subject.trim()) {
        errors.subject = 'Subject is required'
    }

    if (!form.message.trim()) {
        errors.message = 'Message is required'
    }

    return Object.keys(errors).length === 0
}

const submitForm = async (event) => {
    if (!validateForm()) return

    isSubmitting.value = true

    try {
        // Send email using EmailJS
        const result = await emailjs.sendForm(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            event.target,
            EMAILJS_PUBLIC_KEY
        )

        console.log('Email sent successfully:', result.text)
        submitMessage.value = 'Message sent successfully! I\'ll get back to you soon.'
        submitStatus.value = 'success'

        // Reset form
        Object.keys(form).forEach(key => form[key] = '')
    } catch (error) {
        console.error('Email sending failed:', error)
        submitMessage.value = 'Failed to send message. Please try again or contact me directly.'
        submitStatus.value = 'error'
    } finally {
        isSubmitting.value = false
        setTimeout(() => {
            submitMessage.value = ''
        }, 5000)
    }
}
</script>

<style scoped>
.contact-section {
    background: #f8f9fa;
    color: #333;
}

.contact-section .section-title {
    color: #2c3e50;
}

.contact-section .section-title::after {
    background: linear-gradient(45deg, #667eea, #764ba2);
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
}

.contact-info {
    color: #333;
}

.contact-info h3 {
    color: #2c3e50;
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: 600;
}

.contact-info p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    opacity: 0.9;
}

.contact-methods {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.contact-method {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.method-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.method-header h4 {
    font-size: 1.1rem;
    margin: 0;
    color: #2c3e50;
    font-weight: 600;
}

.contact-method p {
    margin: 0;
    margin-left: 2.75rem; /* Align with text after icon + gap */
    opacity: 0.8;
    font-size: 1rem;
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: linear-gradient(45deg, #667eea, #764ba2);
    border-radius: 50%;
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
}

.social-link:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
}

.contact-form {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #2c3e50;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid #e9ecef;
    border-radius: 8px;
    background: #f8f9fa;
    color: #333;
    font-size: 1rem;
    transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #667eea;
    background: white;
}

.form-group input.error,
.form-group textarea.error {
    border-color: #ff6b6b;
}

.error-message {
    color: #ff6b6b;
    font-size: 0.9rem;
    margin-top: 0.25rem;
    display: block;
}

.submit-btn {
    width: 100%;
    background: linear-gradient(45deg, #667eea, #764ba2);
    border: none;
    color: white;
    font-size: 1.1rem;
    padding: 1rem;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.submit-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
}

.submit-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.submit-message {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    font-weight: 500;
}

.submit-message.success {
    background: rgba(76, 175, 80, 0.2);
    border: 1px solid rgba(76, 175, 80, 0.5);
    color: #4caf50;
}

.submit-message.error {
    background: rgba(244, 67, 54, 0.2);
    border: 1px solid rgba(244, 67, 54, 0.5);
    color: #f44336;
}

@media (max-width: 768px) {
    .contact-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .contact-info {
        text-align: center;
    }

    .contact-methods {
        align-items: center;
    }

    .contact-method {
        align-items: center;
    }

    .method-header {
        justify-content: center;
    }

    .contact-method p {
        margin-left: 0;
        text-align: center;
    }

    .social-links {
        justify-content: center;
    }
}

@media (max-width: 480px) {
    .contact-form {
        padding: 1.5rem;
    }

    .contact-info h3 {
        font-size: 1.5rem;
    }
}
</style>