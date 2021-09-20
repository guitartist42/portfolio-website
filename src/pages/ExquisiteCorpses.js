import React, {useState} from 'react';
import { Layout } from "../layout/Layout";
import styled from "styled-components";

//import makeSentence from "../tools/RandomWord";
//experiencing difficulties finding a package to randomly generate parts of speech, have tried 2 each with their own outdated bugs

const ExquisiteCorpses = (props) => {
    const [corpse, setCorpse] = useState(props.corpse);
    const clickHandler = () =>{
        setCorpse('hello!');
    };
    return(
        <>
        <div class = "header">
            Exquisite Corpses
        </div>
        <button onClick={clickHandler}> Generate Corpse </button>
        <h2>Result is: {corpse} </h2>
        </>
    );
}

export default ExquisiteCorpses;