import jwt from 'jsonwebtoken'

const secret = new TextEncoder().encode(
    'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2'
);

export const jwtEncode = async (data: Record<string, any>) => {
    return jwt.sign(data, secret, { algorithm: "HS256" })
};

export const jwtDecode = async (token: string) => {
    return jwt.verify(token, secret)
}
