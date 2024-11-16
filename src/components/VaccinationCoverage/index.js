// Write your code here
import './index.css'
import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

// const data = [
//   {
//     group_name: 'Group A',
//     boys: 200,
//     girls: 400,
//   },
//   {
//     group_name: 'Group B',
//     boys: 3000,
//     girls: 500,
//   },
//   {
//     group_name: 'Group C',
//     boys: 1000,
//     girls: 1500,
//   },
//   {
//     group_name: 'Group D',
//     boys: 700,
//     girls: 1200,
//   },
// ]

const VaccinationCoverage = props => {
  const {lastSevenDaysVaccinationDetailsList} = props

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="vaccination-coverage-container mt-3 pt-5 pl-4">
      <h1 className="vacination-container-heading mb-4">
        Vaccination Coverage
      </h1>
      <BarChart
        data={lastSevenDaysVaccinationDetailsList}
        margin={{
          top: 5,
        }}
        width={900}
        height={400}
      >
        <XAxis
          dataKey="vaccineDate"
          tick={{
            stroke: 'gray',
            strokeWidth: 1,
          }}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: 'gray',
            strokeWidth: 0.5,
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 30,
          }}
        />
        <Bar
          dataKey="dose1"
          name="Dose1"
          fill="#5a8dee"
          barSize="20%"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="dose2"
          name="Dose2"
          fill="#f54394"
          barSize="20%"
          radius={[5, 5, 0, 0]}
        />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
