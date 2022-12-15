import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="anytypeofvalidmail@gmail.com">
        <Button>Contact: ozi.ozii.nnam@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
