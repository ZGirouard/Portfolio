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
  HeroTextContainer,
  WorkTitleContainer,
} from './Home.styles'

export default function Home() {
  return (
    <div>
      <HeroSection>
        <HeroImage
          src="/Hero.svg"
          alt="I build things that feel good and look good"
        />
        <HeroTextContainer>
        <Heading level={4} surface="light" weight="light" italic>Scroll down to see my work</Heading>
        </HeroTextContainer>
      </HeroSection>
      <Divider src="/DIVIDER.svg" alt="Divider" />
      <WorkTitleContainer>
      <Heading level={1} surface="light" weight="bold">
        MY WORK
      </Heading>
      </WorkTitleContainer>
      <WorkList>
      <WorkItem>
          <WorkItemMedia>
            <Heading level={2} surface="light" weight="bold" italic>
              AVITURE
            </Heading>
            <WorkImage
              src="/Aviture.svg"
              alt="Aviture logo"
            />
          </WorkItemMedia>
          <WorkItemText>
            <Heading level={1} surface="light" weight="light" italic>
              HELPING THE AIR FORCE RECRUIT THE NEXT GENERATION
            </Heading>
          </WorkItemText>
        </WorkItem>
        <WorkItem>
          <WorkItemMedia>
            <Heading level={2} surface="light" weight="bold" italic>
              KIEWIT
            </Heading>
            <WorkImage
              src="/Kiewit.svg"
              alt="Kiewit company logo"
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
              UNL
            </Heading>
            <WorkImage
              src="/UNL.svg"
              alt="University of Nebraska–Lincoln logo"
            />
          </WorkItemMedia>
          <WorkItemText>
            <Heading level={1} surface="light" weight="light" italic>
              WORKING ON DESIGN &amp; MANAGEMENT FOR OVER 500 SITES
            </Heading>
          </WorkItemText>
        </WorkItem>
      </WorkList>
    </div>
  )
}
