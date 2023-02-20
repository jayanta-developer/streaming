import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { Button } from "@mui/material";

export default function GoogleSignUp() {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const [login, setLogin] = useState(false);

  const handelLogOut = () => {
    localStorage.removeItem("token");
    setLogin(false);
  };

  const handelCllBackResponses = (res) => {
    localStorage.setItem("token", res.credential);
    setLogin(true);
    console.log(jwt_decode(...res.credential));
    // localStorage.setItem("user", jwt_decode(res.credential));
  };
  // console.log(token, user);
  useEffect(() => {
    /* global google */
    if (window.google) {
      google.accounts.id.initialize({
        client_id:
          "984037794565-ace0j22sphf4k0hicrrrsraiufeo80b7.apps.googleusercontent.com",
        callback: handelCllBackResponses,
      });

      google.accounts.id.renderButton(document.getElementById("signInBtn"), {
        theme: "outline",
        size: "large",
      });
      // google.accounts.id.prompt()
    }
  }, [token, login]);

  return (
    <div>
      {token ? (
        <Button sx={{ backgroundColor: "#F09292" }} onClick={handelLogOut}>
          LogOut
        </Button>
      ) : (
        <div id="signInBtn"></div>
      )}
    </div>
  );
}
