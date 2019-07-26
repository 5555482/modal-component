import React, { Component }   from 'react'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'

/* actions */
import * as uiActionCreators  from 'core/actions/actions-ui'

import {
  ModalGen,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'components/modal'

import {
  styles,
  stylesBackgroundChange,
  ModalFirstStyles,
  ModalSecondStyles
} from './styles.scss'

class Page extends Component {
  constructor(props) {
    super(props);
    this.state ={
      mode: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({
      mode:!this.state.mode
    })
  }

  openModal=(evt) => {
    const { modalKey } = evt.target.dataset
    const { actions } = this.props
    actions.ui.openModal({modalKey})
  }

  render() {
    const { actions, ui } = this.props

    return (
      <div className={this.state.mode ? styles : stylesBackgroundChange}>
        <div className="section">
          <input type="button" value="open first modal" onClick={this.openModal} data-modal-key="modal-first" />
        </div>
        <div className="section">
          <input type="button" value="open second modal" onClick={this.openModal} data-modal-key="modal-second" />
        </div>

        <ModalGen
          modalKey="modal-first"
          modalState={ui.Modal}
          className="modal-first"
          closeAction={actions.ui.closeModal}
          cssModule={ModalFirstStyles}>
          <ModalHeader title="Terms and Conditions">
            <a href="#"><span className="close"></span></a>
          </ModalHeader>
          <ModalBody>
            Click here to indicate that you have read and agree to the terms presented in the Terms and Conditions agreement
          </ModalBody>
          <ModalFooter>
            <input
                type="button"
                value="Agree"
                onTouchTap={() => alert('Thank you!')}
            />
          </ModalFooter>
        </ModalGen>

        <ModalGen
          modalKey="modal-second"
          modalState={ui.Modal}
          className="modal-second"
          closeAction={actions.ui.closeModal}
          cssModule={ModalSecondStyles}>
          <ModalHeader title="Change Mode"/>
          <ModalBody>
            Click here to indicate that you agree to switch the mode to Dark/Light
          </ModalBody>
          <ModalFooter>
            <input
                type="button"
                value="Agree"
                onTouchTap={this.handleClick}
            />
          </ModalFooter>
        </ModalGen>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ui: state.ui
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      ui: bindActionCreators(uiActionCreators, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)
