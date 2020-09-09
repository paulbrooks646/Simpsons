const initialState = {
  info: [],
};

const GET_EPISODES = "GET_EPISODES";

export function getEpisodes(data) {
  return {
    type: GET_EPISODES,
    payload: data,
  };
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_EPISODES:
      return { ...state, info: action.payload };
    default:
      return state;
  }
}
