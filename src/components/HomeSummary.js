import React from "react";
import SendIcon from "@mui/icons-material/Send";


export default function HomeSummary() {
  return (
    <div className="home-container">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="/images/home.jpg" className="img-fluid" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Merhaba,</h5>
              <p className="card-text">
                Ben Sefa Ünüvar. Size özel e-ticaret, blog vb. profesyonel web
                sitelerini çok kısa sürede geliştirebilirim. Müşteri
                memnuniyetini en üst seviyede tuttuğum bu süreçte, benimle
                çalışmaktan çok memnun kalacaksınız.
              </p>
              <div className="card-text-button">
                <div className="container-btn">
                  <button className="btn rounded">
                    <span className="text-green">

                    
                      <a href="https://wa.me/905365813398" className="text-green" >Benimle Çalışmak İçin</a>

                      <SendIcon />
                      </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
