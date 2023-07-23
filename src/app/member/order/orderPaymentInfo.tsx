'use client';
import { Button } from '@/components/atmos/Button';
import React, { useRef } from 'react';
import AddressInfo from './addressInfo';
import OrderInfo from './orderInfo';
import PaymentInfo from './paymentInfo';

/**
 * 주문 결제 > 배송 정보, 주문 정보, 주문 방법
 */
export default function OrderPaymentInfo() {
    return (
        <div className="payment__container">
            <div className='order__info__section'>
                <AddressInfo />
                <OrderInfo />
                <PaymentInfo />
            </div>
            <div className='button__section'>
                <Button color='info' size='large'>결제하기</Button>
            </div>
        </div>
    )
}