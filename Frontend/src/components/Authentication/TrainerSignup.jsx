// import { useContext } from 'react';
// import { AuthContext } from './TrainerAuthContext';
// import { useFormik } from 'formik';
// import '../../assets/styles/Authentication/register.css';
// import { TrainerSignupSchema } from './Schema';
// import Logo from './Logo';
// import Trainer_Signup from './utils/TrainerSignup'

// const onSubmit = async (values, actions) => {
//     try {
//         const url = 'http://127.0.0.1:8000/main/signup/trainer/';
//         console.log(values)
//         const response = await Trainer_Signup(values, url);

//         if (response.success) {
//             console.log('Sign-up successful:', response.message);
//             actions.resetForm();
//             window.location.href = '/home';
//         } else {
//             if (response.email == 'super user with this email already exists.') {
//                 const P = document.querySelector('.invalid-email')
//                 P.setAttribute('id', 'invalid-email')
//             }
//         }
//     } catch (error) {
//         console.error('Error during sign-up:', error);
//     } finally {
//         actions.setSubmitting(false);
//     }
// };

// const TrainerSignup = () => {
//     const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit, setFieldValue } = useFormik({
//         initialValues: {
//             firstname: '',
//             lastname: '',
//             email: '',
//             phone: '',
//             years_of_experience: '',
//             passwd: '',
//             confirmpasswd: '',
//             sign_gender: '',
//             photo: null
//         },
//         validationSchema: TrainerSignupSchema,
//         onSubmit,
//     })
//     const { setWhoLogin } = useContext(AuthContext);

//     const handleFileChange = (event) => {
//         setFieldValue('photo', event.target.files[0]);
//     };

//     const x = () => {
//         const P = document.querySelector('#invalid-email');
//         if (P) {
//             P.removeAttribute('id');
//         }
//     };

//     return (
//         <>
//             <Logo />
//             <div className="trainer-container">
//                 <div className="row"></div>
//                 <div className="col-md-12 cardd signup-form">
//                     <form onSubmit={handleSubmit} className="box">
//                         <h1>Trainer Registration</h1>
//                         <p className="text-muted"> Please enter your data for registration!</p>
//                         <input
//                             type="text"
//                             id='firstname'
//                             placeholder="First Name"
//                             value={values.firstname}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             className={errors.firstname && touched.firstname ? 'input-error' : ""}>
//                         </input>
//                         {errors.firstname && touched.firstname && <p className='error'>{errors.firstname}</p>}
//                         <input
//                             type="text"
//                             id='lastname'
//                             placeholder="Last Name"
//                             value={values.lastname}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             className={errors.lastname && touched.lastname ? 'input-error' : ""}>
//                         </input>
//                         {errors.lastname && touched.lastname && <p className='error'>{errors.lastname}</p>}
//                         <input
//                             type="email"
//                             id='email'
//                             placeholder="Email"
//                             value={values.email}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             className={errors.email && touched.email ? 'input-error' : ""}>
//                         </input>
//                         <p className='invalid-email'

//                         style={{ display: 'none' }}>This email is aleardy used</p>
//                         {errors.email && touched.email && <p className='error'>{errors.email}</p>}
//                         <input
//                             type="text"
//                             id='phone'
//                             placeholder='Phone'
//                             value={values.phone}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             className={errors.phone && touched.phone ? 'input-error' : ""}>
//                         </input>
//                         {errors.phone && touched.phone && <p className='error'>{errors.phone}</p>}
//                         <input
//                         type='0number'
//                         id='years_of_experience'
//                         placeholder='Years of Experience'
//                         value={values.years_of_experience}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         className=''>
//                         </input>
//                         {errors.years_of_experience && touched.years_of_experience && <p className='error'>{errors.years_of_experience}</p>}
//                         <input
//                             type="password"
//                             id='passwd'
//                             placeholder="Password"
//                             value={values.passwd}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             className={errors.passwd && touched.passwd ? 'input-error' : ""}>
//                         </input>
//                         {errors.passwd && touched.passwd && <p className='error'>{errors.passwd}</p>}
//                         <input
//                             type="password"
//                             id='confirmpasswd'
//                             placeholder="Confirm Password"
//                             value={values.confirmpasswd}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             className={errors.confirmpasswd && touched.confirmpasswd ? 'input-error' : ""}>
//                         </input>
//                         {errors.confirmpasswd && touched.confirmpasswd && <p className='error'>{errors.confirmpasswd}</p>}
//                         <select id="sign_gender"
//                             value={values.sign_gender}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             className="">
//                             <option value="">Choose Your Gender</option>
//                             <option value="Male">Male</option>
//                             <option value="Female">Female</option>
//                         </select>
//                         <label className="custom-file-upload">
//                             <input
//                             type="file"
//                             id='photo'
//                             onChange={handleFileChange} />
//                             Your Image
//                         </label>

