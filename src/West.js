import {Container, Card} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faTwitter, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import CopyrightNotice from 'react-copyright-notice-component';


export default function West(){   

    return(

        <div className=" bgregion ">

            <br/>
            <Container className="d-flex justify-content-center align-items-center p-3">
                <img src="west.svg"></img><h1 className='text-light'> West Region </h1>
            </Container>

            <Container className="d-flex justify-content-center align-items-center p-5">
            
                <Card style={{ width: '25rem' }} className="m-2">
                    <Card.Img variant="top" src="./Card6.jpg" className="p-3"/>
                    <Card.Body>
                        <Card.Title className="text-center">Silvassa, Dadra and Nagar Haveli</Card.Title>
                        <Card.Text className="cardcss">
                        Silvassa, the capital of Dadra and Nagar Haveli, is soaked in Portuguese heritage. Enjoying a languid pace of life, the city is endowed with pristine natural beauty. It is a treat for adventure lovers, who can indulge in various thrilling activities like trekking, camping and hiking in its lush-green surroundings.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '25rem' }} className="m-2">
                    <Card.Img variant="top" src="./Card7.jpeg" className="p-3"/>
                    <Card.Body>
                        <Card.Title className="text-center">Devka Beach, Daman</Card.Title>
                        <Card.Text className="cardcss">
                        After checking in, a 10-min journey from the main town towards the north side takes you to experience the sea breeze on the shore of Devka Beach. It’s always been a favourite amongst the visitors for the beach shacks lined up on its coast and several beach-facing hotels/resorts situated near its coastline.
                        </Card.Text>
                    </Card.Body>
                </Card>


                <Card style={{ width: '25rem' }} className="m-2">
                    <Card.Img variant="top" src="./Card8.jpg" className="p-3"/>
                    <Card.Body>
                        <Card.Title className="text-center">Anjuna beach, Goa</Card.Title>
                        <Card.Text className="cardcss">
                        Anjuna beach Goa is an ideal choice for who love to enjoy full moon parties. Visitors rejuvenate themselves in a pleasurable atmosphere of the lucent full-moon. So, if you wanna experience the real beauty of landscapes, luxury accommodation, seclusion, nightlife parties, reliable seafood dainties and voguish shopping opportunities.
                        </Card.Text>
                    </Card.Body>
                </Card>

            </Container>

            <Container className="d-flex justify-content-center align-items-center p-5">


                <Card style={{ width: '25rem' }} className="m-2">
                    <Card.Img variant="top" src="./Card9.jpg" className="p-3"/>
                    <Card.Body>
                        <Card.Title className="text-center">Gir Forest, Gujarat</Card.Title>
                        <Card.Text className="cardcss">
                        Gir Forest National Park is a wildlife sanctuary in Gujarat, western India. It was established to protect Asiatic lions, who frequent the fenced-off Devalia Safari Park, along with leopards and antelopes.Gir Jungle Trail, outside the fenced area, traverses deciduous forest and is home to wildlife including vultures and pythons.
                        </Card.Text>
                    </Card.Body>
                </Card>


                <Card style={{ width: '25rem' }} className="m-2">
                    <Card.Img variant="top" src="./Card10.jpg" className="p-3"/>
                    <Card.Body>
                        <Card.Title className="text-center">Gateway of India, Mumbai</Card.Title>
                        <Card.Text className="cardcss">
                        This colossal structure was constructed in 1924.
                         Located at the tip of Apollo Bunder, the gateway overlooks the Mumbai harbor, 
                         bordered by the Arabian Sea in the Colaba district. It is 
                         a monument that marks India's chief ports and is a major tourist attraction
                          for visitors who arrive in India for the first time. 
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