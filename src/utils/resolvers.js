import { DateTime } from "luxon";

export const resolveValue = (key, value) => {
    switch (key) {
        case 'name':
            return `${value.title} ${value.first} ${value.last}`;
        case 'gender':
            return value
        case 'email':
            return value
        case 'location':
            return value.country
        case "dob":
            return DateTime.fromISO(value.date)
                .toLocaleString(
                    DateTime.DATETIME_SHORT,
                )
        default:
            return ''
    }
}

export const resolveCoordinates = (coordinates) => {
    return [parseInt(coordinates.latitude), parseInt(coordinates.longitude)]
}