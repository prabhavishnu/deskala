import { getUserId } from "./auth.service";

export const addCandidate = (candidate) => {
  const userId = getUserId();
  return fetch(`${process.env.REACT_APP_API_URL}/add-candidate/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(candidate),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getCandidates = () => {
  const userId = getUserId();
  return fetch(`${process.env.REACT_APP_API_URL}/get-candidates/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteCandidate = (candidateId) => {
  return fetch(
    `${process.env.REACT_APP_API_URL}/delete-candidate/${candidateId}`,
    {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateCandidate = (candidateId, candidate) => {
  return fetch(
    `${process.env.REACT_APP_API_URL}/update-candidate/${candidateId}`,
    {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(candidate),
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
