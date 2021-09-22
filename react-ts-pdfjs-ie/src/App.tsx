import React, { useEffect } from 'react';
import styles from './index.module.css';

const PDF = require('pdfjs-dist');
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';
PDF.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export default function App() {

	useEffect(() => {
		var loadingTask = 'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf'
		PDF.getDocument(loadingTask).then((pdf) => {
			pdf.getPage(1).then(function(page) {
				var viewport = page.getViewport(1.5);
				var canvas = document.getElementById('the-canvas');
				var context = canvas.getContext('2d');
				canvas.height = viewport.height;
				canvas.width = viewport.width;
				var renderContext = {
					canvasContext: context,
					viewport: viewport,
				};
				page.render(renderContext);
			});
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

			<canvas id="the-canvas" style={{ width: 800, height: 500 }} />
		</div>
	);
}
