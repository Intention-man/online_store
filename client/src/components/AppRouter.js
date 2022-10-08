import React, {useContext} from 'react';
import {authRoutes, publicRoutes} from "../routes";
import {Route} from "react-router-dom";
import {Routes} from "react-router";
import {Context} from "../index";
import Auth from "../pages/Auth";


const AppRouter = () => {

    const {user} = useContext(Context);
    console.log(user.isAuth)

    const aRoutes = authRoutes.map(
        ({path, Component}, key) =>
            <Route key={key} path={path} element={Component}/>
    )
    const pRoutes = publicRoutes.map(
        ({path, Component}, key) =>
            <Route key={key} path={path} element={Component}/>
    )


    if (user.isAuth) {
        return (
            <Routes>
                {aRoutes}
                {pRoutes}
                <Route path="*" element={<Auth/>}/>
            </Routes>
        )
    } else {
        return (
            <Routes>
                {pRoutes}
                <Route path="*" element={<Auth/>}/>
            </Routes>
        )
    }
}


export default AppRouter;