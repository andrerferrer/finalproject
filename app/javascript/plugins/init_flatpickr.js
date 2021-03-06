import flatpickr from "flatpickr";
import rangePlugin from "flatpickr/dist/plugins/rangePlugin";

const initFlatpickr = () => {
  const startDate = document.getElementById('search_start_date')
  if (startDate) {
    flatpickr("#search_start_date", {
      // altInput: true,
      plugins: [new rangePlugin({ input: "#search_end_date" })]
    });
    flatpickr(".datepicker", {
      altInput: true
    });
  }
}

export { initFlatpickr };
