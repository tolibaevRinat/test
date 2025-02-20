import React from 'react'

const Inner = React.lazy(() => import('./Inner'))

const App = () => {
	return (
		<React.Suspense fallback={<div>Loading</div>}>
			<Inner />
		</React.Suspense>
	)
}

export default App