//                         <input type="submit" disabled={isSubmitting} value="Sign up" href="#"></input>
//                         <div id='login-google'><i className="fa-brands fa-google"></i></div>
//                         <span className='spn'>
//                             Already a member?
//                             <a className="login text-muted" onClick={() => setWhoLogin('trainer-login')}>&nbsp;Login</a>
//                         </span>
//                     </form>
//                 </div>
//             </div>

//         </>
//     );
// }

// export default TrainerSignup;

//Working Version for the signup does not display the name:
// import React, { useContext, useState } from "react";
// import { AuthContext } from "./TrainerAuthContext";
// import { useFormik } from "formik";
// import "../../assets/styles/Authentication/register.css";
// import { TrainerSignupSchema } from "./Schema";
// import Logo from "./Logo";
// import Trainer_Signup from "./utils/TrainerSignup";
// import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome

// const onSubmit = async (values, actions) => {
//   try {
//     const url = "http://127.0.0.1:8000/main/signup/trainer/";
//     console.log(values);
//     const response = await Trainer_Signup(values, url);

//     if (response.success) {
//       console.log("Sign-up successful:", response.message);
//       actions.resetForm();
//       window.location.href = "/home";
//     } else {
//       if (response.email === "super user with this email already exists.") {
//         const P = document.querySelector(".invalid-email");
//         P.setAttribute("id", "invalid-email");
//       }
//     }
//   } catch (error) {
//     console.error("Error during sign-up:", error);
//   } finally {
//     actions.setSubmitting(false);
//   }
// };

// const TrainerSignup = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const {
//     values,
//     errors,
//     touched,
//     isSubmitting,
//     handleChange,
//     handleBlur,
//     handleSubmit,
//     setFieldValue,
//   } = useFormik({
//     initialValues: {
//       firstname: "",
//       lastname: "",
//       email: "",
//       phone: "",
//       years_of_experience: "",
//       passwd: "",
//       confirmpasswd: "",
//       sign_gender: "",
//       photo: null,
//     },
//     validationSchema: TrainerSignupSchema,
//     onSubmit,
//   });

//   const { setWhoLogin } = useContext(AuthContext);

//   const handleFileChange = (event) => {
//     setFieldValue("photo", event.target.files[0]);
//   };

//   const x = () => {
//     const P = document.querySelector("#invalid-email");
//     if (P) {
//       P.removeAttribute("id");
//     }
//   };

//   return (
//     <>
//       <Logo />
//       <div className="trainer-container">
//         <div className="row"></div>
//         <div className="col-md-12 cardd signup-form">
//           <form onSubmit={handleSubmit} className="box">
//             <h1>Trainer Registration</h1>
//             <p className="text-muted">
//               {" "}
//               Please enter your data for registration!
//             </p>
//             <label htmlFor="firstname">First Name:</label>


//             <input
//               type="text"
//               id="firstname"
//               placeholder="First Name"
//               value={values.firstname}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               className={
//                 errors.firstname && touched.firstname ? "input-error" : ""
//               }
//             />
//             {errors.firstname && touched.firstname && (
//               <p className="error">{errors.firstname}</p>
//             )}
//                                     <label htmlFor="lastname">Last Name:</label>

//             <input
//               type="text"
//               id="lastname"
//               placeholder="Last Name"
//               value={values.lastname}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               className={
//                 errors.lastname && touched.lastname ? "input-error" : ""
//               }
//             />
//             {errors.lastname && touched.lastname && (
//               <p className="error">{errors.lastname}</p>
//             )}
//                         <label htmlFor="email">Email:</label>

