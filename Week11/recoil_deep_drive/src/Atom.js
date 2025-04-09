import { atom } from "recoil";

export const notificationAtom = atom({
    key:"notificationAtom ",
    default: 10
})

export const messageAtom = atom({
    key:"messageAtom",
    default: 0
})

export const jobAtom = atom({
    key:"jobAtom",
    default: 14
})

export const networkAtom = atom({
    key:"networkAtom",
    default: 10
})
