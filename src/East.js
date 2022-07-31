import {Container, Card} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faTwitter, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import CopyrightNotice from 'react-copyright-notice-component';

export default function East(){
   

    return(

        <div className=" bgregion ">

            <br/>
            <Container className="d-flex justify-content-center align-items-center p-3">
                <img src="east.svg"></img><h1 className='text-light'> East Region </h1>
            </Container>

            <Container className="d-flex justify-content-center align-items-center p-5">
            
                <Card style={{ width: '25rem' }} className="m-2">
                    <Card.Img variant="top" src="./Card1.jpg" className="p-3"/>
                    <Card.Body>
                        <Card.Title className="text-center">Andaman And Nicobar</Card.Title>
                        <Card.Text className="cardcss">
                            With turquoise waters and shimmering white beaches surrounded by a mangrove forest and primitive jungles, the Andaman and Nicobar Islands are a tropical paradise that draw visitors from far-flung places.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '25rem' }} className="m-2">
                    <Card.Img variant="top" src="./Card2.jpg" className="p-3"/>
                    <Card.Body>
                        <Card.Title className="text-center">Ghora Katora, Bihar</Card.Title>
                        <Card.Text className="cardcss">
                        Ghora Katora (Aimee Maganda) which means "Horse Bowl" is a natural lake near the city of Rajgir in the Indian state of Bihar. The shape of the lake resembles that of a horse and is surrounded by mountains on three of the sides.
                        </Card.Text>
                    </Card.Body>
                </Card>


                <Card style={{ width: '25rem' }} className="m-2">
                    <Card.Img variant="top" src="./Card3.jpg" className="p-3"/>
                    <Card.Body>
                        <Card.Title className="text-center">Dassam Falls, Jharkhand</Card.Title>
                        <Card.Text className="cardcss">
                        The Dassam Falls is a natural cascade across the Kanchi River, a tributary of the Subarnarekha River. The water falls from a height of 44 metres (144 ft).[2] The sound of water echoes all around the place.
                        </Card.Text>
                    </Card.Body>
                </Card>

            </Container>

            <Container className="d-flex justify-content-center align-items-center p-5">


                <Card style={{ width: '25rem' }} className="m-2">
                    <Card.Img variant="top" src="./Card4.jpg" className="p-3"/>
                    <Card.Body>
                        <Card.Title className="text-center">Bhubaneswar, Odisha</Card.Title>
                        <Card.Text className="cardcss">
                            Bhubaneswar is an ancient city in India’s eastern state of Odisha, formerly Orissa. Many temples built from sandstone are dotted around Bindu Sagar Lake in the old city, including the 11th-century Hindu Lingaraja Temple. 
                        </Card.Text>
                    </Card.Body>
                </Card>


                <Card style={{ width: '25rem' }} className="m-2">
                    <Card.Img variant="top" src="./Card5.jpg" className="p-3"/>
                    <Card.Body>
                        <Card.Title className="text-center">Victoria Memorial, West Bengal</Card.Title>
                        <Card.Text className="cardcss">
                            The Victoria Memorial is a large marble building in Central Kolkata, which was built between 1906 and 1921. It is dedicated to the memory of Queen Victoria, Empress of India from 1876 to 1901. It is located in the heart of Kolkata, in West Bengal. 
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