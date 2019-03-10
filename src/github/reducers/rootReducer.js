import produce from "immer";

const initState = {
  user: null,
  repos: [],
  selectedRepo: null,
  isFetchingUser: false,
  isFetchingRepos: false,
  errorMsg: null,
  lastSuccessfulUserFetch: null,
  lastSuccessfulReposFetch: null
};

export default (state = initState, action) =>
  produce(state, draft => {
      switch (action.type) {

        case 'SET_ERROR_MESSAGE':
          draft.errorMsg = action.message;
          break;

        case 'TOGGLE_FETCHING_USER':
          draft.isFetchingUser = action.flag;
          break;

        case 'SET_USER':
          draft.user = action.user;
          draft.lastSuccessfulUserFetch = new Date ();
          draft.isFetchingUser = false;
          break;

        case 'TOGGLE_FETCHING_REPOS':
          draft.isFetchingRepos = action.flag;
          break;

        case 'SET_REPOS':
          draft.repos = action.repos;
          draft.lastSuccessfulReposFetch = new Date ();
          draft.isFetchingRepos = false;
          break;

        case 'SET_REPO': { // curly braces to retain const within the scope
          const selectedRepo = draft.repos.find( repo => repo.id === action.id );
          if (selectedRepo) draft.selectedRepo = selectedRepo;
          break;
        }

        case 'UNSET_REPO':
          draft.selectedRepo = null;
          break;

        default:
          break;
      }
    }
  )