import "../styles/priceList.css";

function PriceList() {
  return (
    <section id="cennik">
      <h2>Cennik</h2>
      <table>
        <tr>
          <th colspan="2">💅 Cennik Manicure</th>
        </tr>
        <tr>
          <td>Manicure klasyczny</td>
          <td>50 zł</td>
        </tr>
        <tr>
          <td>Manicure japoński</td>
          <td>60 zł</td>
        </tr>
        <tr>
          <td>Manicure hybrydowy</td>
          <td>80 zł</td>
        </tr>
        <tr>
          <td>Manicure żelowy na naturalnej płytce</td>
          <td>100 zł</td>
        </tr>
        <tr>
          <td>Przedłużanie paznokci żelem</td>
          <td>130 zł</td>
        </tr>
        <tr>
          <td>Uzupełnienie żelu</td>
          <td>90 zł</td>
        </tr>
      </table>

      <table>
        <tr>
          <th colspan="2">🦶 Cennik Pedicure</th>
        </tr>
        <tr>
          <td>Pedicure klasyczny</td>
          <td>80 zł</td>
        </tr>
        <tr>
          <td>Pedicure hybrydowy</td>
          <td>100 zł</td>
        </tr>
        <tr>
          <td>Pedicure leczniczy</td>
          <td>120 zł</td>
        </tr>
        <tr>
          <td>Pedicure SPA (peeling, maska, masaż)</td>
          <td>140 zł</td>
        </tr>
      </table>

      <table>
        <tr>
          <th colspan="2">✨ Dodatkowe Usługi</th>
        </tr>
        <tr>
          <td>Usunięcie hybrydy/żelu bez nowej stylizacji</td>
          <td>30 zł</td>
        </tr>
        <tr>
          <td>Naprawa 1 paznokcia</td>
          <td>10-15 zł</td>
        </tr>
        <tr>
          <td>Olejowanie i regeneracja paznokci</td>
          <td>40 zł</td>
        </tr>
        <tr>
          <td>Parafina na dłonie/stopy</td>
          <td>50 zł</td>
        </tr>
      </table>
    </section>
  );
}

export default PriceList;
