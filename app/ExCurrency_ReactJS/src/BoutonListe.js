import React from 'react'
import PropTypes from 'prop-types'

const BoutonListe = ({ id, tabIndex, text}) => (
        <div className='Liste items' 
             id = {id}
             tabIndex = {tabIndex}>
            {text}
        </div>
  )
  
  BoutonListe.propTypes = {
    id: PropTypes.string.isRequired,
    tabIndex: PropTypes.number.isRequired,
  }

export default BoutonListe