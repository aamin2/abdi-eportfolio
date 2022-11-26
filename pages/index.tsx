import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import About from './components/About'
import ContactMe from './components/ContactMe '
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import { Experience, PageInfo, Skill, Project, Social} from "../typings"
import { fetchSocials } from '../utils/fetchSocials'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchexperiences } from '../utils/fetchExperience'
import { fetchSkills } from '../utils/fetchSkills'
import Image from 'next/image'

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

export const getStaticProps = async () =>{
    const experiences: Experience[] = await fetchexperiences();
    const skills: Skill[] = await fetchSkills();
    const projects: Project[] = await fetchProjects();
    const socials: Social[] = await fetchSocials();

    return {
      props: {
        experiences,
        skills,
        projects,
        socials,
      },
      revalidate: 10,
    }
}




const Home = ({experiences, skills, projects, socials}: Props) => {
  return (

  
    
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Abdi-Fatahs Portfolio</title>
      </Head>

    <Header socials={socials}/>
      <section id="hero" className='snap-start'>

      <Hero  />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences}/>
      </section>

      <section id='skills' className='snap-start'>
      <Skills skills={skills}/>
      </section>

      <section id='projects' className='snap-start'>
        <Projects projects={projects}/>
      </section>

      {/* Contact Me */}

      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <Image
            height={10}
            width={10}
            className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
            src="https://st4.depositphotos.com/18556724/28145/v/450/depositphotos_281451194-stock-illustration-initial-letter-elegant-logo-template.jpg" 
            alt=""
            />
            
          </div>
        </footer>
      </Link>

    </div>
  )
}

export default Home


