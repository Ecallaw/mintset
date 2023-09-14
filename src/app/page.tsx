import Section from '@/components/Section'
import { MenuReferences } from './strings'
import About from '@/components/About'



export default function Home() {

  return (
    <main className='flex flex-col items-center justify-between'>
      {/* <Section anchor={MenuReferences.HOME} bg='bg-gray-200'>
        <h1>HOME PAGE</h1>
      </Section> */}
      <Section anchor={MenuReferences.ABOUT} bg='bg-gray-200'>
        <About/>
      </Section>
      {/* <Section anchor={MenuReferences.SERVICES} bg='bg-gray-200'>
        <h1>SERVICES PAGE</h1>
      </Section>
      <Section anchor={MenuReferences.CONTACT} bg='bg-blue-200'>
        <h1>CONTACT PAGE</h1>
      </Section> */}
    </main>
  )
}
