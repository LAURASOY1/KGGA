
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const AddEventPage = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     image: "",
//     category: "",
//     date: new Date(),
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleDateChange = (date) => {
//     setFormData({
//       ...formData,
//       date,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("New event added:", formData);
//     navigate("/events");
//     alert("Event successfully scheduled.");
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>Add New Event</h2>
//       <form style={styles.form} onSubmit={handleSubmit}>
//         <div style={styles.formGroup}>
//           <label htmlFor="title" style={styles.label}>Title:</label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           />
//         </div>
//         <div style={styles.formGroup}>
//           <label htmlFor="description" style={styles.label}>Description:</label>
//           <textarea
//             id="description"
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             style={{ ...styles.input, ...styles.textarea }}
//             required
//           ></textarea>
//         </div>
//         <div style={styles.formGroup}>
//           <label htmlFor="image" style={styles.label}>Image URL:</label>
//           <input
//             type="text"
//             id="image"
//             name="image"
//             value={formData.image}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           />
//         </div>
//         <div style={styles.formGroup}>
//           <label htmlFor="category" style={styles.label}>Category:</label>
//           <select
//             id="category"
//             name="category"
//             value={formData.category}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           >
//             <option value="">Select category</option>
//             <option value="young_unit">Young Unit</option>
//             <option value="young_leaders">Young Leaders</option>
//             <option value="adults">Adults</option>
//           </select>
//         </div>
//         <div style={styles.formGroup}>
//           <label htmlFor="date" style={styles.label}>Date:</label>
//           <DatePicker
//             id="date"
//             name="date"
//             selected={formData.date}
//             onChange={handleDateChange}
//             dateFormat="dd/MM/yyyy"
//             style={{ ...styles.input, ...styles.datePicker }}
//             required
//           />
//         </div>
//         <div>
//           <button type="submit" style={styles.button}>
//             Add Event
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     marginTop: "30px",
//   },
//   heading: {
//     fontSize: "20px",
//     color: "#007bff",
//     marginBottom: "20px",
//   },
//   form: {
//     width: "300px",
//   },
//   formGroup: {
//     marginBottom: "10px",
//   },
//   label: {
//     display: "block",
//     marginBottom: "5px",
//     color: "#333",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     fontSize: "12px",
//     border: "1px solid #ccc",
//     borderRadius: "5px",
//     boxSizing: "border-box",
//   },
//   textarea: {
//     minHeight: "50px",
//   },
//   datePicker: {
//     padding: "7px", // Adjust padding for DatePicker
//   },
//   button: {
//     background: "#007bff",
//     color: "#fff",
//     padding: "10px 20px",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
// };

// export default AddEventPage;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const AddEventPage = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     image: "",
//     category: "",
//     date: new Date(),
//   });

//   // Local state to store scheduled events
//   const [scheduledEvents, setScheduledEvents] = useState([]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleDateChange = (date) => {
//     setFormData({
//       ...formData,
//       date,
//     });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();

//     reader.onloadend = () => {
//       setFormData({
//         ...formData,
//         image: reader.result,
//       });
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("New event added:", formData);

//     // Add new event to the list of scheduled events
//     setScheduledEvents([...scheduledEvents, formData]);

//     navigate("/events");
//     alert("Event successfully scheduled.");
//   };

//   // Function to handle editing an event
//   const handleEditEvent = (index) => {
//     // Implement edit functionality here
//     console.log("Edit event:", scheduledEvents[index]);
//   };

//   // Function to handle deleting an event
//   const handleDeleteEvent = (index) => {
//     // Implement delete functionality here
//     const updatedEvents = [...scheduledEvents];
//     updatedEvents.splice(index, 1);
//     setScheduledEvents(updatedEvents);
//     console.log("Event deleted:", index);
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.formContainer}>
//         <h2 style={styles.heading}>Add New Event</h2>
//         <form style={styles.form} onSubmit={handleSubmit}>
//           {/* Form fields */}
//         </form>
//       </div>
//       <div style={styles.eventListContainer}>
//         <h2 style={styles.heading}>Scheduled Events</h2>
//         {scheduledEvents.map((event, index) => (
//           <div key={index} style={styles.eventCard}>
//             <h3>{event.title}</h3>
//             <p>{event.description}</p>
//             <div>
//               <button onClick={() => handleEditEvent(index)}>Edit</button>
//               <button onClick={() => handleDeleteEvent(index)}>Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "space-between",
//     marginTop: "30px",
//   },
//   formContainer: {
//     width: "calc(50% - 15px)", // 50% width with 15px space in between
//     marginRight: "15px",
//   },
//   eventListContainer: {
//     width: "calc(50% - 15px)", // 50% width with 15px space in between
//     marginLeft: "15px",
//   },
//   heading: {
//     fontSize: "20px",
//     marginBottom: "20px",
//     fontWeight: "bold",
//   },
//   form: {
//     width: "100%",
//   },
//   eventCard: {
//     border: "1px solid #ccc",
//     borderRadius: "5px",
//     padding: "10px",
//     marginBottom: "10px",
//   },
// };

