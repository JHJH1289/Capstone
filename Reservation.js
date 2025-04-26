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
            <div className="single_info_text">
              <h3>Tel</h3>
              <h4>김지열<br />010-9797-7966</h4>
              <br />
              <h4>정재훈<br />010-8763-1289</h4>
            </div>
          </div>
          <div className="single_contact_info">
            <div className="single_info_text">
              <h3>Account Number</h3>
              <h4>김민채<br /><br />카카오 3333296886496</h4>
            </div>
          </div>
        </div>

        {/* 예매 버튼 */}
        <div className="reservation-column">
          <div className="single_contact_info center">
            <h3 className="highlight">예매바로가기</h3>
            <br />
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