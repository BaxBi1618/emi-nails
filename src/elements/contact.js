import "../styles/contact.css";
import { useEffect, useState } from "react";

function Contact() {
  const [infoData, setInfoData] = useState(null);

  useEffect(() => {
    fetch("json/contact.json")
      .then((response) => response.json())
      .then((data) => setInfoData(data.info))
      .catch((error) => console.error("Błąd ładowania danych:", error));
  })

  if(!infoData){
    return(
      <section id="kontakt">
        <h2>Kontakt</h2>
        <article class="square">
          <h3>Dane kontaktowe aktualnie niedostępe</h3>
        </article>
      </section>
    )
  }

  return (
    <section id="kontakt">
      <h2>Kontakt</h2>

      {Object.keys(infoData).map((key)=> {
        const category = infoData[key];
        return(
          <article class="square" key={key}>
            <img src={`/images/${category.title}`} alt="Pinezka" />
            {category.paragraphs.map((paragraph)=> (
              <p>{paragraph.name}</p>
            ))}
          </article>
        )
      })}
    </section>
  );
}

export default Contact;
