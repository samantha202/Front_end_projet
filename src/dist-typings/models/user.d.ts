export default interface User {
    firstname: string;
    lastname: string;
    email: string;
    passwordHash: string;
    role: 'customer' | 'employee' | 'operator';
}