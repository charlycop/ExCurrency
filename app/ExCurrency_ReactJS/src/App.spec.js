import { shallow } from 'enzyme'
import { expect } from 'chai'
import React from 'react'
import BoutonListe from './BoutonListe'
import App from './App'

describe('<App />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<App />)
        expect(wrapper).to.contain(<BoutonListe id='ListeG' tabIndex={1} text="EUR"/>)
    })

    it('as 2 BoutonListe', () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find('BoutonListe')).to.have.length(2)
    })
})
