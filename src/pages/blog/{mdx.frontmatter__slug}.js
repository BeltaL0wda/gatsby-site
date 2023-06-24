import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BlogPost = (props) => {
  console.log("ID of blog post : ", props.pageContext.id)
  const image = getImage(props.data.mdx.frontmatter.hero_image)
  return (
    <Layout pageTitle={props.data.mdx.frontmatter.title}>
      <GatsbyImage image={image}/>
    </Layout>
  )
}

export const query = graphql `
query Image($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      title
      hero_image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}
`

export default BlogPost
