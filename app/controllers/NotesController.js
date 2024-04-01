import { AppState } from "../AppState.js";
import { notesService } from "../services/NotesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";
import { Pop } from "../utils/Pop.js";
import { Notes } from "../models/Notes.js";


export class NotesController {
    constructor() {
        console.log('Notes has loaded')
        this.drawNotesList()
        this.drawNoteCount()

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
            setHTML('activeNote', '')
        }
        else {
            setHTML('activeNote', AppState.activeNotes.ActiveNotesTemplate)
        }

    }

    createNotes() {

        event.preventDefault()
        console.log('Creating note report');
        debugger
        const form = event.target
        const notesFormData = getFormData(form)
        console.log('here is your data', notesFormData);
        notesService.createNote(notesFormData)

        // @ts-ignore
        form.reset()


    }


    setActiveNotes(notesId) {
        console.log('setting active', notesId);
        notesService.setActiveNote(notesId)
    }

    updateNotes() {
        const textAreaElem = event.target
        console.log('blurred text area', textAreaElem);

        // @ts-ignore
        const textContentFromTextArea = textAreaElem.value
        console.log('Text content', textContentFromTextArea);

        notesService.updateNotes(textContentFromTextArea)
    }


    drawNoteCount() {
        notesService.noteCount()
        setHTML('note-count', AppState.nestingNotes.noteCount)
    }


    destroyNotes() {
        const wantsToDestroy = window.confirm("Are you sure you want to delete this note?")

        console.log('do they want to destroy the report', wantsToDestroy);

        if (wantsToDestroy == false) {
            return
        }

        console.log('destroying this report!!!!!');

        notesService.destroyNotes();


    }
}