import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Contact() {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-title">
        <h2>Projelerinizi gerçekleştirmek ister misiniz<label htmlFor="">?</label> </h2>
        <p>Projeniz için ücret teklifi almak veya aklınızdaki soruları sormak için bana e-posta yoluyla ulaşabilirsiniz. Paylaştığınız detaylar ne kadar kapsamlı olursa, size o kadar hızlı ve etkili destek sağlayabilirim. Web siteleri, mobil uygulamalar (Android & iOS) ve masaüstü yazılımlar (Windows Forms, WPF) geliştiriyorum. Mevcut projelerinizi güncelleyebilir veya ihtiyacınıza özel, modern ve işlevsel yazılım çözümleri oluşturabilirim. İletişime geçerek projenizi hayata geçirebiliriz.
        </p>
      </div>
      <div className="contact-icons">
        <div className="icons">
          <a href="https://wa.me/905365813398"><WhatsAppIcon className="phone" id="icon" /></a>
          <p>+90 536 581 3398</p>
        </div>
        <div className="icons">
          <LocationOnIcon className="location" id="icon" />
          <p>Adana, Türkiye</p>
        </div>
        <div className="icons">
          <a href="mailto:sefaunuvar1@gmail.com"><MailIcon className="mail" id="icon" /></a>
          <p>sefaunuvar1<label htmlFor="">@gmail.com</label> </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
