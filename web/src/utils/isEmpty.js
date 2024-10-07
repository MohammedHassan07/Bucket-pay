export default function isEmpty(data) {

    for (let key in data) {

        if (data.hasOwnProperty(key)) {

            if (data[key] === undefined || data[key] === null || data[key] === '') {

                return true
            }
        }
    }

    return false
}