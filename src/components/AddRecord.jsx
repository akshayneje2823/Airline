import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import { useDispatch } from 'react-redux';
import { addNewRecord } from '../redux/AirlineSlice';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddRecord() {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  
  const [validated, setValidated] = useState(false);
  const [record, setRecord] = useState({});

  // toast message
  const notify = () => toast("Record Added Successfully");

  // creating unique id
  const uniqueId = () => {
    console.log(Math.round(Date.now() * Math.random()).toString())
    return Math.round(Date.now() * Math.random()).toString()
  }

  // on change Handler
  const changeHandler = (event) => {
    setRecord((prev) => {
      return {
        ...prev, [event.target.name]: event.target.value,
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    dispatch(addNewRecord({...record, id:uniqueId()}));

    notify()

    setTimeout(()=>{
      navigate("/")
    },2000)

  };


  useEffect(() => {
    console.log(record)
  }, [record]);


  return (
    <Container className='mt-5'>
      <Card className="mb-5">
      <ToastContainer 
      position="top-center"
      autoClose={1500}
       />
        <Card.Header className='text-center h2'>Fill The Details To Add Airline Record </Card.Header>
        <Card.Body >
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" className='mb-3' controlId="validationCustom01">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder=" Enter Name"
                  name='name'
                  onChange={changeHandler}
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
                  onChange={changeHandler}

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
                    name='logo'
                    required
                    onChange={changeHandler}

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
                    name='slogan'
                    required
                    onChange={changeHandler}

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
                    aria-describedby="inputGroupPrepend"
                    name='head_quaters'
                    required
                    onChange={changeHandler}

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
                    name='website'
                    required
                    onChange={changeHandler}

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
                    name='established'
                    required
                    onChange={changeHandler}

                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter established year.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <div className='d-flex align-items-center justify-content-center text-center'>
              <Button type="submit" className='center m-2 btn-success' active >Add</Button>
              <Button type="submit" className='center m-2' onClick={()=>navigate('/')} >back</Button>

            </div>
          </Form>
        </Card.Body>
      </Card>


    </Container>
  );
}


export default AddRecord