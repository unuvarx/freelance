import React from "react";
import { Link } from "react-scroll";

export default function HomeApply() {
  return (
    <div className="overlays-card ">
      <div className="card text-bg-dark">
        <img src="/images/gokdelen.jpg" className="card-img" alt="..." />
        <div className="card-img-overlay">
          <h5 className="card-title">Hayalinizdeki Web Sitesine Kavuşun</h5>
          <nav>
            <ul>
              <span></span>
              <li>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <Link to="https://wa.me/905365813398" > HEMEN BAŞVUR </Link>
                <span></span>
                <span></span>
                <span></span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
