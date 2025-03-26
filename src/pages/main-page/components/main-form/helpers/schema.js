import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup
    .string()
    .required('Имя обязательно')
    .min(2, 'Минимум 2 символа')
    .matches(/^[а-яА-Я]+$/, 'Только русские буквы'),
  phone: yup
    .string()
    .required('Телефон обязателен')
    .matches(/^(8|\+7)\d{10}$/, 'Неверный формат телефона'),
  email: yup.string().required('E-mail обязателен').email('Неверный формат email'),
});
