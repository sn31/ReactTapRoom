import React from 'react'
import {
  Form,
  FormGroup,
  Col,
  ControlLabel,
  FormControl
} from 'react-bootstrap'
import PropTypes from 'prop-types'

function KegForm(props) {
  let _name = null
  let _brewer = null
  let _description = null
  let _abv = null
  let _remaining = null
  let _price = null

  function handleNewKegFormSubmission(event) {
    event.preventDefault()
    props.onNewKegCreation({
      name: _name.value,
      brewer: _brewer.value,
      description: _description.value,
      abv: _abv.value + '%',
      price: '$' + _price.value,
      remaining: _remaining.value + ' pints'
    })
    _name.value = ''
    _brewer.value = ''
    _description.value = ''
    _abv.value = ''
    _remaining.value = ''
    _price.value = ''
  }
  let kegId = props.currentRouterPath.split('/')[2]
  let selectedKeg = props.masterKegList[kegId]

  function handleEditKegFormSubmission(event) {
    event.preventDefault()

    props.onEditingKeg(kegId, {
      name: _name.value,
      brewer: _brewer.value,
      description: _description.value,
      abv: _abv.value + '%',
      price: '$' + _price.value,
      remaining: _remaining.value + ' pints'
    })

    _name.value = ''
    _brewer.value = ''
    _description.value = ''
    _abv.value = ''
    _remaining.value = ''
    _price.value = ''
  }

  return (
    <div>
      <Form
        onSubmit={
          props.currentRouterPath === '/addnewkeg'
            ? handleNewKegFormSubmission
            : handleEditKegFormSubmission
        }
      >
        <FormGroup>
          <Col componentClass={ControlLabel}>Name</Col>
          <Col>
            <FormControl
              componentClass="input"
              type="text"
              id="name"
              placeholder={
                props.currentRouterPath === '/addnewkeg'
                  ? 'Name'
                  : selectedKeg.name
              }
              inputRef={input => {
                _name = input
              }}
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel}>Brewer</Col>
          <Col>
            <FormControl
              componentClass="input"
              type="text"
              id="brewer"
              placeholder={
                props.currentRouterPath === '/addnewkeg'
                  ? 'Brewer'
                  : selectedKeg.brewer
              }
              inputRef={input => {
                _brewer = input
              }}
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel}>Description</Col>
          <Col>
            <FormControl
              componentClass="textarea"
              type="text"
              id="description"
              placeholder={
                props.currentRouterPath === '/addnewkeg'
                  ? 'Description'
                  : selectedKeg.description
              }
              inputRef={input => {
                _description = input
              }}
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel}>ABV</Col>
          <Col>
            <FormControl
              componentClass="input"
              type="number"
              id="abv"
              placeholder={
                props.currentRouterPath === '/addnewkeg'
                  ? 'ABV'
                  : selectedKeg.abv
              }
              inputRef={input => {
                _abv = input
              }}
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel}>Remaining</Col>
          <Col>
            <FormControl
              componentClass="input"
              type="number"
              id="remaining"
              placeholder={
                props.currentRouterPath === '/addnewkeg'
                  ? 'Remaining'
                  : selectedKeg.remaining
              }
              inputRef={input => {
                _remaining = input
              }}
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel}>Price</Col>
          <Col>
            <FormControl
              componentClass="input"
              type="number"
              id="price"
              placeholder={
                props.currentRouterPath === '/addnewkeg'
                  ? 'Price'
                  : selectedKeg.price
              }
              inputRef={input => {
                _price = input
              }}
            />
          </Col>
        </FormGroup>
        <button type="submit" className="btn">
          Submit
        </button>
      </Form>

      <style jsx>{`
        div {
          border: 1px solid white;
          width: 40%;
          margin: 2em auto 2em auto;
          padding: 1em 1em 1em 1em;
          background-color: rgba(144, 148, 155, 0.8);
        }
        button {
          background-color: black;
          border: none;
          color: white;
          text-align: center;
          text-decoration: none;
          display: block;
          font-size: 16px;
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>
    </div>
  )
}

KegForm.propTypes = {
  onNewKegCreation: PropTypes.func,
  onEditingKeg: PropTypes.func,
  currentRouterPath: PropTypes.string,
  masterKegList: PropTypes.object
}
export default KegForm