//             <input
//               type="email"
//               id="email"
//               placeholder="Email"
//               value={values.email}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               className={errors.email && touched.email ? "input-error" : ""}
//             />
//             <p className="invalid-email" style={{ display: "none" }}>
//               This email is already used
//             </p>
//             {errors.email && touched.email && (
//               <p className="error">{errors.email}</p>
//             )}
//                         <label htmlFor="phone">Phone:</label>

//             <input
//               type="text"
//               id="phone"
//               placeholder="Phone"
//               value={values.phone}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               className={errors.phone && touched.phone ? "input-error" : ""}
//             />
//             {errors.phone && touched.phone && (
//               <p className="error">{errors.phone}</p>
//             )}
//                         <label htmlFor="years_of_experience">Experience:</label>

//             <input
//               type="number" 
//               id="years_of_experience"
//               placeholder="Years of Experience"
//               value={values.years_of_experience}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               className=""
//             />
//             {errors.years_of_experience && touched.years_of_experience && (
//               <p className="error">{errors.years_of_experience}</p>
//             )}
//             <div className="password-container">
//               <div
//                 className="password-container"
//                 style={{ position: "relative" }}
//               >
//                             <label htmlFor="passwd">Password:</label>

//                 <input
//                   type={showPassword ? "text" : "password"} 
//                   id="passwd"
//                   placeholder="Password"
//                   value={values.passwd}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={
//                     errors.passwd && touched.passwd ? "input-error" : ""
//                   }
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="btn btn-link toggle-password" 
//                   style={{
//                     position: "absolute",
//                     right: "85px",
//                     top: "72%",
//                     transform: "translateY(-50%)",
//                   }} 
//                 >
//                   {showPassword ? (
//                     <i className="fa-solid fa-eye-slash"></i> 
//                   ) : (
//                     <i className="fa-solid fa-eye"></i> 
//                   )}
//                 </button>
//               </div>
//             </div>
//             {errors.passwd && touched.passwd && (
//               <p className="error">{errors.passwd}</p>
//             )}
//             <div className="password-container">
//               <div
//                 className="password-container"
//                 style={{ position: "relative" }}
//               >
//                                             <label htmlFor="confirmpasswd">Confirm Password:</label>

//                 <input
//                   type={showConfirmPassword ? "text" : "password"} 
//                   id="confirmpasswd"
//                   placeholder="Confirm Password"
//                   value={values.confirmpasswd}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={
//                     errors.confirmpasswd && touched.confirmpasswd
//                       ? "input-error"
//                       : ""
//                   }
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                   className="btn btn-link toggle-password" 
//                   style={{
//                     position: "absolute",
//                     right: "85px",
//                     top: "72%",
//                     transform: "translateY(-50%)",
//                   }} 
//                 >
//                   {showConfirmPassword ? (
//                     <i className="fa-solid fa-eye-slash"></i> 
//                   ) : (
//                     <i className="fa-solid fa-eye"></i> 
//                   )}
//                 </button>
//               </div>
//             </div>
//             {errors.confirmpasswd && touched.confirmpasswd && (
//               <p className="error">{errors.confirmpasswd}</p>
//             )}
                        
//             <label className="custom-file-upload">
//               <input type="file" id="photo" onChange={handleFileChange} />
//               Your Image
//             </label>
//             <label className="custom-file-upload">
//               <input type="file" id="photo" onChange={handleFileChange} />
//               Your Certificate
//             </label>

//             <input
//               type="submit"
//               disabled={isSubmitting}
//               value="Sign up"
//               href="#"
//             />
//             <div id="login-google">
//               <i className="fa-brands fa-google"></i>
//             </div>
//             <span className="spn">
//               Already a member?
//               <a
//                 className="login text-muted"
//                 onClick={() => setWhoLogin("trainer-login")}
//               >
//                 &nbsp;Login
//               </a>
//             </span>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TrainerSignup;


// //new working version:
// import React, { useContext, useState } from 'react';
// import { AuthContext } from './TrainerAuthContext';
// import { useFormik } from 'formik';
// import '../../assets/styles/Authentication/login.css';
// import { loginSchema } from './Schema';
// import Logo from './Logo';
// import login from './utils/Login';
// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
// import handleLoginSuccess from './utils/GoogleLogin';

// const onSubmit = async (values, actions) => {
//     try {
//         const url = 'http://127.0.0.1:8000/main/login/trainer/';
//         const response = await login(values.email, values.password, url);
        
