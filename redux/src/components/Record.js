import React from 'react'

const Record = props => {
    return(
        <div>
            <h4>{props.records.Category}</h4>
            <p>{props.records.arrest_count}</p>
        </div>
    )
}

export default Record