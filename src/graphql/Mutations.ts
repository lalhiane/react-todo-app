import { gql, useMutation } from "@apollo/client";

export function useRegister() {

  return useMutation<RegisterData, RegisterVariable>(REGISTER_MUTATION);

}

interface RegisterVariable {

  input: RegisterRequest

}

interface RegisterRequest {

  firstName?: string,

  lastName?: string,

  email?: string,

  password?: string

}

interface RegisterData {

  result: AuthenticationResponse

}

interface AuthenticationResponse {

  token?: string

}

export const REGISTER_MUTATION = gql`

    mutation register($input: RegisterRequest!) {

        result: register(input: $input) {

            token

        }

    }

`;
