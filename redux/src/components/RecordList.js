import React from 'react'

import { connect } from 'react-redux';
import { getData } from '../actions';

import Record from './Record'


const RecordList = props => {
    return(
        <>
            <h1>NFL Arrest Records</h1>
            <button onClick={props.getData}>GET ARREST RECORDS</button>
            {props.records &&
            props.records.map(arrest => <Record key={arrest.Category} records={arrest}/>)}
        </>
    )
}

const mapStateToProps = state => {
    return{
        records: state.records,
        isLoading: state.isLoading,
    }
}

export default connect(
    mapStateToProps, { getData }
)(RecordList)