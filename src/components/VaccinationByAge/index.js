// Write your code here
import './index.css'
import {PieChart, Pie, Legend, Cell} from 'recharts'

const VaccinationByAge = props => {
  const {vaccinationByAgeList} = props

  return (
    <div className="vaccination-coverage-container mt-4 pt-5 pl-4">
      <h1 className="vacination-container-heading mb-4">Vaccination by age</h1>
      <PieChart width={1000} height={300}>
        <Pie
          cx="50%"
          cy="30%"
          data={vaccinationByAgeList}
          startAngle={0}
          endAngle={360}
          innerRadius="0%"
          outerRadius="60%"
          dataKey="count"
        >
          <Cell name="18-44" fill="#2d87bb" />
          <Cell name="44-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#64c2a6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{
            fontSize: 12,
            fontFamily: 'Roboto',
          }}
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByAge
