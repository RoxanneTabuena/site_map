import { useParams } from 'react-router-dom'
import { MiniMap } from './MiniMap'
import { content_dic, summary_dic } from '../site_info'
import { capitalize } from '../utils'
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
                    <p className={style.right}>{capitalize(itemContent)}</p>
                    <div className={style.line}></div>
                    <MiniMap link={link}/>
                </div>)
            }else{
                sxatic.push(<p className={style.cont}>{capitalize(item)}</p>)
            }
        })
    return ( 
    <div className={style.map}>
        <div className={style.main}>
        <h1>{`${capitalize(id)}`}</h1>
        <p>{summary_dic[id]}</p>
        </div>
        <div className={style.rightCol}>
        <h2>{`${capitalize(id)} Content:`}</h2>
        {sxatic}
        {links}
        </div>
    </div>)
}