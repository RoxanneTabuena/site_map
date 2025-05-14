import { useParams, NavLink } from 'react-router-dom'
import { content_dic, summary_dic } from '../site_info'
import style from './map.module.css'
export const Map = () => {
    const {component} = useParams()
    const id = component.slice(1)

    let sxatic = []
    let links = []
    content_dic[id].forEach((item)=>{
            if(typeof(item)=== 'object'){   
                const [[itemContent , link]] = Object.entries(item)
                links.push(<div className={style.connect}>
                    <p>{itemContent}</p>
                    <NavLink to={`/map/:${link}`}>{link}</NavLink>
                </div>)
            }else{
                sxatic.push(<p>{item}</p>)
            }
        })
    return ( 
    <div className={style.map}>
        <h1>{id}</h1>
        <p>{summary_dic[id]}</p>
        {sxatic}
        {links}
    </div>)
}