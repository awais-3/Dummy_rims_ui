import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Checkbox,
  Textarea,
  Editable,
  EditablePreview,
  EditableInput,
} from "@chakra-ui/react";
import Select from "react-select";

export default function GenericInput({
  label,
  name,
  options,
  type,
  errors,
  setValue,
  register,
  clearErrors,
  isRequired,
  isMulti,
  defaultValue,
}) {
  const handleCheckboxChange = (e) => {
    setValue(name, e.target.checked);
    clearErrors(name);
  };

  return (
    <FormControl isInvalid={errors[name]} mb="2">
      <FormLabel htmlFor={name}>{label}</FormLabel>
      {type === "select" ? (
        <Select
          options={options}
          {...register(name, { required: true })}
          onChange={(selectedOption) => {
            setValue(name, selectedOption?.value);
            clearErrors(name);
          }}
          isMulti={isMulti}
          defaultValue={
            Array.isArray(defaultValue)
              ? defaultValue?.map((item) => {
                  return {
                    label: item,
                    value: item,
                  };
                })
              : null
          }
          defaultInputValue={Array.isArray(defaultValue) ? null : defaultValue}
        />
      ) : type === "uneditable" ? (
        <Input
          id={name}
          type="text"
          readOnly
          {...register(name, { required: true })}
        />
      ) : type === "checkbox" ? (
        <Checkbox
          id={name}
          defaultChecked={defaultValue}
          onChange={handleCheckboxChange}
        >
          {label}
        </Checkbox>
      ) : type === "document" ? (
        <Input
          id={name}
          type="file"
          accept=".pdf,.doc,.docx"
          {...register(name, { required: isRequired })}
        />
      ) : type === "documentText" ? (
        <>
          <Input
            id={name}
            type="file"
            accept=".pdf,.doc,.docx"
            {...register(`${name}_file`, { required: isRequired })}
          />
          <Input
            mt="3"
            id={`${name}_text`}
            type="text"
            placeholder="Enter document text"
            {...register(`${name}_text`, { required: isRequired })}
          />
        </>
      ) : type === "autofilled" ? (
        <Editable
          defaultValue={defaultValue}
          onBlur={(value) => setValue(name, value)}
          border="1px solid"
          borderColor={"gray.200"}
          rounded={"4px"}
        >
          <EditablePreview ml="12px" w="100%" h="32px" />
          <EditableInput />
        </Editable>
      ) : type === "email" ? (
        <Input
          id={name}
          type="email"
          {...register(name, { required: isRequired })}
        />
      ) : type === "number" ? (
        <Input
          id={name}
          type="number"
          {...register(name, { required: isRequired })}
        />
      ) : (
        <Input
          id={name}
          type={type}
          {...register(name, { required: isRequired })}
        />
      )}
      <FormErrorMessage>
        {errors[name]?.message || "This field is required"}
      </FormErrorMessage>
    </FormControl>
  );
}
