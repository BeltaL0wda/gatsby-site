import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const Blog = ({data}) => {
  const blogPostName = data.allFile.nodes
  console.log(blogPostName)
  return (
    <Layout pageTitle="My Blog Post">
      <p>This is my blog post</p>
      <ul>
        {
          data.allFile.nodes.map(node => (
            <li key={node.name}>
              {node.name}
            </li>
          ))
        }
      </ul>
    </Layout>
  )
}

export const query = graphql`
query M	{
allFile(filter: {
sourceInstanceName: {
eq: "blog"
}
}) {
nodes{
name
}
}
}
`
export default Blog
