import {Container, Card} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faTwitter, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import CopyrightNotice from 'react-copyright-notice-component';

export default function NorthEast(){
   

    return(

        <div className=" bgregion ">

            <br/>
            <Container className="d-flex justify-content-center align-items-center p-3">
                <img src="north-east.svg"></img><h1 className='text-light'> North-East Region </h1>
            </Container>

            <Container className="d-flex justify-content-center align-items-center p-5">
            
                <Card style={{ width: '25rem' }} className="m-2">
                    <Card.Img variant="top" src="./Card13.jpg" className="p-3"/>
                    <Card.Body>
                        <Card.Title className="text-center">Kaziranga National Park, Assam</Card.Title>
                        <Card.Text className="cardcss">
                        Kaziranga National Park, is famed as a home to two-thirds of the world's population of the rare one-horned rhinoceros.The park encompasses wetlands, forests and grasslands, 
                         which shelter a sizeable population of tigers as well. Moreover, the park is an abode of world-famous snakes - 
                         the rock python, and king cobra. 
                       </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '25rem' }} className="m-2">
                    <Card.Img variant="top" src="./Card14.jpg" className="p-3" />
                    <Card.Body>
                        <Card.Title className="text-center">Gangtok, Sikkim</Card.Title>
                        <Card.Text className="cardcss">
                        Gangtok is a vibrant upbeat capital city of Sikkim with a blend of modernity and tradition. While the ancient monasteries and pilgrimage sites will soak you in spirituality, the adventure activities will give a boost to your adrenaline rush. All this while the encompassing vistas and breathtaking skylines keep you spellbound.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '25rem' }} className="m-2">
                    <Card.Img variant="top" src="./Card15.jpg" className="p-3" />
                    <Card.Body>
                        <Card.Title className="text-center">Shillong, Meghalaya</Card.Title>
                        <Card.Text className="cardcss">
                        A landscape of rolling green and pristine mountains come together to bring to life the city of Shillong, the capital of Meghalaya. Its vistas are accentuated by pine trees, streams, waterfalls and lush green parks. With a picturesque location about 1,525 m above sea level, Shillong makes for a pleasant tourist destination throughout the year.
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