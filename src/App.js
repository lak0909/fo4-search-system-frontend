import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Top, Main } from './layout'

const App = () => {
    return(
        <BrowserRouter>
            <Top></Top>
            <Main></Main>
        </BrowserRouter>
    )
}

export default App