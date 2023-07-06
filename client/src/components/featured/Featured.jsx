import React from 'react'
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import './featured.scss'

const Featured = () => {

  const percentage = 76;  

  return (
    <div className="featured">
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertIcon fontSize='small' /> 
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={percentage} text={`${percentage}`} strokeWidth={5} />
            </div>
            <p className="title">Total sales made today</p>
            <p className="amount">$501</p>
            <p className="description">
                Previous transactions processing. Last payments may not be included.
            </p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDownIcon fontSize='small' /> 
                        <div className="resultAmount">$17.3k</div>                        
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpOutlinedIcon fontSize='small' /> 
                        <div className="resultAmoun">$17.5k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Month</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                        <div className="resultAmount">$17.7k</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured
