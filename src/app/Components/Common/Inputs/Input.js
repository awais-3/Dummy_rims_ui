"use client";
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
import { useSelector } from "react-redux";

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
  milestoneChangeHandler,
}) {
  const handleCheckboxChange = (e) => {
    setValue(name, e.target.checked);
    clearErrors(name);
  };

  const parentProducts = useSelector((state) => state.parentProduct.products);
  const products = useSelector((state) => state.product.products);
  const milestones = useSelector((state) => state.milestone.milestones);

  if (name === "parentProduct" && type === "select") {
    options =
      parentProducts?.length > 0 &&
      parentProducts.map((product) => {
        return { label: product?.productCode, value: product };
      });
  }

  if (name === "productCode" && type === "select") {
    const allProducts = [...products, ...parentProducts];
    options =
      allProducts?.length > 0 &&
      allProducts.map((product) => {
        return { label: product?.productCode, value: product };
      });
  }

  if (name === "milestonesOverview" && type === "select") {
    options =
      milestones?.length > 0 &&
      milestones.map((milestone) => {
        return {
          label: milestone?.milestoneName,
          value: milestone,
        };
      });
  }

  const selectChangeHandler = (selectedOption) => {
    if (name === "parentProduct") {
      setValue("productName", selectedOption?.value?.productName);
      setValue("productType", selectedOption?.value?.productType);
      setValue("Generic Name", selectedOption?.value?.activeSubstanceEN);
      setValue("activeSubstanceFR", selectedOption?.value?.activeSubstanceFR);
      setValue("ATCCode", selectedOption?.value?.ATCCode);
      setValue(name, selectedOption?.value?.productCode);
    } else if (name === "productCode") {
      setValue("productName", selectedOption?.value?.productName);
      setValue("productType", selectedOption?.value?.productType);
      setValue("activeSubstanceEN", selectedOption?.value?.activeSubstanceEN);
      setValue("activeSubstanceFR", selectedOption?.value?.activeSubstanceFR);
      setValue("ATCCode", selectedOption?.value?.ATCCode);
      setValue(name, selectedOption?.value?.productCode);
    } else if (name === "milestonesOverview") {
      milestoneChangeHandler(selectedOption?.value);
      setValue(name, selectedOption?.value?.milestoneName);
    } else {
      setValue(name, selectedOption?.value);
    }

    clearErrors(name);
  };

  return (
    <FormControl isInvalid={errors[name]} mb="2">
      <FormLabel htmlFor={name}>{label}</FormLabel>
      {type === "select" ? (
        <Select
          options={options || []}
          {...register(name, { required: isRequired })}
          onChange={selectChangeHandler}
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
          {...(!Array.isArray(defaultValue) &&
            defaultValue && {
              defaultInputValue: defaultValue,
            })}
        />
      ) : type === "uneditable" ? (
        <Input
          id={name}
          type="text"
          readOnly
          {...register(name, { required: isRequired })}
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
