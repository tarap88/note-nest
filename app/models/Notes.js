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
        return `<div onclick="app.NotesController.setActiveNote('${this.id}')" class="col-12 selectable" role="button">
        <div class="d-flex gap-4">
          <p>${this.title}</p>
          <p>${this.createdAt}</p>
        </div>
      </div>
      `
    }
}