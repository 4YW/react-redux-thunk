export const users = [
    {
        id: 'a',
        username: '1',
        email: '1',
        password: '1',
    },
    {
        id: 'b',
        username: '2',
        email:'2',
        password: '2',
    },
]


export function signIn(username,password) {
    return new Promise((resolve,reject)=>{
        const foundUser = users.find((user)=> user.username=== username && user.password === password)

        setTimeout(() => {
            if(foundUser)
            resolve(foundUser)
            else
            reject('username or pass is invalid')
        }, 3000);
    });
}