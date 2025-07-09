import Layout from '../components/Layout'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Lookbook AR Drop',
    description: 'Interactive AR-powered fashion drop for digital runway.',
    image: '/projects/lookbook.jpg',
  },
  {
    title: 'Client Portal (ClientOS)',
    description: 'Branded system for managing creative projects.',
    image: '/projects/clientos.jpg',
  },
  {
    title: 'Digital Invite Experience',
    description: 'Custom 3D RSVP microsite for an exclusive event.',
    image: '/projects/invite.jpg',
  },
]

export default function Home() {
  return (
    <Layout>
  <main className="h-screen w-screen overflow-x-scroll snap-x snap-mandatory flex scroll-smooth">
    {projects.map((project, i) => (
      <section
        key={i}
        className="h-screen w-screen flex-shrink-0 flex flex-col md:flex-row items-center justify-center gap-8 px-6 snap-start"
      >
        <div className="w-full md:w-1/2 h-96 bg-gray-100 rounded-xl shadow-xl overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-serif mb-4">{project.title}</h2>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <a href="#" className="text-blue-600 underline">
            Read more →
          </a>
        </div>
      </section>
    ))}
  </main>
</Layout>

  )
}
