import { gql } from "@apollo/client";

export const FINDALLTODOS = gql`

    query {
  
	    findAllTodos { id, title, createdDate, userId }

    }
    
`