//         console.log('Trainer login response:', response);

//         if (response && response.message === 'Login successful!') {
//             localStorage.setItem('role', response.role);
//             localStorage.setItem('userId', response.trainer.id);
//             localStorage.setItem('token', response.token);
            
//             const firstName = response.trainer.first_name || '';
//             const lastName = response.trainer.last_name || '';
//             const trainerName = `${firstName} ${lastName}`.trim() || response.trainer.email;
            
//             localStorage.setItem('userName', trainerName);
            
//             actions.resetForm();
//             window.location.href = '/home';
//         } else if (response && response.non_field_errors && response.non_field_errors[0] === 'Invalid email or password.') {
//             const P = document.querySelector('.incorrect-credintials');
//             P.setAttribute('id', 'invalid-data');
//         } else {
//             console.log('Login failed', response);
//         }
//     } catch (error) {
//         console.error('An error occurred during login:', error);
//     } finally {
//         actions.setSubmitting(false);
//     }
// };

// const TrainerLogin = () => {
//     const [showPassword, setShowPassword] = useState(false);

//     const x = () => {
//         const P = document.querySelector('#invalid-data');
//         if (P) {
//             P.removeAttribute('id');
//         }
//     };

//     // Formik
//     const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormik({
//         initialValues: {
//             email: '',
//             password: '',
//         },
//         validationSchema: loginSchema,
//         onSubmit,
//     });

//     const { setWhoLogin } = useContext(AuthContext);

//     return (
//         <>
//             <Logo />
//             <div className="trainer-container">
//                 <div className="row"></div>
//                 <div className="col-md-12 cardd">
//                     <form onSubmit={handleSubmit} className="box">
//                         <h1>Trainer Login</h1>
//                         <p className="text-muted">Please enter your login and password!</p>
//                         <label htmlFor="email">Email:</label>

//                         <input
//                             type="text"
//                             id="email"
//                             placeholder="E-mail"
//                             value={values.email}
//                             onChange={(e) => {
//                                 handleChange(e);
//                                 x();
//                             }}
//                             onBlur={handleBlur}
//                             className={errors.email && touched.email ? 'input-error' : ""}
//                         />
//                         {errors.email && touched.email && <p className='error'>{errors.email}</p>}

//                         <div className="password-container" style={{ position: 'relative' }}>
//                         <label htmlFor="password">password:</label>

//                             <input
//                                 type={showPassword ? "text" : "password"} 
//                                 id="password"
//                                 placeholder="Password"
//                                 value={values.password}
//                                 onChange={(e) => {
//                                     handleChange(e);
//                                     x();
//                                 }}
//                                 onBlur={handleBlur}
//                                 className={errors.password && touched.password ? 'input-error' : ""}
//                             />
//                             <button
//                                 type="button"
//                                 onClick={() => setShowPassword(!showPassword)}
//                                 className="btn btn-link toggle-password" 
//                                 style={{ position: 'absolute', right: '85px', top: '72%', transform: 'translateY(-50%)' }} 
//                             >
//                                 {showPassword ? (
//                                     <i className="fa-solid fa-eye-slash"></i> 
//                                 ) : (
//                                     <i className="fa-solid fa-eye"></i> 
//                                 )}
//                             </button>
//                         </div>

//                         <p className='incorrect-credintials' style={{ display: 'none' }}>Incorrect credentials</p>
//                         {errors.password && touched.password && <p className='error'>{errors.password}</p>}
//                         <a className="signup text-muted" href='/reset-password'> Forget password?</a>
//                         <input type="submit" disabled={isSubmitting} value="Login" />

//                         <GoogleOAuthProvider clientId="532738031986-q71s1r33kn8uek3msllhrog28s8bvt8d.apps.googleusercontent.com">
//                             <div id='google-btn'>
//                                 <GoogleLogin
//                                     onSuccess={handleLoginSuccess}
//                                     onError={() => console.log("Login failed")}
//                                 />
//                             </div>
//                         </GoogleOAuthProvider>

//                         <span className='spn'>
//                             New Hero?
//                             <a className="signup text-muted" onClick={() => setWhoLogin('trainer-signup')}> Signup</a>
//                         </span>
//                     </form>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default TrainerLogin;


