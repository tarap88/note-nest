import { AppState } from "../AppState.js";
import { Notes } from "../models/Notes.js"
import { loadState, saveState } from "../utils/Store.js";
import { NotesController } from "../controllers/NotesController.js";

class NotesService {

    createNote(notesFormData) {
        const newNote = new Notes(notesFormData)
        console.log('Fancy new report', newNote);
        AppState.nestingNotes.push(newNote)
        console.log('Field reports in appstate', AppState.nestingNotes);
        this.saveNotes()
        this.setActiveNote(newNote.id)
    }

    setActiveNote(notesId) {
        const foundNotes = AppState.nestingNotes.find(notes => notes.id == notesId)
        console.log('found a report', foundNotes);

        foundNotes.updatedAt = new Date()

        this.saveNotes()

        AppState.activeNotes = foundNotes
    }

    updateNotes(newNoteBody) {
        const note = AppState.activeNotes

        note.body = newNoteBody

        console.log('did the active note change?', note);
        console.log('did the correct one in the array change?', AppState.activeNotes);

        // NOTE we updated a piece of data in the array, make sure local storage is also updated!
        this.saveNotes()
    }

    noteCount() {

    }

    destroyNotes() {
        const notesId = AppState.activeNotes.id
        console.log('report id', notesId);

        AppState.activeNotes = null

        const indexOfReportToRemove = AppState.nestingNotes.findIndex(notes => notes.id == notesId)

        // NOTE findIndex returns -1 if your conditional never returns true. -1 still works with splice, so this is a safe way to make sure we don't delete the wrong thing 
        if (indexOfReportToRemove == -1) {
            console.error("Find Index is messed up dawg");
            return
        }

        AppState.nestingNotes.splice(indexOfReportToRemove, 1)

        this.saveNotes()
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