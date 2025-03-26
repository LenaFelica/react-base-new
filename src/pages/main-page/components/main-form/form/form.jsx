import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '@/components/button';
import { Input } from '@/components/input';

import { schema } from '../helpers/schema';

import styles from './form.module.scss';

export const Form = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
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
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            id="name"
            value={watch('name') || ''}
            aria-label="Имя"
            placeholder="Имя"
            error={errors.name?.message}
          />
        )}
      />
      <Controller
        name="phone"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            id="phone"
            value={watch('phone') || ''}
            aria-label="Телефон"
            type="tel"
            placeholder="Телефон"
            error={errors.phone?.message}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            id="email"
            value={watch('email') || ''}
            aria-label="E-mail"
            type="email"
            placeholder="E-mail"
            error={errors.email?.message}
          />
        )}
      />
      <Button additionalClassname={styles.btn} variant="secondary">
        Оформить заявку
      </Button>
    </form>
  );
};
