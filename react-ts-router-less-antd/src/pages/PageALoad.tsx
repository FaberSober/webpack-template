import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Button, DatePicker, ConfigProvider } from 'antd'

import zhCN from 'antd/lib/locale/zh_CN';
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')

export default function PageALoad(_: RouteComponentProps) {
  return (
    <ConfigProvider locale={zhCN}>
      <div>
        PageALoad

        <Button type="primary">Hello</Button>

        <DatePicker />
      </div>
    </ConfigProvider>
  )
}