// export default AddEventPage;






// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const AddEventPage = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     image: "",
//     category: "",
//     date: new Date(),
//   });

//   // Local state to store scheduled events
//   const [scheduledEvents, setScheduledEvents] = useState([]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleDateChange = (date) => {
//     setFormData({
//       ...formData,
//       date,
//     });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();

//     reader.onloadend = () => {
//       setFormData({
//         ...formData,
//         image: reader.result,
//       });
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("New event added:", formData);

//     // Add new event to the list of scheduled events
//     setScheduledEvents([...scheduledEvents, formData]);

//     navigate("/events");
//     alert("Event successfully scheduled.");
//   };

//   // Function to handle editing an event
//   const handleEditEvent = (index) => {
//     // Implement edit functionality here
//     console.log("Edit event:", scheduledEvents[index]);
//   };

//   // Function to handle deleting an event
//   const handleDeleteEvent = (index) => {
//     // Implement delete functionality here
//     const updatedEvents = [...scheduledEvents];
//     updatedEvents.splice(index, 1);
//     setScheduledEvents(updatedEvents);
//     console.log("Event deleted:", index);
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.formContainer}>
//         <h2 style={styles.heading}>Add New Event</h2>
//         <form style={styles.form} onSubmit={handleSubmit}>
//           <div style={styles.formGroup}>
//             <label htmlFor="title" style={styles.label}>Title:</label>
//             <input
//               type="text"
//               id="title"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               style={styles.input}
//               required
//             />
//           </div>
//           <div style={styles.formGroup}>
//             <label htmlFor="description" style={styles.label}>Description:</label>
//             <textarea
//               id="description"
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               style={{ ...styles.input, ...styles.textarea }}
//               required
//             ></textarea>
//           </div>
//           <div style={styles.formGroup}>
//             <label htmlFor="image" style={styles.label}>Image:</label>
//             <input
//               type="file"
//               id="image"
//               name="image"
//               accept="image/*"
//               onChange={handleImageChange}
//               style={styles.input}
//               required
//             />
//           </div>
//           <div style={styles.formGroup}>
//             <label htmlFor="category" style={styles.label}>Category:</label>
//             <select
//               id="category"
//               name="category"
//               value={formData.category}
//               onChange={handleChange}
//               style={styles.input}
//               required
//             >
//               <option value="">Select category</option>
//               <option value="young_unit">Young Unit</option>
//               <option value="young_leaders">Young Leaders</option>
//               <option value="adults">Adults</option>
//             </select>
//           </div>
//           <div style={styles.formGroup}>
//             <label htmlFor="date" style={styles.label}>Date:</label>
//             <DatePicker
//               id="date"
//               name="date"
//               selected={formData.date}
//               onChange={handleDateChange}
//               dateFormat="dd/MM/yyyy"
//               style={{ ...styles.input, ...styles.datePicker }}
//               required
//             />
//           </div>
//           <div>
//             <button type="submit" style={styles.button}>
//               Add Event
//             </button>
//           </div>
//         </form>
//       </div>
//       <div style={styles.eventListContainer}>
//         <h2 style={styles.heading}>Scheduled Events</h2>
//         {scheduledEvents.map((event, index) => (
//           <div key={index} style={styles.eventCard}>
//             <h3>{event.title}</h3>
//             <p>{event.description}</p>
//             <div>
//               <button onClick={() => handleEditEvent(index)}>Edit</button>
//               <button onClick={() => handleDeleteEvent(index)}>Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "space-between",
//     marginTop: "30px",
//   },
//   formContainer: {
//     width: "calc(50% - 15px)", // 50% width with 15px space in between
//     marginRight: "15px",
//   },
//   eventListContainer: {
//     width: "calc(50% - 15px)", // 50% width with 15px space in between
//     marginLeft: "15px",
//   },
//   heading: {
//     fontSize: "20px",
//     marginBottom: "20px",
//     fontWeight: "bold",
//   },
//   form: {
//     width: "100%",
//   },
//   formGroup: {
//     marginBottom: "10px",
//   },
//   label: {
//     display: "block",
//     marginBottom: "5px",
//     color: "#333",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     fontSize: "12px",
//     border: "1px solid #ccc",
//     borderRadius: "5px",
//     boxSizing: "border-box",
//   },
//   textarea: {
//     minHeight: "50px",
//   },
//   datePicker: {
//     padding: "7px", // Adjust padding for DatePicker
//   },
//   button: {
//     background: "#007bff",
//     color: "#fff",
//     padding: "10px 20px",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
//   eventCard: {
//     border: "1px solid #ccc",
//     borderRadius: "5px",
//     padding: "10px",
//     marginBottom: "10px",
//   },
// };

