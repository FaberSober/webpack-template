import React, { Suspense } from 'react'
import { RouteComponentProps } from '@reach/router'

const OtherComponent = React.lazy(() => import('./PageALoad'));

export default function PageA(_: RouteComponentProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OtherComponent />
    </Suspense>
  )
}
