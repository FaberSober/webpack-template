import React from 'react';
// Core viewer
import { Viewer, Worker } from '@react-pdf-viewer/core';

// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


export default function App() {

	// Create new plugin instance
	const defaultLayoutPluginInstance = defaultLayoutPlugin();

	return (
		<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.js">
			<div>
				<Viewer fileUrl='/test.pdf' plugins={[ defaultLayoutPluginInstance ]} />
			</div>
		</Worker>
	);
}
