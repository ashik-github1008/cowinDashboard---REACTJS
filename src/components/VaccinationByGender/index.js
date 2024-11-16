// Write your code here
import './index.css'
import {PieChart, Pie, Legend, Cell} from 'recharts'

// const data = [
//   {
//     count: 809680,
//     language: 'Telugu',
//   },
//   {
//     count: 4555697,
//     language: 'Hindi',
//   },
//   {
//     count: 12345657,
//     language: 'English',
//   },
// ]

const VaccinationByGender = props => {
  const {vaccinationByGenderList} = props

  return (
    <div className="vaccination-coverage-container mt-4 pt-5 pl-4">
      <h1 className="vacination-container-heading mb-4">
        Vaccination by gender
      </h1>
      <PieChart width={1000} height={300}>
        <Pie
          cx="50%"
          cy="50%"
          data={vaccinationByGenderList}
          startAngle={180}
          endAngle={0}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{
            fontSize: 12,
            fontFamily: 'Roboto'
          }}
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByGender
