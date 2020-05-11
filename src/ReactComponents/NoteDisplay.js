import React from "react";
import styled from "styled-components";
import {makeStyles} from "@material-ui/core/styles";
import {useSelector} from "react-redux";
import {Avatar} from "@material-ui/core";
import hunter from "./../assets/images/HunterChillah.png"
import {gameImages} from "../assets/images";

const useStyles = makeStyles({
    root: {display: "inline-block"}
});

const NoteAvatar = styled(Avatar)`
    display: inline-block;
`;


const NoteContainer = styled.div`
    width: 500px;
`;


const Notes = () => {
    const notes = useSelector(state => {console.log(state); return state.game.game.notesCollected});
    const classes = useStyles();
    return (
    notes.map((note, index) =>{
        if (note.collected) {
            return (<NoteAvatar className = {classes.root} alt = "Note" src = {gameImages[index]}/>);
        }
        else {
            return null;
        }
    }
    ));

};

const NoteDisplay = () => {

    return (
        <NoteContainer>
            <h2>Notes You Have Discovered</h2>
            <Notes/>
        </NoteContainer>

    )
};

export default NoteDisplay;