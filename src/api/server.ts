// let token = "bdf9ac40aafcd20dbf2ceaef39c4170219906aa63b09309f"
let token = "e7f0cae2929203adfac0ee19c5da47dc07370a80fac411a1"


export const server_calls = {
    get: async () => {
        const response = await fetch(`https://marvel-collection-ah.herokuapp.com/api/characters`,{
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'x-access-token' : `Bearer ${token}`
            }
        })

        if(!response.ok){
            console.log('Failed to fetch sT from the server')
        }

        return await response.json()
    },
    create: async (data: any = {}) => {
        const response = await fetch(`https://marvel-collection-ah.herokuapp.com/api/characters`,{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'x-access-token' : `Bearer ${token}`
    },
    body: JSON.stringify(data)
})
if(!response.ok){
    console.log('Failed to Create new Character Data')
}

        return await response.json()

    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://marvel-collection-ah.herokuapp.com/api/characters/${id}`,{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'x-access-token' : `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
    },

    delete: async (id:string) => {
        const response = await fetch(`https://marvel-collection-ah.herokuapp.com/api/characters/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json',
                'x-access-token' : `Bearer ${token}`
            }
        })
    }

}