import axios from "axios";

const searchPhotos = async (searchTerm) => {
  const response = await axios.get("https://api.unsplash.com/photos", {
    headers: {
      Authorization: "Client-ID asa8hIRihci7NqTtsdlDID1HiyrF2rEyDzretZRNbBE",
    },
    params: { query: searchTerm },
  });

  return response.data;
};

export default searchPhotos;
