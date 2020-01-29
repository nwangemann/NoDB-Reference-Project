let id = 2


let pets = [
    {
        id: 0,
        name: 'Roscoe',
        imageURL: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpeopledotcom.files.wordpress.com%2F2017%2F11%2Fdog.jpg&f=1&nofb=1',
        age: 6,
        breed: 'Lab'
    },
    {
        id: 1,
        name: 'Buddy',
        imageURL: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.akc.org%2Fcontent%2Fhero%2Fpuppy-boundaries_header.jpg&f=1&nofb=1',
        age: 2,
        breed: 'Boxer'
    }
]

module.exports = {
    getPets: (req, res) => res.status(200).send(pets),

    createPet: (req, res, next) => {
        const { name, imageURL, age, breed } = req.body

        let newPet = {
            id: id++,
            name,
            imageURL,
            age,
            breed
        }

        pets.push(newPet)
        res.status(200).send(pets)
    },

    deletePet: (req, res) => {
        let { id } = req.params;

        let index = pets.findIndex(pet => {
            return +pet.id === +id
        })
        pets.splice(index, 1)
        res.status(200).send(pets)
    },

    updatePet: (req, res) => {
        let { id } = req.params;
        let { name, imageURL, age, breed } = req.body
        let index = pets.findIndex(pet => {
            return +pet.id === +id
        })

        let updatedPet = {
            id,
            name,
            imageURL,
            age,  
            breed
        }
        
        pets.splice(index, 1, updatedPet)
        res.status(200).send(pets)
    }

}