import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
  container,
  heading,
  navLinks,
  navLinksItems,
  navLinksText,
  siteTitle
} from './layout.module.css'
import Head from './head'

const Layout = ({ pageTitle, children }) => {

  const data = useStaticQuery(graphql`
query {
site {
siteMetadata {
title
}
}
}
`)
  return (
    <div className={container}>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinksItems}><Link to="/" className={navLinksText}>Home</Link></li>
          <li className={navLinksItems}><Link to="/blog" className={navLinksText}>Blog</Link></li>
          <li className={navLinksItems}><Link to="/about" className={navLinksText}>About Me</Link></li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <Head pageTitle={pageTitle}></Head>
    </div>
  )
}
export default Layout
