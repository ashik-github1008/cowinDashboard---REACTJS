// Write your code here
import './index.css'

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage/index'
import VaccinationByGender from '../VaccinationByGender/index'
import VaccinationByAge from '../VaccinationByAge/index'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class CowinDashboard extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    lastSevenDaysVaccinationDetailsList: [],
    vaccinationByGenderList: [],
    vaccinationByAgeList: [],
  }

  componentDidMount() {
    this.getCovidData()
  }

  getCovidData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const apiUrl = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(apiUrl)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const lastSevenDaysVaccinationDetails =
        fetchedData.last_7_days_vaccination.map(eachVaccination => ({
          vaccineDate: eachVaccination.vaccine_date,
          dose1: eachVaccination.dose_1,
          dose2: eachVaccination.dose_2,
        }))

      const vaccinationByGenderDetails = fetchedData.vaccination_by_gender.map(
        eachVaccination => ({
          count: eachVaccination.count,
          gender: eachVaccination.gender,
        }),
      )

      const vaccinationByAgeDetails = fetchedData.vaccination_by_age.map(
        eachVaccination => ({
          age: eachVaccination.age,
          count: eachVaccination.count,
        }),
      )

      this.setState({
        apiStatus: apiStatusConstants.success,
        lastSevenDaysVaccinationDetailsList: lastSevenDaysVaccinationDetails,
        vaccinationByGenderList: vaccinationByGenderDetails,
        vaccinationByAgeList: vaccinationByAgeDetails,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderCovidDataDetails = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  renderSuccessView = () => {
    const {
      lastSevenDaysVaccinationDetailsList,
      vaccinationByGenderList,
      vaccinationByAgeList,
    } = this.state
    return (
      <>
        <VaccinationCoverage
          lastSevenDaysVaccinationDetailsList={
            lastSevenDaysVaccinationDetailsList
          }
        />
        <VaccinationByGender
          vaccinationByGenderList={vaccinationByGenderList}
        />
        <VaccinationByAge vaccinationByAgeList={vaccinationByAgeList} />
      </>
    )
  }

  renderLoadingView = () => {
    return (
      <div data-testid="loader" className="loader-container">
        <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
      </div>
    )
  }

  renderFailureView = () => {
    return (
      <div className="failure-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
          alt="failure view"
          className="failure-img"
        />
        <h1>Something went wrong</h1>
      </div>
    )
  }

  render() {
    return (
      <div className="cowindashboard-app-container">
        <div className="logo-container mb-3">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="website-logo mr-2"
          />
          <p className="website-name mt-1">Co-WIN</p>
        </div>
        <h1 className="dashboard-heading">CoWIN Vaccination in India</h1>
        <div className="render-container">{this.renderCovidDataDetails()}</div>
      </div>
    )
  }
}

export default CowinDashboard
