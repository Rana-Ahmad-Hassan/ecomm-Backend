import bcrypt from "bcrypt"

export const becryptHashPassword = async (password) => {
    const salt = 10;
    const hashPassword = await bcrypt.hash(password, salt)
    return hashPassword
}

export const bcryptComparePassword = async (password, hashPassword) => {
    const comparePassword = await bcrypt.compare(password, hashPassword)
    return comparePassword
}