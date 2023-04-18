---
to: <%= pagePath %>
---
import { NextPage } from 'next'
import Layout from 'src/components/Layout'

const Page: NextPage = () => {
  return (
    <Layout>
      <h1>Page</h1>
    </Layout>
  )
}

export default Page
