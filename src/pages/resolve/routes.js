import Elections from './pages/elections/Elections.vue'
import Home from './pages/home/Home.vue'
import CaseFile from './pages/case-file/CaseFile.vue'

export const resolveRoutes = [
  { path: '/', component: Home, name: 'Resolve' },
  { path: 'elections', component: Elections, name: 'Elections' },
  { path: 'case-file/:id', component: CaseFile }
]
