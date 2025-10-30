import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import { createHead } from "@vueuse/head"
import App from "./App.vue"
import Home from "./pages/Home.vue"
import Projects from "./pages/Projects.vue"
import Skills from "./pages/Skills.vue"
import Services from "./pages/Services.vue"
import Blogs from "./pages/Blogs.vue"
import BlogDetail from "./pages/blogs/Detail.vue"
import Contact from "./pages/Contact.vue"
import "bootstrap-icons/font/bootstrap-icons.css"

const routes = [
  { path: "/", component: Home },
  { path: "/projects", component: Projects },
  { path: "/skills", component: Skills },
  { path: "/services", component: Services },
  { path: "/blogs", component: Blogs },
  { path: "/blogs/:id", component: BlogDetail },
  { path: "/contact", component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
const head = createHead()

// update canonical tag on route change
router.afterEach((to) => {
  let canonical = document.querySelector('#canonical-link')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    canonical.setAttribute('id', 'canonical-link')
    document.head.appendChild(canonical)
  }
  const base = window.location.origin
  canonical.setAttribute('href', base + to.fullPath.split('?')[0])
})

app.use(router)
app.use(head)
app.mount("#app")
