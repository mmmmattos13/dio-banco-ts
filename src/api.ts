const conta = {
    email: 'matheus@teste.com',
    password: '123456',
    name: 'Matheus Motta',
    balance: 2000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})
