import React from 'react'
import { Bar } from 'react-chartjs-2'

const BarChart = ({ dataValue }) => {
    const position = ['GK', 'SW', 'RWB', 'RB', 'RCB', 'CB', 'LCB', 'LB', 'LWB',
    'RDM', 'CDM', 'LDM', 'RM', 'RCM', 'CM', 'LCM', 'LM', 'RAM', 'CAM', 'LAM',
    'RF', 'CF', 'LF', 'RW', 'RS', 'ST', 'LS', 'LW', 'SUB']
    const data = {
        labels: ['슛', '유효슛', '도움', '골', '패스성공률', '차단', '태클'],
        datasets: [
            {
                data: [
                    dataValue.status.shoot, dataValue.status.effectiveShoot, dataValue.status.assist, 
                    dataValue.status.goal, dataValue.status.passSuccess/dataValue.status.passTry,
                    dataValue.status.block, dataValue.status.tackle
                ],
                backgroundColor: [
                    "rgba(54, 162, 235, 0.6)","rgba(54, 162, 235, 0.6)","rgba(54, 162, 235, 0.6)",
                    "rgba(54, 162, 235, 0.6)","rgba(54, 162, 235, 0.6)","rgba(54, 162, 235, 0.6)",
                    "rgba(54, 162, 235, 0.6)"
                ]
            }
        ]
    }

    const positionColor = (index) => {
        if(index<9){
            return 'primary'
        }else if(index>=9 && index<=19){
            return 'success'
        }else if(index>=20 && index<=27){
            return 'danger'
        }else{
            return 'warning'
        }
    }

    return(
        <div
            className="bp3-card bp3-elevation-2 bp3-interactive"
            style={{ width: '280px', height: '320px', margin: '10px', display: 'inline-block' }}
        >
            <div className={`card border-${positionColor(dataValue.spPosition)} mb-3`}>
                <h6 className="card-header">
                    <span className={`text-${positionColor(dataValue.spPosition)}`} style={{ float: 'left' }}>{`포지션: ${position[dataValue.spPosition]}`}</span>
                    <span style={{ float: 'right' }}>{`경기수: ${dataValue.status.matchCount}`}</span>
                </h6>
                <div className="card-body">
                    <Bar
                        width={200}
                        height={200}
                        data={data}
                        options={{
                            maintainAspectRatio: false,
                            legend: {
                                display: false
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default BarChart