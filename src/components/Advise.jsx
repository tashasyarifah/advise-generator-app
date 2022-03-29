
import { useEffect, useState } from "react"
import styled from "styled-components"

//Styles for the overall app
//This is for the div
const Container = styled.div `
    background-color: hsl(217, 19%, 24%);
    display: grid;
    place-items: center;
    border-radius: 6%;
    outline: none;
    padding: 80px;
`
//This is for a small text above the quote
const SmallText = styled.h1`
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
    outline: none;
    border: none;
    
    :hover {
        box-shadow: 0 0 10px 9px hsl(150, 50%, 60%);
    }
`
//It is for the icon inside the button
const Icon = styled.svg`
    width: 24px;
    height: 24px;

`
export default function Advise() {
   const [getId, setGetId] = useState(196)
   const [getAdvice, setGetAdvice] = useState("Have a firm handshake.")

    useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
        .then(res => res.json())
        .then(data => {
            setGetId(data.slip.id)
            setGetAdvice(data.slip.advice);
        })
        
    }, [])
    
    return (
        <Container>
            <SmallText>{getId}</SmallText>
            <Quote>{getAdvice}</Quote>
            <Button>  
                <Icon>
                    <path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/>
                </Icon>
            </Button>
        </Container>
    )
    
}

