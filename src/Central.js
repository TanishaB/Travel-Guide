import {Container, Card} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faTwitter, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import CopyrightNotice from 'react-copyright-notice-component';

export default function Central(){
   
    return(

        <div className=" bgregion ">

            <br/>
            <Container className="d-flex justify-content-center align-items-center p-3">
                <img src="central.svg"></img><h1 className='text-light'> Central Region </h1>
            </Container>

            <Container className="d-flex justify-content-center align-items-center p-5">
            
                <Card style={{ width: '25rem' }} className="m-2">
                    <Card.Img variant="top" src="./Card11.jpg" className="p-3"/>
                    <Card.Body>
                        <Card.Title className="text-center">Barnawapara Wildlife Sanctuary, Chhattisgarh</Card.Title>
                        <Card.Text className="cardcss">
                        Barnawapara Wildlife Sanctuary is a landmass of undulating terrain, dotted with numerous low and high hillocks. River Balamdehi forms the western boundary and Jonk river forms the north-eastern boundary of the sanctuary. The well-stocked forests of the sanctuary are classified as teas, sal and mixed forests. This sanctuary is famous for the frequent sighting of the Indian bison (Gaur) cheetal, sambar, nilgai, wild boar, etc.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '25rem' }} className="m-2">
                    <Card.Img variant="top" src="./Card12.jpg" className="p-3"/>
                    <Card.Body>
                        <Card.Title className="text-center">Mandu – Jahaz Mahal, Madhya Pradesh</Card.Title>
                        <Card.Text className="cardcss">
                        One of the monuments in Mandu that beautifully captures the medieval romance of Baz Bahadur and Rani Roopmati is Jahaz Mahal. Built by Sultan Ghiyasuddin Khilji for his large harem in the latter half of 15th century, Jahaz Mahal represents the classical phase of architecture in Mandu. This double-storeyed structure situated on a narrow strip of land between Munj Talao and Kapur Talao, gives an appearance of a ship anchored in the water.
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