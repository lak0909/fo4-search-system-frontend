import React from 'react'

const Search = () => {
    return (
        <div className="home">
            <div className="logo_cont" style={{textAlign: 'center', marginTop: '20px'}}>
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
        </div>
    )
}

export default Search