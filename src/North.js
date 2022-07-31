import {Container, Card} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faTwitter, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import CopyrightNotice from 'react-copyright-notice-component';


export default function North(){
   

    return(

        <div className=" bgregion ">

            <br/>
            <Container className="d-flex justify-content-center align-items-center p-3">
                <img src="north.svg"></img><h1 className='text-light'> North Region </h1>
            </Container>

            <Container className="d-flex justify-content-center align-items-center p-5">
            
                <Card style={{ width: '25rem' }} className="m-2">
                    <Card.Img variant="top" src="./Card16.jpeg" className="p-3"/>
                    <Card.Body>
                        <Card.Title className="text-center">India Gate, Delhi</Card.Title>
                        <Card.Text className="cardcss">
                        A stunning archway standing as a tribute to the brave soldiers who sacrificed their lives for the country, 
                        India Gate is one of the landmarks of Delhi. Built with sandstone, this 42-m-high gate was the first of its 
                        kind in the national capital. Dedicated to the troops of British India who died in wars fought between 1914 and 1919.
                       </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '25rem' }} className="m-2">
                    <Card.Img variant="top" src="./Card17.jpeg" className="p-3"/>
                    <Card.Body>
                        <Card.Title className="text-center">Yusmarg, Srinagar</Card.Title>
                        <Card.Text className="cardcss">
                        Yusmarg is known for its grassy pastures and deep forests, with the snow-covered mountains forming a stunning backdrop. Around 2 hours (90 km) away from Gulmarg, pristine Yusmarg is one of the less-frequented tourist destinations in the Kashmir Valley. It lies around 47 km from Srinagar, in the Badgam district of Jammu and Kashmir.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '25rem' }} className="m-2">
                    <Card.Img variant="top" src="./Card18.jpg" className="p-3"/>
                    <Card.Body>
                        <Card.Title className="text-center">Leh-Ladakh</Card.Title>
                        <Card.Text className="cardcss">
                        A surreal landscape surrounded by the sky-piercing peaks of the snow-capped Himalayan,
                         Zanskar and Karakoram ranges, and adorned with crystal waters of the Shyok, Zanskar and Indus
                          rivers, Leh, in Jammu and Kashmir. It provides ripe 
                          opportunities for activities like trekking, river rafting, camping, mountain climbing and biking. 
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