import React, { Component }             from 'react'
import PropTypes                        from 'prop-types'
import { styles }                       from './styles.scss'
import { Modal } from 'react-bootstrap'

class ModalBody extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { children } = this.props

    return (
      <div className={styles}>
        <Modal.Body>
          {children}
        </Modal.Body>
      </div>
    )
  }
}

ModalBody.propTypes = {
  children: PropTypes.node.isRequired
}

export default ModalBody
