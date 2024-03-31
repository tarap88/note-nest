import { AppState } from "../AppState.js";
import { Notes } from "../models/Notes.js"
import { loadState, saveState } from "../utils/Store.js";

class NotesService {


    setActiveNote(notesId) {
        console.log('set Active Service', notesId);
        const selectedNotes = AppState.nestingNotes.find(notes => notes.id == notesId)
        // console.log('✨', selectedNotes);
        // console.log('appstate active', AppState.activeNotes);
    }




}

export const notesService = new NotesService()