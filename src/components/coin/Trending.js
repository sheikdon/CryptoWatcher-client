import axios from 'axios'
import WatchList from '../WatchList/WatchList'
import './Trending.css'
import React, { useState, useEffect } from "react"


const Trending = (props) => {

  return (
<>
<div className='color'>
<div className="box animate fadeInUp one">
    <div className='divBox'>
      <div className='heading'>
        <div className='divBox2'>
          <h2>Trending</h2>
        </div>
      </div>
    </div>
</div>

    <div className="box animate fadeInUp one">
        <div className='divBox'>
            <div className='heading'>
                  
                <p># Ranking</p>
                <p className='coin-name' >Coin</p>
                <p>Name</p>
                <p>Price (in Bitcoin)</p>
            </div>
        </div>
    </div>
</div>
</>
  )

}

export default Trending