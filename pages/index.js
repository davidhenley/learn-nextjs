import Layout from '../components/Layout'
import Link from 'next/link'

const PostLink = ({ title }) => (
  <li>
    <Link
      as={`/p/${title.toLowerCase().replace(/\s/g,'-')}`}
      href={`/post?title=${title}`}
    >
      <a>{title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink title="Hello Next.js" />
      <PostLink title="Learn Next.js is awesome" />
      <PostLink title="Deploy apps with Zeit" />
    </ul>
  </Layout>
)
