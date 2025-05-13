import { NavLink } from 'react-router-dom'
import { site_dic } from '../site_info'
import style from './index.module.css'
export const Index = () => {
    return (<div>
{        Object.keys(site_dic).map(page => {
            return <NavLink to={`/map/:${page}`} key={page}>{page}</NavLink>
        })}
        
    </div>)
}