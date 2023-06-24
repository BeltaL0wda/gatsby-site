import * as React from 'react'
import Layout from '../../components/layout'
import { Link, graphql } from 'gatsby'

const Blog = ({data}) => {
  const blogPostName = data.allMdx.nodes
  console.log(blogPostName)
  return (
    <Layout pageTitle="My Blog Post">
      <p>This is my blog post</p>
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <div>
             <Link to={`/blog/${node.frontmatter.slug}`}>
                <p>{node.frontmatter.title}</p>
              </Link> 
              <p>{node.frontmatter.date}</p>
            </div>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
query M {
  allMdx(sort: {
    frontmatter: {
      date: DESC
    }
  }) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        slug
      }
      id
      excerpt
    }
  }
}
`
export default Blog
