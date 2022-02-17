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
		<div style={{ paddingTop: 60 }}>
			<Editor
				tinymceScriptSrc="/plugins/tinymce_5.10.3/tinymce/js/tinymce/tinymce.min.js"
				onInit={(evt, editor) => editorRef.current = editor}
				initialValue="<p>This is the initial content of the editor.</p>"
				init={{
					// inline: true,
					height: 500,
					menubar: false,
					language: 'zh_CN',
					plugins: [
						'advlist autolink lists link image imagetools charmap print preview anchor',
						'searchreplace visualblocks code fullscreen',
						'insertdatetime table paste help wordcount',
						'colorpicker textcolor contextmenu quickbars',
					],
					toolbar: 'undo redo | formatselect | fontselect | fontsizeselect | ' +
					'bold italic underline strikethrough | backcolor | alignleft aligncenter ' +
					'alignright alignjustify | bullist numlist | outdent indent blockquote | ' +
					'link unlink image code table charmap | searchreplace visualblocks removeformat wordcount | help',
					contextmenu: 'link image imagetools table configurepermanentpen',
					image_advtab: true,
					content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
					/* enable title field in the Image dialog*/
					image_title: true,
					/* enable automatic uploads of images represented by blob or data URIs*/
					automatic_uploads: true,
					/*
						URL of our upload handler (for more details check: https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_url)
						images_upload_url: 'postAcceptor.php',
						here we add custom filepicker only to Image dialog
					*/
					file_picker_types: 'image',
					/* and here's our custom image picker*/
					/**
					 * 需要在后台提供对应API的接口，参考：https://www.tiny.cloud/docs/advanced/php-upload-handler/
					 * 返回数据json格式为：{ location : '/your/uploaded/image/file'}
					 */
					images_upload_url: '/api/file/uploadImage',
				}}
       />
       <button onClick={log}>Log editor content</button>
		</div>
	);
}
