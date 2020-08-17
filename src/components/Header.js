import React from 'react'

//styled components
import { HeaderNav } from '../styles/headerStyles'
import { Container } from '../styles/globalStyles'

const Header = () => {
    return (
        <HeaderNav>
                <Container fluid>
                    {/* <Flex>
                        <Logo>
                            Logo
                        </Logo>
                        <Menu>
                            <Button >
                                <span></span>
                                <span></span>
                            </Button>
                        </Menu>
                    </Flex> */}
                </Container>
        </HeaderNav>
    )
}

export default Header
