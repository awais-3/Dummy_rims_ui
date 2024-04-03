import { useForm } from "react-hook-form";
import { Button, Box } from "@chakra-ui/react";

import GenericInput from "../Common/Inputs/Input";
import {
  parentProcedureFormFields,
  newProcedureFormFields,
  renewalProcedureFormFields,
} from "../../assets/Data";
import FormSubHeder from "../Common/FormSubHeder";
import { useEffect } from "react";
function ProcedureForm({ type, isEditing = false, procedure = {} }) {
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    if (isEditing && procedure) {
      let fieldsToSet = [];
      if (type === "Parent") {
        fieldsToSet = parentProcedureFormFields.flatMap((section) =>
          section.fields.map((field) => field.name)
        );
      } else if (type === "New") {
        fieldsToSet = newProcedureFormFields.flatMap((section) =>
          section.fields.map((field) => field.name)
        );
      } else if (type === "Renewal") {
        fieldsToSet = renewalProcedureFormFields.flatMap((section) =>
          section.fields.map((field) => field.name)
        );
      }

      fieldsToSet.forEach((fieldName) => {
        if (procedure[fieldName] !== undefined) {
          setValue(fieldName, procedure[fieldName]);
        }
      });
    }
  }, [isEditing, procedure, type]);

  return (
    <Box
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      px={{ base: 2, md: 6, lg: 12 }}
    >
      {type === "Parent" && (
        <>
          {parentProcedureFormFields.map((section, index) => (
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
                  defaultValue={
                    isEditing && procedure ? procedure[field.name] : null
                  }
                />
              ))}
            </div>
          ))}
        </>
      )}

      {type === "New" && (
        <>
          {newProcedureFormFields.map((section, index) => (
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
                  defaultValue={
                    isEditing && procedure ? procedure[field.name] : null
                  }
                />
              ))}
            </div>
          ))}
        </>
      )}

      {type === "Renewal" && (
        <>
          {renewalProcedureFormFields.map((section, index) => (
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
                  defaultValue={
                    isEditing && procedure ? procedure[field.name] : null
                  }
                />
              ))}
            </div>
          ))}
        </>
      )}

      <Button
        colorScheme={"blue"}
        type="submit"
        pos={"absolute"}
        bottom={4}
        right={5}
      >
        {isEditing ? "Update" : "Next"}
      </Button>
    </Box>
  );
}

export default ProcedureForm;
