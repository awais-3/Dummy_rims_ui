import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Box } from "@chakra-ui/react";

import FormSubHeder from "../Common/FormSubHeder";

import {
  parentProductFormFields,
  newProductFormFields,
} from "../../assets/Data/index";
import GenericInput from "../Common/Inputs/Input";

const ProductForm = ({ isEditing = false, product = {}, type }) => {
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
    if (isEditing && product) {
      let fieldsToSet = [];
      if (type === "Parent") {
        fieldsToSet = parentProductFormFields.flatMap((section) =>
          section.fields.map((field) => field.name)
        );
      } else if (type === "New") {
        fieldsToSet = newProductFormFields.flatMap((section) =>
          section.fields.map((field) => field.name)
        );
      }

      fieldsToSet.forEach((fieldName) => {
        if (product[fieldName] !== undefined) {
          setValue(fieldName, product[fieldName]);
        }
      });
    }
  }, [isEditing, product, type]);

  return (
    <Box
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      px={{ base: 2, md: 6, lg: 12 }}
    >
      {type === "Parent" && (
        <>
          {parentProductFormFields.map((section, index) => (
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
                    isEditing && product ? product[field.name] : null
                  }
                />
              ))}
            </div>
          ))}
        </>
      )}

      {type === "New" && (
        <>
          {newProductFormFields.map((section, index) => (
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
                    isEditing && product ? product[field.name] : null
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
};

export default ProductForm;
