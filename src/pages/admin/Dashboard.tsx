import { MapPin } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const stages = [
    { name: "Order Placed", date: "28 Oct • 02:15 PM", status: "Completed" },
    {
      name: "Payment Confirmed",
      date: "28 Oct • 02:17 PM",
      status: "Completed",
    },
    {
      name: "Processing / Packaging",
      date: "29 Oct • 10:10 AM",
      status: "Completed",
    },
    { name: "Shipped", date: "30 Oct • 08:35 PM", status: "Completed" },
    {
      name: "Out for Delivery",
      date: "03 Nov • 09:22 AM",
      status: "In Progress",
    },
    { name: "Delivered", date: "Pending", status: "Waiting" },
  ];
  const statusClass = (s: string) =>
    s === "Completed"
      ? "text-green-600"
      : s === "In Progress"
      ? "text-primary"
      : "text-red-500";
  return (
    <>
      <div className="bg-white rounded-3xl p-6 md:p-8 ">
        <h1 className="text-2xl md:text-3xl font-black text-gray-900">
          Device Order Status
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="rounded-2xl ring-1 ring-black/10 p-5">
            <p className="text-xs border-b border-b-black/10 pb-3 font-semibold tracking-wide text-gray-500">
              ORDER DETAILS
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500 font-bold">Order ID:</p>
                <p className="text-gray-900 text-sm">#SA-4839201</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-bold">Order date</p>
                <p className="text-gray-900 text-sm">28 Oct 2025</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl col-span-2 ring-1 ring-black/10 p-5">
            <p className="text-xs border-b border-b-black/10 pb-3 font-semibold tracking-wide text-gray-500">
              DELIVERY INFORMATION
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-500 font-bold">
                  Delivery address
                </p>
                <p className="text-gray-900 text-sm">
                  Street 5, Model Town, Sialkot
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-bold">
                  Estimated delivery date
                </p>
                <p className="text-gray-900 text-sm">03 Nov – 05 Nov 2025</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-bold">
                  Courier service name
                </p>
                <p className="text-gray-900 text-sm">(TCS / Leopard etc.)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 rounded-2xl ring-1 ring-black/10 p-5 ">
          <div className="flex uppercase items-center  border-b border-b-black/10 justify-between px-5 py-3 pb-5 text-xs font-semibold text-gray-500">
            <span>STATUS STAGE</span>
            <span className="text-center">DATE & TIME</span>
            <span className="text-right">STATUS</span>
          </div>
          <div className="divide-y divide-gray-100">
            {stages.map((s, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-5 py-4"
              >
                <span className="text-gray-900 w-[150px]">{s.name}</span>
                <span className="text-gray-600 text-center">{s.date}</span>
                <span
                  className={`text-right font-medium ${statusClass(s.status)}`}
                >
                  {s.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl ring-1 ring-black/10 p-5 mt-10 flex items-center gap-5">
          <span className="rounded-full w-[45px] h-[45px] bg-surface-light flex items-center justify-center">
            <MapPin size={18} className="text-secondary" />
          </span>
          <p>Last Location Update: Sialkot Distribution Center</p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
