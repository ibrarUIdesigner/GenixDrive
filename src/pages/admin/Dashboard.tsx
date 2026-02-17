import { MapPin, Phone, Smartphone } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import AlertBanner from "../../components/sharedui/AlertBanner";
import InfoCard from "../../components/sharedui/InfoCard";
import Badge from "../../components/sharedui/Badge";
import SimpleTable from "../../components/sharedui/SimpleTable";
import Button from "../../components/Button";
import SubHeading from "../../components/sharedui/Subheading";

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
    <div className="p-6 md:p-8">
      <div className="space-y-6">
        <AlertBanner
          message="Your last payment failed. Please update your billing info"
          actionLabel="PAY NOW"
          actionTo="/admin/settings"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoCard title="Vehicle Status">
            <div className="flex items-center gap-3">
              <Badge variant="success">Connected</Badge>
            </div>
            <p className="mt-3 text-xs text-gray-500">
              Next Renewal: 15 March 2026
            </p>
          </InfoCard>

          <InfoCard
            title="Current Location"
            right={<MapPin className="w-5 h-5 text-gray-400" />}
          >
            <p className="font-medium text-gray-900">
              Karachi Distribution Center
            </p>
            <p className="mt-1 text-xs text-gray-500">Last update 5 mins ago</p>
          </InfoCard>

          <InfoCard title="Payment Method">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-8 h-6 rounded bg-orange-100 ring-1 ring-orange-200">
                <span className="block w-3 h-3 rounded-full bg-orange-400"></span>
              </span>
              <p className="font-medium tracking-wider">**** **** **** 4242</p>
            </div>
          </InfoCard>
        </div>
      </div>

      <div className="mt-8">
        <SimpleTable
          title="Order & Installation"
          columns={[
            { title: "Status Stage" },
            { title: "Date & Time", align: "center" },
            { title: "Status", align: "right" },
          ]}
          rows={[
            [
              <span key="s1">Payment Confirmed</span>,
              <span key="d1" className="text-gray-700">
                28 Oct • 02:17 PM
              </span>,
              <span key="st1">
                <Badge variant="success">Completed</Badge>
              </span>,
            ],
            [
              <span key="s2">Processing / Packaging</span>,
              <span key="d2" className="text-gray-700">
                29 Oct • 10:10 AM
              </span>,
              <span key="st2">
                <Badge variant="success">Completed</Badge>
              </span>,
            ],
            [
              <span key="s3">Shipped</span>,
              <span key="d3" className="text-gray-700">
                30 Oct • 08:35 PM
              </span>,
              <span key="st3">
                <Badge variant="success">Completed</Badge>
              </span>,
            ],
          ]}
          footer={
            <div className="flex flex-wrap gap-3">
              <Button className="!w-full" variant="secondary" size="md">
                Schedule Installation Now
              </Button>
              <Button
                className="!w-full"
                disabled
                variant="secondary"
                size="md"
              >
                View Order Details
              </Button>
            </div>
          }
        />
      </div>

      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <InfoCard>
            <SubHeading size="xl" weight="bold">
              Active Plan
              <p>GenixDrive Premium</p>
            </SubHeading>
            <div className="mt-2">
              <Badge variant="success">Active</Badge>
            </div>
            <p className="mt-3 text-xs text-gray-500">
              Next Renewal: 15 March 2026
            </p>
          </InfoCard>
          <InfoCard title="Quick Actions">
            <div className="flex flex-wrap gap-3">
              <Link
                to="/support"
                className="inline-flex items-center gap-2 rounded-lg ring-1 ring-black/10 bg-gray-50 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <Phone className="w-4 h-4" />
                Contact Support
              </Link>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg ring-1 ring-black/10 bg-gray-50 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <Smartphone className="w-4 h-4" />
                Open App
              </a>
            </div>
          </InfoCard>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
