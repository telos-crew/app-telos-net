import Elections from './pages/elections/Elections.vue'
// import Home_old from './pages/home/Home_old.vue.vue'
import Home from './pages/home/Home.vue'
import CaseFile from './pages/case-file/CaseFile.vue'

export const resolveRoutes = [
  // { path: '/_old', component: Home_old },
  { path: '/', component: Home },
  { path: 'elections', component: Elections },
  { path: 'case-file/:id', component: CaseFile }
]
