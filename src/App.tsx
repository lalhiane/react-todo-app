import { useQuery, gql, useMutation } from "@apollo/client";

import React from "react";

interface RegisterRequest {

  firstName?: string,

  lastName?: string,

  email?: string,

  password?: string

}

interface Result {

  result: AuthenticationResponse

}

interface AuthenticationResponse {

  token: string

}

const REGISTER = gql`

  mutation register($input: RegisterRequest) {
    
    result: register(input: $input) {
    
      token
    
    }
  
  }

`;

function App() {

  const [firstName, setFirstName] = React.useState<string>();

  const [lastName, setLastName] = React.useState<string>();

  const [email, setEmail] = React.useState<string>();

  const [password, setPassword] = React.useState<string>();

  const [register] = useMutation<Result, RegisterRequest>(REGISTER);

  const getToken = async () => {

    try {

      const result = await register({

        variables: {

          firstName: firstName,

          lastName: lastName,

          email: email,

          password: password

        }

      });

      const token = result.data?.result;

      return token;

    } catch (error) {

      console.log(error);

    }

  }

  return (

    <form onSubmit={e => e.preventDefault()}>

      <input
        
        type="text"
        
        placeholder="First Name"
        
        onChange={e => setFirstName(e.target.value)}
      
      />

      <input
        
        type="text"
        
        placeholder="Last Name"

        onChange={e => setLastName(e.target.value)}
      
      />

      <input
        
        type="email"
        
        placeholder="Email"

        onChange={e => setEmail(e.target.value)}
      
      />

      <input
      
        type="password"
        
        placeholder="Password"

        onChange={e => setPassword(e.target.value)}
      
      />

      <button
        
        type="submit"

        onClick={() => console.log(getToken())}
      
      >Register</button>

    </form>

  )

}

export default App
