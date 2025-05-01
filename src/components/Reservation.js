import React from "react";

function Reservation() {
  return (
    <section id="contact" className="contact">
      <div className="head_title text-center">
        <h2>예매 안내</h2>
      </div>

      <div className="reservation-wrapper">
        {/* 연락처 영역 */}
        <div className="reservation-column">
          <div className="single_contact_info">
            <h1>Tel</h1>
            <h3>김지열<br />010-9797-7966</h3>
            <h3>정재훈<br />010-8763-1289</h3>
          </div>

          <div className="single_contact_info">
            <h1>Account Number</h1>
            <h3>김민채<br></br>카카오 3333296886496</h3>
          </div>
        </div>

        {/* 예매 버튼 */}
        <div className="reservation-column">
          <div className="reservation-btn">
            <h1 className="highlight">예매바로가기</h1>
            <br></br>
            <a
              href="https://form.naver.com/response/_Kn4Cc9TvtFysF_f1g3cug"
              className="btn btn-lg reservation-button"
            >
              예매하기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reservation;
