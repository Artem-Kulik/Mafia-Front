import React, { useState } from "react";
import './RegLog.css'

function useInputValue() {
  const [value, setValue] = useState('');

  return {
    bind: {
      value,
      onChange: event => setValue(event.target.value)
    },
    clear: () => setValue(''),
    value: () => value
  }
}

function RegLog() {
  const ulr = "https://localhost:44366/api/";
  const data = { name: useInputValue(''), email: useInputValue(''), password: useInputValue(''), repassword: useInputValue('')};

  function submitHandler(e) {
    e.preventDefault();

    // GET DATA
    // fetch(ulr + "Game")
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log(json.data);
    //   });

    // SEND DATA
    // const dataSend = { Name: data.name.value(), Email: data.email.value(), Password: data.password.value() };
    // console.log(dataSend);
    // fetch(ulr + "Account/register", {
    //   method: 'POST',
    //   body: JSON.stringify(dataSend),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // }).then(response => response.json())
    //   .then(json => console.log("Success added) [" + json.isSuccessful + "]"));

    // GET DATA RESULT
       const dataSend = { Email: data.email.value(), Password: data.password.value() };
      fetch(ulr + "Account/login", {
        method: 'POST',
        body: JSON.stringify(dataSend),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json())
        .then(json => console.log("Logined = [" + json.isSuccessful + "]" + "\nMessage= " + json.Message ));

  }
  return (
    <div className="main">
      <section className="vh-100 b">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black b-r">
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                      <div className="mx-1 mx-md-4">
                        <form onSubmit={submitHandler}>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input {...data.name.bind} type="text" id="form3Example1c" className="form-control" />
                              <label className="form-label">Your Name</label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input {...data.email.bind} type="email" id="form3Example3c" className="form-control" />
                              <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input {...data.password.bind} type="password" id="form3Example4c" className="form-control" />
                              <label className="form-label" htmlFor="form3Example4c">Password</label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input {...data.repassword.bind} type="password" id="form3Example4cd" className="form-control" />
                              <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                            </div>
                          </div>

                          <div className="form-check d-flex justify-content-center mb-5">
                            <input
                              className="form-check-input me-2"
                              type="checkbox"
                              value=""
                              id="form2Example3c"
                            />
                            <label className="form-check-label" htmlFor="form2Example3">
                              I agree all statements in <a href="#!">Terms of service</a>
                            </label>
                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                              <button type="submit" className="btn btn-primary btn-lg">Register</button>
                          </div>
                        </form>

                      </div>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <div className="fon img-fluid" alt="Sample image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default RegLog;