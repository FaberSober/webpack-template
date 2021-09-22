import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import styles from './index.module.css';


console.log('styles', styles)

export default function App() {
	const [code, setCode] = useState('// type your code...')

	const options = {
		selectOnLineNumbers: true
	};

  function editorDidMount(editor:any, monaco:any) {
    console.log('editorDidMount', editor);
    editor.focus();
  }

	function onChange(newValue:any, e:any) {
    console.log('onChange', newValue, e);
		setCode(newValue)
  }

	return (
		<div className={styles.app}>
			<MonacoEditor
        width="800"
        height="600"
        language="javascript"
        theme="vs-dark"
        value={code}
        options={options}
        onChange={onChange}
        editorDidMount={editorDidMount}
      />
		</div>
	);
}
