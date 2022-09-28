import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChildren,
  faDog,
  faHouseUser,
} from '@fortawesome/free-solid-svg-icons'

import { XAxis, BarChart, Bar, YAxis, ResponsiveContainer } from 'recharts'

const dummyData = [
  {
    name: 'Niños',
    total: 3000,
  },
  {
    name: 'Perros y Gatos',
    total: 500,
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
      width={25}
      height={25}
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
      fill="#888"
      textAnchor="middle"
      dy={24}
    >{`${value}`}</text>
  )
}

const Chart = (): JSX.Element => {
  return (
    <>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart width={700} height={500} data={dummyData}>
          <XAxis dataKey="name" tick={renderCustomAxisTick} />
          <YAxis />
          <Bar
            dataKey="total"
            barSize={100}
            fill="#fef08a"
            label={renderCustomBarLabel}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}

export default Chart
