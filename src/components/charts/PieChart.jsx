import React from 'react'
import { Pie } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

import { sampleApiData } from '../../constants/SampleData.ts'

const PieChart = () => {
    const upCount = sampleApiData.filter(api => api.status === 'up').length
    const downCount = sampleApiData.filter(api => api.status === 'down').length

  return (
      <Pie
        data={{
          labels: ['Up', 'Down'],
          datasets: [
            {
              label: 'Response Time',
              data: [upCount, downCount],
              backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }
          ]
        }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top'
            },
            title: {
              display: true,
              text: 'API Response Time'
            }
          }
        }}
      />
  )
}

export default PieChart