import styled from 'styled-components'
import iconBR from '../assets/iconBR.svg'
import iconDR from '../assets/iconDR.svg'
import iconFC from '../assets/iconFC.svg'
import lineH from '../assets/LineH.svg'
import lineV from '../assets/LineV.svg'
import { useMediaQuery } from 'react-responsive'

const AdvancedCards = () => {

    const isMobile = useMediaQuery({
        query: "(max-device-width: 1090px)",
    });

    return <Wrapper>
        <div className='cardsContainer'>
            <div className='cards '>
                <h2>Brand Recognition</h2>
                <p className='cardText'>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                <img src={iconBR} alt="icon Brand Recognition" />
            </div>
            <div className='cards card2'>
                <h2>Detailed Records</h2>
                <p className='cardText'>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                <img src={iconDR} alt="icon Detailed Records" />
            </div>
            <div className='cards card3'>
                <h2>Fully Customizable</h2>
                <p className='cardText'>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                <img src={iconFC} alt="icon Fully Customizable" />
            </div>
            <img src={isMobile ? lineV : lineH} alt="blueLine" className='blueLine'/>
        </div>
    </Wrapper>
}

const Wrapper = styled.section`
    
    .cardsContainer{
        position: relative;
        display: grid;
        gap: 5.813rem;
        justify-items: center;
        margin-top: 5.625rem;
    }
    .cards{
        z-index: 9999;
        align-content: center;
        position: relative;
        background-color: white;
        width: 20.438rem;
        padding: 4.688rem 1.688rem 3.625rem 1.688rem;
        border-radius: 20px;
        height: min-content;

        img{
            position: absolute;
            top: -45px;
            left: 119px;
        }
    }
    h2{
        color: var(--clr-titles);
        font-size: 1.125rem;
    }
    .cardText{
        width: fit-content;
        font-size: 0.875rem;
        margin-top: 0.75rem;
    }
    .blueLine{
        position: absolute;
        z-index: 0;
    }

    @media (min-width: 1090px) {
    .cardsContainer{
        display: grid;
        grid-template-columns: repeat(3,auto);
        gap: 1.9rem;
        justify-content: center;
        margin-top: 6.3125rem;
    }
    .cards{
        text-align: left;
        width: 21.875rem;
        padding: 4.688rem 1.625rem 2.625rem 2rem;

        img{
            left: 32px;
        }
    }
    .card2{
        margin-top: 2.813rem;
    }
    .card3{
        margin-top: 5.626rem;
    }
    .h2{
        font-size: 1.5rem;
    }
    .cardText{
        font-size: 1rem;
        font-weight: 400;
        letter-spacing: -0.03em;
        line-height: 25.6px;
        margin: 1rem 0 0 0;
    }
    .blueLine{
        top: 50%;
    }
  }
`

export default AdvancedCards;