import { useEffect } from "react";
import { usePayment } from "../providers/payment.provider";

export const Amount = () => {
  const { paymentAmount, tipAmount } = usePayment();

  return (
    <div className="flex justify-center shadow p-1">
      <div className="stats">
        <div className="stat">
          <div className="stat-title">Total to be paid</div>
          <div className="stat-value">£{paymentAmount}</div>
          <div className="stat-desc">Includes a tip of £{tipAmount}</div>
        </div>
      </div>
    </div>
  );
};
