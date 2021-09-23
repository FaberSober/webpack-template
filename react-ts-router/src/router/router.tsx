import React from 'react';
import { Router, RouteComponentProps } from '@reach/router';
import RootLayout from '@/layout/RootLayout';
import Home from '@/pages/Home';
import PageA from '@/pages/PageA';
import PageB from '@/pages/PageB';

const NotFound = (_: RouteComponentProps) => (
  <div>Sorry, nothing here.</div>
)

export default function App() {
  return (
    <Router>
      <RootLayout path="/">
        <Home path="/" />
        <PageA path="pageA" />
        <PageB path="pageB" />

        <NotFound default />
      </RootLayout>
    </Router>
  )
}
