import { AppState } from "../AppState.js";
import { notesService } from "../services/NotesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";


export class NotesController {
    constructor() {
        console.log('Notes has loaded')
        this.drawNotesList()

        AppState.on('nestingNotes', this.drawNotesList)
        AppState.on('activeNotes', this.drawActiveNotes)

        // fieldReportsService.loadFieldReports() --what is  this
    }



    drawNotesList() {
        const nestingNotes = AppState.nestingNotes
        let notesListContent = ''
        nestingNotes.forEach(nestingNote => notesListContent += nestingNote.ListTemplate)
        setHTML('notes-list', notesListContent)
    }

    drawActiveNotes() {
        const report = AppState.activeNotes

        if (report == null) {
            setHTML('activeReport', '')
        }
        else {
            setHTML('activeReport', AppState.activeNotes.ActiveDetailsTemplate)
        }

    }





    setActiveNote(notesId) {
        console.log('setting active', notesId);
        notesService.setActiveNote(notesId)
    }
}