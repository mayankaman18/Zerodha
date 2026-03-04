import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/mayank.png"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Mayank Aman</h4>
          <h6>Fresher Intern</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Mayank is making a full stack project to showcase the abilities of
            himself through this project while helping himself and understanding
            more about the real projects to gain more insights of the real
            world.
          </p>
          <p>
            I have tried to take an overview of original site and tried to
            imprint that with my highest ability.
          </p>
          <p>Playing badminton in his free time.</p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
