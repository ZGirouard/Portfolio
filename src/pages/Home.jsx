import styled from '@emotion/styled'
import Heading from '../components/Heading'
import WorkImage from '../components/WorkImage'

const Divider = styled.img`
  display: block;
  width: 100%;
  max-width: 1134px;
  height: auto;
  margin: 1.5rem auto;
`

const WorkList = styled.div`
  max-width: 1134px;
  margin: 0 auto;
  padding: 0 1rem;
  box-sizing: border-box;
`

const WorkItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.25rem 2rem;
  margin-bottom: 2rem;
  box-sizing: border-box;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: stretch;
  }
`

const WorkItemMedia = styled.div`
  flex: 0 1 auto;
  min-width: 0;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.75rem;
`

const WorkItemText = styled.div`
  flex: 1 1 240px;
  min-width: 0;
`

export default function Home() {
  return (
    <div>
      <Heading level={1} surface="light" weight="bold">
        I BUILD THINGS THAT
      </Heading>
      <Heading level={1} surface="dark" weight="bold">
        FEEL GOOD &amp; LOOK GOOD.
      </Heading>
      <Divider src="/DIVIDER.svg" alt="" width={1134} height={67} />
      <Heading level={1} surface="light" weight="bold" style={{ marginBottom: '2rem' }}>
        MY WORK
      </Heading>
      <WorkList>
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
