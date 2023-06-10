import * as React from 'react'
import Layout from '../components/layout'

// import {Link} from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome"> 
      <p>To Belta Station</p>
      <StaticImage
        alt="Ovni getting people"
        src="https://cdn.pixabay.com/photo/2020/02/07/19/05/spaceship-4828098_1280.jpg"
      />

      <StaticImage
        alt='Rocinante spaceship'
        src='../images/rocinante.jpg'
      />
    </Layout>
  )
}

export default IndexPage
