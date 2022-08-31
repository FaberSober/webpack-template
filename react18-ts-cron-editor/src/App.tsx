import React, { useState } from 'react';
import { CronEditor } from 'fa-cron-react-editor';

import 'fa-cron-react-editor/dist/index.css'
import styles from './index.module.css';

export default function App() {
	const [cron, setCron] = useState<string>('* * * * * ?');

    return (
        <div>
			<CronEditor 
				value={cron}
				onChange={setCron}
			/>

			<div>cron: {cron}</div>
		</div>
    );
}
