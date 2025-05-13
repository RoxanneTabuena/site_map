import { useParams } from 'react-router-dom'
import { Component } from './component/Component'
import style from './map.module.css'
export const Map = () => {
    const {component} = useParams()
    return ( <div>
        <Component component={component.slice(1)}/>
    </div>)
}