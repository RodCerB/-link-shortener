import styled from 'styled-components'
import background from '../assets/background-boost.svg'

const Boost = () => {

    return <Wrapper>
        <h1>Boost your links today</h1>
        <button>Get Started</button>
    </Wrapper>
}

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  font-size: 1.125rem;
  color: white;
  background-color: var(--clr-purple);
  padding: 3.562rem 0;
  text-align: center;
  background-image: url(${background});
  background-repeat: no-repeat;
  
  h1{
      font-size:2.5rem;
  }

  button{
      margin-top: 1.312rem;
  }

  @media (max-width: 500px) {
    h1{
        font-size: 1.75rem;
    }
  }
`

export default Boost;