import React from 'react';
import styles from './index.module.css';
import EchartsDemo from './EchartsDemo';


export default function App() {
	return (
		<div className={styles.app}>

			<div className={styles.image} />

			<h1>Echarts</h1>
			<div style={{ height: 400, width: 600 }}>
				<EchartsDemo />
			</div>
		</div>
	);
}
