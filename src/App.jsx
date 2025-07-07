import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <main className="p-6 space-y-16">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

