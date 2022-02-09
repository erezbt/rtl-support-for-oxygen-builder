import Image from 'next/image'
import AboutSection from '../components/Blocks/Abouts/AboutSection'
import Cta2 from '../components/Blocks/Cta/Cta2'
import Hero2 from '../components/Blocks/Heros/Hero2'
import ServicesSection from '../components/Blocks/Services/ServicesSection'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Hero2 />
      <AboutSection />
      <ServicesSection />
      <Cta2 />
    </>
  )
}
