import React from 'react'
import WatchList from '../WatchList/WatchList'
import './CoinShow.css'

const CoinShow = (props) => {
  return (
    <div className="box animate fadeInUp one">
        <div className='divBox'>
            <div className='heading'>
                <p>#</p>
                <p className='coin-name' >Coin</p>
                <p>Price</p>
                <p>24h</p>
                <p>Volume</p>
                <p>Mkt Cap</p>
            </div>
            {props.coins.map(coins => {
              return (
                <WatchList coins={coins} key={coins.id} />
              )
            })}

        </div>
    </div>
  )
}

export default CoinShow