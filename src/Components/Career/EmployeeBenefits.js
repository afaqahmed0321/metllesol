import React from "react";

const EmployeeBenefits = () => {
  return (
    <>
      <section className="Employee-Benefits">
        <div className="container">
          <div className="benefit__flex">
            <div className="benefit__item">
              <div className="benefit__img">
                <img src="assets/img/career/benefit.png" />
              </div>
            </div>
            <div className="benefit__item">
              <div className="benefit__inner">
                <h1>Employee benefits</h1>
                <ul className="benefit__flex">
                  <li>
                    <img src="assets/img/career/lves.png" />
                    <p>Paid leaves, including parental leave</p>
                  </li>
                  <li>
                    <img src="assets/img/career/bonus.png" />
                    <p>Allowances (bonus and mobile phone)</p>
                  </li>
                  <li>
                    <img src="assets/img/career/funds.png" />
                    <p>Provident fund</p>
                  </li>
                  <li>
                    <img src="assets/img/career/game.png" />
                    <p>Recreation area</p>
                  </li>
                  <li>
                    <img src="assets/img/career/gym.png" />
                    <p>Onsite gym facilities</p>
                  </li>
                  <li>
                    <img src="assets/img/career/certificate.png" />
                    <p>Paid certification</p>
                  </li>
                  <li>
                    <img src="assets/img/career/food.png" />
                    <p>Monthly Dinner</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmployeeBenefits;
