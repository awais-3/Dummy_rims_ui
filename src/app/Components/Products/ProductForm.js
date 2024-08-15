import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Box } from "@chakra-ui/react";

import FormSubHeder from "../Common/FormSubHeder";

import {
  parentProductFormFields,
  newProductFormFields,
} from "../../assets/Data/index";
import GenericInput from "../Common/Inputs/Input";
import { addProduct } from "../../../lib/redux/slice/productSlice";
import { addParentProduct } from "../../../lib/redux/slice/parentProductSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductForm = ({ isEditing = false, product = {}, type, onClose }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    console.log(type);
    if (type === "New") {
      dispatch(addProduct(data));
    } else if (type === "Parent") {
      dispatch(addParentProduct(data));
      console.log(data);
    }
    onClose();
  };

  useEffect(() => {
    console.log(product);
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

      Object.entries(product).map(([sectionName, sectionData]) =>
        Object.entries(sectionData).map(([fieldName, fieldValue]) => {
          setValue(fieldName, fieldValue);
        })
      );

      // fieldsToSet.forEach((fieldName) => {
      //   if (product[fieldName] !== undefined) {
      //     setValue(fieldName, product[fieldName]);
      //   }
      // });
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
                    isEditing && product
                      ? product[section?.sectionName][field.name]
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
                    isEditing && product
                      ? product[section?.sectionName][field.name]
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
};

export default ProductForm;
