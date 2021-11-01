import React, { useState , useEffect } from "react";

export default function Login() {
  const [user, setUser] = useState({
    name:"",
    user_name: "",
    email: "",
   password: "",
   confirm_password: ""
  });

  const [errors, setErrors] = useState({
    name: null,
    user_name: null,
    email: null,
   password: null,
   confirm_password:null
  });

  useEffect(() => {
    if (!errors.name && !errors.user_name&&!errors.email&&!errors.password&&!errors.confirm_password) {
        console.log(user);
      }
  }, [errors])

  const handleInputChange = (e) => {
    console.log(e.target, e.target.value);
    if (e.target.name === "name") {
      setUser({
        ...user,
        name: e.target.value,
      });
      setErrors({
        ...errors,
        name:
          e.target.value.length === 0
            ? "This field is required"
            : e.target.value.length <= 3
            ? "Min Length is 4"
            : e.target.value.length > 10
            ? "Max Length is 10"
            : null,
      });
    }
    e.target.name === "user_name" &&
      setMovie({
        ...user,
        release_year: e.target.value,
      });
  };

  const submitUser = (e) => {
    e.preventDefault();
    setErrors({
      ...errors,
      name:
        user.name.length === 0
          ? "This field is required"
          : user.name.length <= 3
          ? "Min Length is 4"
          : user.name.length > 10
          ? "Max Length is 10"
          : null,
     user_name:
        user.name.length === 0
         ? "This field is required"
         : user.name.length <= 3,
        
    });
  };

  return (
    <div className="container my-4">
      <form onSubmit={(e) => submitUser(e)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
             Name
          </label>
          <input
            name="name"
            value={user.name}
            onChange={(e) => handleInputChange(e)}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="exampleInputEmail1"
          />
          {errors.name && (
            <small className="text-danger">{errors.name}</small>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
             User Name
          </label>
          <input
            name="user_name"
            value={user.user_name}
            onChange={(e) => handleInputChange(e)}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="exampleInputEmail1"
          />
          {errors.user_name && (
            <small className="text-danger">{errors.user_name}</small>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            email
          </label>
          <input
            name="email"
            value={user.email}
            onChange={(e) => handleInputChange(e)}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="exampleInputEmail1"
          />
          {errors.email && (
            <small className="text-danger">{errors.email}</small>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
             password
          </label>
          <input
            name="password"
            value={user.password}
            onChange={(e) => handleInputChange(e)}
            type="password"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="exampleInputEmail1"
          />
          {errors.password && (
            <small className="text-danger">{errors.password}</small>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            confirm_password
          </label>
          <input
            name="confirm_password"
            value={user.confirm_password}
            onChange={(e) => handleInputChange(e)}
            type="password"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="exampleInputEmail1"
          />
          {errors.confirm_password && (
            <small className="text-danger">{errors.confirm_password}</small>
          )}
        </div>
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
