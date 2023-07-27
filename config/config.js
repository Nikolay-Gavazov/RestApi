const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: 3000,
        dbURL: 'mongodb+srv://Nikeca1991:Zer0mancer@cluster0.f8lwx2u.mongodb.net/',
        origin: []
    },
    production: {
        port: 3000,
        dbURL: 'mongodb+srv://Nikeca1991:Zer0mancer@cluster0.f8lwx2u.mongodb.net/',
        origin: []
    }
};

module.exports = config[env];
