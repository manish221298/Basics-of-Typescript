interface User {
    readonly dbId: number
    name: string
    phone: number
    getData: () => string
    getValue(): number
    getCoupon(userName: string, code: number): number
}

const manish: User = {dbId: 23, name: "manish", phone: 5463656578, getData: () => {
    return "return string type only"
},
    getValue: () => {
        return 65
    },
    getCoupon: (name: "manish", code: 98) => {
        return 98
    }
}

export {}