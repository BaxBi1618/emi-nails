import "../styles/priceList.css";
import { useEffect, useState } from "react";

function PriceList() {
    const [cennikData, setCennikData] = useState(null);
  
    useEffect(() => {
      fetch("json/prices.json")
        .then((response) => response.json())
        .then((data) => setCennikData(data.cennik))
        .catch((error) => console.error("Błąd ładowania danych:", error));
    }, []);
  
    if (!cennikData) {
      return(
        <section id="cennik">
          <h2>Cennik</h2>
          <h3>Ładowanie danych...</h3>
        </section>
      ) 
    }

  return (
    <section id="cennik">
      <h2>Cennik</h2>
      {Object.keys(cennikData).map((key) => {
        const category = cennikData[key];
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
