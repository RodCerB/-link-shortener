import styled from 'styled-components'
import imgWorking from '../assets/imgWorking.svg'

const Hero = () => {

    return (<Wrapper>
        <section>
            <div>
                <h1>More than just shorter links</h1>
                <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                <button>Get Started</button>
            </div>
            <img src={imgWorking} alt="img working" />
        </section>
    </Wrapper>)
}

const Wrapper = styled.main`
    section{
        display: flex;
        flex-direction: column-reverse;
        text-align: center;
        font-size: 1.125rem;
    }
    h1{
        font-size:2.5rem;
        color: var(--clr-titles);
        line-height: 119%;
        letter-spacing: -0.015em;
    }
    p{
        font-size: 1.125rem;
        color: var(--clr-texts);
        margin: 0.75rem 2rem 2.75rem;
    }

    @media (min-width: 1090px) {
        section{
            padding-top: 5.563rem;
            padding-left: 9.813rem;
            display: grid;
            grid-template-columns: repeat(2, auto);
            text-align: left;
        }
        h1{
            font-size: 5rem;
        }
        p{
            font-size: 1.5rem;
            margin: 1rem 0;
            margin-bottom: 2.75rem;
        }
    }
`

export default Hero