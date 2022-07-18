import React, { useEffect, useRef, useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import * as echarts from 'echarts';
import {ECharts} from 'echarts';


/**
 * @author xu.pengfei
 * @date 2022/7/18
 */
export default function EchartsDemo() {

  const chartRef = useRef<ECharts>()
  const [id] = useState(uuidv4())
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    // @ts-ignore
    chartRef.current = echarts.init(document.getElementById(id));

    // @ts-ignore
    chartRef.current.setOption({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    });
    setReady(true)
  }, [])

  return (
    <div className="examples" style={{ position: 'relative', height: '100%', width: '100%' }}>
      <div id={id} style={{ height: 400, width: '100%' }} />
    </div>
  )
}
