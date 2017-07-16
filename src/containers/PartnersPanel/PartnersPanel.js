import React from 'react'
import IconPanel from 'components/IconPanel'
import partnersData from './PartnersData'
import './PartnersPanel.scss'

export default class PartnersPanel extends React.Component {
  render() {

    partnersData.sort(function(a, b) {
      if (a.name < b.name) return -1
      if (a.name > b.name) return 1
      return 0
    })

    return (
      <div className='partners_panel'>
        <IconPanel items={partnersData} />
        <p>In addition, The Coding School is proud to have been awarded the Brown Venture Launch Fund from Brown University Social Innovation Initiative.</p>
      </div>
    )
  }
}
