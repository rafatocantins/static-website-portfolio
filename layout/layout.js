import Head from 'next/head'
import Header from '../components/header'

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Woocommerce | Next Headless Cms</title>
        <link rel="stylesheet" href="https://bootswatch.com/4/materia/bootstrap.min.css"></link>
      </Head>
      <Header></Header>
      { props.children }
    </div>
  )
};

export default Layout;