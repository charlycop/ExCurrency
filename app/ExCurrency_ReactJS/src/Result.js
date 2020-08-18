import React from 'react'
import PropTypes from 'prop-types'

const Result = ({ fromAmount, fromCurrency, toAmount, toCurrency, actualRate }) => 
{

  const res = parseFloat(fromAmount).toFixed(2)+' '+fromCurrency+' = '+parseFloat(toAmount).toFixed(2)+' '+toCurrency,
        newSize = parseInt(400/res.length);

return (
    <div className="result">
        <div className='overflow' id="result" style={{fontSize: newSize+'px'}}>
            {res}
        </div>
        <div className='txdechange' id='txdechange'>
            1.00 {fromCurrency} = {parseFloat(actualRate).toFixed(4)} {toCurrency} - 
            1.00 {toCurrency} = {parseFloat(1/actualRate).toFixed(4)} {fromCurrency}
        </div>
    </div>
  )
}
  
  Result.propTypes = {
    fromAmount:   PropTypes.number.isRequired,
    fromCurrency: PropTypes.string.isRequired,
    toAmount:     PropTypes.number.isRequired,
    toCurrency:   PropTypes.string.isRequired,
    actualRate:   PropTypes.number.isRequired,
  }

export default Result