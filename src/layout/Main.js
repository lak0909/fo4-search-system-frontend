import React from 'react'
import { Search, Compare, Recommend, Record, Comment } from '../component'
import { Route } from 'react-router-dom'

const Main = () => {
    return (
        <div>
            <Route exact path="/" component={Search}/>
            <Route path="/comment/:id/:position" component={Comment}/>
            <Route path="/compare" component={Compare}/>
            <Route path="/recommend" component={Recommend}/>
            <Route path="/record" component={Record}/>
        </div>
    )
}

export default Main