function service() {
   const getAllUser = () => {
      return fetch('https://reqres.in/api/users?page=2')
            .then(res => res.json())
            .then(data => data.data)
            .catch(e=>console.log(e))
   };

   return {
      getAllUser
   }
};

const userService = service();
export default userService;