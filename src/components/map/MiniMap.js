import { NavLink } from "react-router-dom"
import { capitalize } from "../utils"
import style from './map.module.css'
export const MiniMap = ({link}) => {
    return (
            <NavLink to={`/map/:${link}`} className={style.mini}>
            <h3>{capitalize(link)}</h3>
            </NavLink>
    )
}