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
    alert('Added successfully')
    props.onNewKegCreation({
      name: _name.value,
      brewer: _brewer.value,
      description: _description.value,
      abv: _abv.value,
      price: _price.value,
      remaining: _remaining.value,
    })

    _name.value = ''
    _brewer.value = ''
    _description.value = ''
    _abv.value = ''
    _remaining.value = ''
    _price.value = ''
    
  }
  function handleEditKegFormSubmission(event) {
    event.preventDefault()
    alert('Editted successfully')
    props.onEditingKeg({
      name: _name.value,
      brewer: _brewer.value,
      description: _description.value,
      abv: _abv.value,
      price: _price.value,
      remaining: _remaining.value,
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
      <Form onSubmit={(props.currentRouterPath === "/addnewkeg") ? handleNewKegFormSubmission : handleEditKegFormSubmission}>
        <FormGroup>
          <Col componentClass={ControlLabel}>Name</Col>
          <Col>
            <FormControl
              componentClass="input"
              type="text"
              id="name"
              placeholder="Name"
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
              placeholder="Brewer"
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
              placeholder="Description"
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
              placeholder="ABV"
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
              placeholder="Remaining"
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
              placeholder="Price"
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
          border-radius: 5px;
          padding-top: 20px;
          padding-bottom: 20px;
          margin-top: 3em;
          width: 40%;
          margin-left: auto;
          margin-right: auto;
          padding-left: auto;
          padding-right: auto;
        }
        button {
          background-color: #d888a3;
          border: none;
          color: white;
          text-align: center;
          text-decoration: none;
          display: block;
          font-size: 16px;
          margin-left: auto;
          margin-right: auto;
        }
        label {
          font-weight: bold;
        }
      `}</style>
    </div>
  )
}

KegForm.propTypes = {
  onNewKegCreation: PropTypes.func,
  onEditingKeg: PropTypes.func,
  currentRouterPath: PropTypes.string
}
export default KegForm
