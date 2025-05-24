import { Outlet, useLocation, Navigate, NavLink } from 'react-router-dom'
import style from './root.module.css'
export const Root = () => {
    const path = useLocation().pathname
    if(path === '/'){
        return <Navigate to="map/:home"/>
    }
    return (<div>
        {path !== '/index' && <NavLink to="index" className={style.root}>View Site Index</NavLink>}
        <Outlet/>
    </div>)
}