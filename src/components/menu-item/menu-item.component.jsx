import React from 'react'
// withRouter é um HOC que permite o uso da api de history
import { withRouter } from 'react-router-dom'
import './menu-item.styles.scss'
// functional component, don`t need state, only passed props
// prop history, linkURL e match só podem ser utilizadas ao usar o HOC withRouter
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size}  menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
)

export default withRouter(MenuItem)
