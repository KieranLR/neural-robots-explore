import {initialState} from "../initialState";

export default function game(state = initialState, action) {
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case "SET_NOTES": {
            newState.game.notesCollected = action.notes;
            return newState;
        }
        case "SET_NOTE": {
            const notes = newState.game.notesCollected;
            notes[action.note].collected = true;
            localStorage.setItem("notes", JSON.stringify(notes));

            const storedNotes = JSON.parse(localStorage.getItem("notes"));
            storedNotes[action.note] = true;
            localStorage.setItem("notes", JSON.stringify(notes));


            return newState;
        }
        default:
            return newState;
    }
}
