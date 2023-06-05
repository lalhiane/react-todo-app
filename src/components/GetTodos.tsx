import { useQuery } from "@apollo/client";

import { FINDALLTODOS } from "../graphql/Queries";

import { useEffect } from "react";


function GetTodos() {

    const { data } = useQuery(FINDALLTODOS);

    useEffect(() => {

        console.log(data);

    }, [data]);

    return (

        <div></div>

    )

}

export default GetTodos;