import { NextResponse } from 'next/server';
import crypto from 'crypto';

const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET;

function verifySignature(orderId, paymentId, signature) {
  const body = `${orderId}|${paymentId}`;
  const expected = crypto
    .createHmac('sha256', RAZORPAY_KEY_SECRET)
    .update(body)
    .digest('hex');
  return expected === signature;
}

export async function POST(request) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      await request.json();
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { error: 'Missing payment details' },
        { status: 400 }
      );
    }
    if (!RAZORPAY_KEY_SECRET) {
      return NextResponse.json(
        { error: 'Razorpay not configured' },
        { status: 503 }
      );
    }
    const valid = verifySignature(
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature
    );
    if (!valid) {
      return NextResponse.json(
        { error: 'Payment verification failed' },
        { status: 400 }
      );
    }
    return NextResponse.json({
      success: true,
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
    });
  } catch (err) {
    console.error('Razorpay verify error:', err);
    return NextResponse.json(
      { error: 'Verification failed' },
      { status: 500 }
    );
  }
}
