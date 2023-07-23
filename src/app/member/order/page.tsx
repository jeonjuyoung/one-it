import Image from "next/image";
import "../member.scss";
import MyOrderIcon from "@public/images/myOrder.png";
import ProductsInfo from "./productsInfo";
import OrderPaymentInfo from "./orderPaymentInfo";

/**
 * 주문 결제 페이지
 */

export default function Order() {
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
                <Image src={MyOrderIcon} alt="order" /> 주문 / 결제
            </div>
            <div className='order__section'>
                <OrderPaymentInfo />
                <ProductsInfo />
            </div>
        </div>
    )
}