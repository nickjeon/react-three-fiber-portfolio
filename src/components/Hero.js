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

const Menu = styled.div`
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
const SocialLink = styled.a`
    padding-top: 0.25rem;
    margin-left: 1rem;
    color: rgb(160 170 180);
    z-index: 9;
    &:hover {
        color: rgb(90 130 230);
    }
    & > svg {
        width: 1.5rem;
        height: 1.5rem;
    }
`;
const LinkedInIcon = ({ className })  => {
    return (
        <svg fill="currentColor" className={className}>
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
    );
}

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
        <Menu>
            <SocialLink href="https://www.linkedin.com/in/nicholas-jeon/" target="_blank">
                <LinkedInIcon />
            </SocialLink>
        </Menu>
        <Bar />
        <Bar vertical />
    </>
  )
}
