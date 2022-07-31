import {Container, Card} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faTwitter, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import CopyrightNotice from 'react-copyright-notice-component';


export default function South(){
   
    return(

        <div className=" bgregion ">

            <br/>
            <Container className="d-flex justify-content-center align-items-center p-3">
                <img src="south.svg"></img><h1 className='text-light'> South Region </h1>
            </Container>

            <Container className="d-flex justify-content-center align-items-center p-5">
            
                <Card style={{ width: '25rem' }} className="m-2">
                    <Card.Img variant="top" src="./Card19.jpg" className="p-3"/>
                    <Card.Body>
                        <Card.Title className="text-center">Mysore Palace, Karnataka</Card.Title>
                        <Card.Text className="cardcss">
                        Mysore's proud possession and one of India's most visited attractions, Mysore Palace is an incredible man-made edifice. It is a palatial structure that tells many tales of India's complex and intriguing past. This palace was once a royal residence of the mighty Wodeyar rulers, who ruled Mysore for seven centuries. At present, it witnesses more than 2.7 million visitors every year.
                         </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '25rem' }} className="m-2">
                    <Card.Img variant="top" src="./Card20.jpg" className="p-3"/>
                    <Card.Body>
                        <Card.Title className="text-center">Thiruvananthapuram, Kerala</Card.Title>
                        <Card.Text className="cardcss">
                        Thiruvananthapuram (or Trivandrum) is the capital of the southern Indian state of Kerala. It's distinguished by its British colonial architecture and many art galleries. It’s also home to Kuthira Malika (or Puthen Malika) Palace, adorned with carved horses and displaying collections related to the Travancore royal family, whose regional capital was here from the 18th–20th centuries.
                       </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '25rem' }} className="m-2">
                    <Card.Img variant="top" src="./Card21.jpg" className="p-3"/>
                    <Card.Body>
                        <Card.Title className="text-center">Ooty, Tamil Nadu</Card.Title>
                        <Card.Text className="cardcss">
                        Ooty is a resort town in the Western Ghats mountains, in southern India's Tamil Nadu state. The establishment of several numbers of tea estates made Ooty famous. Most of the hotels, resorts, cottages are all located near tea estates because it gives a wonderful view to the tourist. So if you are a nature lover you can inflict tea estate which gives you a peaceful and blissful trip.
                       </Card.Text>
                    </Card.Body>
                </Card>

                
            </Container>

            
            {/* Footer */}


            <footer>

                <div className="d-flex justify-content-center align-items-center">
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