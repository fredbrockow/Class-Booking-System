import styled from "styled-components";

import { useEffect, useState } from "react";


const ServerTest = () => {

    const [testData, setTestData] = useState(null);
    const [fetched, setFetched] = useState(false);

    useEffect(() => {

        const getTestData = async () => {
            
            await fetch("/server")
            .then(res => res.json())
            .then(data => {
                setTestData (data);
                setFetched(true);
            })
            .catch((error) => console.log("Error", error))
        }
        
        if(fetched === false){
            getTestData();
        }

    }, [fetched]);


    return (
        <Wrapper>
            {testData? testData:"server test: nothing on the horizon ..."}
        </Wrapper>
    );
};

export default ServerTest;

const Wrapper = styled.div``;