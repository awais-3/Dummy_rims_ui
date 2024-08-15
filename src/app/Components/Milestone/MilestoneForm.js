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

import {
  milestoneFormFields,
  milestoneTemplateFormFields,
} from "../../assets/Data/index";
import GenericInput from "../Common/Inputs/Input";
import { useDispatch } from "react-redux";
import { addMilestone } from "../../../lib/redux/slice/milestoneSlice";

function MilestoneForm({ type, onClose }) {
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const newMilestone = {
      id: Math.floor(Math.random() * 1000000),
      usedInCount: 0,
      createdBy: "User",
      milestoneCount: 0,
      ...data,
    };
    dispatch(addMilestone(newMilestone));
    console.log(newMilestone);
    if (onClose) onClose();
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      px={{ base: 2, md: 6, lg: 12 }}
    >
      {/* {type === "Milestone Template" && ( */}
      <>
        <FormControl isInvalid={errors["milestoneName"]} my="4">
          <FormLabel htmlFor="milestoneName">Milstone Name</FormLabel>
          <Input
            id={`milestoneName`}
            type="text"
            placeholder="Milestone name"
            {...register(`milestoneName`, { required: true })}
          />
          <FormErrorMessage>
            {errors["milestoneName"]?.message || "This field is required"}
          </FormErrorMessage>
        </FormControl>
        {milestoneFormFields.map((section, index) => (
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
                defaultValue={null}
              />
            ))}
          </div>
        ))}
      </>
      {/* )} */}

      {/* {type === "Milestone" && (
        <>
          {milestoneTemplateFormFields.map((section, index) => (
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
                  defaultValue={null}
                />
              ))}
            </div>
          ))}
        </>
      )} */}

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

export default MilestoneForm;
