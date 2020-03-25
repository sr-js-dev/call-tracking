export const getUserToken = () => {
    return(window.localStorage.getItem('pid_token'))
};
export const removeAuth = () => {
    window.localStorage.setItem('pid_token', '')
    window.localStorage.setItem('pid_userName', '')
    window.localStorage.setItem('pid_roles', '')
    return true
};
export const getAuth = () => {
    return(window.localStorage.getItem('pid_token'))
};