import Image from "next/image";
import "../member.scss";
import MyCartIcon from "@public/images/myPageCart.png";
import Item from "@public/images/my_cart/cart_gVite.png";

export default function Cart() {
  return (
    <div className="container" style={{}}>
      <div
        style={{
          fontWeight: 700,
          fontSize: 20,
          paddingTop: 80,
          paddingBottom: 69,
          textAlign: "center",
        }}
      >
        <Image src={MyCartIcon} alt="cart" /> 장바구니
      </div>
      <div
        style={{
          display: "flex",
          placeContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            borderTop: "1px solid #7E7E7E",
            borderBottom: "1px solid #7E7E7E",
            width: 1124,
          }}
        >
          <div style={{ padding: "0px 19px 23px 0px", paddingTop: 17 }}>
            <Image src={Item} alt="cart item" />
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                paddingTop: 17,
              }}
            >
              <div style={{ fontWeight: 800, paddingBottom: 8 }}>
                디젤 G-VITE
              </div>
              <div style={{ fontSize: 14, paddingBottom: 78 }}>
                G-VITE A063370NDAU Grau
              </div>
              <div style={{ fontSize: 14 }}>수량 : 1개</div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingRight: 24,
              }}
            >
              <div
                style={{
                  fontWeight: 800,
                  paddingRight: 133,
                }}
              >
                123,100
              </div>
              <div
                style={{
                  border: "1px solid #0940B4",
                  borderRadius: "3px",
                  width: "60px",
                  height: "25px",
                  textAlign: "center",
                  color: "#0940B4",
                  fontWeight: 700,
                }}
              >
                삭제
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
