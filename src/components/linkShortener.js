import {useState, useEffect }from 'react'
import styled from 'styled-components'
import bgAPI from '../assets/background-api.svg'
import loadGif from '../assets/preloader.gif'
import axios from 'axios'

const LinkShortener = () => {
    const urlBase = 'https://api.shrtco.de/v2/shorten?url='
    const [searchURL, setSearchURL] = useState('')
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()
        fetchData(urlBase+searchURL)
    }

    async function fetchData (url) {
        setLoading(true)
        setError(false)
        try{
            const response = await axios.get(url)
            const shortLink = await response.data.result.short_link
            setSearchURL(shortLink)
            setLoading(false)

        } catch (err) {
            setLoading(false)
            setError(true)
            setSearchURL('Shorten a link here...')
            console.log(err)
        }
    }

    return <Wrapper>
        <div>
            <form action="" onSubmit={handleSubmit} >
                <input 
                    type="text" 
                    placeholder='Shorten a link here...' 
                    value={searchURL} 
                    onChange={(e) => setSearchURL(e.target.value)}
                    className={error ? 'inputError' : null}
                    />
                {loading
                ?
                <img src={loadGif} alt="loading" />
                :
                <button>Shorten It!</button>
                }  
            </form>
            {error && <p className='textError'>Please type a link</p>}
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
        position: relative;
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
    .inputError{
        border: 2px solid var(--clr-red);
        color: var(--clr-red);
    }
    .textError{
        position: absolute;
        margin-top: 4px;
        color: var(--clr-red);
        font-size: 0.875rem;
        line-height: 21px;
    }
    button{
        border-radius: 10px;
        padding: 0.813rem 1.5rem;
        width: 100%;
        font-size:1.125rem;
    }

    img{
       max-width:3.5rem;
       margin: auto;
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