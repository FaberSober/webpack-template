import React, { useEffect } from 'react';
import styles from './index.module.css';
import * as Cesium from 'cesium';
// import "cesium/Build/Cesium/Widgets/"
// import "cesium/Build/Cesium/Widgets/widgets.css";

Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkODM4YmM5YS02NDYyLTQ2YzAtODM1NS1iODY4OTc4ZDA4ZDMiLCJpZCI6ODM5NjQsImlhdCI6MTY0NjAxNzQ2MH0.V6TFAsawkIQ971B5kidOsH7TbU2GbStAQkdIXV-8QUo";

export default function App() {

	useEffect(() => {
		// Initialize the Cesium Viewer in the HTML element with the "cesiumContainer" ID.
		const viewer = new Cesium.Viewer('cesiumContainer', {
			terrainProvider: Cesium.createWorldTerrain()
		});    
		// Add Cesium OSM Buildings, a global 3D buildings layer.
		const buildingTileset = viewer.scene.primitives.add(Cesium.createOsmBuildings());   
		// Fly the camera to San Francisco at the given longitude, latitude, and height.
		viewer.camera.flyTo({
			destination : Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
			orientation : {
				heading : Cesium.Math.toRadians(0.0),
				pitch : Cesium.Math.toRadians(-15.0),
			}
		});
	}, [])
	
	return (
		<div className={styles.app}>
			<div id="cesiumContainer"></div>
		</div>
	);
}
