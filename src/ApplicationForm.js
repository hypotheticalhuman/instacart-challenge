import React, { Component } from 'react'
import './ApplicationForm.css'

const ApplicationForm = () => (
  <div className='signup-form'>
    <div className='inputs left-col'>
      <div className='names'>
        <div className='input string optional applicant_first_name first-name'>
          <input autoCorrect='off' tabIndex='1' autoFocus className='string optional' placeholder='First Name' type='text' name='applicant[first_name]' id='applicant_first_name' />
        </div>
        <div className='input string optional applicant_last_name last-name'>
          <input autoCorrect='off' tabIndex='2' className='string optional' placeholder='Last Name' type='text' name='applicant[last_name]' id='applicant_last_name' />
        </div>
      </div>
      <div className='input email'>
        <input tabIndex='3' className='string email optional' placeholder='Email' type='email' name='applicant[email]' id='applicant_email' />
      </div>
      <div className='input tel'>
        <input tabIndex='4' className='string tel optional' placeholder='Cell Phone Number' type='tel' name='applicant[phone]' id='applicant_phone' />
      </div>
      <div className='input string'>
        <input tabIndex='5' className='string optional' placeholder='Zip Code' type='text' name='applicant[zip_code]' id='applicant_zip_code' />
      </div>
      <div className='input string'>
        <input tabIndex='100' className='string optional' placeholder='Referral Code (optional)' type='text' name='applicant[referer]' id='applicant_referer' />
      </div>
    </div>
    <div className='right-col'>
      <button name='button' type='submit' className='btn' id='signup-btn' tabIndex='200'>Continue</button>
      <small>
        We will use this information to communicate with you about your application.
      </small>
    </div>
  </div>
)

export default ApplicationForm
