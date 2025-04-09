import { atom, selector } from "recoil";

// export const notificationAtom = atom({
//     key: "notificationAtom ",
//     default: 10
// })

// export const messageAtom = atom({
//     key: "messageAtom",
//     default: 0
// })

// export const jobAtom = atom({
//     key: "jobAtom",
//     default: 14
// })

// export const networkAtom = atom({
//     key: "networkAtom",
//     default: 10
// })

// export const totalNotificationSelector = selector({
//     key: "totalNotificationSelector",
//     get: (function ({ get }) {
//         const notification = get(notificationAtom)
//         const message = get(messageAtom)
//         const job = get(jobAtom)
//         const network = get(networkAtom)

//         return notification + message + job + network;
//     })
// })

// As below name changed bez api that i m using is having that names.
export const ItemAtom = atom({
    key: "ItemAtom",
    default: ({
        userId: 0,
        id: 10,
        title: 14,
        completed: 20
    })
})

export const ItemSelector = selector({
    key: "ItemSelector",
    get: (function ({ get }) {

        const allItem = get(ItemAtom);

        return allItem.userId + allItem.id + allItem.title + allItem.completed
    })
})


