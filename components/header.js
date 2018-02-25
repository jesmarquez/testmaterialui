/* eslint-disable react/no-danger */
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default class extends React.Component {
  render() {

    return (
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css" />
      </Head>
    )
  }
}