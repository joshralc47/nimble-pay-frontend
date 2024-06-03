"use client";
import { useQuery } from "@tanstack/react-query";
import getPayment from "./hooks/getPayment";
import Image from "next/image";
import { Header } from "./components/header";
import { usePayment } from "./providers/payment.provider";
import { useEffect, useState } from "react";
import { Amount } from "./components/amount";

export default function PaymentPage() {
  const { updatePaymentAmount, updateTipAmount } = usePayment();

  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getPayment("123", "456"),
    queryKey: ["payment"],
  });
  useEffect(() => {
    if (data?.data) {
      updatePaymentAmount(data?.data.amount);
      updateTipAmount(data?.data.tipAmount);
    }
  }, [data]);

  const [selectedBank, setBank] = useState<string>("");

  if (isLoading) return <main>Loading...</main>;

  if (isError) return <main>Error</main>;

  if (!data) return <main>No data</main>;

  const paymentData = data?.data;

  let bankButton = <></>;
  if (selectedBank) {
    bankButton = (
      <div className="p-5 w-full">
        <button className="btn bg-brand w-full">Go to {selectedBank}</button>
      </div>
    );
  }

  return (
    <main>
      <Header
        companyName={paymentData?.companyName}
        streetAddress={paymentData?.streetAddress}
      ></Header>
      <Amount></Amount>
      <div>
        <div className="flex flex-row justify-between p-5">
          <div className="font-bold">Select your Bank</div>
          <div className="text-brand font-bold">View All</div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {[
          "HSBC",
          "Barclays",
          "Lloyds",
          "Natwest",
          "Hello hihello",
          "Starling",
          "Orange",
          "Burger",
        ].map((bank) => (
          <div
            key={bank}
            className={`m-1 p-5 pb-2 pt-2 shadow-md flex flex-col md:w-1 w-1/4 h-22 gap-2 items-center cursor-pointer border rounded-md ${
              selectedBank === bank ? " shadow-brand" : ""
            }`}
            onClick={() => setBank(bank)}
          >
            <Image src={`/bank/image.png`} alt="image" width="35" height="35" />
            <div className=" text-xs text-center truncate">{bank}</div>
          </div>
        ))}
      </div>
      {bankButton}
    </main>
  );
}