// import React, { useContext, useState } from "react";
// import { AuthContext } from "./TrainerAuthContext";
// import { useFormik } from "formik";
// import "../../assets/styles/Authentication/register.css";
// import { TrainerSignupSchema } from "./Schema";
// import Logo from "./Logo";
// import Trainer_Signup from "./utils/TrainerSignup";
// import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome

// const onSubmit = async (values, actions) => {
//   try {
//     const url = "http://127.0.0.1:8000/main/signup/trainer/";
//     console.log(values);
//     const response = await Trainer_Signup(values, url);

//     if (response.success) {
//       console.log("Sign-up successful:", response.message);
//       actions.resetForm();
//       window.location.href = "/home";
//     } else {
//       if (response.email === "super user with this email already exists.") {
//         const P = document.querySelector(".invalid-email");
//         P.setAttribute("id", "invalid-email");
//       }
//     }
//   } catch (error) {
//     console.error("Error during sign-up:", error);
//   } finally {
//     actions.setSubmitting(false);
//   }
// };

// const TrainerSignup = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const {
//     values,
//     errors,
//     touched,
//     isSubmitting,
//     handleChange,
//     handleBlur,
//     handleSubmit,
//     setFieldValue,
//   } = useFormik({
//     initialValues: {
//       firstname: "",
//       lastname: "",
//       email: "",
//       phone: "",
//       years_of_experience: "",
//       passwd: "",
//       confirmpasswd: "",
//       sign_gender: "",
//       photo: null,
//     },
//     validationSchema: TrainerSignupSchema,
//     onSubmit,
//   });

//   const { setWhoLogin } = useContext(AuthContext);

//   const handleFileChange = (event) => {
//     setFieldValue("photo", event.target.files[0]);
//   };

//   const x = () => {
//     const P = document.querySelector("#invalid-email");
//     if (P) {
//       P.removeAttribute("id");
//     }
//   };

//   return (
//     <>
//       <Logo />
//       <div className="trainer-container">
//         <div className="row"></div>
//         <div className="col-md-12 cardd signup-form">
//           <form onSubmit={handleSubmit} className="box">
//             <h1>Trainer Registration</h1>
//             <p className="text-muted">
//               {" "}
//               Please enter your data for registration!
//             </p>
//             <label htmlFor="firstname">First Name:</label>


//             <input
//               type="text"
//               id="firstname"
//               placeholder="First Name"
//               value={values.firstname}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               className={
//                 errors.firstname && touched.firstname ? "input-error" : ""
//               }
//             />
//             {errors.firstname && touched.firstname && (
//               <p className="error">{errors.firstname}</p>
//             )}
//                                     <label htmlFor="lastname">Last Name:</label>

//             <input
//               type="text"
//               id="lastname"
//               placeholder="Last Name"
//               value={values.lastname}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               className={
//                 errors.lastname && touched.lastname ? "input-error" : ""
//               }
//             />
//             {errors.lastname && touched.lastname && (
//               <p className="error">{errors.lastname}</p>
//             )}
//                         <label htmlFor="email">Email:</label>

//             <input
//               type="email"
//               id="email"
//               placeholder="Email"
//               value={values.email}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               className={errors.email && touched.email ? "input-error" : ""}
//             />
//             <p className="invalid-email" style={{ display: "none" }}>
//               This email is already used
//             </p>
//             {errors.email && touched.email && (
//               <p className="error">{errors.email}</p>
//             )}
//                         <label htmlFor="phone">Phone:</label>

//             <input
//               type="text"
//               id="phone"
//               placeholder="Phone"
//               value={values.phone}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               className={errors.phone && touched.phone ? "input-error" : ""}
//             />
//             {errors.phone && touched.phone && (
//               <p className="error">{errors.phone}</p>
//             )}
//                         <label htmlFor="years_of_experience">Experience:</label>

//             <input
//               type="number" 
//               id="years_of_experience"
//               placeholder="Years of Experience"
//               value={values.years_of_experience}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               className=""
//             />
//             {errors.years_of_experience && touched.years_of_experience && (
//               <p className="error">{errors.years_of_experience}</p>
//             )}
//             <div className="password-container">
//               <div
//                 className="password-container"
//                 style={{ position: "relative" }}
//               >
//                             <label htmlFor="passwd">Password:</label>

