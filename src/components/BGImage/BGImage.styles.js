import styled from "styled-components"
import Img from "gatsby-image"

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: var(--site-max-width);
  margin: 0 auto;
`
// Site max width is the variable set inside the global variables
export const FakeBGImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 500px;
  z-index: 0;
  border-radius: 10px;
`

export const Content = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
`
