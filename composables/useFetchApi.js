export default (url, options = {}) => {

    const { useAuthToken } = useAuth()

    return $fetch(url, {
        ...options,
        headers: {
            ...options.headers,

        //    Reference  donc use .value pour y accéder 
            Authorization: `Bearer ${useAuthToken().value}`
        }
    });
};