import React, { useRef } from 'react';
import './index.css'
import styles from './index.module.css';
import { Editor } from '@tinymce/tinymce-react';

export default function App() {

	const editorRef = useRef<any>(null);

   const log = () => {
     if (editorRef.current) {
       console.log(editorRef.current.getContent());
     }
   };

	return (
		<div>
			<Editor
				tinymceScriptSrc="/plugins/tinymce_5.10.3/tinymce/js/tinymce/tinymce.min.js"
				onInit={(evt, editor) => editorRef.current = editor}
				initialValue="<p>This is the initial content of the editor.</p>"
				init={{
					height: 500,
					menubar: false,
					plugins: [
						'advlist autolink lists link image charmap print preview anchor',
						'searchreplace visualblocks code fullscreen',
						'insertdatetime table paste help wordcount',
						'colorpicker textcolor contextmenu',
					],
					toolbar: 'undo redo | formatselect | fontsizeselect| ' +
					'bold italic underline strikethrough |  backcolor | alignleft aligncenter ' +
					'alignright alignjustify | bullist numlist | outdent indent blockquote | ' +
					'link unlink image code table | removeformat | help',
					content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
				}}
       />
       <button onClick={log}>Log editor content</button>
		</div>
	);
}
