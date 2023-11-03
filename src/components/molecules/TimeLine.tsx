'use client'
import {
  registerables,
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  TimeScale
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import 'chartjs-adapter-date-fns'

// Register ChartJS components using ChartJS.register
ChartJS.register(
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  TimeScale,
  ...registerables
)

export type TimeLineProps = {
  name: string
  elements: TimeLineElements[]
  minDate?: Date
  maxDate?: Date
}

export type TimeLineElements = {
  name: string
  startedAt: Date
  endedAt?: Date
}

export default function TimeLine({
  name,
  elements,
  minDate = new Date('2021'),
  maxDate = new Date()
}: TimeLineProps) {
  const options = {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
        display: false
      },
      title: {
        display: true,
        text: name
      }
    },
    scales: {
      x: {
        type: 'time',
        tooltipFormat: 'MM Y',
        min: minDate,
        max: maxDate,
        unit: 'year'
      },
      y: {
        beginAtZero: false
      }
    }
  }

  const names = elements.map((e) => {
    return e.name
  })

  const durations = elements.map((e) => {
    return [e.startedAt, e.endedAt]
  })

  const data = {
    labels: names,
    datasets: [
      {
        // label: a,
        data: durations,
        backgroundColor: [
          'rgba(255, 26, 104, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(0, 0, 0, 1)'
        ],
        borderColor: [
          'rgba(255, 26, 104, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(0, 0, 0, 1)'
        ],
        barPercentage: 0.35
      }
    ]
  }

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  )
}
