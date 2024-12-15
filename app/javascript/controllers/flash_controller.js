import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["message"];
  static values = { type: String, visible: Boolean };

  connect() {
    this.setFlashType();
    setTimeout(() => {
      this.dismiss();
    }, 3000);
  }

  setFlashType() {
    switch (this.data.get("flashType")) {
      case "notice":
        this.element.classList.add("bg-blue-500");
        break;
      case "success":
        this.element.classList.add("bg-green-500");
        break;
      case "alert":
        this.element.classList.add("bg-red-500");
        break;
      default:
        this.element.classList.add("bg-gray-500");
    }
  }

  dismiss() {
    this.element.classList.add("opacity-0");
    this.element.classList.add("pointer-events-none");
    setTimeout(() => {
      this.element.remove();
    }, 300); // Wait for fade-out transition before removing from DOM
  }
}