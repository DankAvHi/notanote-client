export type User = {
    id: string;
    name: string;
    password: string;
    image: string | null;
    createdAt: Date;
    updatedAt: Date;
};

export type UserPayload = {
    id: string;
    name: string;
}

export type UserAuthDto = {
    name: string
    password: string
}