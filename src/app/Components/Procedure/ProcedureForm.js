"use client";
import { useForm } from "react-hook-form";
import { Button, Box, Select, FormLabel, Center } from "@chakra-ui/react";
import GenericInput from "../Common/Inputs/Input";
import {
  parentProcedureFormFields,
  newProcedureFormFields,
  renewalProcedureFormFields,
  procedureMilestoneFields,
} from "../../assets/Data";
import FormSubHeder from "../Common/FormSubHeder";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProcedure } from "../../../lib/redux/slice/procedureSlice";
function ProcedureForm({ type, isEditing = false, procedure = {}, onClose }) {
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();
  const templates = useSelector((state) => state.formBuilder.templates);
  const [selectedTemplate, setSelectedTemplate] = React.useState(null);
  const [selectedMilestone, setSelectedMilestone] = React.useState(null);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const dataWithId = {
      ...data,
      id: Math.random().toString(36).substr(2, 9),
    };
    dispatch(addProcedure(dataWithId));
    onClose();
  };
  const milestoneChangeHandler = (milestone) => {
    const milestoneFieldsToRender = [];

    Object.keys(milestone).forEach((mileKey) => {
      procedureMilestoneFields.forEach((proMil) => {
        if (proMil.name === mileKey) {
          milestoneFieldsToRender.push(proMil);
        }
      });
    });

    setSelectedMilestone(milestoneFieldsToRender);
  };

  useEffect(() => {
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
              {newProcedureFormFields.every((section) => {
                const selectedFields =
                  selectedTemplate?.[section.sectionName]?.fields || [];
                return (
                  section.fields.filter((field) =>
                    selectedFields.includes(field.name)
                  ).length === 0
                );
              }) ? (
                <Center>Not any field</Center>
              ) : (
                newProcedureFormFields.map((section, index) => {
                  const selectedFields =
                    selectedTemplate?.[section.sectionName]?.fields || [];
                  const fieldsToRender = section.fields.filter((field) =>
                    selectedFields.includes(field.name)
                  );

                  return fieldsToRender.length > 0 ? (
                    <div key={index}>
                      <FormSubHeder heading={section?.sectionName} />
                      {fieldsToRender.map((field) => {
                        if (field?.name === "milestonesOverview") {
                          return (
                            <div key={field.name}>
                              <GenericInput
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
                                milestoneChangeHandler={milestoneChangeHandler}
                                defaultValue={
                                  isEditing && procedure
                                    ? procedure[section?.sectionName][
                                        field.name
                                      ]
                                    : null
                                }
                              />
                              {selectedMilestone?.length > 0 &&
                                selectedMilestone?.map((field) => (
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
                                        ? procedure[section?.sectionName][
                                            field.name
                                          ]
                                        : null
                                    }
                                  />
                                ))}
                            </div>
                          );
                        } else {
                          return (
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
                          );
                        }
                      })}
                    </div>
                  ) : null;
                })
              )}
            </>
          ) : (
            <Box mt={4}>
              <FormLabel>Select Template</FormLabel>
              <Select
                placeholder="Select Template"
                onChange={(e) => {
                  const selected = templates.find(
                    (template) => template.templateName === e.target.value
                  );
                  setSelectedTemplate(selected);
                }}
              >
                {templates.map((template) => (
                  <option
                    key={template.templateName}
                    value={template.templateName}
                  >
                    {template.templateName}
                  </option>
                ))}
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
