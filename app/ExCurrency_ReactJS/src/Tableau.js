import React from 'react'
import PropTypes from 'prop-types'

const Tableau = ({ styli, tableauO, noms }) => (
  <div id="cover" className={styli}>
    <table>
        <thead>
            <tr>
                <th>CURRENCIES</th>
            </tr>
        </thead>
        <tbody id='tableau'>
        {tableauO.map((element, index) => (
                <tr key={index}>
                    <td
                        id={element[0]}
                        className='items'
                        tabIndex={index+4}
                    >{element[0]}<br></br>{noms[element[0]]}
                    </td>
                </tr>
        ))}
        </tbody>
    </table>
  </div>
)

  Tableau.propTypes = {
    styli:   PropTypes.oneOf([
      'hidden',
      'overlay',
    ]).isRequired,
    tableauO:  PropTypes.array.isRequired,
    noms: PropTypes.object.isRequired,
  }

export default Tableau