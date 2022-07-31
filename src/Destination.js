import {Container, Carousel, Table, Card, Button, Badge, Figure} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faTwitter, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import CopyrightNotice from 'react-copyright-notice-component';
import { NavLink } from "react-router-dom";

export default function Destination(){

    return(
        <div className=" bgHome ">

            <br/><br/>
            <h1 className="Heading"> Destination </h1>

             {/* Video */}

            <Container className='videoStyle'>

                <iframe
                    width="1300" 
                    height="730" 
                    src="https://www.youtube.com/embed/35npVaFGHMY?autoplay=1&mute=1" 
                    title="Welcome to India ! [CINEMATIC TRAVEL FILM]" 
                    frameborder="0" 
                    allow="autoplay; encrypted-media" 
                    allowfullscreen>

                </iframe>
            

            {/* Regions In India */}
            </Container>

                <div className="text-center text-light mt-5">
                    <h4>
                        Regions In India <Badge pill bg="warning">Click below regions to check out</Badge>
                    </h4>
                </div>

            <Container className='regions'>
                <NavLink to="/East">
                    <Figure>
                        <Figure.Image width={100} src="east.svg"/>
                        <Figure.Caption> <h6 className="text-center text-warning">East</h6></Figure.Caption>
                    </Figure>
                </NavLink>

                <NavLink to="/West">
                    <Figure>
                        <Figure.Image width={100} src="west.svg"/>
                        <Figure.Caption> <h6 className="text-center text-warning">West</h6></Figure.Caption>
                    </Figure>
                </NavLink>

                
                <NavLink to="/Central">
                    <Figure>
                        <Figure.Image width={100} src="central.svg"/>
                        <Figure.Caption> <h6 className="text-center text-warning">Central</h6></Figure.Caption>
                    </Figure>
                </NavLink>

                <NavLink to="/NorthEast">
                    <Figure>
                        <Figure.Image width={100} src="north-east.svg"/>
                        <Figure.Caption> <h6 className="text-center text-warning">North-East</h6></Figure.Caption>
                    </Figure>
                </NavLink>

                <NavLink to="/North">
                    <Figure>
                        <Figure.Image width={100} src="north.svg"/>
                        <Figure.Caption> <h6 className="text-center text-warning">North</h6></Figure.Caption>
                    </Figure>
                </NavLink>

                <NavLink to="/South">
                    <Figure>
                        <Figure.Image width={100} src="south.svg"/>
                        <Figure.Caption> <h6 className="text-center text-warning">South</h6></Figure.Caption>
                    </Figure>
                </NavLink>
                
            </Container>

            {/* Table */}

            <Container>
            <Table class="table">
            <thead class="bg-warning">
                <tr>
                    <th className="text-center text-dark">Region in India</th>
                    <th className="text-center text-dark">Places to visit in India</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="text-center text-light">East</td>
                    <td className="text-light">Andaman And Nicobar, Bihar, Jharkhand, Odisha, West Bengal</td> 
                </tr>
                <tr>
                    <td className="text-center text-light">West</td>
                    <td className="text-light">Dadra And Nagar Haveli, Daman And Diu, Goa, Gujarat, Maharashtra</td>
                </tr>
                <tr>
                    <td className="text-center text-light">Central</td>
                    <td className="text-light">Chhattisgarh , Madhya Pradesh</td>
                </tr>
                <tr>
                    <td className="text-center text-light">North East</td>
                    <td className="text-light">Arunachal Pradesh, Assam, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim, Tripura</td>
                </tr>
                <tr>
                    <td className="text-center text-light">North</td>
                    <td className="text-light">Chandigarh, Delhi, Haryana, Himachal Pradesh, Jammu And Kashmir, Ladakh, Punjab, Rajasthan, Uttar Pradesh, Uttarakhand</td>
                </tr>
                <tr>
                    <td className="text-center text-light">South</td>
                    <td className="text-light">Andhra Pradesh, Karnataka, Kerala, Lakshadweep, Puducherry, Tamil Nadu, Telangana</td>
                </tr>
            </tbody>
            </Table>
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