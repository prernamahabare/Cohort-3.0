import { atom, selector } from "recoil";

export const notificationAtom = atom({
    key: "notificationAtom ",
    default: 10
})

export const messageAtom = atom({
    key: "messageAtom",
    default: 0
})

export const jobAtom = atom({
    key: "jobAtom",
    default: 14
})

export const networkAtom = atom({
    key: "networkAtom",
    default: 10
})

// export const ItemAtom = atom({
//     key:"ItemAtom",
//     default:({
//         notification: 0,
//         message:10,
//         job:14,
//         network:20
//     })
// })

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: (function ({ get }) {
        const notification = get(notificationAtom)
        const message = get(messageAtom)
        const job = get(jobAtom)
        const network = get(networkAtom)

        return notification + message + job + network;
    })
})
