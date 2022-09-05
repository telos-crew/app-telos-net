import Elections from './pages/elections/Elections.vue'
import Home from './pages/home/Home.vue'
import CaseFile from './pages/case-file/CaseFile.vue'

export const resolveRoutes = [
  { path: '/', component: Home },
  { path: 'elections', component: Elections },
  { path: 'case-file/:id', component: CaseFile }
]
