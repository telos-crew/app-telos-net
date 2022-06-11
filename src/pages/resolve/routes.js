import Elections from './pages/elections/Elections.vue'
import Home from './pages/Home/Home.vue'

export const resolveRoutes = [
  { path: '/', component: Home },
  { path: 'elections', component: Elections }
]
