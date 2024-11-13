import React, { useState } from "react";
import Request from "./request";
import Users from "./users";
import Projects from "./projectAdmin";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("requests");

  // Function to render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case "requests":
        return <Request />;
      case "users":
        return <Users />;
      case "projects":
        return <Projects />;
      default:
        return <div>Select an option from the sidebar.</div>;
    }
  };

  return (
    <div className="h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md h-full">
        <div className="p-4 text-xl font-bold text-center bg-gray-800 text-white">
          Dashboard
        </div>
        <ul className="menu p-4 overflow-y-auto">
          <li
            className={`my-2 ${activeTab === "requests" ? "bg-gray-200" : ""}`}
            onClick={() => setActiveTab("requests")}
          >
            <a className="text-lg flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
                />
              </svg>
              Requests
            </a>
          </li>
          <li
            className={`my-2 ${activeTab === "users" ? "bg-gray-200" : ""}`}
            onClick={() => setActiveTab("users")}
          >
            <a className="text-lg flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                />
              </svg>
              Users
            </a>
          </li>
          <li
            className={`my-2 ${activeTab === "projects" ? "bg-gray-200" : ""}`}
            onClick={() => setActiveTab("projects")}
          >
            <a className="text-lg flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                />
              </svg>
              Projects
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-8">
        <h1 className="text-3xl font-bold mb-4 capitalize">{activeTab}</h1>
        <div className=" rounded-lg">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Dashboard;
