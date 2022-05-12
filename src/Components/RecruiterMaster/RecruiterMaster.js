import React, {useState} from 'react'
import { Container, Table, Modal, Button, Form, Row, Col } from 'react-bootstrap'
import {  ButtonGroup, Dropdown, Tooltip,OverlayTrigger } from 'react-bootstrap';
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import { ToastContainer, toast } from 'react-toastify';
import { FaStar } from "react-icons/fa";
import {  Radio, Rating } from "./RatingStyles";
import './MyProfile.css'
const RecruiterMaster = () => {
  const [rate, setRate] = useState(0);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const notify = () => toast.success("saved");
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
   

    const [show4, setShow4] = useState(false);

    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);
    function refreshPage(){ 
      window.location.reload(); 
  }
  return (
    <div>
        <Sidebar />
        <NavbarMenu />
        <ToastContainer />
        <Container>
          <div className='top-button'>
        <div className='d-flex text'>
            <p>No of jd (123)</p><span className='mx-3'>|</span>
            <p >No of contacts (23)</p>
            </div>
            <div className='mb-2'>
            <ButtonGroup className="btn btn-light">
            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Save Jd</Tooltip>}>
            <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
            <i className="far fa-save"></i>
  </Dropdown.Toggle>

  <Dropdown.Menu>

  </Dropdown.Menu>
            </Dropdown>
            </OverlayTrigger>
            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Add List</Tooltip>}>
            <Dropdown className='mx-2'>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
            <i className="fas fa-plus"></i>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <h5 className='mt-3 mb-3 text-center'>Add JDs List</h5>
    <Form>
      <Form.Group className='mb-3'>
        <Form.Control placeholder='Title'type='text' name="title"/>
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Control placeholder='Industry' type='text' name="industry"/>
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Control placeholder='Client Name' type='text' name="client"/>
      </Form.Group>
      <div className='d-flex justify-content-center'>
      <Button>Save</Button>
      
      
      </div>
    </Form>
  </Dropdown.Menu>
            </Dropdown>
            </OverlayTrigger>
            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Reload Page</Tooltip>}>
            <Button className="btn btn-light mx-2" onClick={refreshPage}><i className="fas fa-redo-alt"></i></Button>
            </OverlayTrigger>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant='success'  href='/Filter'><i className="fa fa-search me-2" style={{color:'#fff'}} ></i>Search</Button>
            
          </ButtonGroup>
            </div>
            </div>
       <Container className='myprofile-cont'>
        <Table >
            <thead>
                <tr>
                    <th>User Id</th>
                    <th>User name</th>
                    <th>Date Of adddition User</th>
                    <th>Category</th>
                    <th>How Many JS's</th>
                    <th>Cv Quality Check</th>
                    <th>Admin Assigned Information</th>
                    <th>Rating</th>
                    <th>Consultancy or Indivisual</th>
                    <th>Mobile No.</th>
                    <th>Current Location</th>
                    <th>Prefrence It/n On It</th>
                    <th>Personal Information</th>
                    <th>Work Information</th>
                    <th>Action</th>
                    <th>Bank Details</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td  onClick={handleShow} style={{color:'blue', textDecoration:'underline'}}><i class="fa fa-user" aria-hidden="true"></i></td>
                    <td  onClick={handleShow4} style={{color:'yellow', textDecoration:'underline'}}><i class="fa fa-star" aria-hidden="true"></i></td>
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td>n/a</td>
                    <td onClick={handleShow1} style={{color:'pink', textDecoration:'underline'}}><i class="fa fa-info-circle" aria-hidden="true"></i></td>
                    <td onClick={handleShow2} style={{color:'red', textDecoration:'underline'}}><i class="fa fa-book" aria-hidden="true"></i></td>
                    <td><Button variant='primary'>Edit</Button>
                    <Button variant='primary'>Delete</Button>
                    
                    </td>
                    <td onClick={handleShow3} style={{color:'green', textDecoration:'underline'}}><i class="fa fa-receipt" aria-hidden="true"></i></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td  onClick={handleShow} style={{color:'blue', textDecoration:'underline'}}><i class="fa fa-user" aria-hidden="true"></i></td>
                    <td  onClick={handleShow4} style={{color:'yellow', textDecoration:'underline'}}><i class="fa fa-star" aria-hidden="true"></i></td>
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td>n/a</td>
                    <td onClick={handleShow1} style={{color:'pink', textDecoration:'underline'}}><i class="fa fa-info-circle" aria-hidden="true"></i></td>
                    <td onClick={handleShow2} style={{color:'red', textDecoration:'underline'}}><i class="fa fa-book" aria-hidden="true"></i></td>
                    <td><Button variant='primary'>Edit</Button>
                    <Button variant='primary'>Delete</Button>
                    
                    </td>
                    <td onClick={handleShow3} style={{color:'green', textDecoration:'underline'}}><i class="fa fa-cheque" aria-hidden="true"></i></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td  onClick={handleShow} style={{color:'blue', textDecoration:'underline'}}><i class="fa fa-user" aria-hidden="true"></i></td>
                    <td  onClick={handleShow4} style={{color:'yellow', textDecoration:'underline'}}><i class="fa fa-star" aria-hidden="true"></i></td>
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td>n/a</td>
                    <td onClick={handleShow1} style={{color:'plink', textDecoration:'underline'}}><i class="fa fa-info-circle" aria-hidden="true"></i></td>
                    <td onClick={handleShow2} style={{color:'red', textDecoration:'underline'}}><i class="fa fa-book" aria-hidden="true"></i></td>
                    <td><Button variant='primary'>Edit</Button>
                    <Button variant='primary'>Delete</Button>
                    
                    </td>
                    <td onClick={handleShow3} style={{color:'green', textDecoration:'underline'}}><i class="fa fa-receipt" aria-hidden="true"></i></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td  onClick={handleShow} style={{color:'blue', textDecoration:'underline'}}><i class="fa fa-user" aria-hidden="true"></i></td>
                    <td onClick={handleShow4} style={{color:'yellow', textDecoration:'underline'}}><i class="fa fa-star" aria-hidden="true"></i></td>
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td>n/a</td>
                    <td onClick={handleShow1} style={{color:'pink', textDecoration:'underline'}}><i class="fa fa-info-circle" aria-hidden="true"></i></td>
                    <td onClick={handleShow2} style={{color:'red', textDecoration:'underline'}}><i class="fa fa-book" aria-hidden="true"></i></td>
                    <td><Button variant='primary'>Edit</Button>
                    <Button variant='primary'>Delete</Button>
                    
                    </td>
                    <td onClick={handleShow3} style={{color:'green', textDecoration:'underline'}}><i class="fa fa-receipt" aria-hidden="true"></i></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td  onClick={handleShow} style={{color:'blue', textDecoration:'underline'}}><i class="fa fa-user" aria-hidden="true"></i></td>
                    <td onClick={handleShow4} style={{color:'yellow', textDecoration:'underline'}}><i class="fa fa-star" aria-hidden="true"></i></td>
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td>n/a</td>
                    <td onClick={handleShow1} style={{color:'pink', textDecoration:'underline'}}><i class="fa fa-info-circle" aria-hidden="true"></i></td>
                    <td onClick={handleShow2} style={{color:'red', textDecoration:'underline'}}><i class="fa fa-book" aria-hidden="true"></i></td>
                    <td><Button variant='primary'>Edit</Button>
                    <Button variant='primary'>Delete</Button>
                    
                    </td>
                    <td onClick={handleShow3} style={{color:'green', textDecoration:'underline'}}><i class="fa fa-receipt" aria-hidden="true"></i></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td  onClick={handleShow} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td onClick={handleShow4} style={{color:'blue', textDecoration:'underline'}}>5</td>
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td>n/a</td>
                    <td onClick={handleShow1} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td onClick={handleShow2} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td><Button variant='primary'>Edit</Button>
                    <Button variant='primary'>Delete</Button>
                    
                    </td>
                    <td onClick={handleShow3} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td  onClick={handleShow} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td  onClick={handleShow4} style={{color:'blue', textDecoration:'underline'}}>5</td>
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td>n/a</td>
                    <td onClick={handleShow1} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td onClick={handleShow2} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td><Button variant='primary'>Edit</Button>
                    <Button variant='primary'>Delete</Button>
                    
                    </td>
                    <td onClick={handleShow3} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td  onClick={handleShow} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td  onClick={handleShow4} style={{color:'blue', textDecoration:'underline'}}>5</td>
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td>n/a</td>
                    <td onClick={handleShow1} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td onClick={handleShow2} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td><Button variant='primary'>Edit</Button>
                    <Button variant='primary'>Delete</Button>
                    
                    </td>
                    <td onClick={handleShow3} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td  onClick={handleShow} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td  onClick={handleShow4} style={{color:'blue', textDecoration:'underline'}}>5</td>
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td>n/a</td>
                    <td onClick={handleShow1} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                    <td onClick={handleShow2} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                   
                    <td><Button variant='primary'>Edit</Button>
                    <Button variant='primary'>Delete</Button>
                    
                    </td> <td onClick={handleShow3} style={{color:'blue', textDecoration:'underline'}}>n/a</td>
                </tr>
                
            </tbody>
        </Table>
        </Container>
        <Modal
        show={show}
        size="lg"
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Admin Assigned Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
            <Row>
                <Col xs={6}>
                    <Form.Label className='fw-bold mb-3'>Category</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Select</option>
                    <option value="1">A</option>
                    <option value="2">B</option>
                    <option value="3">C</option>
                    </Form.Select>
                </Col>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 '>CV Quality Check</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Select</option>
                    <option value="1">YES</option>
                    <option value="2">NO</option>
                    </Form.Select>
                    
                    </Col>
                    <Col xs={6}>
                    <Form.Label className='fw-bold mb-3 mt-3'>c.	How many JDs a user can unlock in a day</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="4">4</option>
                    <option value="8">8</option>
                    </Form.Select>
                </Col>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>JD to be shown to user? </Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Select</option>
                    <option value="1">YES</option>
                    <option value="2">NO</option>
                    </Form.Select>
                    
                    </Col>
            </Row>
            <Row>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Designation</Form.Label>
                <Form.Control type="text" placeholder="  " />
                </Col>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>System generated Official email ID of user </Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Compulsion</Form.Label>
                <Form.Check type="checkbox" label="Compulsory Use Our Database" />
                <Form.Check type="checkbox" label=". Compulsory Use Own Database (Naukri, Monster, Timesjobs etc)" />
                </Col>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Candidate mobile number </Form.Label>
                <Form.Check type="checkbox" label="Allow user to remove candidate mobile number from the tracker sheet" />
                </Col>
            </Row>
            <Row>
            <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Special remarks by user </Form.Label>
                <Form.Check type="checkbox" label="Allow user to write special remarks, comments in the tracker sheet" />
                </Col>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Allow one candidate submission by user?  </Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Select</option>
                    <option value="1">YES</option>
                    <option value="2">NO</option>
                    </Form.Select>
                </Col>
            </Row>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={notify}>Save</Button>
        </Modal.Footer>
      </Modal>
      
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Personal Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control type='text' placeholder='First Name'/>
          <Form.Control type='text' placeholder='Last Name'/>
          <Form.Control type='text' placeholder='Personal Email'/>
          <Form.Control type='text' placeholder='Mobile Number'/>
          <Form.Control type='text' placeholder='Current Location'/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Work Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control type='text' placeholder='Highest Qualification'/>
        <Form.Control type='text' placeholder='Graduation'/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
      <Modal show={show3} onHide={handleClose3}>
        <Modal.Header closeButton>
          <Modal.Title>User Bank Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                <Row>
                    <Col sx={6}>
                        <Form.Label className='fw-bold mb-3 mt-3'> Name as per bank account</Form.Label>
                        <Form.Control type="text" placeholder=' '></Form.Control>
                    </Col>
                    <Col sx={6}>
                        <Form.Label className='fw-bold mb-3 mt-3'> Bank Name</Form.Label>
                        <Form.Control type="text" placeholder=' '></Form.Control>
                    </Col>
                </Row>
                <Row>
                    <Col sx={6}>
                        <Form.Label className='fw-bold mb-3 mt-3'> Account Number</Form.Label>
                        <Form.Control type="text" placeholder=' '></Form.Control>
                    </Col>
                    <Col sx={6}>
                        <Form.Label className='fw-bold mb-3 mt-3'> IFSC</Form.Label>
                        <Form.Control type="text" placeholder=' '></Form.Control>
                    </Col>
                </Row>
                <Row>
                    <Col sx={6}>
                        <Form.Label className='fw-bold mb-3 mt-3'> Account Type</Form.Label>
                        <Form.Control type="text" placeholder=' '></Form.Control>
                    </Col>
                    <Col sx={6}>
                        <Form.Label className='fw-bold mb-3 mt-3'> Branch Location</Form.Label>
                        <Form.Control type="text" placeholder=' '></Form.Control>
                    </Col>
                </Row>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose3}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
      <Modal show={show4} onHide={handleClose4}>
        <Modal.Header closeButton>
          <Modal.Title>Rating</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <form>
                    <Row>
                        <Col xs={6}>
                        <Form.Label className='fw-bold mb-3'>Category</Form.Label>
                        <Form.Select aria-label="Default select example">
                    <option>select</option>
                    <option value="1">A</option>
                    <option value="2">B</option>
                    <option value="3">C</option>
                    </Form.Select>

                        </Col>
                        <Col xs={6}>
                        <Form.Label className='fw-bold mb-3'>User ID</Form.Label>
                        <Form.Control type='text' placeholder='Enter your user Id'/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                        <Form.Label className='fw-bold mb-3'>Months & Year</Form.Label>
                        <Form.Control type='text' placeholder=' Enter Months & Year'/>
                        </Col>
                        <Col xs={6}>
                        <Form.Label className='fw-bold mb-3'>Rating Parameter</Form.Label>
                        <Form.Control type='text' placeholder=' Out of 10'/>
                        <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    {/* <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' /> */}
                    <Button variant="primary" onClick={handleClose4}>
            Save 
          </Button> 
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                        <Form.Label className='fw-bold mb-3'>Final Rating</Form.Label>
                        
                        <Container>
      {[...Array(10)].map((item, index) => {
        const givenRating = index + 1;
        return (
          <label>
            <Radio
              type="radio"
              value={givenRating}
              onClick={() => {
                setRate(givenRating);
                alert(`Are you sure you want to give ${givenRating} stars ?`);
              }}
            />
            <Rating>
              <FaStar
                color={
                  givenRating < rate || givenRating === rate
                    ? "FFDF00"
                    : "rgb(192,192,192)"
                }
              />
            </Rating>
          </label>
        );
      })}
    </Container>
                   
          
                        </Col>
                    </Row>
                </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose4}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
        </Container>
    </div>
  )
}

export default RecruiterMaster