import bcrypt from 'bcrypt';

export const hashPassword = async (password) => {
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;  // Return the hashed password correctly
    } catch (error) {
        console.log(error + " in hashPassword");
        throw error;  // It's a good idea to rethrow the error so it can be handled by the caller if needed
    }
}

export const comparePassword = async (password, hashedPassword) => {
    try {
        return await bcrypt.compare(password, hashedPassword);  // Add await to resolve the promise
    } catch (error) {
        console.log(error + " in comparePassword");
        throw error;
    }
}
