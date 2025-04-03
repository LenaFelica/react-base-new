import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '@/components/button';
import { Input } from '@/components/input';

import { schema } from '../helpers/schema';

import styles from './form.module.scss';

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    reset();
  };

  return (
    <form
      className={styles.form}
      id="add-form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      autoComplete="off"
    >
      <Input
        register={register('name')}
        id="name"
        aria-label="Имя"
        placeholder="Имя"
        error={errors.name?.message}
      />
      <Input
        register={register('phone')}
        id="phone"
        aria-label="Телефон"
        type="tel"
        placeholder="Телефон"
        error={errors.phone?.message}
      />
      <Input
        register={register('email')}
        id="email"
        aria-label="E-mail"
        type="email"
        placeholder="E-mail"
        error={errors.email?.message}
      />
      <Button additionalClassname={styles.btn} variant="secondary">
        Оформить заявку
      </Button>
    </form>
  );
};
