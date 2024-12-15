import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["flash"];

  connect() {
    setTimeout(() => {
      this.dismiss(); // Auto-dismiss after 10 seconds
    }, 10000);
  }

  dismiss() {
    this.element.remove(); // Remove the flash message from the DOM
  }
}