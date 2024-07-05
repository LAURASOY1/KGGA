import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import image1 from "./1617153633094.jpeg";
import image2 from "./images.jpeg";


const AddEventPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    category: "",
    date: new Date(),
  });

  const [editIndex, setEditIndex] = useState(null);

  const [scheduledEvents, setScheduledEvents] = useState([
    {
      title: "Women Empowerment Seminar",
      description:
        "Join us for an empowering seminar focusing on women's rights and leadership.",
      image: image1,
      category: "empowerment",
      date: new Date("2024-06-15"),
    },
    {
      title: "Leadership Workshop",
      description:
        "Develop your leadership skills and network with other professionals.",
      image: image2,
      category: "empowerment",
      date: new Date("2024-07-20"),
    },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      date,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({
        ...formData,
        image: reader.result,
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New event added:", formData);

    if (editIndex !== null) {
      // Update the event if we are in edit mode
      const updatedEvents = [...scheduledEvents];
      updatedEvents[editIndex] = formData;
      setScheduledEvents(updatedEvents);
      setEditIndex(null); // Exit edit mode
    } else {
      // Add new event to the list of scheduled events
      setScheduledEvents([...scheduledEvents, formData]);
    }

    setFormData({
      title: "",
      description: "",
      image: "",
      category: "",
      date: new Date(),
    });

    navigate("/events");
    alert("Event successfully scheduled.");
  };

  const handleEditEvent = (index) => {
    const eventToEdit = scheduledEvents[index];
    setFormData(eventToEdit);
    setEditIndex(index);
  };

  const handleDeleteEvent = (index) => {
    const updatedEvents = [...scheduledEvents];
    updatedEvents.splice(index, 1);
    setScheduledEvents(updatedEvents);
    console.log("Event deleted:", index);
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>
          {editIndex !== null ? "Edit Event" : "Add New Event"}
        </h2>
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="title" style={styles.label}>
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="description" style={styles.label}>
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              style={{ ...styles.input, ...styles.textarea }}
              required
            ></textarea>
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="image" style={styles.label}>
              Image:
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="category" style={styles.label}>
              Category:
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              style={styles.input}
              required
            >
              <option value="">Select category</option>
              <option value="empowerment">Unit Information</option>
              <option value="leadership">Adults</option>
              <option value="young-leaders">Young Leaders</option>
              <option value="bravo">Bravo</option>
              <option value="guide-leaders">Guide Leaders</option>
            </select>
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="date" style={styles.label}>
              Date:
            </label>
            <DatePicker
              id="date"
              name="date"
              selected={formData.date}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              style={{ ...styles.input, ...styles.datePicker }}
              required
            />
          </div>
          <div>
            <button type="submit" style={styles.button}>
              {editIndex !== null ? "Update Event" : "Add Event"}
            </button>
          </div>
        </form>
      </div>
      <div style={styles.eventListContainer}>
        <h2 style={styles.heading}>Scheduled Events</h2>
        {scheduledEvents.map((event, index) => (
          <div key={index} style={styles.eventCard}>
            <img src={event.image} alt="Event" style={styles.eventImage} />
            <h3 style={styles.eventTitle}>{event.title}</h3>
            <p style={styles.eventDescription}>{event.description}</p>
            <div style={styles.buttonGroup}>
              <button
                onClick={() => handleEditEvent(index)}
                style={styles.editButton}
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteEvent(index)}
                style={styles.deleteButton}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "30px",
    flexWrap: "wrap", // Allow wrapping for smaller screens
  },
  formContainer: {
    flex: "1",
    marginRight: "15px",
    marginLeft: "5px",
    minWidth: "200px", // Minimum width for the form
  },
  textarea: {
    width: "200%", // Ensure textarea takes up full width
    minHeight: "100px",
    resize: "vertical",
    padding: "5px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxSizing: "border-box",
    marginBottom: "15px",
  },
  eventListContainer: {
    flex: "1",
    marginLeft: "5px",
    minWidth: "200px", // Minimum width for the event list
  },
  heading: {
    fontSize: "18px",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  form: {
    width: "100%",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxSizing: "border-box",
    paddingLeft: "0",
    marginLeft: "0", // Remove left margin
  },
  // textarea: {
  //   minHeight: "100px",
  //   resize: "vertical",
  // },
  datePicker: {
    padding: "10px",
  },
  button: {
    background: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  eventCard: {
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "20px",
    marginBottom: "20px",
  },
  eventImage: {
    width: "400px",
    height: "150px",
    marginBottom: "10px",
    borderRadius: "5px",
  },
  eventTitle: {
    fontSize: "16px",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  eventDescription: {
    fontSize: "14px",
    marginBottom: "10px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
  },
  editButton: {
    background: "#28a745",
    color: "#fff",
    padding: "5px 10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "10px",
  },
  deleteButton: {
    background: "#dc3545",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default AddEventPage;