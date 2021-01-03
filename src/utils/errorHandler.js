export default function errorHandler(errorNum) {
    switch (errorNum) {
        case '400':
            return `Необходимо ввести название города`;
        case '401':
            return `Неверный токен`;
        case '404':
            return `Город не найден`;
        case 'Failed to fetch':
            return `Ошибка запроса`;
        default:
            return `Неизвестная ошибка`;
      }
}
