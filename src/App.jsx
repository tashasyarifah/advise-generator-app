import styled from "styled-components"
import Advise from "./components/Advise"

const Wrapper = styled.div`
    display: grid;
    place-items: center;
`

export default function App() {
    return (
        <Wrapper>
            <Advise />
        </Wrapper>
        
    )
}