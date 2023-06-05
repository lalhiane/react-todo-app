import { useRegister } from "../graphql/Mutations";

import { useState } from "react";

function Form() {

    const [firstName, setFirstName] = useState<string>();

    const [lastName, setLastName] = useState<string>();

    const [email, setEmail] = useState<string>();

    const [password, setPassword] = useState<string>();

    const [register, {error}] = useRegister();
    
    const addUser = async () => {

        try {

            const result = await register({

                variables: {

                    input: {
                        
                        firstName,
                        
                        lastName,
                        
                        email,
                        
                        password
                    }

                }

            });

            const token = result.data?.result;

            console.log(token);

            if (error) console.log(error);

        } catch (error) {

            console.log(error);

        }

    }

    return (

        <div>

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

                onClick={addUser}
            
            >Register</button>

        </div>

    )

}

export default Form;