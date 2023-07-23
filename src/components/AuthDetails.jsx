import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { Stack } from "react-bootstrap";
import { auth } from "../firebase";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("a: ", authUser);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      {authUser ? (
        <Stack direction="horizontal" gap="2" className="mx-4">
          {/* <p style={{ color: "green", my: 20 }}>
            {`Signed in as ${authUser.email}`}{" "}
          </p> */}

          <Button
            onClick={userSignOut}
            sx={{ my: 2, marginLeft: 2, color: "green", display: "block" }}
          >
            Sign out
          </Button>
        </Stack>
      ) : (
        <p style={{ color: "green", flexGrow: 1 }}>Signed out</p>
      )}
    </>
  );
};

export default AuthDetails;
