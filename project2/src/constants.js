export const SERVER = {
    AUTH_MISSING: 'auth-missing',
    AUTH_INSUFFICIENT: 'auth-insufficient',
    REQUIRED_USERNAME: 'required-username',
    REQUIRED_MESSAGE: 'required-message',
};

export const CLIENT = {
    NETWORK_ERROR: 'networkError',
    NO_SESSION: 'noSession',
};

export const MESSAGES = {
    [CLIENT.NETWORK_ERROR]: 'Network Error. Please try again',
    [SERVER.AUTH_INSUFFICIENT]: 'Your username/password combination does not match any of the records, please try again.',
    [SERVER.REQUIRED_USERNAME]: 'Please enter a valid (letters and/or numbers) username',
    [SERVER.REQUIRED_MESSAGE]: 'Please enter the message you want to send',
    [CLIENT.NO_SESSION]: 'Please login your account',
    default: 'Something went wrong. Please try again',
};
