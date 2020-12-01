import React from 'react'
import { useSelector } from 'react-redux'
import BarChart from './BarChart'
import PlayerCard from './PlayerCard'

const Comment = ({ match }) => {
    const { selectedData, selected } = useSelector(state => state.search)
    const data = selectedData.map(val => {
        if(val.spPosition == match.params.position){
            return val
        }
    })
    return (
        <div className="bp3-card bp3-elevation-1" style={{ width: '100%', maxWidth: '950px', margin: '50px auto', overflow: 'auto', textAlign: 'center' }}>
            <div>
                <div className="bp3-card bp3-elevation-1" style={{ margin: '1px auto' }}>
                    <BarChart dataValue={data[0]}></BarChart>
                </div>
                <div className="bp3-card bp3-elevation-1" style={{ margin: '1px auto', display: 'flex' }}>
                    <PlayerCard value={selected}></PlayerCard>
                    <textarea className="bp3-input bp-small bp3-intent-primary bp3-fill" dir="auto"></textarea>
                </div>
            </div>
        </div>
    )
}

export default Comment