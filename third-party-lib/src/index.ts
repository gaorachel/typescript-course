import axios from "axios";
import _ from "lodash";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// axios
//   .get<User>("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => {
//     console.log("working");
//     console.log(response.data.company);
//   })
//   .catch((error) => {
//     console.log("Error", error);
//   });

axios
  .get<User[]>("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    console.log("working");
    response.data.forEach(printUser);
    // console.log(response.data[1].company);
  })
  .catch((error) => {
    console.log("Error", error);
  });

function printUser(user: User) {
  console.log(user.name);
  console.log(user.company);
}