//                 <input
//                   type={showPassword ? "text" : "password"} 
//                   id="passwd"
//                   placeholder="Password"
//                   value={values.passwd}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={
//                     errors.passwd && touched.passwd ? "input-error" : ""
//                   }
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="btn btn-link toggle-password" 
//                   style={{
//                     position: "absolute",
//                     right: "85px",
//                     top: "72%",
//                     transform: "translateY(-50%)",
//                   }} 
//                 >
//                   {showPassword ? (
//                     <i className="fa-solid fa-eye-slash"></i> 
//                   ) : (
//                     <i className="fa-solid fa-eye"></i> 
//                   )}
//                 </button>
//               </div>
//             </div>
//             {errors.passwd && touched.passwd && (
//               <p className="error">{errors.passwd}</p>
//             )}
//             <div className="password-container">
//               <div
//                 className="password-container"
//                 style={{ position: "relative" }}
//               >
//                                             <label htmlFor="confirmpasswd">Confirm Password:</label>

//                 <input
//                   type={showConfirmPassword ? "text" : "password"} 
//                   id="confirmpasswd"
//                   placeholder="Confirm Password"
//                   value={values.confirmpasswd}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={
//                     errors.confirmpasswd && touched.confirmpasswd
//                       ? "input-error"
//                       : ""
//                   }
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                   className="btn btn-link toggle-password" 
//                   style={{
//                     position: "absolute",
//                     right: "85px",
//                     top: "72%",
//                     transform: "translateY(-50%)",
//                   }} 
//                 >
//                   {showConfirmPassword ? (
//                     <i className="fa-solid fa-eye-slash"></i> 
//                   ) : (
//                     <i className="fa-solid fa-eye"></i> 
//                   )}
//                 </button>
//               </div>
//             </div>
//             {errors.confirmpasswd && touched.confirmpasswd && (
//               <p className="error">{errors.confirmpasswd}</p>
//             )}
                        
//             <label className="custom-file-upload">
//               <input type="file" id="photo" onChange={handleFileChange} />
//               Your Image
//             </label>
//             <label className="custom-file-upload">
//               <input type="file" id="photo" onChange={handleFileChange} />
//               Your Certificate
//             </label>

//             <input
//               type="submit"
//               disabled={isSubmitting}
//               value="Sign up"
//               href="#"
//             />
//             <div id="login-google">
//               <i className="fa-brands fa-google"></i>
//             </div>
//             <span className="spn">
//               Already a member?
//               <a
//                 className="login text-muted"
//                 onClick={() => setWhoLogin("trainer-login")}
//               >
//                 &nbsp;Login
//               </a>
//             </span>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TrainerSignup;

import React, { useContext, useState } from "react";
import { AuthContext } from "./TrainerAuthContext";
import { useFormik } from "formik";
import "../../assets/styles/Authentication/register.css";
import { TrainerSignupSchema } from "./Schema";
import Logo from "./Logo";
import Trainer_Signup from "./utils/TrainerSignup";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome
import { ToastContainer, toast } from 'react-toastify'; // Import Toast
import 'react-toastify/dist/ReactToastify.css'; // Import Toast CSS

const onSubmit = async (values, actions) => {
  try {
    const url = "http://127.0.0.1:8000/main/signup/trainer/";
    console.log(values);
    const response = await Trainer_Signup(values, url);

    if (response.success) {
      console.log("Sign-up successful:", response.message);
      actions.resetForm();
      toast.success("Your information is under review!"); // Show success toast
      setTimeout(() => {
        window.location.href = "/home"; // Redirect to home page
      }, 3000);
      //window.location.href = "/home";
    } else {
      if (response.email === "super user with this email already exists.") {
        const P = document.querySelector(".invalid-email");
        P.setAttribute("id", "invalid-email");
      }
    }
  } catch (error) {
    console.error("Error during sign-up:", error);
  } finally {
    actions.setSubmitting(false);
  }
};

