import * as React from 'react'

import { useStaticQuery, graphql } from 'gatsby'
const Head = ({pageTitle}) => {
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
    <title>{data.site.siteMetadata.title} | {pageTitle}</title>
  )
}

export default Head
