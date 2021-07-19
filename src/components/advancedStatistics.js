import styled from 'styled-components'
import AdvancedCards from './advancedCards'

const AdvancedStatistics = () => {

    return <Wrapper>
        <h1>Advanced Statistics</h1>
        <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
        <AdvancedCards />
    </Wrapper>
}

const Wrapper = styled.section`
    width: 100%;
    background-color: var(--clr-grey);
    color: var(--clr-texts);
    text-align: center;
    padding-top: 12.25rem;
    padding-bottom: 10rem;
    
    h1{
        color: var(--clr-titles);
        font-size: 1.75rem;
    }
    p{
        font-size: 1rem;
        font-weight: 400;
        max-width: 31.875rem;
        line-height: 30.06px;
        margin: 1rem auto;
    }

    @media (min-width: 1090px) {
        h1{
            font-size: 2.5rem;
        }
        p{
            font-size: 1.125rem;
        }
    }
`

export default AdvancedStatistics;