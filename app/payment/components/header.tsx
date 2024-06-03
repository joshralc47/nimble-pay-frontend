import Image from "next/image";

export const Header = (
  payment: Readonly<{
    companyName: string;
    streetAddress: string;
  }>
) => (
  <div className="flex p-5 items-center gap-5 shadow">
    <div className="avatar placeholder">
      <div className="bg-neutral text-neutral-content rounded-full w-12">
        <span>SY</span>
      </div>
    </div>
    <div className=" flex flex-col w-3/5">
      <div className="text-sm text-gray-300">You are paying..</div>
      <div className="text-lg font-bold">{payment.companyName}</div>
      <div className="text-sm text-gray-300">{payment.streetAddress}</div>
    </div>
    <div className=" m-auto w-1/5">
      <Image
        src={`/nimble-logo-s.jpg`}
        alt="Nimble logo"
        width="64"
        height="64"
      />
    </div>
  </div>
);
