import '../styles/contact.css'

function Contact() {
    return(
        <section id="kontakt">
        <h2>Kontakt</h2>

        <article class="square">
          <img src="images/lokalizacja.png" alt="Pinezka" />
          <h3>adres</h3>
          <p>Sezamkowa 13</p>
          <p>Łódź 76-932</p>
        </article>
        <article class="square">
          <img src="images/kontakt.png" alt="Telefon" />
          <h3>Kontakt</h3>
          <p>tel. 123 123 123</p>
          <p>emi-nails.gmail.com</p>
        </article>
        <article class="square">
          <img src="images/otwarcie.png" alt="Zegar" />
          <h3>Godziny otwarcia</h3>
          <p>Pon-Pt 9.00 - 20.00</p>
          <p>sobota 11.00 - 16.00</p>
        </article>
      </section>
    );
};

export default Contact;