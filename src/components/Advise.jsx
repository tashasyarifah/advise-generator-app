import { useEffect, useState } from "react"
import styled from "styled-components"

//Styles for the overall app
//This is for the div
const Container = styled.div `
    background-color: hsl(217, 19%, 24%);
    display: grid;
    border-radius: 6%;
    outline: none;
    padding: 80px;
`
//This is for a small text above the quote
const SmallText = styled.small`
    font-size: 0.8em;
    color: hsl(150, 100%, 66%);
    text-align: center;
    padding-bottom: 30px;
    letter-spacing: 0.3em;
`
//It is a style for the random advise quote
const Quote = styled.p`
    color: hsl(193, 38%, 86%);
    font-size: 1em;
`
//For the button
const Button = styled.button`
    border-radius: 50%;
    height: 60px;
    width: 40px;
    background-color: hsl(150, 100%, 66%);
    cursor: pointer;
    position: relative;
    top: 110%;
    left: 30%;
    
`
//It is for the icon inside the button
const Icon = styled.svg`
    transition: fill 0.24s;
    width: 24px;
    height: 24px;

`

export default function Advise() {

    const [quotes, setQuotes] = useState({
        random: "",
    })

    useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

    function getRandomQuote() {
        setQuotes (prevQuotes => ({
            ...prevQuotes,
        }))

    }

    return (
        <Container>
            <SmallText>Advise #1</SmallText>
            <Quote>{quotes.random}</Quote>
            <Button onClick={getRandomQuote}> 
                <Icon>
                    <path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/>
                </Icon>
            </Button>
        </Container>
    )
}