// export default AddEventPage;





// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import image1 from "./1617153633094.jpeg";
// import image2 from "./images.jpeg";

// const AddEventPage = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     image: "",
//     category: "",
//     date: new Date(),
//   });

//   // Local state to store scheduled events
//   const [scheduledEvents, setScheduledEvents] = useState([
//     {
//       title: "Women Empowerment Seminar",
//       description:
//         "Join us for an empowering seminar focusing on women's rights and leadership.",
//       image: image1, // Change image path to use imported image
//       category: "empowerment",
//       date: new Date("2024-06-15"),
//     },
//     {
//       title: "Leadership Workshop",
//       description:
//         "Develop your leadership skills and network with other professionals.",
//       image: image2, // Change image path to use imported image
//       category: "empowerment",
//       date: new Date("2024-07-20"),
//     },
//   ]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleDateChange = (date) => {
//     setFormData({
//       ...formData,
//       date,
//     });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();

//     reader.onloadend = () => {
//       setFormData({
//         ...formData,
//         image: reader.result,
//       });
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("New event added:", formData);

//     // Add new event to the list of scheduled events
//     setScheduledEvents([...scheduledEvents, formData]);

//     navigate("/events");
//     alert("Event successfully scheduled.");
//   };

//   // Function to handle editing an event
//   const handleEditEvent = (index) => {
//     // Implement edit functionality here
//     console.log("Edit event:", scheduledEvents[index]);
//   };

//   // Function to handle deleting an event
//   const handleDeleteEvent = (index) => {
//     // Implement delete functionality here
//     const updatedEvents = [...scheduledEvents];
//     updatedEvents.splice(index, 1);
//     setScheduledEvents(updatedEvents);
//     console.log("Event deleted:", index);
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.formContainer}>
//         <h2 style={styles.heading}>Add New Event</h2>
//         <form style={styles.form} onSubmit={handleSubmit}>
//           <div style={styles.formGroup}>
//             <label htmlFor="title" style={styles.label}>
//               Title:
//             </label>
//             <input
//               type="text"
//               id="title"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               style={styles.input}
//               required
//             />
//           </div>
//           <div style={styles.formGroup}>
//             <label htmlFor="description" style={styles.label}>
//               Description:
//             </label>
//             <textarea
//               id="description"
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               style={{ ...styles.input, ...styles.textarea }}
//               required
//             ></textarea>
//           </div>
//           <div style={styles.formGroup}>
//             <label htmlFor="image" style={styles.label}>
//               Image:
//             </label>
//             <input
//               type="file"
//               id="image"
//               name="image"
//               accept="image/*"
//               onChange={handleImageChange}
//               style={styles.input}
//               required
//             />
//           </div>
//           <div style={styles.formGroup}>
//             <label htmlFor="category" style={styles.label}>
//               Category:
//             </label>
//             <select
//               id="category"
//               name="category"
//               value={formData.category}
//               onChange={handleChange}
//               style={styles.input}
//               required
//             >
//               <option value="">Select category</option>
//               <option value="empowerment">Empowerment</option>
//               <option value="leadership">Leadership</option>
//             </select>
//           </div>
//           <div style={styles.formGroup}>
//             <label htmlFor="date" style={styles.label}>
//               Date:
//             </label>
//             <DatePicker
//               id="date"
//               name="date"
//               selected={formData.date}
//               onChange={handleDateChange}
//               dateFormat="dd/MM/yyyy"
//               style={{ ...styles.input, ...styles.datePicker }}
//               required
//             />
//           </div>
//           <div>
//             <button type="submit" style={styles.button}>
//               Add Event
//             </button>
//           </div>
//         </form>
//       </div>
//       <div style={styles.eventListContainer}>
//         <h2 style={styles.heading}>Scheduled Events</h2>
//         {scheduledEvents.map((event, index) => (
//           <div key={index} style={styles.eventCard}>
//             <img
//               src={event.image}
//               alt={event.title}
//               style={styles.eventImage}
//             />
//             <h3 style={styles.eventTitle}>{event.title}</h3>
//             <p style={styles.eventDescription}>{event.description}</p>
//             <div>
//               <button onClick={() => handleEditEvent(index)}>Edit</button>
//               <button onClick={() => handleDeleteEvent(index)}>Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "space-between",
//     marginTop: "30px",
//   },
//   formContainer: {
//     width: "calc(50% - 15px)", // 50% width with 15px space in between
//     marginRight: "15px",
//   },
//   eventListContainer: {
//     width: "calc(50% - 15px)", // 50% width with 15px space in between
//     marginLeft: "15px",
//   },
//   heading: {
//     fontSize: "20px",
//     marginBottom: "20px",
//     fontWeight: "bold",
//   },
//   form: {
//     width: "100%",
//   },
//   formGroup: {
//     marginBottom: "10px",
//   },
//   label: {
//     display: "block",
//     marginBottom: "5px",
//     color: "#333",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     fontSize: "12px",
//     border: "1px solid #ccc",
//     borderRadius: "5px",
//     boxSizing: "border-box",
//   },
//   textarea: {
//     minHeight: "50px",
//   },
//   datePicker: {
//     padding: "7px", // Adjust padding for DatePicker
//   },
//   button: {
//     background: "#007bff",
//     color: "#fff",
//     padding: "10px 20px",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
//   eventCard: {
//     border: "1px solid #ccc",
//     borderRadius: "5px",
//     padding: "10px",
//     marginBottom: "10px",
//   },
//   eventImage: {
//     width: "100%",
//     height: "auto",
//     marginBottom: "10px",
//     borderRadius: "5px",
//   },
//   eventTitle: {
//     fontSize: "16px",
//     marginBottom: "5px",
//     fontWeight: "bold",
//   },
//   eventDescription: {
//     fontSize: "14px",
//     marginBottom: "10px",
//   },
// };

