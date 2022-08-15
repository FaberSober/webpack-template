import React from 'react';
import styles from './index.module.css';

export default function App() {
	return (
		<div className={styles.app}>
			<div style={{ width: 800, height: 400 }}>
				<iframe width="100%" height="100%" src={`/plugins/pdfjs/pdfjs-2.9.359-legacy-dist/web/viewer.html?file=/test.pdf`} />
			</div>
		</div>
	);
}
