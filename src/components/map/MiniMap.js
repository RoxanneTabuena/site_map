import { NavLink } from "react-router-dom"
import { capitalize } from "../utils"
import style from './map.module.css'
export const MiniMap = ({link}) => {
    return (
        <div className={style.mini}>
            <NavLink to={`/map/:${link}`}>
            <h3>{capitalize(link)}</h3>
            </NavLink>
        </div>
    )
}