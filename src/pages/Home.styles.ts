import styled from '@emotion/styled'

export const Divider = styled.img`
  display: block;
  width: 100%;
  max-width: 1134px;
  height: auto;
  margin: 1.5rem auto;
`

export const HeroSection = styled.section`
  max-width: 1134px;
  margin: 0 auto;
  padding: 0 1rem;
  box-sizing: border-box;
`

export const HeroImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin: 0;
`

export const WorkList = styled.div`
  max-width: 1134px;
  margin: 0 auto;
  padding: 0 1rem;
  box-sizing: border-box;
`

export const WorkItem = styled.div`
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

export const WorkItemMedia = styled.div`
  flex: 0 1 auto;
  min-width: 0;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.75rem;
`

export const WorkItemText = styled.div`
  flex: 1 1 240px;
  min-width: 0;
  max-width: 100%;
`
