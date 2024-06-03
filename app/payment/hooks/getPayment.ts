import { ENVIRONMENT } from "../../const/global";

type PaymentResponse = {
  data: {
    companyName: string;
    amount: number;
    tipAmount: number;
    currency: string;
    paymentReference: string;
    streetAddress: string;
  };
};

async function getData(clientId: string, reference: string) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  const response = fetch(
    `http://localhost:8080/payment?clientId=${clientId}&reference=${reference}`,
    options
  )
    .then((response) => response.json() as Promise<PaymentResponse>)
    .catch((err) => console.error(err));

  return response;
}

export default async function getPayment(clientId: string, reference: string) {
  const data = await getData(clientId, reference);
  return data;
}
