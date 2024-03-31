import { AppState } from "../AppState.js";
import { Notes } from "../models/Notes.js"
import { loadState, saveState } from "../utils/Store.js";

class NotesService {

    createNote(notesFormData) {
        const newNote = new Notes(notesFormData)
        console.log('Fancy new report', newNote);
        AppState.nestingNotes.push(newNote)
        console.log('Field reports in appstate', AppState.nestingNotes);
        this.saveNotes()
    }

    setActiveNote(notesId) {
        const foundNotes = AppState.nestingNotes.find(notes => notes.id == notesId)
        console.log('found a report', foundNotes);

        foundNotes.updatedAt = new Date()

        this.saveNotes()

        AppState.activeNotes = foundNotes
    }



    saveNotes() {
        saveState('nestingNotes', AppState.nestingNotes)
    }

    loadNotes() {
        const nestingNotesFromLocalStorage = loadState('nestingNotes', [Notes])
        AppState.nestingNotes = nestingNotesFromLocalStorage
    }


}

export const notesService = new NotesService()