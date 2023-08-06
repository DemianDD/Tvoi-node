function formatDate(date) {
    const options = { day: "numeric", month: "long", timeZone: "Europe/Kiev" };
    return date.toLocaleDateString("uk-UA", options);
}

module.exports = formatDate;