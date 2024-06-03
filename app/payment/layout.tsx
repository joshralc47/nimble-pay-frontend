"use client";
import { PaymentProvider } from "./providers/payment.provider";

export default function PaymentLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <PaymentProvider>
      <section>{children}</section>
    </PaymentProvider>
  );
}
