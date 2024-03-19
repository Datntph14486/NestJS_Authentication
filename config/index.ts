export const config = {
    database: {
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        type: process.env.DATABASE_TYPE,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        databaseName: process.env.DATABASE_DATABABASE_NAME
    },
    app: {
        port: process.env.PORT
    }
}