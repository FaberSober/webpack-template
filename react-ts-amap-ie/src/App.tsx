import React, { useEffect } from 'react';
import styles from './index.module.css';

export default function App() {

	useEffect(() => {
		var map = new AMap.Map('container', {
			zoom:11,//级别
			center: [116.397428, 39.90923],//中心点坐标
			viewMode:'3D'//使用3D视图
		});
	}, [])

	return (
		<div>
			<div className={styles.app}>
				<div className={styles.nav}>
					<a href="/">Home</a>
					<a href="/about">About</a>
				</div>

				<div className={styles.image} />
			</div>

			<div id="container" style={{ width: 800, height: 500 }} />
		</div>
	);
}
