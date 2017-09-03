import React, { Component } from 'react'
import logo from './logo.png'
import './App.css'
import Intro from './Intro'
import Positions from './Positions'
import ApplicationForm from './ApplicationForm'

class App extends Component {
  constructor () {
    super()
    this.state = {
      currentTabIndex: 0
    }
  }

  changeTab (tabIndex) {
    this.setState({
      currentTabIndex: tabIndex
    })
  }

  render () {
    const { currentTabIndex } = this.state

    const genClass = tabIndex =>
      'nav-button btn' + (tabIndex === currentTabIndex ? ' current' : '')

    return (
      <div>
        <header>
          <div className='container header'>
            <div className='header-left'>
              <img src={logo} className='logo' alt='logo' />
            </div>
            <div className='header-right'>
              <button className='login btn'>Login</button>
            </div>
          </div>
        </header>
        <main>
          <div className='container body'>
            <div className='block nav-container'>
              <button
                className={genClass(0)}
                onClick={_ => this.changeTab(0)}
                onKeyDown={e => e.keyCode === 13 && this.changeTab(0)}>
                <div>Work for Instacart</div>
              </button>
              <button
                className={genClass(1)}
                onClick={_ => this.changeTab(1)}
                onKeyDown={e => e.keyCode === 13 && this.changeTab(1)}>
                <div>Positions</div>
              </button>
              <button
                className={genClass(2)}
                onClick={_ => this.changeTab(2)}
                onKeyDown={e => e.keyCode === 13 && this.changeTab(2)}>
                <div>Easy Application</div>
              </button>
            </div>
            <div className='block content'>
              {currentTabIndex === 0 ? <Intro /> : null}
              {currentTabIndex === 1 ? <Positions /> : null}
              {currentTabIndex === 2 ? <ApplicationForm /> : null}
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default App
