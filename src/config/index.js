const env = 'dev'

const ENV_CONFIGURATION = {
    dev: {
        api_base: 'https://jsonplaceholder.typicode.com/',
    },
    prod: {
        api_base: 'https://jsonplaceholder.typicode.com/',
    }
};

const APPLICATIONS = {
    API_BASE: ENV_CONFIGURATION[env].api_base
}

export default APPLICATIONS