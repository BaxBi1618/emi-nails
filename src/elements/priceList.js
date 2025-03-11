import "../styles/priceList.css";
import { useEffect, useState } from "react";

function PriceList() {
  return (
    <section id="cennik">
      <h2>Cennik</h2>
      {Object.keys(cennik.cennik).map((key) => {
        const category = cennik.cennik[key];
        return (
          <table key={key}>
            <thead>
              <tr>
                <th colSpan="2">{category.title}</th>
              </tr>
            </thead>
            <tbody>
              {category.services.map((service, index) => (
                <tr key={index}>
                  <td>{service.name}</td>
                  <td>{service.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      })}
    </section>
  );
}

export default PriceList;
