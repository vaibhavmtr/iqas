import { NextResponse } from 'next/server';

const RAZORPAY_KEY_ID = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET;

export async function POST(request) {
  try {
    const { amount } = await request.json();
    const amountInPaise = Math.round(Number(amount) * 100);
    if (!amountInPaise || amountInPaise < 100) {
      return NextResponse.json(
        { error: 'Invalid amount' },
        { status: 400 }
      );
    }
    if (!RAZORPAY_KEY_ID || !RAZORPAY_KEY_SECRET) {
      return NextResponse.json(
        {
          error: 'Razorpay not configured. Set NEXT_PUBLIC_RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in .env',
        },
        { status: 503 }
      );
    }
    const Razorpay = (await import('razorpay')).default;
    const razorpay = new Razorpay({
      key_id: RAZORPAY_KEY_ID,
      key_secret: RAZORPAY_KEY_SECRET,
    });
    const order = await razorpay.orders.create({
      amount: amountInPaise,
      currency: 'INR',
      receipt: `iqas-${Date.now()}`,
    });
    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (err) {
    // Razorpay SDK can throw { statusCode, error: { description } } or standard Error
    const razorpayMessage =
      err?.error?.description ?? err?.message ?? 'Failed to create order';
    console.error('Razorpay create order error:', {
      message: razorpayMessage,
      statusCode: err?.statusCode,
      fullError: err,
    });
    return NextResponse.json(
      { error: razorpayMessage },
      { status: 500 }
    );
  }
}
