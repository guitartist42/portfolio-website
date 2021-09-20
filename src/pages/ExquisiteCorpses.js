import { Layout } from "../layout/Layout";
import styled from "styled-components";

//import makeSentence from "../tools/RandomWord";
//experiencing difficulties finding a package to randomly generate parts of speech, have tried 2 each with their own outdated bugs
let x = "";
const clickHandler = () =>{
    x = "hello!";
 }
const ExquisiteCorpses = () => {
    return(
        <>
        <div class = "header">
            Exquisite Corpses
        </div>
        <button onClick={clickHandler}> Generate Corpse </button>
        <div>Result is: {x}</div>
        </>
    );
}

export default ExquisiteCorpses;