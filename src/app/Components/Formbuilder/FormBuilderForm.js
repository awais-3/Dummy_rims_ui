import { useForm } from "react-hook-form";
import {
  Button,
  Box,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";

import FormSubHeder from "../Common/FormSubHeder";

import { formBuilderFields } from "../../assets/Data";
import GenericInput from "../Common/Inputs/Input";

function FormBuilderForm({}) {
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      px={{ base: 2, md: 6, lg: 12 }}
    >
      <FormControl isInvalid={errors["templateName"]} my="4">
        <FormLabel htmlFor="templateName">Template name</FormLabel>
        <Input
          id={`templateName`}
          type="text"
          placeholder="Template name"
          {...register(`templateName`, { required: true })}
        />
        <FormErrorMessage>
          {errors["templateName"]?.message || "This field is required"}
        </FormErrorMessage>
      </FormControl>
      {formBuilderFields.map((section, index) => (
        <div key={index}>
          <FormSubHeder heading={section?.sectionName} />
          {section.fields.map((field) => (
            <GenericInput
              key={field.name}
              label={field.label}
              name={field.name}
              options={field.options || []}
              type={field.type}
              errors={errors}
              setValue={setValue}
              register={register}
              clearErrors={clearErrors}
              isRequired={field.isRequired || false}
              isMulti={field.isMulti || false}
              defaultValue={field?.defaultValue}
            />
          ))}
        </div>
      ))}

      <Button
        colorScheme={"blue"}
        type="submit"
        pos={"absolute"}
        bottom={4}
        right={5}
      >
        Create
      </Button>
    </Box>
  );
}

export default FormBuilderForm;
