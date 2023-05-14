import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import { useDispatch } from 'react-redux';
import { updatedRecord } from '../redux/AirlineSlice';
import { useNavigate, useParams } from 'react-router-dom';



function EditAirline({selectedAirLine,setSelectedAirLine}) {
  let { id } = useParams();
  console.log("selectedAirLine",selectedAirLine)
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const onChangeHandler = (event) => {
    setSelectedAirLine({...selectedAirLine, [event.target.name]:event.target.value});
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    setValidated(true);
    dispatch(updatedRecord(selectedAirLine));
    navigate('/all-users')
  };

  return (
    <Container className='mt-5'>
      <Card className="mb-5">
        <Card.Header className='text-center h2'>Fill the details to add Airline.</Card.Header>
        <Card.Body >
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" className='mb-3' controlId="validationCustom01">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter Name"
                  name='name'
                  value={selectedAirLine.name}
                  onChange={onChangeHandler}
                />
                <Form.Control.Feedback type='invalid'>Please enter name</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="4" className='mb-3' controlId="validationCustom02">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter Country"
                  name='country'
                  value={selectedAirLine.country}
                  onChange={onChangeHandler}
                />
                <Form.Control.Feedback type='invalid'>please enter valid country name</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" className='mb-3' controlId="validationCustomUsername">
                <Form.Label>Logo</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="Enter logo link"
                    aria-describedby="inputGroupPrepend"
                    required
                    name='logo'
                    value={selectedAirLine.logo}
                    onChange={onChangeHandler}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter logo link.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} md="4" className='mb-3' controlId="validationCustomUsername">
                <Form.Label>Slogan</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="slogan"
                    aria-describedby="inputGroupPrepend"
                    required
                    name='slogan'
                    value={selectedAirLine.slogan}
                    onChange={onChangeHandler}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter slogan.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} md="4" className='mb-3' controlId="validationCustomUsername">
                <Form.Label>Head Quatres</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="head quatres"
                    name='head_quaters'
                    aria-describedby="inputGroupPrepend"
                    required
                    value={selectedAirLine.head_quaters}
                    onChange={onChangeHandler}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter head quatres.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} className='mb-3' md="4" controlId="validationCustomUsername">
                <Form.Label>Website</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="website"
                    aria-describedby="inputGroupPrepend"
                    required
                    name='website'
                    value={selectedAirLine.website}
                    onChange={onChangeHandler}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter website.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} className='mb-3' md="4" controlId="validationCustomUsername">
                <Form.Label>Established</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="established"
                    aria-describedby="inputGroupPrepend"
                    required
                    name='established'
                    value={selectedAirLine.established}
                    onChange={onChangeHandler}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter established year.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <div className='d-flex align-items-center justify-content-center text-center'>
              <Button type="submit" className='btn btn-success text-center m-2'  active onClick={(e) => handleSubmit(e)}>Update</Button>
              <Button type="submit" className='btn btn-primary text-center center' active onClick={() => {

                navigate('/all-users');
                // reset the state
                
              }}>Cancel</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>


    </Container>
  );
}


export default EditAirline