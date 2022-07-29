export enum MyPatterns{
    ONLY_CHARACTERS='[a-zA-Z]',
    ONLY_CHARACTERS_SPACES='[a-zA-Z ]',
    ONLY_NUMBERS='[0-9]',
    ONLY_NUMBERS_SPACES='[0-9 ]',
    ONLY_CHARACTERS_NUMBERS='[a-zA-Z0-9]',
    ONLY_CHARACTERS_NUMBERS_SPACES='[a-zA-Z0-9 ]',
    PASSWORD='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])',
}