export const signin = (user) => {
  console.log(user);
  return fetch(`${process.env.REACT_APP_API_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const authenticate = (jwt, next) => {
  if (typeof window !== undefined) {
    localStorage.setItem("jwt", JSON.stringify(jwt));
    next();
  }
};

export const signout = (next) => {
  if (typeof window !== undefined) localStorage.removeItem("jwt");
  next();
  return fetch(`${process.env.REACT_APP_API_URL}/signout`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const isAuthenticated = () => {
  // check and return jwt token and user Id
  if (typeof window === undefined) {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};

export const signup = (user) => {
  return fetch(`${process.env.REACT_APP_API_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getUserId = () => {
  if (isAuthenticated().user) {
    return isAuthenticated().user._id;
  } else return null;
};

export const validateInputs = (user) => {
  var passwordPattern = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
  );
  if (!passwordPattern.test(user.password))
    return {
      error:
        "Password must contain a lowercase, an uppercase, a numeric and a special character.",
    };
  var phonePattern = new RegExp("^[0-9]{10}$");

  if (!phonePattern.test(user.phone)) {
    return {
      error: "Phone number must be a 10 digit number.",
    };
  }
};
