import "./App.css";
import { useState } from "react";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [submit, setSubmit] = useState(false);

  const doneSubmit = (data) => {
    console.log(data);
    setSubmit(true);
    setTimeout(() => {
      setSubmit(false);
    }, 3000);
  };

  return (
    <div id="form" onSubmit={handleSubmit(doneSubmit)}>
      {submit ? <div id="success">Registration successful</div> : null}
      <h2>Registration Form</h2>
      <form>
        <label htmlFor="fname">First Name:</label>
        <input
          type="text"
          id="fname"
          name="fname"
          {...register("fname", {
            required: "Enter First Name",
          })}
        />
        <div className="error">{errors.fname?.message}</div>

        <label htmlFor="lname">Last Name:</label>
        <input
          type="text"
          id="lname"
          name="lname"
          {...register("lname", {
            required: "Enter Last name",
          })}
        />
        <div className="error">{errors.lname?.message}</div>

        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          {...register("email", {
            required: "Enter e-mail",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
          })}
        />
        <div className="error">{errors.email?.message}</div>

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          {...register("password", {
            required: "Enter Password",
            minLength: {
              value: 4,
              message: "Passowrd Must be longer than 4 characters",
            },
            maxLength: {
              value: 20,
              message: "Password must be shorter than 20 characters",
            },
          })}
        />
        <div className="error">{errors.password?.message}</div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;

// let initialField = {
//   fname: "",
//   lname: "",
//   email: "",
//   contact: "",
// };

// const [field, setField] = useState(initialField);

// const [error, setError] = useState({
//   fnameError: "",
//   lnameError: "",
//   emailError: "",
//   contactError: "",
// });

// const [validation, setValidation] = useState(false);

// const [submit, setSubmit] = useState(false);

// const handleInput = (e) => {
//   const { id, value } = e.target;
//   setField((prevField) => ({
//     ...prevField,
//     [id]: value,
//   }));
// };

// const handleSubmit = (e) => {
//   e.preventDefault();

//   let errors = {};

//   let fname = field.fname.trim();
//   let lname = field.lname.trim();
//   let email = field.email.trim();
//   let contact = field.contact.trim();

//   if (fname && lname && email && !isNaN(contact)) {
//     setValidation(true);
//     setSubmit(true);
//     setTimeout(() => {
//       setField(initialField);
//       setSubmit(false);
//     }, 3000);
//   } else {
//     if (!fname) {
//       errors.fnameError = "First Name is required";
//     }

//     if (!lname) {
//       errors.lnameError = "Last Name is required";
//     }

//     if (!email) {
//       errors.emailError = "Email is required";
//     } else {
//       let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//       if (!pattern.test(email)) {
//         errors.emailError = "Enter a valid e-mail format";
//       }
//     }

//     if (!contact) {
//       errors.contactError = "contact is required";
//     } else {
//       let pattern = /^\d{10}$/;
//       if (!pattern.test(contact)) {
//         errors.contactError = "Enter a valid contact number";
//       }
//     }
//   }
//   setError(errors);
// };
