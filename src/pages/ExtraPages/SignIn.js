import React from "react";
import { Card, CardBody, Col, Container, Row, Toast, ToastHeader } from "reactstrap";

//Import Image
import lightLogo from "../../assets/images/Nextgenjob.png";
import darkLogo from "../../assets/images/Nextgenjob.png";
import signInImage from "../../assets/images/auth/sign-in.png";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Form, useForm } from "react-hook-form";


const SignIn = () => {



  const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, userG, loadingG, errorG] = useSignInWithGoogle(auth);
  const { register, handleSubmit, formState: { errors }  } =  useForm ();
  const navigate = useNavigate();

  let signinErrors;



  const onSubmit = async (data) => {
    try {
        await signInWithEmailAndPassword(data.email, data.password);
        console.log(data.email,data.password);
    }
    catch {
        console.error(error);
    }

}


if (user || userG) {
  <Toast> <ToastHeader> USER LOGEDIN </ToastHeader> </Toast>
    return navigate('/myprofile') ; 
 

}
if (error || errorG || errors) {
    signinErrors = <p className='text-xs'>{error?.message || errorG?.message || errors?.message}</p>

}

if (loading || loadingG) {
    return console.log("ads");

};


  return (
    <React.Fragment>
      <div>
        <div className="main-content">
          <div className="page-content">
            <section className="bg-auth">
              <Container>
                <Row className="justify-content-center">
                  <Col xl={10} lg={12}>
                    <Card className="auth-box">
                      <Row className="g-0">
                        <Col lg={6} className="text-center">
                          <CardBody className="p-4">
                            <Link to="/">
                              <img
                                src={lightLogo}
                                alt=""
                                className="logo-light img-fluid w-50"
                              />
                              <img
                                src={darkLogo}
                                alt=""
                                className="logo-dark img-fluid w-50"
                              />
                            </Link>
                            <div className="mt-5">
                              <img
                                src={signInImage}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                          </CardBody>
                        </Col>
                        <Col lg={6}>
                          <CardBody className="auth-content p-5 h-100 text-white">
                            <div className="w-100">
                              <div className="text-center mb-4">
                                <h5>Welcome Back !</h5>
                                <p className="text-white-70">
                                  Sign in to continue to Nextgenjob.
                                </p>
                              </div>
                              <button onClick={() => signInWithGoogle()} className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png" className="img-fluid w-25" alt="ae" /> <span>Login with Google</span>
                    </button>
                              <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
                                <div className="mb-3">
                                  <label
                                    htmlFor="usernameInput"
                                    className="form-label"
                                  >
                                    Email
                                  </label>
                                  < input
                                   name="email" type="email"
                                    className="form-control"
                                    id="usernameInput"
                                    placeholder="Enter your email"
                                    
                                    {...register("email",{ required: true })} 
                                  />
                                </div>
                                <div className="mb-3">
                                  <label
                                    htmlFor="passwordInput"
                                    className="form-label"
                                  >
                                    Password
                                  </label>
                                  <input
                                     {...register("password", { required: true })} name="password" type="password" 
                                    className="form-control"
                                    id="passwordInput"
                                    placeholder="Enter your password"
                                  />
                                </div>
                                <div className="mb-4">
                                  <div className="form-check">
                                    <input 
                                      className="form-check-input"
                                      type="checkbox"
                                      id="flexCheckDefault"
                                    />
                                    <Link
                                      to="/resetpassword"
                                      className="float-end text-white"
                                    >
                                      Forgot Password?
                                    </Link>
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexCheckDefault"
                                    >
                                      Remember me
                                    </label>
                                  </div>
                                </div>
                                <div className="text-center">
                                  <button 
                                    type="submit"
                                    className="btn btn-white btn-hover w-100"
                                  >
                                    Sign In
                                  </button>
                                  {signinErrors}
                                </div>
                              </form>
                              <div className="mt-4 text-center">
                                <p className="mb-0">
                                  Don't have an account ?{" "}
                                  <Link
                                    to="/signup"
                                    className="fw-medium text-white text-decoration-underline"
                                  >
                                    {" "}
                                    Sign Up {}
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignIn;
