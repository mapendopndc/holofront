import Head from 'next/head'
import Navbar from '../components/Navbar'

const Layout = (props) => (
    <div>
        <Head>
            <title>Holospace</title>
            {/*<link rel="icon" href="/favicon.png" />*/}
            <link rel="stylesheet" href="https://use.typekit.net/dxb3emo.css" />
        </Head>

        <Navbar />
        {props.children}
    </div>
)

export default Layout;