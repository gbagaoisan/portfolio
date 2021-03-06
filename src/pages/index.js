import React from 'react'

import { Link } from 'gatsby'


import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout>
            <h1> Hello!!</h1>
            <h2>My Name is George and I'm a full-stack designer.</h2>
            <p>Need a designer? <Link to="/contact">Contact me.</Link></p>
        </Layout>
    )
}

export default IndexPage