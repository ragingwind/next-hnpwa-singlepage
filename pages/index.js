import Head from 'next/head'

export default () =>
<div>
	<Head>
		<title>NEXT-PWA</title>
		<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		<link rel="manifest" href="/static/manifest/manifest.json" />
	</Head>
	<p>Welcome to next.js with PWA!</p>
</div>
