import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';

const placeholder = { 
    overall_count: 100,
    overall_top_sentiment: "angry",
    overall_sentiments_detected: 42,
    overall_avg_sentiments_per_person: 3,
    earliest_time: 'timestamp',
    most_recent_time: 'timestamp'
    
}
const StyledTable = styled.div`

    display:flex;
    flex-direction:column;
    width:60%;
    margin:1%;
    border-top: 5px solid #0f8da8;
    .col.type{
        background:black;
        color:white;
        padding:10px;
    }

    .table-grid{
        
        display:grid;
        grid-template-columns:repeat(2,auto);
        grid-template-rows:repeat(8,auto);
        font-size:1vw;

        
           

        .col{
            border:1px dashed black;
            padding:10px;
            
        }
    }

`

export class AggTable extends Component{
    constructor(){
        super();

        this.state={
            data:[]
        }
    }

    //function for filtering out false detections
    //function for length of filtered array to determint table rows

    render(){
        return(
                <StyledTable>
                    <div className='table-title'></div>
                    <div className='col type'>Descriptives</div>
                    <div className='table-grid'>
                        
                        <div className='col count'>Count</div>
                        <div className='col count'>{placeholder.overall_count}</div>
                        <div className='col average'>overall_top_sentiment</div>
                        <div className='col average'>{placeholder.overall_top_sentiment}</div>
                        <div className='col average'>overall_sentiments_detected</div>
                        <div className='col average'>{placeholder.overall_sentiments_detected}</div>
                        <div className='col count'> overall_avg_sentiments_per_person</div>
                        <div className='col count'> {placeholder.overall_avg_sentiments_per_person}</div>
                        <div className='col average'>earliest_time</div>
                        <div className='col average'>{placeholder.earliest_time}</div>
                        <div className='col average'>most_recent_time</div>
                        <div className='col average'>{placeholder.most_recent_time}</div>
                    </div>
                    

                </StyledTable>





        )
    }
}

const mapStateToProps = state => {
    console.log('mapping state to props')
    return {
        fetchingSentiment: state.fetchingSentiment,
        sentimentData: state.sentimentData,
        error: state.error
    }

}


//Make sure you do not have two copies of react or react-dom between your friends folder directory and outside of your friends folder directory
//nmp ls react  or npm ls react-dom in each to identify
//removing duplicate copies from /friends did the tricks
export default connect(mapStateToProps, { })(AggTable);