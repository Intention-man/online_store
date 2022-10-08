import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router";


const NavBar = observer(() => {
    const navigate = useNavigate()
    const {user} = useContext(Context)
    console.log(user.isAuth)

    const logout = () => {
        user.setUser({})
        user.setIsAuth(false)
        console.log("logout")
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: "white", paddingLeft: 30}} onClick={() => navigate(SHOP_ROUTE)}>ХочуДевайс</NavLink>
                {user.isAuth ?
                    <Nav className="ms-md-auto" style={{paddingRight: 30}}>
                        <Button variant={"outline-info"} onClick={() => {
                            navigate(ADMIN_ROUTE)
                        }}>
                            Админ панель
                        </Button>
                        <Button className="ms-sm-3" variant={"outline-info"} onClick={() => {
                            logout()
                            navigate(SHOP_ROUTE)
                        }}>
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ms-md-auto" style={{paddingRight: 30}}>
                        <Button variant={"outline-info"} onClick={() => navigate(LOGIN_ROUTE)}>
                            Авторизироваться
                        </Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
})

export default NavBar;