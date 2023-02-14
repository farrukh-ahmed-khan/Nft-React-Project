import bcrypt from "bcryptjs/dist/bcrypt"
const Data = {
    users: [
        {
            _id: "62270b496de0ca3f801ac060",
            name: "Iris Guthrie",
            email: "irisguthrie@qualitex.com",
            password: bcrypt.hashSync("1234", 8),
            isAdmin: false,
        },
        {
            _id: "62270b497adecff4c34382e8",
            name: "Riley Goff",
            email: "rileygoff@makingway.com",
            password: bcrypt.hashSync("1234", 8),
            isAdmin: false,
        },
        {
            _id: "62270b49a3e7e612e97b5b37",
            name: "Vera Oconnor",
            email: "veraoconnor@retrotex.com",
            password: bcrypt.hashSync("1234", 8),
            isAdmin: false,
        },
        {
            _id:"62270b49c49abab0ecc961f6",
            name: "Jenkins Hendricks",
            email: "jenkinshendricks@polarax.com",
            password: bcrypt.hashSync("1234", 8),
            isAdmin: false,
        },
        {
            _id:"62270b49811a4aeb66abaa45",
            name: "Evangeline Nash",
            email: "evangelinenash@norali.com",
            password: bcrypt.hashSync("1234", 8),
            isAdmin: false,
        },
        {
            _id:"62270b4993e2edb90493471b",
            name: "Hilda Fuentes",
            email: "hildafuentes@roboid.com",
            password: bcrypt.hashSync("1234", 8),
            isAdmin: false,
        },
        {
            name: "Test",
            email: "test@gmail.com",
            password: bcrypt.hashSync("1234", 8),
            isAdmin: false,
        },
    ],
}
export default Data;