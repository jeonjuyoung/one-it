export default function OrderInfo() {
    return (
        <div>
            <div className="order__title">주문 정보</div>
            <div className="title__underline"></div>
            <div className="order__info__container">
                <div className='order__info'>
                    <div className='font_14'>G-VITE A063370NDAU Grau</div>
                    <div className='font_14'>130,100</div>
                </div>
                <div className='order__info'>
                    <div className='discount'>
                        할인가
                    </div>
                    <div className='discount'>
                        -7,000
                    </div>
                </div>
                <div className='order__info'>
                    <div className='font_16'>
                        배송비
                    </div>
                    <div className='font_14'>
                        전상품 무료 배송
                    </div>
                </div>
            </div>
            <div className="product__underline"></div>
            <div className='order__info'>
                <div className='total'>총 주문금액</div>
                <div className='total'>123,400</div>
            </div>
        </div>
    )
}