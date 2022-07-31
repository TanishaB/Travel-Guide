import {Container, Carousel} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faTwitter, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import CopyrightNotice from 'react-copyright-notice-component';


export default function Home(){

    return(
      
        <div className="bgHome">

                {/* Carousels */}

                <Carousel>
                    <Carousel.Item interval = {2000}>
                        <img className='d-block w-100' src = './Taj-Mahal.jpg'/>
                    </Carousel.Item>

                    <Carousel.Item interval = {2000}>
                        <img className='d-block w-100' src = './IndiaGate.jpg'/>
                    </Carousel.Item>

                    <Carousel.Item interval = {2000}>
                        <img className='d-block w-100' src = './GoldenTemple.jpg'/>
                    </Carousel.Item>

                    <Carousel.Item interval = {2000}>
                        <img className='d-block w-100' src = './TajHotel.jpg'/>
                    </Carousel.Item>
                </Carousel>


                {/* Intro */}


                <Container className='intro'>
                    <p>
                    One of the oldest civilisations in the world, India is a mosaic of multicultural experiences. With a rich heritage and myriad attractions, the country is among the most popular tourist destinations in the world. It covers an area of 32, 87,263 sq. km, extending from the snow-covered Himalayan heights to the tropical rain forests of the south. As the 7th largest country in the world, India stands apart from the rest of Asia, marked off as it is by mountains and the sea, which give the country a distinct geographical entity.
                    Fringed by the Great Himalayas in the north, it stretches southwards and at the Tropic of Cancer, tapers off into the Indian Ocean between the Bay of Bengal on the east and the Arabian Sea on the west.
                    </p>
                    <br/>
                    <p>
                    As you travel the expanse of the country, you are greeted by diverse nuances of cuisines, faiths, arts, crafts, music, nature, lands, tribes, history and adventure sports. India has a mesmeric conflation of the old and the new. As the bustling old bazaars rub shoulders with swanky shopping malls, and majestic monuments accompany luxurious heritage hotels, the quintessential traveller can get the best of both worlds. Head to the mountains, enjoy a beach retreat or cruise through the golden Thar, India has options galore for all.
                    </p>
                </Container>


                {/* India Culture Images */}

      
                <br/><br/>
                <Container className='d-flex justify-content-center align-items-center'>

                    <img src="./Home1.jpg" alt="Indian Culture" className='imgcss'></img>
                    <img src="./Home2.jpg" alt="Indian Culture" className='imgcss'></img>
                    <img src="./Home4.jpg" alt="Indian Culture" className='imgcss'></img>
                    <img src="./Home5.jpg" alt="Indian Culture" className='imgcss'></img>
        
                </Container>
       
                <Container className='d-flex justify-content-center align-items-center'>

                    <img src="./Home6.jpg" alt="Indian Culture" className='imgcss'></img>
                    <img src="./Home7.jpg" alt="Indian Culture" className='imgcss'></img>
                    <img src="./Home9.jpg" alt="Indian Culture" className='imgcss'></img>
                    <img src="./Home10.jpg" alt="Indian Culture" className='imgcss'></img>
    
                </Container>

                {/* Intro */}

                <Container className='intro'>
                    <p>
                    India is a country that boasts of a rich culture. The culture of India refers to a collection of minor unique cultures. The culture of India comprises of clothing, festivals, languages, religions, music, dance, architecture, food, and art in India. Most noteworthy, Indian culture has been influenced by several foreign cultures throughout its history. Also, the history of India’s culture is several millennia old.
                    </p>
                    <br/>
                    <p>
                    Indian culture is the heritage of social norms, ethical values, traditional customs, belief systems, political systems, artifacts and technologies that originated in or are associated with the ethno-linguistically diverse Republic of India.
                    </p>
                </Container>

                {/* Footer */}


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