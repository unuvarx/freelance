import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function HomeCarousel() {
  return (
    <div className="home-carousel-container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/responsive.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Responsive Tasarım</h3>
            <p>Her cihaza %100 uyumlu hızlı ve dinamik web siteleri</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/hizli.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Yenilikçi ve Güncel</h3>
            <p>
              Benzersiz ve güncel yapıyla inşa edilmiş web siteleri
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/admin.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Admin Paneli</h3>
            <p>
              Size özel admin paneli sayesinde siteyi yönetebileceksiniz
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    </div>
  );
}
