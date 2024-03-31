import { generateId } from "../utils/GenerateId.js"

export class Notes {
    constructor(data) {
        this.id = generateId()
        this.title = data.title
        this.color = data.color
        this.body = data.body || ''
        this.createdAt = data.createdAt == undefined ? new Date() : new Date(data.createdAt)
        this.updatedAt = data.updatedAt == undefined ? new Date() : new Date(data.updatedAt)
    }

    get ListTemplate() {
        return `<li onclick="app.NotesController.setActiveNotes('${this.id}')">
        <span>${this.title}</span><span style="color: ${this.color}"> <i class="mdi mdi-circle-double"></i></span>
    </li>`
    }

    get ActiveNotesTemplate() {
        return `<div class="col-md-4 col-12 text-light"> 
        <h1 class="mt-3">${this.title}</h1>
        <p class="my-4"><u>Created at:</u> ${this.CreatedDate}</p>
				<p class="my-4"><u>Updated at:</u> ${this.LastUpdated}</p>
                <div>
                <label for="reportBody">Report Body</label>
                <textarea onblur="app.NotesController.updateReport()" name="body" id="reportBody">${this.body}</textarea>
                </div>
                <div class="text-end">
                  <button onclick="app.NotesController.destroyReport()" type="button">
                    Delete ${this.title} Report
                  </button>
                </div>
         </div>
        `
    }


    get CreatedDate() {
        return this.createdAt.toLocaleDateString() // 3/28/2024
    }

    get CreatedTime() {
        return this.createdAt.toLocaleTimeString() // 12:28:11 PM
    }

    get LastUpdated() {
        return this.updatedAt.toLocaleString() // 3/28/2024, 2:48:19 PM
    }
}