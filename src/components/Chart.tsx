import { useId } from 'react'
import { UserGroupIcon } from '@heroicons/react/24/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChildren,
  faDog,
  faHouseUser,
} from '@fortawesome/free-solid-svg-icons'

import { XAxis, BarChart, Bar, YAxis } from 'recharts'

const dummyData = [
  {
    name: 'Niños',
    total: 100,
  },
  {
    name: 'Perros y Gatos',
    total: 120,
  },
  {
    name: 'Fundaciones',
    total: 10,
  },
]

const renderCustomAxisTick = ({ x, y, payload }: any) => {
  let icon = null

  switch (payload.value) {
    case 'Niños':
      icon = <FontAwesomeIcon icon={faChildren} />
      break
    case 'Perros y Gatos':
      icon = <FontAwesomeIcon icon={faDog} />
      break
    case 'Fundaciones':
      icon = icon = <FontAwesomeIcon icon={faHouseUser} />
      break
    default:
      icon = ''
  }

  return (
    <svg
      x={x - 12}
      y={y + 4}
      width={24}
      height={24}
      viewBox="0 0 1024 1024"
      fill="#666"
    >
      {icon}
    </svg>
  )
}

const renderCustomBarLabel = ({ payload, x, y, width, height, value }: any) => {
  return (
    <text
      x={x + width / 2}
      y={y}
      fill="#666"
      textAnchor="middle"
      dy={-6}
    >{`value: ${value}`}</text>
  )
}

const Chart = (): JSX.Element => {
  return (
    <>
      <h1>2023 Progress</h1>
      <BarChart width={600} height={400} data={dummyData}>
        <XAxis dataKey="name" tick={renderCustomAxisTick} />
        <YAxis />
        <Bar
          dataKey="total"
          barSize={70}
          fill="#fef08a"
          label={renderCustomBarLabel}
        />
      </BarChart>
    </>
  )
}

export default Chart
