import styled from 'styled-components'

const TopLeft = styled.div`
  position: absolute;
  top: 6vw;
  left: 6vw;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: min(10vw, 5em);
  line-height: 0.9em;
`

const BottomLeft = styled.div`
  position: absolute;
  bottom: 6vw;
  left: 6vw;
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: min(15vw, 20em);
  line-height: 0.9em;
`

const BottomRight = styled.div`
  position: absolute;
  bottom: 6vw;
  right: 6vw;
  font-family: 'Inter';
  font-weight: 400;
  line-height: 1.5em;
  letter-spacing: -0.01em;
  font-size: 12px;
  text-align: right;
  & > i {
    color: gray;
    font-weight: 500;
    font-size: 20px;
    line-height: 2em;
  }
`

const LeftMiddle = styled.div`
  position: absolute;
  bottom: 50%;
  right: 6vw;
  font-family: 'Inter';
  font-weight: 400;
  line-height: 1em;
  letter-spacing: -0.01em;
  font-size: 12px;
  transform: rotate(90deg) translate3d(50%, 0, 0);
  transform-origin: 100% 50%;
`

const Bar = styled.div`
  position: absolute;
  top: ${(props) => (props.vertical ? '0px' : '50%')};
  left: ${(props) => (props.vertical ? '50%' : '0px')};
  width: ${(props) => (props.vertical ? '2px' : '150px')};
  height: ${(props) => (props.vertical ? '150px' : '2px')};
  background: #252525;
`

const Hamburger = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 6vw;
  right: 6vw;
  & > div {
    position: relative;
    width: 24px;
    height: 2px;
    background: #252525;
    margin-bottom: 6px;
  }
`

export default function Hero() {
  return (
    <>
      <TopLeft>
        <i>Nicholas</i>
        <br />
        <i>Jeon</i>
      </TopLeft>
      <BottomLeft>NJ</BottomLeft>
      <BottomRight>
        <i>Strong Skills:</i>
        <br />
        React · Redux · Next · Gatsby
        <br />
        Node · Express · Socket.IO · GraphQL
        <br />
        MySQL · Postgres · MongoDB · Redis · Firebase
      </BottomRight>
      <LeftMiddle>Senior Software Engineer</LeftMiddle>
      <Hamburger>
        <div>
        </div>
        <div />
        <div />
      </Hamburger>
      <Bar />
      <Bar vertical />
    </>
  )
}
