import { createContext, useState, useContext } from "react";

// Define types for context values
interface PaymentContextType {
  paymentAmount: number;
  tipAmount: number;
  updatePaymentAmount: (amount: number) => void;
  updateTipAmount: (amount: number) => void;
}

// Creating a context
const PaymentContext = createContext<PaymentContextType>({
  paymentAmount: 0,
  tipAmount: 0,
  updatePaymentAmount: () => {
    console.warn("No PaymentProvider found");
  },
  updateTipAmount: () => {
    console.warn("No PaymentProvider found");
  },
});

export const usePayment = (): PaymentContextType => useContext(PaymentContext);

export const PaymentProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [paymentAmount, setPaymentAmount] = useState<number>(0);
  const [tipAmount, setTipAmount] = useState<number>(0);

  const updatePaymentAmount = (amount: number) => {
    setPaymentAmount(amount);
  };

  const updateTipAmount = (amount: number) => {
    setTipAmount(amount);
  };

  return (
    <PaymentContext.Provider
      value={{
        paymentAmount,
        tipAmount,
        updatePaymentAmount,
        updateTipAmount,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};
