import { Layout } from "../layout/Layout";
import styled from "styled-components";

//import makeSentence from "../tools/RandomWord";

let x = "";
const clickHandler = () =>{
 }
const ExquisiteCorpses = () => {
    return(
        <div class = "header">
            Exquisite Corpses
            <button onClick={clickHandler}> Generate Corpse </button>
        </div>
    );
}

export default ExquisiteCorpses;