import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import './app.less';

import 'antd/dist/antd.less'

export default function App() {
  const [visible, setVisible] = useState(false)

	return (
		<div id="app">
			<div id="nav">
				<a href="/">Home</a>
				<a href="/about">About</a>
			</div>

			<Button type="primary" onClick={() => setVisible(true)}>Hello</Button>

			<div>
				<CheckCircleOutlined />
			</div>

			<Modal title="Basic Modal" visible={visible} onOk={() => setVisible(false)} onCancel={() => setVisible(false)}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
		</div>
	);
}
