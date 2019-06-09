export class User {
    username: string
    name: string
    password: number
    role: string
    country: string
    description: string
    constructor(username: string, name: string, password: number, role: string, country: string, description: string){
        this.username = username
        this.name = name
        this.password = password
        this.role = role
        this.country= country
        this.description = description
    }
}
