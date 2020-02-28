const INITIAL_STATE = {
  courses: ["React Native", "Angular", "NodeJS", "BiriBiriBiri"]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_COURSE":
      return { ...state, courses: [...state.courses, action.courses] };
    default:
      return state;
  }
};
