import React from 'react'

const PlayerCard = ({ value, selectedValue, onSelect }) => {

    return (
        <div
            id={selectedValue ? "selected" : null}
            className={"bp3-card bp3-elevation-2 bp3-interactive"}
            style={{ width: '160px', height: '200px', margin: '10px', display: 'inline-block' }}
            onClick={onSelect}
        >
            <span>
                <img
                    src={`http://ec2-54-180-32-236.ap-northeast-2.compute.amazonaws.com:3000/players/${value.id}`}
                    style={{ backgroundImage: 'url(' + 'http://ec2-54-180-32-236.ap-northeast-2.compute.amazonaws.com:3000/season_background/' + value.id.substring(0, 3) + '.png)' }}
                />
            </span>
            <div>
                <span>
                    <img
                        style={{ verticalAlign: 'middle' }}
                        src={'http://ec2-54-180-32-236.ap-northeast-2.compute.amazonaws.com:3000/season/' + value.id.substring(0, 3) + '.JPG'}
                    />
                    {value.name}
                </span>
            </div>
        </div>
    )
}

export default PlayerCard