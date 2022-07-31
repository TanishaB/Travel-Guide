import { useState } from "react";
import {Button, Container, Form, CloseButton, Alert} from 'react-bootstrap';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {  FaMapMarkerAlt,FaPhoneAlt,FaPaperPlane } from 'react-icons/fa';
import {faFacebook, faTwitter, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import CopyrightNotice from 'react-copyright-notice-component';

export default function ContactUs(){

    const[userName, setUserName] = useState("");
    const[email, setEmail] = useState("");
    const[message, setMessage] = useState("");
    const [show, setShow] = useState(false);

    
    if(show){
        return (  
              <div>  
                <Container className='p-4'>  
                  <Alert variant="success" dismissible >  
                  <CloseButton onClick={() => setShow(false)}/>
                    <Alert.Heading>Successfully submitted!</Alert.Heading>  
                      <p> Thank you for your feedback {userName}! </p>  
                    </Alert>  
                </Container>  
            </div>  
        );
    }

    return(
        <div className="contactbg">
            
            <br/><br/>
            <h1 class="Heading"> Contact Us</h1>

            <Container className='d-flex justify-content-center align-items-center'>

            <div>
                <h3 className="text-light"><FaMapMarkerAlt/> Address  </h3>
                <p className="text-light">Travel Guide Office, 3rd floor, Empire Building, <br/>Ashok Nagar, New Delhi</p>
                <br/><br/>
                <h3 className="text-light"><FaPhoneAlt/> Phone Number </h3>
                <p className="text-light">+91 9522124523</p>
                <br/><br/>
                <h3 className="text-light"><FaPaperPlane/> Email Id </h3>
                <p className="text-light">travelguide@gmail.com</p>
                </div>

                <Form onSubmit={() => setShow(true)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Full Name" value={userName} onChange={(e) => setUserName(e.target.value)} required/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control as="textarea" rows={2} value={message} onChange={(e) => setMessage(e.target.value)} required />
                        <Form.Text className="text-muted">We'll never share your information with anyone else.</Form.Text>
                    </Form.Group>

                    <Button type="submit" variant='warning'>SUBMIT</Button>  
            
                </Form>

                

                
            </Container>


            <footer>

            <div className='d-flex justify-content-center align-items-center'>
            <a href="https://web.whatsapp.com/" className="faIcons" target="_blank">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
            <a href="https://www.facebook.com/" className="faIcons" target="_blank">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.twitter.com/" className="faIcons" target="_blank">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com/" className="faIcons" target="_blank">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            </div>
            <br/>


            <CopyrightNotice copyrightHolder=" Travel Guide" year="2022" className='d-flex justify-content-center align-items-center'></CopyrightNotice>
            <br/>

        </footer>

        </div>
    );
}

