export function dateTimeToYYYYMMDD(timestamp) {
    const date = new Date(timestamp);
    const dateFormat = date.toLocaleDateString().replace(/(\d+)\/(\d+)\/(\d+)/g, "$3.$2.$1");
    return dateFormat;
}

export function getDateTime() {
    const date = new Date().getTime();
    return date
}