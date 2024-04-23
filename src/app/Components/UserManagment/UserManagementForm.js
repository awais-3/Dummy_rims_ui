"use client";
import { useForm } from "react-hook-form";
import { Button, Box } from "@chakra-ui/react";
import FormSubHeder from "../Common/FormSubHeder";
import GenericInput from "../Common/Inputs/Input";
import { userFormFields } from "../../assets/Data";
import { useEffect } from "react";
function UserManagementForm({ user, isEditing }) {
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    Object.entries(user).map(([sectionName, sectionData]) =>
      Object.entries(sectionData).map(([fieldName, fieldValue]) => {
        setValue(fieldName, fieldValue);
      })
    );
  }, [isEditing, user]);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      px={{ base: 2, md: 6, lg: 12 }}
    >
      {userFormFields.map((section, index) => (
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
                isEditing && user
                  ? user[section?.sectionName][field.name]
                  : null
              }
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
        {!isEditing ? "Create" : "Update"}
      </Button>
    </Box>
  );
}

export default UserManagementForm;
