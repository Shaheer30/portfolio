<template>
  <div class="blogs">
    <h1 class="page-title">Blog Articles</h1>
    <p class="page-subtitle">Insights and tutorials on web development</p>

    <div class="filters">
      <button 
        v-for="category in categories" 
        :key="category"
        :class="{ active: selectedCategory === category }"
        @click="selectedCategory = category"
        class="filter-btn"
      >
        {{ category }}
      </button>
    </div>

    <div class="blogs-grid">
      <div 
        v-for="blog in filteredBlogs" 
        :key="blog.id"
        class="blog-card"
      >
        <div class="blog-image">{{ blog.emoji }}</div>
        <div class="blog-content">
          <span class="blog-category">{{ blog.category }}</span>
          <h2>{{ blog.title }}</h2>
          <p class="blog-date">{{ formatDate(blog.date) }}</p>
          <p class="blog-excerpt">{{ blog.excerpt }}</p>
          <!-- Changed from card click to button click only -->
          <button @click="goToBlog(blog.id)" class="read-more-btn">Read Article →</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blogs',
  data() {
    return {
      selectedCategory: 'All',
      categories: ['All', 'Vue', 'CSS', 'JavaScript', 'Web Design'],
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
    filteredBlogs() {
      if (this.selectedCategory === 'All') {
        return this.blogs;
      }
      return this.blogs.filter(blog => blog.category === this.selectedCategory);
    }
  },
  methods: {
    goToBlog(blogId) {
      this.$router.push(`/blogs/${blogId}`);
    },
    formatDate(date) {
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    }
  }
}
</script>

<style scoped>
.blogs {
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
  margin: 0 0 2rem 0;
}

.filters {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2rem 0;
}

.filter-btn {
  padding: 0.5rem 1.25rem;
  border: 2px solid #e0e0e0;
  background-color: transparent;
  color: #666;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
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

.blogs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.blog-card {
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
}

.blog-image {
  background: linear-gradient(135deg, #f5f5f5, #e8e8e8);
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  transition: transform 0.3s ease;
}

.blog-card:hover .blog-image {
  transform: scale(1.05);
}

.blog-content {
  padding: 2rem;
}

.blog-category {
  display: inline-block;
  background-color: #f0f0f0;
  color: #1a1a1a;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.blog-card h2 {
  font-size: 1.3rem;
  color: #1a1a1a;
  margin: 0.5rem 0;
  line-height: 1.4;
}

.blog-date {
  color: #999;
  font-size: 0.9rem;
  margin: 0.5rem 0;
}

.blog-excerpt {
  color: #666;
  line-height: 1.6;
  margin: 1rem 0;
  font-size: 0.95rem;
}

.read-more-btn {
  background: none;
  border: none;
  color: #1a1a1a;
  font-weight: 600;
  cursor: pointer;
  display: inline-block;
  transition: transform 0.3s ease;
  padding: 0;
  font-size: 1rem;
}

.read-more-btn:hover {
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .blogs-grid {
    grid-template-columns: 1fr;
  }
}
</style>