// export default AddEventPage;


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

  // Local state to store scheduled events
  const [scheduledEvents, setScheduledEvents] = useState([
    {
      title: "Women Empowerment Seminar",
      description:
        "Join us for an empowering seminar focusing on women's rights and leadership.",
      image: image1, // Change image path to use imported image
      category: "empowerment",
      date: new Date("2024-06-15"),
    },
    {
      title: "Leadership Workshop",
      description:
        "Develop your leadership skills and network with other professionals.",
      image: image2, // Change image path to use imported image
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

    // Add new event to the list of scheduled events
    setScheduledEvents([...scheduledEvents, formData]);

    navigate("/events");
    alert("Event successfully scheduled.");
  };

  // Function to handle editing an event
  const handleEditEvent = (index) => {
    // Implement edit functionality here
    console.log("Edit event:", scheduledEvents[index]);
  };

  // Function to handle deleting an event
  const handleDeleteEvent = (index) => {
    // Implement delete functionality here
    const updatedEvents = [...scheduledEvents];
    updatedEvents.splice(index, 1);
    setScheduledEvents(updatedEvents);
    console.log("Event deleted:", index);
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Add New Event</h2>
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
              <option value="leadership">
                Adults
                <div>
                  <option value="leadership">Young Leaders</option>
                  <option value="leadership">Bravo</option>
                  <option value="leadership">Trevoil</option>
                  <option value="leadership">Guide Leaders</option>
                </div>
              </option>
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
              Add Event
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
            <div>
              <button onClick={() => handleEditEvent(index)}>Edit</button>
              <button onClick={() => handleDeleteEvent(index)}>Delete</button>
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
  },
  formContainer: {
    width: "calc(50% - 15px)", // 50% width with 15px space in between
    marginRight: "15px",
    marginLeft: "5px",
  },
  eventListContainer: {
    width: "calc(50% - 15px)", // 50% width with 15px space in between
    marginLeft: "15px",
  },
  heading: {
    fontSize: "15px",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  form: {
    width: "100%",
  },
  formGroup: {
    marginBottom: "10px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "12px", // Reduced font size
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxSizing: "border-box",
  },
  textarea: {
    minHeight: "50px",
  },
  datePicker: {
    padding: "7px", // Adjust padding for DatePicker
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
    padding: "10px",
    marginBottom: "10px",
  },
  eventImage: {
    width: "20%", // Adjusted image size
    height: "10%", // Maintain aspect ratio
    marginBottom: "10px",
    borderRadius: "5px",
  },
  eventTitle: {
    fontSize: "10px", // Reduced font size
    marginBottom: "5px",
    fontWeight: "bold",
  },
  eventDescription: {
    fontSize: "8px", // Reduced font size
    marginBottom: "10px",
  },
};

export default AddEventPage;
