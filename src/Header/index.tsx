import { useState } from "react"
import { MdMenu, MdClose } from "react-icons/md"
import { Container, ToggleMenu } from "./style";

export function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu);
    }

    return (
        <Container>
            <h1>Hello Header</h1>
    
            <ToggleMenu onClick={handleToggleMenu}>
                {/* Aquie e uma condicional que seta menu ou outro */}
                { toggleMenu ? <MdMenu /> : <MdClose /> }
            </ToggleMenu>
        </Container>
    )
}