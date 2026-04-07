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

const WorkRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.25rem;
  justify-content: flex-start;
  align-items: stretch;
  max-width: 1134px;
  margin: 0 auto 1.5rem;
  padding: 0 1rem;
  box-sizing: border-box;

  & > * {
    flex: 1 1 160px;
    min-width: 140px;
    max-width: 280px;
  }
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
      <Heading level={1} surface="light" weight="bold">
        MY WORK
      </Heading>
      <WorkRow>
        <WorkImage
          src="/UNL.png"
          alt="University of Nebraska–Lincoln logo"
          width={593}
          height={593}
        />
        <WorkImage
          src="/Kiewit.png"
          alt="Kiewit company logo"
          width={593}
          height={593}
        />
        <WorkImage
          src="/Aviture.png"
          alt="Aviture logo"
          width={593}
          height={593}
        />
      </WorkRow>
    </div>
  )
}
