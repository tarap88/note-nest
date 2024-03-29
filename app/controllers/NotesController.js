import { AppState } from "../AppState.js";
import { notesService } from "../services/NotesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";


export class NotesController {
    constructor() {
        console.log('Notes has loaded')
        this.drawNotesList()

    }



    drawNotesList() {
        const nestingNotes = AppState.nestingNotes
        let notesListContent = ''
        nestingNotes.forEach(nestingNote => notesListContent += nestingNote.ListTemplate)
        setHTML('notes-list', notesListContent)
    }


    setActiveNote(notesId) {
        console.log('setting active', notesId);
    }

}