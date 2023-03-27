import React from "react";
import AOS from "aos";
import { useEffect } from "react";

export default function HomeSkills() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="home-explain"
      data-aos="fade-zoom-in"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      <div className="home-explain-title">
        <h3>Neden Beni Seçmelisiniz?</h3>
      </div>
      <div className="home-explain-cards">
        <div className="home-explain-card">
          <img src="/images/tecrube.png" alt="" />
          <div>
            <span>Kazanılmış</span>
            <span>Tecrübe</span>
          </div>
        </div>
        <div className="home-explain-card">
          <img src="/images/musteri-memnuniyeti.png" alt="" />
          <div>
            <span>%100 Müşteri</span>
            <span>Memnuniyeti</span>
          </div>
        </div>
        <div className="home-explain-card">
          <img src="/images/mutlu-musteriler.png" alt="" />
          <div>
            <span>Mutlu</span>
            <span>Müşteriler</span>
          </div>
        </div>
        <div className="home-explain-card">
          <img src="/images/guvenilirlik.png" alt="" />
          <div>
            <span>%100</span>
            <span>Güvenilirlik</span>
          </div>
        </div>
      </div>
    </div>
  );
}
