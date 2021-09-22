import React from 'react';
import styles from './index.module.css';

export default function App() {
	return (
		<div className={styles.app}>
			<div className={styles.nav}>
				<a href="/">Home</a>
				<a href="/about">About</a>
			</div>

			<div className={styles.image} />
		</div>
	);
}
