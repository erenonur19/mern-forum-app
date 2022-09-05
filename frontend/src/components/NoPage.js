import React from 'react'
import {Link} from 'react-router-dom'

const NoPage = () => {
  return (
    <div>
      <h1>Böyle bir sayfa yok :( </h1>
      <Link to='/forum'>Anasayfaya Dön</Link>
    </div>
  )
}

export default NoPage
