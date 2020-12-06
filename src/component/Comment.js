import React from 'react'
import { useSelector } from 'react-redux'
import BarChart from './BarChart'
import PlayerCard from './PlayerCard'

const Comment = ({ match }) => {

    const { selectedData, selected, comment } = useSelector(state => state.search)
    const data = selectedData.filter(val => {
        if(val.spPosition == match.params.position){
            return val
        }
    })
    return (
        <div className="bp3-card bp3-elevation-1" style={{ width: '100%', maxWidth: '950px', margin: '50px auto', overflow: 'auto', textAlign: 'center' }}>
            <div>
                <div className="bp3-card bp3-elevation-1" style={{ margin: '1px auto', display: 'flex' }}>
                    <BarChart dataValue={data[0]}></BarChart>
                    <div className="bp3-card bp3-elevation-1" style={{ width: '100%', maxHeight: '320px',marginBottom: '10px', marginTop: '10px', flexDirection: 'column', overflowY: 'auto', padding: '0px' }}>
                        {comment.length === 0 ? 
                        (<div className="bp3-non-ideal-state">
                            <div className="bp3-non-ideal-state-visual">
                                <span className="bp3-icon bp3-icon-search"></span>
                            </div>
                            <h4 className="bp3-heading">No search Comments</h4>
                        </div>) : 
                        (
                            comment.map( (val,index) => {
                                return (
                                    <div className="bp3-card bp3-elevation-0" key={index} style={{ width: '100%', margin: '0px' }}>
                                        {val.content}
                                    </div>
                                )
                            })
                        )}
                    </div>
                </div>
                <div className="bp3-card bp3-elevation-1" style={{ margin: '1px auto', display: 'flex' }}>
                    <PlayerCard value={selected}></PlayerCard>
                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '10px', width: '100%', marginBottom: '10px' }}>
                        <textarea className="bp3-input bp-small bp3-intent-primary bp3-fill" dir="auto"></textarea>
                        <button type="button" className="bp3-button bp3-icon-add bp3-intent-primary">등록</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment