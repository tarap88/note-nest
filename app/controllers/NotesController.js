import { AppState } from "../AppState.js";
import { notesService } from "../services/NotesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";
import { Pop } from "../utils/Pop.js";


export class NotesController {
    constructor() {
        console.log('Notes has loaded')
        this.drawNotesList()

        AppState.on('nestingNotes', this.drawNotesList)
        AppState.on('activeNotes', this.drawActiveNotes)

        notesService.loadNotes()
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

    createNote() {
        try {
            event.preventDefault()
            console.log('Creating note report');
            const form = event.target
            const notesFormData = getFormData(form)
            console.log('here is your data', notesFormData);
            notesService.createNote(notesFormData)

            // @ts-ignore
            form.reset()
        } catch (error) {
            console.error('[Creating Note]', error)
            window.alert(error.message)
        }

    }


    setActiveNote(notesId) {
        console.log('setting active', notesId);
        notesService.setActiveNote(notesId)
    }
}