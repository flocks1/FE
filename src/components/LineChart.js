import React, { PureComponent } from 'react';
import {
  ResponsiveContainer,Area,AreaChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { connect } from 'react-redux';

const timeseries_linegraph_object=[{ 
    
        "period_label": "Oldest", 
        "sentiment_0_period_avg": "0.65", 
        "sentiment_1_period_avg": "0.85",
        "sentiment_3_period_avg": ".74",
        
        "sentiment_n_period_avg": ".1"
    },
    {
        "period_label": "Newer",
        "sentiment_0_period_avg": "0.5",
        "sentiment_1_period_avg": "0.85",
        "sentiment_3_period_avg": "0.44",
        
        "sentiment_n_period_avg": "0.10"
    },
    {
        "period_label": "Newest Period", 
        "sentiment_0_period_avg": "0.65",
        "sentiment_1_period_avg": "0.85",
        "sentiment_3_period_avg": "0.54",
        
        "sentiment_n_period_avg": "0.10"
    }
]

const data = [
  {
    name: 'Page A',  pv: 2000, amt: 2400,
  },
  {
    name: 'Page B',  pv: 1398, amt: 2210,
  },
  {
    name: 'Page C',  pv: 9800, amt: 2290,
  },
  {
    name: 'Page D',  pv: 3908, amt: 2000,
  },
  {
    name: 'Page E',  pv: 4800, amt: 2181,
  },
  {
    name: 'Page F',  pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];

export  class LineChart extends PureComponent {
    constructor(){
        super();
        this.state={
            data:2450
        }
    }
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';
 
  testMapper = ()=>{
    const chartData = timeseries_linegraph_object.map(data =>{
        return (
            {name:data.period_label,
                sentiment_0_period_avg:data.sentiment_0_period_avg,
                sentiment_1_period_avg:data.sentiment_1_period_avg,
                sentiment_3_period_avg:data.sentiment_3_period_avg}

                
                
                
                
                
                
                
                
                
                )})
    
        return chartData;
        console.log('chart Data!!',chartData);
    }
        
        
  

  render() {
      
    return (
        <ResponsiveContainer width='100%'>
            <AreaChart width={600}  height={500} data={this.testMapper()}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f66800" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#f66800" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorAm" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00e4ff" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#00e4ff" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="sentiment_0_period_avg" stroke="#f66800" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="sentiment_1_period_avg" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            <Area type="monotone" dataKey="sentiment_3_period_avg" stroke="#00e4ff" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
        </ResponsiveContainer>
    );
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
export default connect(mapStateToProps, {})(LineChart);