import { Button } from "@/components/atmos/Button";
import { BsHouseDoor, BsBuilding } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";

export default function AddressInfo() {
  return (
    <div>
      <div className="order__title">배송 정보</div>
      <div className="title__underline"></div>
      <div className="location">
        <Button color="info">
          <BsHouseDoor size="20" />
          &nbsp;집
        </Button>
        <Button color="secondary">
          <BsBuilding size="20" />
          &nbsp;회사
        </Button>
        <Button color="secondary">
          <MdOutlineLocationOn size="20" />
          &nbsp;위치1
        </Button>
      </div>
      <div className="info__list">
        <div className="info__section">
          <div className="label__section">이름</div>
          <div className="input__section">
            <input
              type="text"
              id=""
              name=""
              required
              placeholder="아무개"
              style={{ width: 150 }}
            />
          </div>
        </div>
        <div className="info__section">
          <div className="label__section">연락처</div>
          <div className="input__section">
            <input
              type="text"
              id=""
              name=""
              required
              placeholder="(-)은 빼고"
              style={{ width: 247 }}
            />
          </div>
        </div>
        <div className="info__section">
          <div className="label__section">이메일</div>
          <div className="input__section">
            <input
              type="text"
              id=""
              name=""
              required
              placeholder="Email"
              style={{ width: 247 }}
            />
          </div>
        </div>
        <div className="info__section">
          <div className="label__section">주소</div>
          <div className="input__section">
            <input
              type="text"
              id=""
              name=""
              required
              placeholder="Address"
              style={{ width: 247 }}
            />
            <Button color="info">
              <div>배송지 변경</div>
            </Button>
          </div>
        </div>
        <div className="info__section">
          <div className="label__section"></div>
          <div className="input__section">
            <input
              type="text"
              id=""
              name=""
              required
              placeholder="Address"
              style={{ width: 378 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
