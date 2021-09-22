import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import './index.css';

export default function App() {
	return (
		<div>
			<div id="app">
				<div id="nav">
					<a href="/">Home</a>
					<a href="/about">About</a>
				</div>

				<div id="image" />
			</div>

			<MonacoEditor
        width="800"
        height="600"
        language="javascript"
        theme="vs-dark"
      />
		</div>
	);
}
