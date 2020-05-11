
const val = {
    collected: false
};

let notes;
if (localStorage.getItem("notes") === null) {
    notes = [];
    for (let i = 0; i < 25; i++) {
        notes.push({
            collected: false
        })
    }
} else {
    notes = localStorage.getItem("notes");
}

export const initialState = {
    game: {
        notesCollected: notes,
    }
};
