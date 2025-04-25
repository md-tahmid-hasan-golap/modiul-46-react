import React from "react";

const From = () => {
  const handleForm = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
  };
  return (
    <div>
      <form onSubmit={handleForm}>
        <input type="text" name="name" placeholder="Your Name" />
        <br />

        <input type="email" name="email" placeholder="Your Email" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default From;
