import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import 'animate.css/animate.css';
import WOW from 'wowjs';



function Bootstarp() {
  return (
    <div  id='first'>
        <div id='main'>
          <Navbar expand="lg"  id='navbar'>
            <Container>
              <Navbar.Brand href="#home" className='wow animate_animated animate__backInLeft'><img id='img' src="../src/assets/logo.png" alt="" /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                  <Nav.Link href="#home">Finca</Nav.Link>
                  <Nav.Link href="#link">Wine</Nav.Link>             
                  <Nav.Link href="#link">Terroir</Nav.Link>             
                  <Nav.Link href="#link">Bodega</Nav.Link>             
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <h1 id='h'>Aromas of the <br />
          Mediterranean</h1>
        </div>
        <div id='box2'>
          <div id='box3'>
            <div id='inner1'>
              <p>THE FINCA</p>
              <h1 id='hi'>
              Reinventing a <br /></h1>
              <h1 id='hi2'>
              historical place
              </h1>
            </div>
            <div id='inner2'>
              <p>In the east of Mallorca, in close proximity to the Mediterranean Sea, lies the Ses Talaioles winery; full of traditions, full of history. A magical place that is reflected in the taste of its wines.</p>
              <button>Discover More</button>
            </div>
          </div>
          <div id='sec2'>
              <div id='sbox'>
                <div id='s1'>
                  <img src="../src/assets/slider-1.jpg" alt="" />
                </div>
                <div id='s2'>
                  <img src="../src/assets/slider-7.jpg" alt="" />
                </div>
              </div>            
          </div>
          <div id='box4'>
            <div id='inner3'>
              <img src="../src/assets/finca.jpg" alt="finca" />
            </div>
            <div id='inner4'>
              <p>"The atmosphere of the ancient house, the vastness and the endless light on the fields, the warm, salty sea air, the family togetherness - this is Ses Talaioles."</p>
              {/* <button>Discover More</button> */}
            </div>
          </div>
        </div>
        <div id='sec3'>
          <div id='sb3'>
            <h3 id='sh3'>Discover our wines</h3>
            <img id='si1' src="../src/assets/b1.png" alt="" />
            <img  id='si2' src="../src/assets/b3.png" alt="" />
          </div>
        </div>
        <div id='sec4'>
            <div id='s4b'>
              <div id='l'>
              <p>THE TERROIR</p>
              <h1>In harmony <br />
                  with nature
              </h1>
              </div>
              <div id='r'>
                <p>
                It took courage to plant the vines facing the sea in the jumbled foothills of the Llevant mountains. A rather unusual planting practice, at least in this part of Mallorca, and a feature unique to Ses Talaioles.
                </p>
                <button>Discover More</button>
              </div>
            </div>
        </div>
        <div id='sec5'>
          <div id='sb5'>
            <div id='sl'>
              <p>THE BODEGA</p>
              <h1>
              Tradition meets <br />
              innovation
              </h1>
              <p>The development of the grapes' very own aroma is of utmost importance at Ses Talaioles. Precise craftsmanship and the latest innovative techniques produce the highest quality.</p>
              <button>Discover More</button>
            </div>
            <div id='sr'>
              <img src="../src/assets/tradition-maschiene2.jpg" alt="" />
            </div>
          </div>
          <div id='sb51'>
            <div id='l5'>
              <img src="../src/assets/ureigener-geschmack.jpg" alt="" />
            </div>
            <div id='r5'>
              <h2>"We give the wines the time they need to unfold their very own characteristics."</h2>
              <p id='p'>Federico Zaina</p>
              <p>Winemaker, Finca Ses Talaioles</p>
            </div>
          </div>
        </div>
        <footer>
            <div id='foo'>
              <div id='fo1'>
                <div id='foo1'>
                  <h1>Subscribe to
                  our newsletter</h1>
                </div>
                <div id='foo2'>
                  <div id='fm'>
                  <p id='p'>Press</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Imprint</p>
                  </div>
                  <div id='fm1'>
                  <p id='p'>CONTACT</p>
                  <p>info@sestalaioles.com</p>
                  </div>
                </div>
              </div>
              <div id='fo2'>
                <p>By subscribing to the newsletter, you will always be up to date. Find out about new products, events, and specials.</p>
                <input type="Email" placeholder='Email' name="" id="" />
                <span>SubScribe</span>
              </div>
            </div>
        </footer>
    </div>


  )
}

export default Bootstarp
