import axios from 'axios'
import WatchList from '../WatchList/WatchList'
import './CoinShow.css'
import React, { useState, useEffect } from "react"


const CoinShow = (props) => {

  return (
<>
    <h2>Trending Coins</h2>
    <div className="box animate fadeInUp one">
        <div className='divBox'>
            <div className='heading'>
                <p>#</p>
                <p className='coin-name' >Coin</p>
                <p>Name</p>
                <p>Price</p>
            </div>
            {/* {props.coins.map(coins => {
              return (
                <WatchList coins={coins} key={coins.id} />
              )
            })} */}

        </div>
    </div>
</>
  )
}

export default CoinShow