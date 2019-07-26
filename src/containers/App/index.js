import React, { Component }   from 'react'
import injectTapEventPlugin   from 'react-tap-event-plugin'
import { HashRouter, Route }  from 'react-router-dom'
import './styles/app.scss'
import Page from 'containers/Page'

injectTapEventPlugin()

export class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className="container">
          <HashRouter>
            <div>
              <Route exact path="/" component={Page}/>
            </div>
          </HashRouter>
        </div>
      </div>

    )
  }
}

export default App
