import styled from 'styled-components'
import { links, socials } from '../utils/constants'

const Footer = () => {
    
    return (<Wrapper>
        <section>
        <h1 className='brandName'>Shortly</h1>
        <div className='links-section'>
            {links.map((link,index)=>{
                const {section, topics} = link
                return (
                <div className='links-topics' key={index}>
                    <h2>{section}</h2>
                    <ul>
                    {topics.map(({name, url}, id)=>{
                        return (<li key={id}>
                            <a href={url}>{name}</a>
                        </li>)
                    })}
                    </ul>
                </div>)
            })}
        </div>
        <div className='socials-section'>
            {socials.map(({icon, url}, index)=>{
                return (<a href={url} key={index}>
                    <img src={icon} alt={`logo ${url}`} />
                </a>)
            })}
        </div>
        </section>
    </Wrapper>)
}

const Wrapper = styled.section`
  width: 100%;
  font-size: 1rem;  
  color: white;
  background-color: var(--clr-titles);
  
  section{
    padding-top: 2.5rem;
    display: grid;
    justify-items: center;
  }
  h1{
      color: white;
  }
  .links-section{
      text-align: center;
      padding-top: 1rem;

      a{
        font-weight: 400;
      }
  }
  .links-topics{
        margin-bottom: 2.5rem;
    }
  .socials-section{
    padding-top: 1rem;
    display: grid;
    grid-template-columns: repeat(4,auto);
    gap: 1.5rem;
  }
  
  @media (min-width: 1090px) {
    section{
        padding: 3.563rem 10rem 2.15rem 10rem;
        display: grid;
        grid-template-columns: repeat(3,auto);
        justify-content: space-between;
    }
    .links-section{
        display: grid;
        grid-template-columns: repeat(3,auto);
        gap: 5.625rem;
    }
  }
`

export default Footer