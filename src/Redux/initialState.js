
const val = {
    collected: false
};

const notes = [];

for (let i = 0; i < 25; i++) {
    notes.push({
        collected: false
    })
}


export const initialState = {
    game: {
        notesCollected: notes,
    }
};
