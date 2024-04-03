import { useForm } from "react-hook-form";
import Select from "react-select";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  Box,
  Textarea,
} from "@chakra-ui/react";
import {
  batchReleaseSiteFinishedProductOptions,
  manufacturingSiteFPMLExpiryDateOptions,
  manufacturingSiteFPGMPExpiryDateOptions,
  manufacturingSiteFPEmailOptions,
  manufacturingSiteFPTelephoneNumberOptions,
  manufacturingSiteFPAddressOptions,
  manufacturingSiteFinishedProductOptions,
  apiManufacturerMLExpiryDateOptions,
  apiManufacturerGMPExpiryDateOptions,
  apiOptions,
  apiManufacturerAddressOptions,
  apiManufacturerOptions,
  batchReleaseSiteFPGMPExpiryDateOptions,
} from "../../assets/Data/ProcedureCreationData";
import FormSubHeder from "../Common/FormSubHeder";
import { useEffect } from "react";

function ContactForm({ isEditing, contact }) {
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isEditing && contact) {
      Object.entries(contact).forEach(([key, value]) => {
        setValue(key, value);
      });
    }
  }, [isEditing, contact]);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      px={{ base: 2, md: 6, lg: 12 }}
    >
      {/* Procedure Type */}
      <FormSubHeder heading={"General information"} />

      {/* Procedure milestones */}
      <FormSubHeder heading={"Procedure milestones"} />

      {/* Dossier sent */}
      <FormControl isInvalid={errors.dossierSent} mb="2">
        <FormLabel htmlFor="dossierSent">Dossier sent</FormLabel>
        <Input type="date" {...register("dossierSent", { required: true })} />
        <FormErrorMessage>
          {errors.dossierSent?.message || "This field is required"}
        </FormErrorMessage>
      </FormControl>

      {/* Dossier submitted */}
      <FormControl isInvalid={errors.dossierSubmitted} mb="2">
        <FormLabel htmlFor="dossierSubmitted">Dossier submitted</FormLabel>
        <Input
          type="date"
          {...register("dossierSubmitted", { required: true })}
        />
        <FormErrorMessage>
          {errors.dossierSubmitted?.message || "This field is required"}
        </FormErrorMessage>
      </FormControl>

      {/* Milestones overview */}
      <FormControl isInvalid={errors.milestonesOverview} mb="2">
        <FormLabel htmlFor="milestonesOverview">Milestones overview</FormLabel>
        <Textarea
          {...register("milestonesOverview", { required: true })}
          placeholder="Milestones overview"
        />
        <FormErrorMessage>
          {errors.milestonesOverview?.message || "This field is required"}
        </FormErrorMessage>
      </FormControl>

      {/* Manufacturer */}

      <FormSubHeder heading={"Manufacturer"} />

      {/* Manufacturing site Finished product */}
      <FormControl isInvalid={errors.manufacturingSiteFinishedProduct} mb="2">
        <FormLabel htmlFor="manufacturingSiteFinishedProduct">
          Manufacturing site Finished product
        </FormLabel>
        <Select
          options={manufacturingSiteFinishedProductOptions}
          {...register("manufacturingSiteFinishedProduct", { required: true })}
          onChange={(selectedOption) => {
            setValue("manufacturingSiteFinishedProduct", selectedOption?.value);
            clearErrors("manufacturingSiteFinishedProduct");
          }}
        />
        <FormErrorMessage>
          {errors.manufacturingSiteFinishedProduct?.message ||
            "This field is required"}
        </FormErrorMessage>
      </FormControl>

      {/* Manufacturing site FP address */}
      <FormControl isInvalid={errors.manufacturingSiteFPAddress} mb="2">
        <FormLabel htmlFor="manufacturingSiteFPAddress">
          Manufacturing site FP address
        </FormLabel>
        <Select
          options={manufacturingSiteFPAddressOptions}
          {...register("manufacturingSiteFPAddress", { required: true })}
          onChange={(selectedOption) => {
            setValue("manufacturingSiteFPAddress", selectedOption?.value);
            clearErrors("manufacturingSiteFPAddress");
          }}
        />
        <FormErrorMessage>
          {errors.manufacturingSiteFPAddress?.message ||
            "This field is required"}
        </FormErrorMessage>
      </FormControl>

      {/* Manufacturing site FP Telephone number */}
      <FormControl isInvalid={errors.manufacturingSiteFPTelephoneNumber} mb="2">
        <FormLabel htmlFor="manufacturingSiteFPTelephoneNumber">
          Manufacturing site FP Telephone number
        </FormLabel>
        <Select
          options={manufacturingSiteFPTelephoneNumberOptions}
          {...register("manufacturingSiteFPTelephoneNumber", {
            required: true,
          })}
          onChange={(selectedOption) => {
            setValue(
              "manufacturingSiteFPTelephoneNumber",
              selectedOption?.value
            );
            clearErrors("manufacturingSiteFPTelephoneNumber");
          }}
        />
        <FormErrorMessage>
          {errors.manufacturingSiteFPTelephoneNumber?.message ||
            "This field is required"}
        </FormErrorMessage>
      </FormControl>

      {/* Manufacturing site FP E-Mail */}
      <FormControl isInvalid={errors.manufacturingSiteFPEmail} mb="2">
        <FormLabel htmlFor="manufacturingSiteFPEmail">
          Manufacturing site FP E-Mail
        </FormLabel>
        <Select
          options={manufacturingSiteFPEmailOptions}
          {...register("manufacturingSiteFPEmail", { required: true })}
          onChange={(selectedOption) => {
            setValue("manufacturingSiteFPEmail", selectedOption?.value);
            clearErrors("manufacturingSiteFPEmail");
          }}
        />
        <FormErrorMessage>
          {errors.manufacturingSiteFPEmail?.message || "This field is required"}
        </FormErrorMessage>
      </FormControl>

      {/* Manufacturing site FP GMP expiry date */}
      <FormControl isInvalid={errors.manufacturingSiteFPGMPExpiryDate} mb="2">
        <FormLabel htmlFor="manufacturingSiteFPGMPExpiryDate">
          Manufacturing site FP GMP expiry date
        </FormLabel>
        <Select
          options={manufacturingSiteFPGMPExpiryDateOptions}
          {...register("manufacturingSiteFPGMPExpiryDate", { required: true })}
          onChange={(selectedOption) => {
            setValue("manufacturingSiteFPGMPExpiryDate", selectedOption?.value);
            clearErrors("manufacturingSiteFPGMPExpiryDate");
          }}
        />
        <FormErrorMessage>
          {errors.manufacturingSiteFPGMPExpiryDate?.message ||
            "This field is required"}
        </FormErrorMessage>
      </FormControl>

      {/* Manufacturing site FP ML expiry date */}
      <FormControl isInvalid={errors.manufacturingSiteFPMLExpiryDate} mb="2">
        <FormLabel htmlFor="manufacturingSiteFPMLExpiryDate">
          Manufacturing site FP ML expiry date
        </FormLabel>
        <Select
          options={manufacturingSiteFPMLExpiryDateOptions}
          {...register("manufacturingSiteFPMLExpiryDate", { required: true })}
          onChange={(selectedOption) => {
            setValue("manufacturingSiteFPMLExpiryDate", selectedOption?.value);
            clearErrors("manufacturingSiteFPMLExpiryDate");
          }}
        />
        <FormErrorMessage>
          {errors.manufacturingSiteFPMLExpiryDate?.message ||
            "This field is required"}
        </FormErrorMessage>
      </FormControl>

      {/* Batch release site Finished product */}
      <FormControl isInvalid={errors.batchReleaseSiteFinishedProduct} mb="2">
        <FormLabel htmlFor="batchReleaseSiteFinishedProduct">
          Batch release site Finished product
        </FormLabel>
        <Select
          options={batchReleaseSiteFinishedProductOptions}
          {...register("batchReleaseSiteFinishedProduct", { required: true })}
          onChange={(selectedOption) => {
            setValue("batchReleaseSiteFinishedProduct", selectedOption?.value);
            clearErrors("batchReleaseSiteFinishedProduct");
          }}
        />
        <FormErrorMessage>
          {errors.batchReleaseSiteFinishedProduct?.message ||
            "This field is required"}
        </FormErrorMessage>
      </FormControl>

      {/* Batch release site FP GMP expiry date */}
      <FormControl isInvalid={errors.batchReleaseSiteFPGMPExpiryDate} mb="2">
        <FormLabel htmlFor="batchReleaseSiteFPGMPExpiryDate">
          Batch release site FP GMP expiry date
        </FormLabel>
        <Select
          options={batchReleaseSiteFPGMPExpiryDateOptions}
          {...register("batchReleaseSiteFPGMPExpiryDate", { required: true })}
          onChange={(selectedOption) => {
            setValue("batchReleaseSiteFPGMPExpiryDate", selectedOption?.value);
            clearErrors("batchReleaseSiteFPGMPExpiryDate");
          }}
        />
        <FormErrorMessage>
          {errors.batchReleaseSiteFPGMPExpiryDate?.message ||
            "This field is required"}
        </FormErrorMessage>
      </FormControl>

      {/* API Manufacturer */}
      <FormControl isInvalid={errors.apiManufacturer} mb="2">
        <FormLabel htmlFor="apiManufacturer">API Manufacturer</FormLabel>
        <Select
          options={apiManufacturerOptions}
          {...register("apiManufacturer", { required: true })}
          onChange={(selectedOption) => {
            setValue("apiManufacturer", selectedOption?.value);
            clearErrors("apiManufacturer");
          }}
        />
        <FormErrorMessage>
          {errors.apiManufacturer?.message || "This field is required"}
        </FormErrorMessage>
      </FormControl>

      {/* API */}
      <FormControl isInvalid={errors.api} mb="2">
        <FormLabel htmlFor="api">API</FormLabel>
        <Select
          options={apiOptions}
          {...register("api", { required: true })}
          onChange={(selectedOption) => {
            setValue("api", selectedOption?.value);
            clearErrors("api");
          }}
        />
        <FormErrorMessage>
          {errors.api?.message || "This field is required"}
        </FormErrorMessage>
      </FormControl>

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

export default ContactForm;
