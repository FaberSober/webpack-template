import React from 'react';
import styles from './index.module.css';
import { AcceptEmail, Home, CarouselVideo, Folder } from '@icon-park/react'
import '@icon-park/react/styles/index.css'


export default function App() {
	return (
		<div className={styles.app}>
			<div className={styles.nav}>
				<a href="/">Home</a>
				<a href="/about">About</a>
			</div>

			<div className={styles.image} />

			<h1>IconPark</h1>
			<div>
				<Home theme="outline" size="24" fill="#333" />
				<AcceptEmail theme="outline" size="24" fill="#333"/>
				<CarouselVideo theme="two-tone" size="32" fill={['#333' ,'#2F88FF']}/>
				<Folder theme="multi-color" size="32" fill={['#333' ,'#2F88FF' ,'#FFF' ,'#43CCF8']}/>
			</div>
		</div>
	);
}
