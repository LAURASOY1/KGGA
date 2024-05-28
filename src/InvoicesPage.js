import React, { useState } from "react";
import "./InvoicesPage.css"; // Import CSS file for styling

const InvoicesPage = () => {
  // Mock data for demonstration
  const members = [
    {
      name: "Laura",
      email: "laurachepck@gmail.com",
      category: "Young Unit",
      status: "Not Registered",
      active: true,
    },
    {
      name: "Emma",
      email: "emma@gmail.com",
      category: "Young Leader",
      status: "Not Registered",
      active: false,
    },
    {
      name: "Michelle",
      email: "michelle@gmail.com",
      category: "Adult",
      status: "Registered",
      active: true,
    },
    // Add more members as needed
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [unregisteredOnly, setUnregisteredOnly] = useState(false); // Checkbox for Unregistered Only
  const [inactiveOnly, setInactiveOnly] = useState(false); // Checkbox for Inactive Only

  // Filter members based on selected category and conditions
  const filteredMembers = members.filter((member) => {
    return (
      (selectedCategory === "All" || member.category === selectedCategory) &&
      (!unregisteredOnly || member.status === "Not Registered") && // Filtering based on Unregistered Only checkbox
      (!inactiveOnly || !member.active) // Filtering based on Inactive Only checkbox
    );
  });

  // Send invoice function
  const sendInvoices = () => {
    // This is where you would integrate with an email service to send invoices to filteredMembers
    // For example:
    filteredMembers.forEach((member) => {
      const emailText = `Hey ${member.name},\nYou have an invoice.`;
      // Replace with your code to send email
      console.log(emailText);
    });
    console.log("Invoices sent successfully!");
  };

  return (
    <div className="invoices-container">
      <h2 className="title">Send Invoices</h2>
      <form
        className="invoices-form"
        onSubmit={(e) => {
          e.preventDefault();
          sendInvoices();
        }}
      >
        <div className="form-group">
          <label className="label">Select Category:</label>
          <select
            className="select"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Young Unit">Young Unit</option>
            <option value="Young Leader">Young Leader</option>
            <option value="Adult">Adult</option>
          </select>
        </div>
        <div className="form-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              className="checkbox"
              checked={unregisteredOnly}
              onChange={(e) => setUnregisteredOnly(e.target.checked)}
            />
            Unregistered Only
          </label>
        </div>
        <div className="form-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              className="checkbox"
              checked={inactiveOnly}
              onChange={(e) => setInactiveOnly(e.target.checked)}
            />
            Inactive Only
          </label>
        </div>
        <button type="submit" className="submit-button">
          Send Invoices
        </button>
      </form>

      {/* Display filtered members */}
      <div className="filtered-members">
        {filteredMembers.map((member, index) => (
          <div key={index} className="member">
            <p>Name: {member.name}</p>
            <p>Email: {member.email}</p>
            <p>Category: {member.category}</p>
            <p>Status: {member.status}</p>
            <p>Active: {member.active ? "Yes" : "No"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvoicesPage;
