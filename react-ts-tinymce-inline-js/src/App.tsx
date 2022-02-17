import React, { useEffect } from 'react';
import './index.css'
import styles from './index.module.css';

export default function App() {

	useEffect(() => {
		var emailBodyConfig = {
			selector: '.fa-inline-editor',
			menubar: false,
			inline: true,
			language: 'zh_CN',
			// plugins: [
			// 	'link',
			// 	'lists',
			// 	'autolink',
			// ],
			// toolbar: [
			// 	'undo redo | bold italic underline | fontselect fontsizeselect | ' +
			// 	'forecolor backcolor | alignleft aligncenter alignright alignfull | numlist bullist outdent indent'
			// ],
			// valid_elements: 'p[style],strong,em,span[style],a[href],ul,ol,li',
			// valid_styles: {
			// 	'*': 'font-size,font-family,color,text-decoration,text-align'
			// },
			plugins: [
				'advlist autolink lists link image imagetools charmap print preview anchor',
				'searchreplace visualblocks code fullscreen',
				'insertdatetime table paste help wordcount',
				'colorpicker textcolor contextmenu',
			],
			toolbar: 'undo redo | formatselect | fontselect | fontsizeselect | ' +
			'bold italic underline strikethrough | backcolor | alignleft aligncenter ' +
			'alignright alignjustify | bullist numlist | outdent indent blockquote | ' +
			'link unlink image code table charmap | searchreplace visualblocks removeformat wordcount | help',
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
			table_sizing_mode: 'fixed',
		};
		
		tinymce.init(emailBodyConfig);
	}, [])

	return (
		<div style={{ paddingTop: 30 }}>
			
			{
				(new Array(1000).fill('1')).map((v, i) => (
					<div key={`editor-${i}`} className='fa-inline-editor' style={{ padding: 6 }}>
						<p>This is the initial content of the editor.</p>
					</div>
				))
			}
			
		</div>
	);
}
