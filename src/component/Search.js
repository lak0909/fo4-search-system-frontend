import React from 'react'
import { SearchAction } from '../actions'
import { useDispatch, useSelector } from 'react-redux'

const Search = () => {
    const { search, resultArray } = useSelector(state => state.search)
    const dispatch = useDispatch()

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
                    onClick={() => dispatch(SearchAction.fetchData(search))}
                />
            </div>
        </div>
    )
}

export default Search