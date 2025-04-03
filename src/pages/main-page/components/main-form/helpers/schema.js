import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup
    .string()
    .required('Имя обязательно')
    .min(2, 'Минимум 2 символа')
    .matches(/^[а-яА-ЯёЁ\s]+$/, 'Только русские буквы'),
  phone: yup
    .string()
    .required('Телефон обязателен')
    .matches(/^(8|\+7)\d{10}$/, 'Неверный формат телефона'),
  email: yup
    .string()
    .required('E-mail обязателен')
    .matches(/^[a-zA-Z0-9._%+-]{2,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Неверный формат email'),
});
