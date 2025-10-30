import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import App from "./app.vue"
import Home from "./pages/Home.vue"
import Projects from "./pages/Projects.vue"
import Skills from "./pages/Skills.vue"
import Services from "./pages/Services.vue"
import Blogs from "./pages/Blogs.vue"
import BlogDetail from "./pages/blogs/Detail.vue"
import Contact from "./pages/Contact.vue"
import 'bootstrap-icons/font/bootstrap-icons.css'

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
app.use(router)
app.mount("#app")
