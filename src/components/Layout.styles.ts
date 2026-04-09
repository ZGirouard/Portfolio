import styled from '@emotion/styled'

export const Shell = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Main = styled.main`
  flex: 1;
  min-width: 0;
  padding: clamp(1.25rem, 4vw, 2rem) clamp(1rem, 4vw, 1.5rem);
  max-width: 56rem;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
`
