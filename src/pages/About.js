import React, { useState } from "react";

function About() {
  const [visibility, setVisibility] = useState(false);
  const [opacity, setOpacity] = useState(0);
  return (
    <div id="about">
      <div
        style={{
          visibility: visibility ? "visible" : "hidden",
          opacity: opacity,
        }}
        className="cv-container"
      >
        <div>
          <img src="/images/cv.png" alt="" />
          <label
            onClick={() => {
              setVisibility(!visibility);
              setOpacity(0);
            }}
            htmlFor=""
          >
            X
          </label>
        </div>
      </div>

      <div className="about-doing">
        <div>
          <h3>
            Nerede Okuyorum<label htmlFor="">?</label>
          </h3>
        </div>
        <div>
          <p>
            Ben Sefa Ünüvar. Adana Alparslan Türkeş Bilim
            ve Teknoloji Üniversitesinde bir lisans öğrencisiyim. %100 İngilizce
            eğitim dili olan Yazılım Mühendisliği üçüncü sınıf öğrencisiyim.
            Eğitimime devam etmekte olup Adana ve Adana çevresindeki
            etkinliklere katılmaktayım.
            <span
              onClick={() => {
                setVisibility(!visibility);
                setOpacity(1);
              }}
            >
              CV'mi görüntüle
            </span>
          </p>
        </div>
      </div>
      <div className="about-doing">
        <div>
          <h3>
            Neler Yapıyorum<label htmlFor="">?</label>
          </h3>
        </div>
        <div>
          <p>
            Son 5 yıldır web programlama, mobil uygulama geliştirme gibi bir çok
            alanda bilgi edindim. Edindiğim bu bilgileri uygulamak ve sizlerle
            daha kolay iletişim kurabilmek için bu siteyi geliştirdim. Severek
            yaptığım bu işte çalışmalara devam ediyor ve bu sektörde en önemli
            şeylerden birinin güncel olmak olduğuna inanıyorum. Bu yüzden
            güncelliğimi korumak adına yeni bilgileri takip ediyorum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
