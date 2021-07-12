import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

const Navbar = () => {

    const isMobile = useMediaQuery({
        query: "(max-device-width: 765px)",
    });

    if(isMobile){
        return <Wrapper><h1>Shortly</h1></Wrapper>
    }

    return (<Wrapper>
        <div>
            <h1>Shortly</h1>
            <p>Features</p>
            <p>Pricing</p>
            <p>Resources</p>
        </div>
        <div>
            <a href="/">Login</a>
            <button>Sign Up</button>
        </div>
    </Wrapper>)
} 

const Wrapper = styled.section`
  width: 80%;
  font-size: 0.875rem;
  margin: auto;
  padding: 10px;
  color:var( --clr-texts);
  display: grid;
  grid-template-columns: repeat(2,auto);
  gap: 1rem;
  justify-content: space-between;

  h1{
      color:var(--clr-titles);
      font-size:2.25rem
  }

  div{
      display: grid;
      grid-template-columns: repeat(4,auto);
      gap: 2.25rem;
      align-items: center;
  }
`

export default Navbar;