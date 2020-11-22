import React from 'react'
import { SearchAction } from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import '../css/search.css'
import BarChart from './BarChart'

const Search = () => {
    const { search, resultArray, selected, selectedData } = useSelector(state => state.search)
    const dispatch = useDispatch()

    console.log(selectedData)

    return (
        <div className="home" style={{textAlign: 'center'}}>
            <div className="logo_cont" style={{marginTop: '20px'}}>
                <img 
                    className="logo" 
                    src="http://ec2-54-180-32-236.ap-northeast-2.compute.amazonaws.com:3000/img/my_background.74e59402.jpg"
                    style={{
                        width: '100%',
                        maxWidth: '650px',
                        maxHeight: '370px',
                        height: 'auto',
                    }}
                />
            </div>
            <div className="bp3-input-group bp3-round" style={{maxWidth: '400px', height: '30px', margin: '10px auto'}}>
                <span className="bp3-icon bp3-icon-search"></span>
                <input 
                    type="text" 
                    className="bp3-input" 
                    placeholder="선수명을 입력해주세요." 
                    value={search}
                    onChange={(e) => dispatch(SearchAction.changeInput(e.target.value))}
                />
                <button 
                    className="bp3-button bp3-minimal bp3-intent-primary bp3-icon-arrow-right"
                    onClick={() => (search === '' ? null : dispatch(SearchAction.fetchData(search)))}
                />
            </div>
            {resultArray.length === 0 ? null :
            <div className="bp3-card bp3-elevation-1" style={{width: '100%', maxWidth: '950px', margin: '0px auto'}}>
                {resultArray.map( (val, index) => {
                    return(
                        <div 
                            id={selected === val.id ? "selected": null} 
                            className={"bp3-card bp3-elevation-2 bp3-interactive"} 
                            key={index} style={{width: '160px', height: '200px', margin: '10px', display: 'inline-block'}} 
                            onClick={() => dispatch(SearchAction.setSelected(val.id))}
                        >
                            <span>
                                <img
                                    src={`http://ec2-54-180-32-236.ap-northeast-2.compute.amazonaws.com:3000/players/${val.id}`}
                                    style={{backgroundImage: 'url('+'http://ec2-54-180-32-236.ap-northeast-2.compute.amazonaws.com:3000/season_background/'+val.id.substring(0,3)+'.png)'}}
                                />
                            </span>
                            <div>
                                <span>
                                    <img
                                        style={{verticalAlign: 'middle'}}
                                        src={'http://ec2-54-180-32-236.ap-northeast-2.compute.amazonaws.com:3000/season/'+val.id.substring(0,3)+'.JPG'}
                                    />
                                    {val.name}
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>
            }
            <BarChart/>
        </div>
    )
}

export default Search