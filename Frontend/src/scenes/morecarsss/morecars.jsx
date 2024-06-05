import React from 'react';
import logo from '/logo.svg';
import { BrowserRouter } from 'react-router-dom';
import { IonIcon } from '@ionic/react';
import { logoFacebook, logoInstagram, logoTwitter, logoLinkedin, logoSkype, mailOutline,carOutline, personOutline,arrowForwardOutline, peopleOutline, flashOutline, speedometerOutline, hardwareChipOutline, heartOutline,personAddOutline,cardOutline,timeOutline, chatbubbleEllipsesOutline} from 'ionicons/icons'; // Import required Ionicons


const Car = () => {
  return (
    <div>
      {/* Header */}
      <header className="header" data-header>
      <div>
      <div className="container">
        <div className="overlay" data-overlay></div>
        <a href="#" className="logo">
          <img src={logo} alt="Logo" />
        </a>
        <nav className="navbar" data-navbar>
          <ul className="navbar-list">
            <li>
              <a href="/car" className="navbar-link" data-nav-link>Home</a>
            </li>
            <li>
              <a href="#featured-car" className="navbar-link" data-nav-link>Explore cars</a>
            </li>
            <li>
              <a href="#" className="navbar-link" data-nav-link>About us</a>
            </li>
            <li>
              <a href="#blog" className="navbar-link" data-nav-link>Blog</a>
            </li>
          </ul>
        </nav>
        <div className="header-actions">
          <div className="header-contact">
            <a href="tel:88002345678" className="contact-link">+91 9638901774</a>
            <span className="contact-time">Mon - Sat: 8:00 am - 10:00 pm</span>
          </div>
          <a href="#featured-car" className="btn" aria-labelledby="aria-label-txt">
            <IonIcon icon={carOutline} />
            <span id="aria-label-txt">Explore cars</span>
          </a>
          <a href="/loginn" className="btn user-btn" aria-label="Profile">
            <IonIcon icon={personOutline} />
          </a>
        </div>
      </div>
    </div>
      </header>

      {/* Main content */}
      <main>
        <article>
          {/* Featured car section */}
          <section className="section featured-car" id="featured-car">
      <div className="container">
        <div className="title-wrapper"></div>
        <ul className="featured-car-list">
          
          <li>
            <div className="featured-car-card">
              <figure className="card-banner">
                <img
                  src="/fortunerfortunerrightfrontthreequarter.jpg"
                  width="440"
                  height="300"
                />
              </figure>

              <div className="card-content">
                <div className="card-title-wrapper">
                  <h3 className="h3 card-title">
                    <a href="#">Toyota Fortuner</a>
                  </h3>
                  <data className="year chumma">2019</data>
                </div>

                <ul className="card-list">
                  <li className="card-list-item">
                    <IonIcon icon={peopleOutline} />
                    <span className="card-item-text">6 People</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={flashOutline} />
                    <span className="card-item-text"> Hybrid</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={speedometerOutline} />
                    <span className="card-item-text">13.5km / 1-litre</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={hardwareChipOutline} />
                    <span className="card-item-text">Automatic</span>
                  </li>
                </ul>

                <div className="card-price-wrapper">
                  <p className="card-price"><strong>$250</strong> / month</p>
                  
                  <a href="/rent" className="btn">Rent now</a>                 </div>
              </div>
            </div>
          </li>
          <li>
            <div className="featured-car-card">
              <figure className="card-banner">
                <img
                  src="/coopercooperrightfrontthreequarter.jpg"
                  width="440"
                  height="300"
                />
              </figure>

              <div className="card-content">
                <div className="card-title-wrapper">
                  <h3 className="h3 card-title">
                    <a href="#">Mini Cooper</a>
                  </h3>
                  <data className="year chumma">2024</data>
                </div>

                <ul className="card-list">
                  <li className="card-list-item">
                    <IonIcon icon={peopleOutline} />
                    <span className="card-item-text">4 People</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={flashOutline} />
                    <span className="card-item-text">Hybrid</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={speedometerOutline} />
                    <span className="card-item-text">12.5km / 1-litre</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={hardwareChipOutline} />
                    <span className="card-item-text">Automatic</span>
                  </li>
                </ul>

                <div className="card-price-wrapper">
                  <p className="card-price"><strong>$240</strong> / month</p>
                  
                  <a href="/rent" className="btn">Rent now</a>                 </div>
              </div>
            </div>
          </li>
          <li>
            <div className="featured-car-card">
              <figure className="card-banner">
                <img
                  src="/magnitepearlwhitewithonyxblack.jpg"
                  width="440"
                  height="300"
                />
              </figure>

              <div className="card-content">
                <div className="card-title-wrapper">
                  <h3 className="h3 card-title">
                    <a href="#">Nissan Magnite</a>
                  </h3>
                  <data className="year chumma">2022</data>
                </div>

                <ul className="card-list">
                  <li className="card-list-item">
                    <IonIcon icon={peopleOutline} />
                    <span className="card-item-text">4 People</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={flashOutline} />
                    <span className="card-item-text">Hybrid</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={speedometerOutline} />
                    <span className="card-item-text">19km / 1-litre</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={hardwareChipOutline} />
                    <span className="card-item-text">Manual</span>
                  </li>
                </ul>

                <div className="card-price-wrapper">
                  <p className="card-price"><strong>$110</strong> / month</p>
                  
                  <a href="/rent" className="btn">Rent now</a>                 </div>
              </div>
            </div>
          </li>
          <li>
            <div className="featured-car-card">
              <figure className="card-banner">
                <img
                  src="/grandi10niospolarwhite.jpg"
                  width="440"
                  height="300"
                />
              </figure>

              <div className="card-content">
                <div className="card-title-wrapper">
                  <h3 className="h3 card-title">
                    <a href="#">Grand i10 Nios</a>
                  </h3>
                  <data className="year chumma">2024</data>
                </div>

                <ul className="card-list">
                  <li className="card-list-item">
                    <IonIcon icon={peopleOutline} />
                    <span className="card-item-text">4 People</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={flashOutline} />
                    <span className="card-item-text">Hybrid</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={speedometerOutline} />
                    <span className="card-item-text">19.3km / 1-litre</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={hardwareChipOutline} />
                    <span className="card-item-text">Automatic</span>
                  </li>
                </ul>

                <div className="card-price-wrapper">
                  <p className="card-price"><strong>$90</strong> / month</p>
                  
                  <a href="/rent" className="btn">Rent now</a>                 </div>
              </div>
            </div>
          </li>
          <li>
            <div className="featured-car-card">
              <figure className="card-banner">
                <img
                  src="/safaristardustash.jpg"
                  width="440"
                  height="300"
                />
              </figure>

              <div className="card-content">
                <div className="card-title-wrapper">
                  <h3 className="h3 card-title">
                    <a href="#">Tata Safari</a>
                  </h3>
                  <data className="year chumma">2024</data>
                </div>

                <ul className="card-list">
                  <li className="card-list-item">
                    <IonIcon icon={peopleOutline} />
                    <span className="card-item-text">7 People</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={flashOutline} />
                    <span className="card-item-text"> Hybrid</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={speedometerOutline} />
                    <span className="card-item-text">11.3km / 1-litre</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={hardwareChipOutline} />
                    <span className="card-item-text">Automatic</span>
                  </li>
                </ul>

                <div className="card-price-wrapper">
                  <p className="card-price"><strong>$200</strong> / month</p>
                  
                  <a href="/rent" className="btn">Rent now</a>                 </div>
              </div>
            </div>
          </li>
          <li>
            <div className="featured-car-card">
              <figure className="card-banner">
                <img
                  src="/seltosmattegraphite.jpg"
                  width="440"
                  height="300"
                />
              </figure>

              <div className="card-content">
                <div className="card-title-wrapper">
                  <h3 className="h3 card-title">
                    <a href="#">Kia Seltos</a>
                  </h3>
                  <data className="year chumma">2024</data>
                </div>

                <ul className="card-list">
                  <li className="card-list-item">
                    <IonIcon icon={peopleOutline} />
                    <span className="card-item-text">4 People</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={flashOutline} />
                    <span className="card-item-text"> Hybrid</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={speedometerOutline} />
                    <span className="card-item-text">14km / 1-litre</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={hardwareChipOutline} />
                    <span className="card-item-text">Automatic</span>
                  </li>
                </ul>

                <div className="card-price-wrapper">
                  <p className="card-price"><strong>$150</strong> / month</p>
                  
                  <a href="/rent" className="btn">Rent now</a>                 </div>
              </div>
            </div>
          </li>
          <li>
            <div className="featured-car-card">
              <figure className="card-banner">
                <img
                  src="/hectorhavanagrey.jpg"
                  width="440"
                  height="300"
                />
              </figure>

              <div className="card-content">
                <div className="card-title-wrapper">
                  <h3 className="h3 card-title">
                    <a href="#">Mg Hector</a>
                  </h3>
                  <data className="year chumma">2023</data>
                </div>

                <ul className="card-list">
                  <li className="card-list-item">
                    <IonIcon icon={peopleOutline} />
                    <span className="card-item-text">6 People</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={flashOutline} />
                    <span className="card-item-text">Hybrid</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={speedometerOutline} />
                    <span className="card-item-text">11km / 1-litre</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={hardwareChipOutline} />
                    <span className="card-item-text">Automatic</span>
                  </li>
                </ul>

                <div className="card-price-wrapper">
                  <p className="card-price"><strong>$280</strong> / month</p>
                  
                  <a href="/rent" className="btn">Rent now</a>                 </div>
              </div>
            </div>
          </li>
          <li>
            <div className="featured-car-card">
              <figure className="card-banner">
                <img
                  src="/tharstealthblack.jpg"
                  width="440"
                  height="300"
                />
              </figure>

              <div className="card-content">
                <div className="card-title-wrapper">
                  <h3 className="h3 card-title">
                    <a href="#">Mahindra Thar</a>
                  </h3>
                  <data className="year chumma">2022</data>
                </div>

                <ul className="card-list">
                  <li className="card-list-item">
                    <IonIcon icon={peopleOutline} />
                    <span className="card-item-text">4 People</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={flashOutline} />
                    <span className="card-item-text">Hybrid</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={speedometerOutline} />
                    <span className="card-item-text">13.3km / 1-litre</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={hardwareChipOutline} />
                    <span className="card-item-text">Manual</span>
                  </li>
                </ul>

                <div className="card-price-wrapper">
                  <p className="card-price"><strong>$230</strong> / month</p>
                  
                  <a href="/rent" className="btn">Rent now</a>                 </div>
              </div>
            </div>
          </li>
          <li>
            <div className="featured-car-card">
              <figure className="card-banner">
                <img
                  src="/xuv700xuv700rightfrontthreequarter.jpg"
                  width="440"
                  height="300"
                />
              </figure>

              <div className="card-content">
                <div className="card-title-wrapper">
                  <h3 className="h3 card-title">
                    <a href="#">Mahindra XUV700</a>
                  </h3>
                  <data className="year chumma">2023</data>
                </div>

                <ul className="card-list">
                  <li className="card-list-item">
                    <IonIcon icon={peopleOutline} />
                    <span className="card-item-text">6 People</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={flashOutline} />
                    <span className="card-item-text">Hybrid</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={speedometerOutline} />
                    <span className="card-item-text">8km / 1-litre</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={hardwareChipOutline} />
                    <span className="card-item-text">Automatic</span>
                  </li>
                </ul>

                <div className="card-price-wrapper">
                  <p className="card-price"><strong>$310</strong> / month</p>
                  
                  <a href="/rent" className="btn">Rent now</a>                 </div>
              </div>
            </div>
          </li>
          <li>
            <div className="featured-car-card">
              <figure className="card-banner">
                <img
                  src="/nexonpristinewhite.jpg"
                  width="440"
                  height="300"
                />
              </figure>

              <div className="card-content">
                <div className="card-title-wrapper">
                  <h3 className="h3 card-title">
                    <a href="#">Tata Nexon</a>
                  </h3>
                  <data className="year chumma">2024</data>
                </div>

                <ul className="card-list">
                  <li className="card-list-item">
                    <IonIcon icon={peopleOutline} />
                    <span className="card-item-text">4 People</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={flashOutline} />
                    <span className="card-item-text">Hybrid</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={speedometerOutline} />
                    <span className="card-item-text">15km / 1-litre</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={hardwareChipOutline} />
                    <span className="card-item-text">Automatic</span>
                  </li>
                </ul>

                <div className="card-price-wrapper">
                  <p className="card-price"><strong>$170</strong> / month</p>
                  
                  <a href="/rent" className="btn">Rent now</a>                 </div>
              </div>
            </div>
          </li>
          <li>
            <div className="featured-car-card">
              <figure className="card-banner">
                <img
                  src="/grandvitaranexablue.jpg"
                  width="440"
                  height="300"
                />
              </figure>

              <div className="card-content">
                <div className="card-title-wrapper">
                  <h3 className="h3 card-title">
                    <a href="#">Suzuki Grand Vitara</a>
                  </h3>
                  <data className="year chumma">2023</data>
                </div>

                <ul className="card-list">
                  <li className="card-list-item">
                    <IonIcon icon={peopleOutline} />
                    <span className="card-item-text">4 People</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={flashOutline} />
                    <span className="card-item-text">Hybrid</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={speedometerOutline} />
                    <span className="card-item-text">17km / 1-litre</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={hardwareChipOutline} />
                    <span className="card-item-text">Automatic</span>
                  </li>
                </ul>

                <div className="card-price-wrapper">
                  <p className="card-price"><strong>$190</strong> / month</p>
                  
                  <a href="/rent" className="btn">Rent now</a>                 </div>
              </div>
            </div>
          </li>
          <li>
            <div className="featured-car-card">
              <figure className="card-banner">
                <img
                  src="/scorpionnapoliblack.jpg"
                  width="440"
                  height="300"
                />
              </figure>

              <div className="card-content">
                <div className="card-title-wrapper">
                  <h3 className="h3 card-title">
                    <a href="#">Mahindra Scropio N</a>
                  </h3>
                  <data className="year chumma">2024</data>
                </div>

                <ul className="card-list">
                  <li className="card-list-item">
                    <IonIcon icon={peopleOutline} />
                    <span className="card-item-text">6 People</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={flashOutline} />
                    <span className="card-item-text"> Hybrid</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={speedometerOutline} />
                    <span className="card-item-text">17km / 1-litre</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={hardwareChipOutline} />
                    <span className="card-item-text">Automatic</span>
                  </li>
                </ul>

                <div className="card-price-wrapper">
                  <p className="card-price"><strong>$160</strong> / month</p>
                  
                  <a href="/rent" className="btn">Rent now</a>                 </div>
              </div>
            </div>
          </li>
          
              </ul>
            </div>
          </section>

          
          
        </article>
      </main>

      

      {/* Custom JavaScript and Ionicon link */}
      
    </div>
  );
}

export default Car;
