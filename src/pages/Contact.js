import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Contact() {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-title">
        <h2>Projelerinizi gerçekleştirmek ister misiniz<label htmlFor="">?</label> </h2>
        <p>
          Projeniz için ücret teklifi almak, aklına takılan bir soruyu sormak için
          mail adresimden bana ulaşabilirsiniz. Benimle ne kadar çok detay
          paylaşırsanız, size o kadar iyi ve hızlı yardımcı olabileceğimi
          unutmayın. Şirketiniz, hizmetleriniz, ürünleriniz için kullanışlı,
          güncel, dinamik website tasarımları oluşturuyoruz. İster mevcut
          websitenizi güncellemek isterseniz de yepyeni bir website tasarımına
          sahip olmak için benimle iletişime geçebilirsiniz.
        </p>
      </div>
      <div className="contact-icons">
        <div className="icons">
          <a href="https://web.whatsapp.com/"><WhatsAppIcon className="phone" id="icon" /></a>
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