const TrainerSignup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      years_of_experience: "",
      passwd: "",
      confirmpasswd: "",
      sign_gender: "",
      photo: null,
    },
    validationSchema: TrainerSignupSchema,
    onSubmit,
  });

  const { setWhoLogin } = useContext(AuthContext);

  const handleFileChange = (event) => {
    setFieldValue("photo", event.target.files[0]);
  };

  const x = () => {
    const P = document.querySelector("#invalid-email");
    if (P) {
      P.removeAttribute("id");
    }
  };

  return (
    <>
      <Logo />
      <div className="trainer-container">
        <div className="row"></div>
        <div className="col-md-12 cardd signup-form">
          <form onSubmit={handleSubmit} className="box">
            <h1>Trainer Registration</h1>
            <p className="text-muted">
              {" "}
              Please enter your data for registration!
            </p>
            <label htmlFor="firstname">First Name:</label>
            <input
              type="text"
              id="firstname"
              placeholder="First Name"
              value={values.firstname}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.firstname && touched.firstname ? "input-error" : ""
              }
            />
            {errors.firstname && touched.firstname && (
              <p className="error">{errors.firstname}</p>
            )}
            <label htmlFor="lastname">Last Name:</label>
            <input
              type="text"
              id="lastname"
              placeholder="Last Name"
              value={values.lastname}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.lastname && touched.lastname ? "input-error" : ""
              }
            />
            {errors.lastname && touched.lastname && (
              <p className="error">{errors.lastname}</p>
            )}
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email && touched.email ? "input-error" : ""}
            />
            <p className="invalid-email" style={{ display: "none" }}>
              This email is already used
            </p>
            {errors.email && touched.email && (
              <p className="error">{errors.email}</p>
            )}
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              placeholder="Phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.phone && touched.phone ? "input-error" : ""}
            />
            {errors.phone && touched.phone && (
              <p className="error">{errors.phone}</p>
            )}
            <label htmlFor="years_of_experience">Experience:</label>
            <input
              type="number"
              id="years_of_experience"
              placeholder="Years of Experience"
              value={values.years_of_experience}
              onChange={handleChange}
              onBlur={handleBlur}
              className=""
            />
            {errors.years_of_experience && touched.years_of_experience && (
              <p className="error">{errors.years_of_experience}</p>
            )}
            <div className="password-container">
              <div
                className="password-container"
                style={{ position: "relative" }}
              >
                <label htmlFor="passwd">Password:</label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="passwd"
                  placeholder="Password"
                  value={values.passwd}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.passwd && touched.passwd ? "input-error" : ""
                  }
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="btn btn-link toggle-password"
                  style={{
                    position: "absolute",
                    right: "85px",
                    top: "72%",
                    transform: "translateY(-50%)",
                  }}
                >
                  {showPassword ? (
                    <i className="fa-solid fa-eye-slash"></i>
                  ) : (
                    <i className="fa-solid fa-eye"></i>
                  )}
                </button>
              </div>
            </div>
            {errors.passwd && touched.passwd && (
              <p className="error">{errors.passwd}</p>
            )}
            <div className="password-container">
              <div
                className="password-container"
                style={{ position: "relative" }}
              >
                <label htmlFor="confirmpasswd">Confirm Password:</label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmpasswd"
                  placeholder="Confirm Password"
                  value={values.confirmpasswd}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.confirmpasswd && touched.confirmpasswd
                      ? "input-error"
                      : ""
                  }
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="btn btn-link toggle-password"
                  style={{
                    position: "absolute",
                    right: "85px",
                    top: "72%",
                    transform: "translateY(-50%)",
                  }}
                >
                  {showConfirmPassword ? (
                    <i className="fa-solid fa-eye-slash"></i>
                  ) : (
                    <i className="fa-solid fa-eye"></i>
                  )}
                </button>
              </div>
            </div>
            {errors.confirmpasswd && touched.confirmpasswd && (
              <p className="error">{errors.confirmpasswd}</p>
            )}
            <label className="custom-file-upload">
              <input type="file" id="photo" onChange={handleFileChange} />
              Your Image
            </label>
            <label className="custom-file-upload">
              <input type="file" id="certificate" onChange={handleFileChange} />
              Your Certificate
            </label>
            <input
              type="submit"
              disabled={isSubmitting}
              value="Sign up"
              href="#"
            />
            <div id="login-google">
              <i className="fa-brands fa-google"></i>
            </div>
            <span className="spn">
              Already a member?
              <a
                className="login text-muted"
                onClick={() => setWhoLogin("trainer-login")}
              >
                &nbsp;Login
              </a>
            </span>
          </form>
        </div>
      </div>
      <ToastContainer /> {/* Add the ToastContainer here */}
    </>
  );
};

export default TrainerSignup;
