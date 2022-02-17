import axios from "axios";

export const getLocation = () => (dispatch) => {
  axios(
    `https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.REACT_APP_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => {
      dispatch({
        type: "GET_LOCATION",
        payload: {
          data: res.data
        },
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
