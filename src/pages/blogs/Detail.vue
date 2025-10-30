<template>
  <div class="blog-detail">
    <router-link to="/blogs" class="back-link">← Back to Articles</router-link>

    <article v-if="blog" class="article">
      <header class="article-header">
        <span class="article-category">{{ blog.category }}</span>
        <h1>{{ blog.title }}</h1>
        <p class="article-date">{{ formatDate(blog.date) }}</p>
      </header>

      <div class="article-image">{{ blog.emoji }}</div>

      <div class="article-content">
        <p>{{ blog.content }}</p>
        <p>
          This article explores the key concepts and best practices for {{ blog.title.toLowerCase() }}. 
          Whether you're a beginner or an experienced developer, you'll find valuable insights and practical examples.
        </p>
        <h2>Key Takeaways</h2>
        <ul>
          <li>Understanding the fundamentals is crucial for mastery</li>
          <li>Practice and experimentation lead to better results</li>
          <li>Stay updated with the latest trends and best practices</li>
          <li>Community engagement helps accelerate learning</li>
        </ul>
        <h2>Getting Started</h2>
        <p>
          To get started with {{ blog.title }}, follow these steps and gradually build your expertise. 
          Remember that learning is a continuous process, and every expert was once a beginner.
        </p>
      </div>

      <div class="article-footer">
        <div class="author-info">
          <div class="author-avatar">👨‍💻</div>
          <div>
            <p class="author-name">John Developer</p>
            <p class="author-bio">Full-stack developer passionate about web technologies</p>
          </div>
        </div>
      </div>
    </article>

    <section class="related-articles">
      <h2>Related Articles</h2>
      <div class="related-grid">
        <div 
          v-for="relatedBlog in relatedArticles" 
          :key="relatedBlog.id"
          class="related-card"
          @click="goToBlog(relatedBlog.id)"
        >
          <span class="related-emoji">{{ relatedBlog.emoji }}</span>
          <h3>{{ relatedBlog.title }}</h3>
          <p>{{ relatedBlog.excerpt }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'BlogDetail',
  data() {
    return {
      blogs: [
        {
          id: 1,
          title: 'Getting Started with Vue 3',
          category: 'Vue',
          date: new Date('2024-01-15'),
          excerpt: 'Learn the fundamentals of Vue 3 and how to build reactive applications with the Composition API.',
          emoji: '🚀',
          content: 'Vue 3 is a progressive JavaScript framework for building user interfaces. It provides reactive data binding and component composition...'
        },
        {
          id: 2,
          title: 'CSS Grid Mastery',
          category: 'CSS',
          date: new Date('2024-01-10'),
          excerpt: 'A comprehensive guide to mastering CSS Grid for creating modern, responsive layouts.',
          emoji: '🎨',
          content: 'CSS Grid is a powerful layout system that allows you to create two-dimensional layouts with rows and columns...'
        },
        {
          id: 3,
          title: 'JavaScript Best Practices',
          category: 'JavaScript',
          date: new Date('2024-01-05'),
          excerpt: 'Essential tips and tricks for writing clean, maintainable, and efficient JavaScript code.',
          emoji: '⚡',
          content: 'Writing good JavaScript code is essential for building scalable applications. Here are some best practices...'
        },
        {
          id: 4,
          title: 'Web Design Trends 2024',
          category: 'Web Design',
          date: new Date('2024-01-01'),
          excerpt: 'Explore the latest web design trends and how to implement them in your projects.',
          emoji: '✨',
          content: 'Web design is constantly evolving. In 2024, we see several exciting trends emerging...'
        },
        {
          id: 5,
          title: 'Vue Composition API Deep Dive',
          category: 'Vue',
          date: new Date('2023-12-28'),
          excerpt: 'Understanding the Composition API and how to use it for better code organization.',
          emoji: '🔧',
          content: 'The Composition API is a new way to organize and reuse logic in Vue applications...'
        },
        {
          id: 6,
          title: 'Responsive Design Techniques',
          category: 'CSS',
          date: new Date('2023-12-20'),
          excerpt: 'Master responsive design with flexbox, grid, and media queries.',
          emoji: '📱',
          content: 'Responsive design is crucial for modern web applications. Let\'s explore the best techniques...'
        }
      ]
    }
  },
  computed: {
    blog() {
      const id = parseInt(this.$route.params.id);
      return this.blogs.find(b => b.id === id);
    },
    relatedArticles() {
      if (!this.blog) return [];
      return this.blogs
        .filter(b => b.id !== this.blog.id && b.category === this.blog.category)
        .slice(0, 3);
    }
  },
  methods: {
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
.blog-detail {
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

.back-link {
  display: inline-block;
  color: #1a1a1a;
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 2rem;
  transition: transform 0.3s ease;
}

.back-link:hover {
  transform: translateX(-4px);
}

.article {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 3rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  margin-bottom: 3rem;
}

.article-header {
  margin-bottom: 2rem;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 2rem;
}

.article-category {
  display: inline-block;
  background-color: #f0f0f0;
  color: #1a1a1a;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.article-header h1 {
  font-size: 2.5rem;
  color: #1a1a1a;
  margin: 1rem 0;
  line-height: 1.3;
}

.article-date {
  color: #999;
  font-size: 1rem;
  margin: 0;
}

.article-image {
  font-size: 5rem;
  text-align: center;
  margin: 2rem 0;
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 12px;
}

.article-content {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #333;
}

.article-content p {
  margin: 1.5rem 0;
}

.article-content h2 {
  font-size: 1.8rem;
  color: #1a1a1a;
  margin: 2rem 0 1rem 0;
}

.article-content ul {
  margin: 1.5rem 0;
  padding-left: 2rem;
}

.article-content li {
  margin: 0.75rem 0;
  color: #333;
}

.article-footer {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px solid #f0f0f0;
}

.author-info {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.author-avatar {
  font-size: 3rem;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  border-radius: 50%;
}

.author-name {
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
}

.author-bio {
  color: #666;
  margin: 0.25rem 0 0 0;
}

.related-articles {
  margin-top: 4rem;
}

.related-articles h2 {
  font-size: 2rem;
  color: #1a1a1a;
  margin-bottom: 2rem;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.related-card {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
}

.related-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
}

.related-emoji {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 1rem;
}

.related-card h3 {
  font-size: 1.2rem;
  color: #1a1a1a;
  margin: 0 0 0.5rem 0;
}

.related-card p {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
}

@media (max-width: 768px) {
  .article {
    padding: 1.5rem;
  }

  .article-header h1 {
    font-size: 1.8rem;
  }

  .article-image {
    font-size: 3rem;
  }

  .article-content {
    font-size: 1rem;
  }

  .related-grid {
    grid-template-columns: 1fr;
  }
}
</style>
