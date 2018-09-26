import React from 'react'

import {shallow} from 'enzyme'

import App from './App'

describe('App', () => { 
  const app = shallow(<App/>)

  it('render correctly', () => {
    expect(app).toMatchSnapshot()
  })

  it('initialized the `state` with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([])
  })

  describe('when clicking the `add-gift` button', () => {
    beforeEach(() => {
      app.find('.btn-add').simulate('click')
    })

    afterEach(() => {
      app.setState({ gifts: [] })
    })

    it(' adds a new gift to `state` when cicking th `add gift` button', () => {
      expect(app.state().gifts).toEqual([{ id: 1 }])
    })
  
    it('adds a new gift to the renderd list when clicking the `add gift` button', () => {
      expect(app.find('.gift-list').children().length).toEqual(1)
    })
  })  
})
