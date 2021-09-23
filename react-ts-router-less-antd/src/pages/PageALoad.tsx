import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Button } from 'antd'

export default function PageALoad(_: RouteComponentProps) {
  return (
    <div>
      PageALoad

      <Button type="primary">Hello</Button>
    </div>
  )
}
