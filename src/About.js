import {Container, Accordion} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faTwitter, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import CopyrightNotice from 'react-copyright-notice-component';

export default function About(){
    return(
        <div className="bgHome">
            
            <Container className="d-flex justify-content-center align-items-center p-5" >

                <img src="./About.jpg" className="aboutimg"></img>
                    <div className='p-5'>
                        <h1 className="Heading"> About Us</h1><br/>
                        <p className="aboutcss">India has a myriad of landscapes, great heritage and culture, varied flora and fauna. The country is the most preferred tourist destinations for tourists from all across the world for its picturesque landscapes, spectacular waterfalls, habitat of the country's largest tiger reserve and home to the warmest people on earth.</p>   
                        <br/>
                        <h3 className="text-light text-center">NAMASTE</h3>
                        <br/>
                        
                        <p  className="aboutcss">We offer our clients the best places to visit in India. We help you plan a memorable trip with a joyful experience. Come join us in this journey. Our dedicated travel team diligently works round-the-clock to design the best travel experiences for the customers. The skilled team spends considerable amounts of time ideating tour packages that guarantee to make travelling with us an experience like no other. We're truly humbled to have received volumes of positive customer feedback for our services. This appreciation from our prestigious clients is more valuable than any award for us. As a customer-driven travel company, our priority has always been their satisfaction. Therefore, our dedicated team of experts endeavours to achieve the goal of making our customers happy. </p>
                    </div>
            </Container>

            <Container >
                <Accordion defaultActiveKey="0" bg="warning">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>About Incredible India</Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Interesting and Intriguing, India offers incredible holiday experiences through its cultural, topography, and wildlife diversity. With these amazing and unique experiences, this south Asian country conveniently finds its way into the world tourism map as one of the finest destinations for a holistic vacation.
                            </p>
                            <p>
                                India establishes its identity as the country of architectural masterpieces, making it an ideal travel destination to plan a heritage tour in the world. While Taj Mahal makes for the major draw on an India tour, there are a plethora of monuments and edifices in every India travel guide displaying the fine architecture and grandiose of different eras in the country.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <br/>

                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Recognition</Accordion.Header>
                        <Accordion.Body>
                            <p>
                            We are proud to be accredited by major tour and travel associations in India and world like IATA, IATO, TAAI, IMF, MOT (Ministry of Tourism, Govt of India), and TOFT. It is an honour for us to be able to be a part of crucial initiatives towards safeguarding animal rights, protection of endangered species, and responsible mountaineering and trekking ventures.</p>
                           
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
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