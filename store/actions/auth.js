export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";

export const signup = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCWINQCT4xBxegVtVwqVTGX8lZkgP7nHuE",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );

    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.error.message;
      let message = "Something went wrong!";

      if (errorId === "EMAIL_EXISTS") {
        message =
          "This e-mail address has already been registered. Try a different email address to register.";
      }
      throw new Error(message);
    }

    const resData = await response.json();
    //console.log(resData);
    dispatch({ type: SIGNUP, token: resData.idToken, userId: resData.localId });
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCWINQCT4xBxegVtVwqVTGX8lZkgP7nHuE",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          // // email: "stall@gmail.com",
          // // password: "cheeerynne",
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );

    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.error.message;
      let message = "Something went wrong!";

      if (errorId === "EMAIL_NOT_FOUND") {
        message = "Invalid email address, please try again.";
      } else if (errorId === "INVALID_PASSWORD") {
        message = "Incorrect Password, please try again.";
      }
      throw new Error(message);
    }

    const resData = await response.json();
    //console.log(resData);
    dispatch({ type: LOGIN, token: resData.idToken, userId: resData.localId });
  };
};
