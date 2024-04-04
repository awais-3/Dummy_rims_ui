"use client";
import { useForm } from "react-hook-form";
import { Button, Box, Select, FormLabel } from "@chakra-ui/react";
import GenericInput from "../Common/Inputs/Input";
import {
  parentProcedureFormFields,
  newProcedureFormFields,
  renewalProcedureFormFields,
} from "../../assets/Data";
import FormSubHeder from "../Common/FormSubHeder";
import React, { useEffect } from "react";
function ProcedureForm({ type, isEditing = false, procedure = {} }) {
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();

  const [selectedTemplate, setSelectedTemplate] = React.useState(null);

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

    Object.entries(procedure).map(([sectionName, sectionData]) =>
      Object.entries(sectionData).map(([fieldName, fieldValue]) => {
        setValue(fieldName, fieldValue);
      })
    );
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
                    isEditing && procedure
                      ? procedure[section?.sectionName][field.name]
                      : null
                  }
                />
              ))}
            </div>
          ))}
        </>
      )}

      {type === "New" && (
        <>
          {selectedTemplate ? (
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
                        isEditing && procedure
                          ? procedure[section?.sectionName][field.name]
                          : null
                      }
                    />
                  ))}
                </div>
              ))}
            </>
          ) : (
            <Box mt={4}>
              <FormLabel>Select Template</FormLabel>
              <Select
                placeholder="Select Template"
                onChange={(e) => setSelectedTemplate(e.target.value)}
              >
                <option value="template1">Template 1</option>
                <option value="template2">Template 2</option>
              </Select>
            </Box>
          )}
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
                    isEditing && procedure
                      ? procedure[section?.sectionName][field.name]
                      : null
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
        {isEditing ? "Update" : "Create"}
      </Button>
    </Box>
  );
}

export default ProcedureForm;
