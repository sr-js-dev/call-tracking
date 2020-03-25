const BASEURL = 'https://app-test.organisatie.freepeat.com';
export default {
    GetToken: "https://app-test.organisatie.freepeat.com/token",
    GetUserData: `${BASEURL}/api/users/GetUsers?excludeActiveUsers=false`,
    PostUserData: `${BASEURL}/api/Users`,
    DeleteUserData: `${BASEURL}/api/users/Delete?id=`,
    GetUserDataById: `${BASEURL}/api/Users/`,
    PostUserUpdate: `${BASEURL}/api/users/Update`,
  }; 