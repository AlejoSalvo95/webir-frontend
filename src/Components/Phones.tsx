import React, { ReactNode } from "react";
import arrowSvg from "Utils/Assets/Images/white-arrow.svg";
import { Phone, phonePropsType, keyGetterType } from "Utils/Types";
import { capitalize, groupBy } from "Utils/GeneralFunctions";
export default ({ resetSetPhoneResponse, phonesData }: phonePropsType) => {

  let keyGetter: keyGetterType = item => item.model
  let groupedPhones = groupBy(phonesData, keyGetter)
  let showingPhonesDiv: ReactNode[] = []
  Object.keys(groupedPhones).forEach(function (key, idx) {
    let phones = groupedPhones[key];
    let cheapestIndex = 0;
    let comparedIndex: number | undefined;

    if (phones && phones.length) {
      console.log(phones, 'phones')
      phones.map((phone, idx) => {
        let isTheCheapest = true
        phones.map((comparingPhone, comparingIdx) => {
          if (phone.price >= comparingPhone.price) {
            isTheCheapest = false
          } else if (phone.page !== comparingPhone.page) {
            comparedIndex = comparingIdx
          }
        })
        if (isTheCheapest) {
          cheapestIndex = idx
        }
      })

      let phone = phones[cheapestIndex];
      let comparedPhone = comparedIndex && phones[comparedIndex];
      console.log(comparedPhone, 'comparedPhone')
      showingPhonesDiv.push(<div key={idx} className="shown-phone" >
        <img src={phone.image} alt="Phone" />
        <p>
          {capitalize(phone.model) +
            (phone.memory ? " " + phone.memory + "gb" : "")}
        </p>
        <p className="phone-price">USD {phone.price}</p>
        <div className="phone-link">
          <a href={(phone.link.includes('zonatecno') ? 'https://' : '') + phone.link} target="_blank">
            Open {phone.page}
          </a>
        </div>
        {comparedPhone && <div className="phone-secondary-link"> <a href={(comparedPhone.link.includes('zonatecno') ? 'https://' : '') + comparedPhone.link} target="_blank">
          USD {comparedPhone.price} in {comparedPhone.page}
        </a></div>}
      </div>)
    }
  })
  let noPhones: ReactNode = <div className="margin_10_0_0_0">No phones found for this specification</div>
  return (
    <div>
      <div className="small_padding_top">
        <img
          className="arrow-back"
          src={arrowSvg}
          onClick={resetSetPhoneResponse}
        />
        <span className="select-text">PHONES</span>
        <div className="margin_20_0_0_0 flexcontainer">
          {
            showingPhonesDiv.length ? showingPhonesDiv : noPhones
          }
        </div>
      </div>
    </div >
  );
};
