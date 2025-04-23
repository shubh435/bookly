import React from "react";

const NewsLetterCompo = () => {
  return (
    <section className="newsletter">
      <form action="">
        <h3>subscribe for latest updates</h3>
        <input
          type="email"
          name="email"
          placeholder="enter your email"
          id=""
          className="box"
        />
        <input type="submit" value="subscribe" className="btn" />
      </form>
    </section>
  );
};

export default NewsLetterCompo;
