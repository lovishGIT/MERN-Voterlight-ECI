import VoteToday from "../Components/Home/voteToday";
import Steps from "../Components/Home/steps";
import Layout from "../Layout/layout";
import Hero from "../Components/Home/hero";
import Information from "../Components/Home/information";
// import { useEffect, useState } from "react";

function Home() {
    // const [users, setUsers]= useState();
    // useEffect(() => {
    //     async function getData() {
    //         try {
    //             const response = await fetch('http://localhost:4000/api/vote', {
    //                 method: "GET",
    //                 cache: "no-cache",
    //             });

    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! status: ${response.status}`);
    //             }

    //             const contentType = response.headers.get("content-type");
    //             if (contentType && contentType.indexOf("application/json") !== -1) {
    //                 const data = await response.json();
    //                 console.log(data);
    //                 setUsers(data);
    //             } else {
    //                 const text = await response.text();
    //                 console.error("Expected JSON, but got:", text);
    //             }
    //         } catch (error) {
    //             console.error("Error fetching the API: ", error);
    //         }
    //     }

    //     getData();
    // }, []);
    return (
        <>
            <Layout>
                <>
                    <Hero />
                    <Steps />
                    <VoteToday />
                    <Information />
                </>
            </Layout>
        </>
    );
}

export default Home;