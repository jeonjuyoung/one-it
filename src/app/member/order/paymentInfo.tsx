import { RadioButtonField } from "@/components/atmos";
import { useState } from "react";

export default function PaymentInfo() {
    const [payment, setPayment] = useState('');

    const options = [
        {
            key: 1,
            label: '계좌 이체',
            value: '1',
        },
        {
            key: 2,
            label: '신용/체크카드',
            value: '2',
        },
        {
            key: 3,
            label: '카카오페이',
            value: '3',
        },
        {
            key: 4,
            label: '네이버페이',
            value: '4',
        },
    ];

    const onChangePayment = (e) => {
        console.log(e)
        setPayment(e.target.value)
    }

    return (
        <div>
            <div className="order__title">주문 방법</div>
            <div className="title__underline"></div>
            <div className="radio_button__section">
                <RadioButtonField options={options} value={payment} onChange={onChangePayment} />
            </div>
        </div>
    )
}