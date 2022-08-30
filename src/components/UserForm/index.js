import {Component} from 'react'

import {TextArea} from './styledComponents'

import './index.css'

class UserForm extends Component {
  state = {
    feedbackDescription: '',
    userName: '',
    userMail: '',
    date: '',
    errorMsg: '',
    submit: false,
  }

  onChangeUsername = event => {
    this.setState({userName: event.target.value})
  }

  onChangeEmail = event => {
    this.setState({userMail: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  onChangeUserQuestions = event => {
    this.setState({feedbackDescription: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {feedbackDescription, userName, userMail, date} = this.state

    if (
      feedbackDescription === '' &&
      userName === '' &&
      userMail === '' &&
      date === ''
    ) {
      this.setState({errorMsg: 'Required'})
    } else {
      this.setState({submit: true})
    }
  }

  renderForm = () => {
    const {feedbackDescription, userName, userMail, date, errorMsg} = this.state
    return (
      <form onSubmit={this.onSubmitForm}>
        <div className="form-bg-container">
          <div className="card-bg">
            <h1 className="main-heading">Feedback Form</h1>
            <p className="description">
              We would love to hear you thoughts, suggestions, concerns or
              problems with anything se we can improve
            </p>
          </div>

          <div className="feedback-type-bg-container">
            <h className="side-heading">Feedback Type</h>

            <div className="feedback-type-bg">
              <div className="feedback-type-item ">
                <input
                  type="checkbox"
                  id="comments"
                  value="comments"
                  name="comments"
                />
                <label htmlFor="comments" className="labels">
                  Comments
                </label>
              </div>

              <div className="feedback-type-item">
                <input
                  type="checkbox"
                  id="Suggestions"
                  value="Suggestions"
                  name="Suggestions"
                />
                <label htmlFor="Suggestions" className="labels">
                  Suggestions
                </label>
              </div>

              <div className="feedback-type-item">
                <input
                  type="checkbox"
                  id="Questions"
                  value="Questions"
                  name="Questions"
                />
                <label htmlFor="Questions" className="labels">
                  Questions
                </label>
              </div>
            </div>
          </div>

          <div className="feedback-content-bg">
            <h className="side-heading">Describe Your Feedback*</h>
            <TextArea
              rows="10"
              cols="50"
              className="text-area-filed"
              value={feedbackDescription}
              onChange={this.onChangeUserQuestions}
              placeholder="Type Here"
            />
            <span className="error-msg">{errorMsg}</span>
          </div>

          <div className="name-bg-container">
            <div className="email-field">
              <label className="side-heading mail-text" htmlFor="name">
                Full Name*
              </label>
              <input
                type="text"
                className="user-input-filed"
                id="name"
                onChange={this.onChangeUsername}
                value={userName}
              />
              <span className="error-msg"> {errorMsg}</span>
            </div>
          </div>

          <div className="email-field">
            <h className="side-heading mail-text">E-mail*</h>
            <input
              type="text"
              className="user-input-filed"
              placeholder="Usergmail@gmail.com"
              onChange={this.onChangeEmail}
              value={userMail}
            />
            <span className="error-msg">{errorMsg}</span>
          </div>
          <div className="date-filed-bg">
            <h className="side-heading mail-text">Feedback Date</h>
            <input
              type="date"
              className="user-input-filed"
              onChange={this.onChangeDate}
              value={date}
            />
            <span className="error-msg">{errorMsg}</span>
            <p>Upload Image</p>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={this.onImageChange}
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    )
  }

  renderSubmitForm = () => (
    <div className="submit-form">
      <h1>Successfully Submitted</h1>
    </div>
  )

  render() {
    const {submit} = this.state
    return (
      <div className="form-container">
        {submit ? this.renderSubmitForm() : this.renderForm()}
      </div>
    )
  }
}

export default UserForm
