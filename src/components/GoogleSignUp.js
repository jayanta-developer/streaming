import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

export default function GoogleSignUp() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState("");

  const handelLogOut = () => {
    setToken(null);
  };

  const handelCllBackResponses = (res) => {
    const userData = jwt_decode(res.credential);
    setToken(res.credential);
    setUser(userData);
  };
  console.log(token, user);
  useEffect(() => {
    /* global google */
    if (window.google) {
      google.accounts.id.initialize({
        client_id:
          "984037794565-ace0j22sphf4k0hicrrrsraiufeo80b7.apps.googleusercontent.com",
        callback: handelCllBackResponses,
      });

      // google.accounts.id.renderButton(document.getElementById("signInBtn"), {
      //   theme: "outline",
      //   size: "large",
      // });
    }
    google.accounts.id.prompt();
  }, []);

  return <div>{token && <div onClick={handelLogOut}>LogOut</div>}</div>;
}
