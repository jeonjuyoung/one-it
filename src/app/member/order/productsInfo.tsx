import addComma from "@/hooks/addComma";
import Item from "@public/images/my_cart/cart_gVite.png";
import Image from "next/image";

/**
 * 주문 결제 > 상품 정보
 */

interface Products {
    title: string;
    desc: string;
    amout: string;
    price: string;
}

const OrderList = ({ title, desc, amout, price }: Products) => {
    return (
        <>
            <div className='product__list'>
                <div>
                    <Image src={Item} alt='product' width={100} />
                </div>
                <div className='product__desc'>
                    <div className="title">{title}</div>
                    <div className="desc">{desc}</div>
                    <div className="amout">수량 : {amout}개</div>
                    <div className="price">{addComma(+price)}</div>
                </div>
            </div>
            <div className="product__underline"></div>
        </>
    )
}

export default function ProductsInfo() {
    return (
        <div className="product__container">
            <div className="order__title">상품정보</div>
            <div className="title__underline"></div>
            <OrderList title='디젤 G-VITE'
                desc='G-VITE A063370NDAU Grau'
                amout='1'
                price='123100' />
            <OrderList title='디젤 G-VITE'
                desc='G-VITE A063370NDAU Grau'
                amout='1'
                price='123100' />
            <OrderList title='디젤 G-VITE'
                desc='G-VITE A063370NDAU Grau'
                amout='1'
                price='123100' />
            <OrderList title='디젤 G-VITE'
                desc='G-VITE A063370NDAU Grau'
                amout='1'
                price='123100' />
        </div>
    )
}