import React, { ReactNode } from 'react'
import { Link, RouteComponentProps } from '@reach/router'
import styles from './index.module.css'


interface IProps extends RouteComponentProps {
  children?: ReactNode | Element;
}

export default function RootLayout({ children }: IProps) {
  return (
    <div style={{ height: '100vh', width: '100vw', overflow: 'auto' }}>
      <div className={styles.nav}>
        <Link to="">Home</Link>
        <Link to="pageA">PageA</Link>
        <Link to="pageB">PageB</Link>
        <Link to="pageX">Page NotFound</Link>
      </div>

      {children}
    </div>
  )
}
