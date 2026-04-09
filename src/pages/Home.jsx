import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Heading from '../components/Heading'
import WorkImage from '../components/WorkImage'
import {
  Divider,
  HeroImage,
  HeroSection,
  WorkItem,
  WorkItemMedia,
  WorkItemText,
  WorkList,
} from './Home.styles'

export default function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash !== '#work') return
    const el = document.getElementById('work')
    if (!el) return
    const id = requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
    return () => cancelAnimationFrame(id)
  }, [hash])

  return (
    <div>
      <HeroSection>
        <HeroImage
          src="/Hero.png"
          alt="I build things that feel good and look good — Zach Girouard."
          width={1281}
          height={511}
          loading="eager"
          decoding="async"
        />
      </HeroSection>
      <Divider src="/DIVIDER.svg" alt="" width={1134} height={67} />
      <Heading level={1} surface="light" weight="bold" style={{ marginBottom: '2rem' }}>
        MY WORK
      </Heading>
      <WorkList id="work">
        <WorkItem>
          <WorkItemMedia>
            <Heading level={2} surface="light" weight="bold" italic>
              UNL
            </Heading>
            <WorkImage
              src="/UNL.png"
              alt="University of Nebraska–Lincoln logo"
              width={593}
              height={593}
            />
          </WorkItemMedia>
          <WorkItemText>
            <Heading level={1} surface="light" weight="light" italic>
              WORKING ON DESIGN AND MANAGEMENT FOR OVER 500 SITES
            </Heading>
          </WorkItemText>
        </WorkItem>
        <WorkItem>
          <WorkItemMedia>
            <Heading level={2} surface="light" weight="bold" italic>
              KIEWIT
            </Heading>
            <WorkImage
              src="/Kiewit.png"
              alt="Kiewit company logo"
              width={593}
              height={593}
            />
          </WorkItemMedia>
          <WorkItemText>
            <Heading level={1} surface="light" weight="light" italic>
              BUILDING C.O.R.G.I FROM THE GROUND UP
            </Heading>
          </WorkItemText>
        </WorkItem>
        <WorkItem>
          <WorkItemMedia>
            <Heading level={2} surface="light" weight="bold" italic>
              AVITURE
            </Heading>
            <WorkImage
              src="/Aviture.png"
              alt="Aviture logo"
              width={593}
              height={593}
            />
          </WorkItemMedia>
          <WorkItemText>
            <Heading level={1} surface="light" weight="light" italic>
              HELPING THE AIR FORCE RECRUIT THE NEXT GENERATION
            </Heading>
          </WorkItemText>
        </WorkItem>
      </WorkList>
    </div>
  )
}
