import { NavLink } from 'react-router-dom'
import { content_dic } from '../site_info'
import style from './index.module.css'
export const Index = () => {
    let links = Object.keys(content_dic).map(page => {
            return <NavLink to={`/map/:${page}`} key={page}>{page}</NavLink>
        })
    return (
    <div className={style.index}>
        <h1>Rhema Site Index</h1>
        {links}
        <p>*The presence of parameters (ie ':service') indicate a variable. These pages are actually templates that will result in serval pages. On your final site, the actual path name will look more like: "services/weddings" and the related page will serve up relevant information based on the given parameters.</p>
    </div>)
}