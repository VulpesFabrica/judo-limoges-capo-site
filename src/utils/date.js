export function formatDateFR(dateStr) {
    const date = new Date(dateStr);
    const formatted = date.toLocaleDateString("fr-FR", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric"
    });
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}