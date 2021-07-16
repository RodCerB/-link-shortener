import styled from 'styled-components'
import bgAPI from '../assets/background-api.svg'

const LinkShortener = () => {

    return <Wrapper>
        <div>
            <form action="">
                <input type="text" placeholder='Shorten a link here...'/>
                <button>Shorten It!</button>
            </form>
        </div>
    </Wrapper>
}

const Wrapper = styled.main`
    margin-top: 4.125rem;
    background: linear-gradient(180deg, white 50%, var(--clr-grey) 50%);

    div{
        width: 87%;
        border-radius: 10px;
        padding: 1.5rem;
        margin: auto;
        background-color: var(--clr-purple);
        background-image: url(${bgAPI});
        background-repeat: no-repeat;
    }
    form{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        
    }
    input{
        outline: none;
        border: none;
        width: 100%;
        border-radius: 10px;
        padding: 0.813rem 0 0.625rem 1rem;
        font-size:1rem;
        line-height: 24px;
        color: var(--clr-texts);
    }
    button{
        border-radius: 10px;
        padding: 0.813rem 1.5rem;
        width: 100%;
        font-size:1.125rem;
    }

    @media (min-width: 1090px) {
        div{
            width: 77%;
            padding: 3.25rem 4rem;
        }
        form{
            flex-direction: row;
            justify-content: space-between;
        }
        input{
            width: 78%;
            padding: 1.125rem 0 1rem 2rem;
            font-size:1.125rem;
            line-height: 27px;
        }
        button{
            padding: 1.125rem 1.5rem;
            width: 19%;
        }
    }
`

export default LinkShortener