import Layout from '../components/Layout'
import axios from 'axios'

const Post = (props) => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={props.show.image.medium} />
  </Layout>
)

Post.getInitialProps = async (context) => {
  const { id } = context.query
  const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`)
  console.log(`Fetched show: ${data.name}`)
  return { show: data }
}

export default Post
