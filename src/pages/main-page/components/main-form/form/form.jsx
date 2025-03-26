import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '@/components/input';
import { Button } from '@/components/button';
import { schema } from '../helpers/schema';
import styles from './form.module.scss';

export const Form = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
    },
  });

  const onSubmit = (data) => {
    console.log('Form submitted: ', data);
    reset({
      name: '',
      phone: '',
      email: '',
    });
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
