import React from 'react';
import { Map, APILoader, ScaleControl, ToolBarControl, ControlBarControl, Geolocation } from '@uiw/react-amap';
import styles from './index.module.css';


export default function App() {
	return (
		<APILoader akay="a7a90e05a37d3f6bf76d4a9032fc9129">
			<div>
				<div className={styles.app}>
					<div className={styles.nav}>
						<a href="/">Home</a>
						<a href="/about">About</a>
					</div>

					<div className={styles.image} />
				</div>

				<div style={{ width: 800, height: 500 }}>
					<Map>
						<ScaleControl offset={[16, 30]} position="LB" />
						<ToolBarControl offset={[16, 10]} position="RB" />
						<ControlBarControl offset={[16, 180]} position="RB" />
						<Geolocation
							maximumAge={100000}
							borderRadius="5px"
							position="RB"
							offset={[16, 80]}
							zoomToAccuracy={true}
							showCircle={true}
						/>
					</Map>
					
					<Map>
						{({ AMap, map, container }) => {
							return;
						}}
					</Map>
				</div>
			</div>
		</APILoader>
	);
}
