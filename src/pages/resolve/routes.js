import Home from './pages/home/Home.vue'
import Elections from './pages/elections/Elections.vue'
import Cases from './pages/cases/Cases.vue'
import CaseFile from './pages/case-file/CaseFile.vue'

export const resolveRoutes = [
  { path: '/', component: Home, name: 'Resolve' },
  { path: 'elections', component: Elections, name: 'Elections' },
  { path: 'cases', component: Cases, name: 'Cases' },
  { path: 'case/:id', component: CaseFile }
]
