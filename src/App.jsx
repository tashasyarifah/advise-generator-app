import styled from "styled-components"
import Advise from "./components/Advise"


const Wrapper = styled.div`
    display: grid;
    place-content: center;
    gap: 1ch;
    margin: 0 auto; 
    overflow: hidden;
    padding: 3rem 1.5rem;
`

export default function App() {
    return (
        <Wrapper>
            <Advise />
        </Wrapper>
        
        

        
    )
}