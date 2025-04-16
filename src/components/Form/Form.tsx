import { Button, FieldWrapper, FormWrapper, Input, Select,  } from './style';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(2, 'Informe um nome válido'),
  area: z.string().nonempty('Selecione uma área de interesse'),
  location: z.string().min(2, 'Informe uma localização válida'),
});

type FormData = z.infer<typeof schema>;

type Props = {
  onSearch: () => void;
};

export function Form({ onSearch }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: FormData) => {
    console.log('Formulário válido:', data);
    onSearch();
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FieldWrapper>
        <Input placeholder="Nome" {...register('name')} />
        <span>{errors.name?.message || '\u00A0'}</span>
      </FieldWrapper>

      <FieldWrapper>
        <Select defaultValue="" {...register('area')}>
          <option value="" disabled>Área de Interesse</option>
          <option value="Tecnologia">Tecnologia</option>
          <option value="Educação">Educação</option>
          <option value="Saúde">Saúde</option>
        </Select>
        <span>{errors.area?.message || '\u00A0'}</span>
      </FieldWrapper>

      <FieldWrapper>
        <Input placeholder="Localização" {...register('location')} />
        <span>{errors.location?.message || '\u00A0'}</span>
      </FieldWrapper>

      <Button type="submit">Buscar Conexões</Button>
    </FormWrapper>
  );
}
