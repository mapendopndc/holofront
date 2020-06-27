import Head from 'next/head'
import Navbar from './Navbar'
import Optionsbar from './Optionsbar'
import { connect } from 'react-redux'

const Layout = (props) => {

    const links = props.token ? <Optionsbar/> : <Navbar />

    return (
        <div>
        <Head>
            <title>Holospace</title>
            {/*<link rel="icon" href="/favicon.png" />*/}
            <link rel="stylesheet" href="https://use.typekit.net/dxb3emo.css" />
        </Head>

        {links}
        {props.children}
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        token: state.auth.token
    }
}

export default connect(mapStateToProps)(Layout);