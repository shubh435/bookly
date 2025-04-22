import React from "react";
import { worldMap } from "../assets";

const locationData = [
  { id: 1, name: "India", link: "#", iconName: "fa-map-marker-alt" },
  { id: 2, name: "USA", link: "#", iconName: "fa-map-marker-alt" },
  { id: 3, name: "Russia", link: "#", iconName: "fa-map-marker-alt" },
  { id: 4, name: "France", link: "#", iconName: "fa-map-marker-alt" },
  { id: 5, name: "Japan", link: "#", iconName: "fa-map-marker-alt" },
  { id: 6, name: "Africa", link: "#", iconName: "fa-map-marker-alt" },
];

const quickLinks = [
  { id: 1, iconName: "fa-arrow-right", name: "Home", path: "/" },
  { id: 2, iconName: "fa-arrow-right", name: "Featured", path: "/featured" },
  { id: 3, iconName: "fa-arrow-right", name: "Arrivals", path: "/arrivals" },
  { id: 4, iconName: "fa-arrow-right", name: "Reviews", path: "/reviews" },
  { id: 5, iconName: "fa-arrow-right", name: "Blogs", path: "/blogs" },
];

const extraLinks = [
  {
    id: 1,
    iconName: "fa-arrow-right",
    name: "Account Info",
    path: "/account-info",
  },
  {
    id: 2,
    iconName: "fa-arrow-right",
    name: "Ordered Items",
    path: "/ordered-items",
  },
  {
    id: 3,
    iconName: "fa-arrow-right",
    name: "Privacy Policy",
    path: "/privacy-policy",
  },
  {
    id: 4,
    iconName: "fa-arrow-right",
    name: "Payment Method",
    path: "/payment-method",
  },
  {
    id: 5,
    iconName: "fa-arrow-right",
    name: "Our Services",
    path: "/our-services",
  },
];

function Footer() {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Our Locations</h3>
          {locationData.map((location) => (
            <a key={location.id} href={location.link}>
              <i className={`fas ${location.iconName}`}></i> {location.name}
            </a>
          ))}
        </div>

        <div className="box">
          <h3>Quick Links</h3>
          {quickLinks.map((link) => (
            <a key={link.id} href={link.path}>
              <i className={`fas ${link.iconName}`}></i> {link.name}
            </a>
          ))}
        </div>

        <div className="box">
          <h3>Extra Links</h3>
          {extraLinks.map((link) => (
            <a key={link.id} href={link.path}>
              <i className={`fas ${link.iconName}`}></i> {link.name}
            </a>
          ))}
        </div>

        <div className="box">
          <h3>Contact Info</h3>
          <a href="#">
            <i className="fas fa-phone"></i> +123-456-7890
          </a>
          <a href="#">
            <i className="fas fa-phone"></i> +111-222-3333
          </a>
          <a href="#">
            <i className="fas fa-envelope"></i> shubhamsarode435@gmail.com
          </a>
          <img src={worldMap} className="map" alt="World Map" />
        </div>
      </div>

      <div className="share">
        <a href="#" className="fab fa-facebook-f"></a>
        <a href="#" className="fab fa-twitter"></a>
        <a href="#" className="fab fa-instagram"></a>
        <a href="#" className="fab fa-linkedin"></a>
        <a href="#" className="fab fa-pinterest"></a>
      </div>

      <div className="credit">
        Created by <span>Mr. Shubham Sarode</span> | All rights reserved!
      </div>
    </section>
  );
}

export default Footer;
