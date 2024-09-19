const manufacturerOptions = [
  { value: "manufacturer1", label: "Manufacturer 1" },
  { value: "manufacturer2", label: "Manufacturer 2" },
  // Add more options as needed
];

const procedureTypeOptions = [
  { value: "new", label: "New" },
  { value: "variation", label: "Variation" },
  { value: "renewal", label: "Renewal" },
  { value: "re-registration", label: "Re-registration" },
  // Add more options as needed
];

const AuthorisationStatusOptions = [
  { value: "planned", label: "Planned" },
  { value: "pending", label: "Pending" },
  { value: "queries", label: "Queries" },
  { value: "valid", label: "Valid" },
  { value: "rejected", label: "Rejected" },
  { value: "withdrawn", label: "Withdrawn" },
  { value: "not_renewed", label: "Not renewed" },
];

const teamMembersOptions = [
  { value: "1", label: "John Doe" },
  { value: "2", label: "Jane Smith" },
  { value: "3", label: "Michael Johnson" },
  { value: "4", label: "Emily Davis" },
  { value: "5", label: "William Brown" },
  { value: "6", label: "Olivia Wilson" },
  { value: "7", label: "James Anderson" },
  { value: "8", label: "Sophia Martinez" },
  { value: "9", label: "Benjamin Taylor" },
  { value: "10", label: "Emma Moore" },
];

const activeSubstanceManufacturerOptions = [
  {
    value: "activeSubstanceManufacturer1",
    label: "Active Substance Manufacturer 1",
  },
  {
    value: "activeSubstanceManufacturer2",
    label: "Active Substance Manufacturer 2",
  },
  // Add more options as needed
];

const countryOptions = [
  { value: "country1", label: "Country 1" },
  { value: "country2", label: "Country 2" },
  // Add more options as needed
];

const parentProductOptions = [
  { value: "OTC", label: "OTC" },
  { value: "Pharmaceutical product", label: "Pharmaceutical product" },
  { value: "Food supplement", label: "Food supplement" },
  { value: "Pharma Liste 1", label: "Pharma Liste 1" },
  { value: "Pharma Liste 2", label: "Pharma Liste 2" },
  { value: "Medical device", label: "Medical device" },
  // Add more options as needed
];

export const parentProductData = [
  {
    productCode: "SDCEFIV1",
    productName: "DAFRACEF IV",
    activeSubstanceEN: "CEFTRIAXONE",
    activeSubstanceFR: "CEFTRIAXONE",
    ATCCode: "J01DD04",
    productType: "LISTE 1",
    // maHolder: "DAFRA",
  },
  {
    productCode: "STICT5",
    productName: "TICASSE TABLET",
    activeSubstanceEN: "Amoxicillin / Clavulanic Acid",
    activeSubstanceFR: "Amoxicilline / Acide Clavulanique",
    ATCCode: "J01CR02",
    productType: "LISTE 1",
    // maHolder: "DAFRA",
  },
  {
    productCode: "XSC-EFLOT15",
    productName: "Eflozin tablet",
    activeSubstanceEN: "Empagliflozin",
    activeSubstanceFR: "Empagliflozine",
    ATCCode: "A10BK03",
    productType: "LISTE 1",
    // maHolder: "Scilife",
  },
  // Additional entries...
  {
    productCode: "XSK-MAL50",
    productName: "Malakant tablet",
    activeSubstanceEN: "Sulfadoxine / Pyrimethamine",
    activeSubstanceFR: "Sulfadoxine / Pyrimethamine",
    ATCCode: "P01BD51",
    productType: "LISTE 1",
    // maHolder: "S KANT",
  },
  // {
  //   productCode: "MNO112",
  //   productName: "Product E",
  //   activeSubstanceEN: "Substance E",
  //   activeSubstanceFR: "Substance E (FR)",
  //   ATCCode: "IJ05",
  //   productType: "Type 5",
  // },
  {
    productCode: "SCETIM1",
    productName: "Cetafor IM",
    activeSubstanceEN: "Ceftriaxone",
    activeSubstanceFR: "Ceftriaxone",
    ATCCode: "J01DD04",
    productType: "LISTE 1",
    // maHolder: "DAFRA",
  },
];

export const productData = [
  {
    productCode: "SDCEFIV1A",
    productName: "DAFRACEF IV ",
    parentProduct: "SDCEFIV1",
    manufacturer: "ANFARM",
    strength: "1000mg",
    countryOfOrigin: "GREECE",
    // productType: "Type 11",
  },
  {
    productCode: "STICT5A",
    productName: "TICASSE TABLET",
    parentProduct: "STICT5",
    manufacturer: "MEDICEF",
    strength: "562,5mg",
    countryOfOrigin: "INDIA",
    // productType: "Type 12",
  },
  {
    productCode: "XSC-EFLOT15A",
    productName: "EFLOZIN TABLET ",
    parentProduct: "XSC-EFLOT15",
    manufacturer: "SCILIFE",
    strength: "15mg",
    countryOfOrigin: "PAKISTAN",
    // productType: "Type 13",
  },
  {
    productCode: "XSC-NELT5A",
    productName: "NELOL TABLET",
    parentProduct: "XSC-NELT5",
    manufacturer: "SCILIFE",
    strength: "5mg",
    countryOfOrigin: "PAKISTAN",
    // productType: "Type 15",
  },
  {
    productCode: "XSK-MAL50A",
    productName: "MALAKANT TABLET",
    parentProduct: "XSK-MAL50",
    manufacturer: "S KANT",
    strength: "500mg/25mg",
    countryOfOrigin: "INDIA",
    // productType: "Type 16",
  },
  {
    productCode: "SCETIM1B",
    productName: "CETAFOR IM",
    parentProduct: "SCEMTIM1",
    manufacturer: "PHARMAVISION",
    strength: "1000mg",
    countryOfOrigin: "TURKEY",
    // productType: "Type 17",
  },

  {
    productCode: "SCETIM1A",
    productName: "CETAFOR IM",
    parentProduct: "SCEMTIM1",
    manufacturer: "PHARMAVISION",
    strength: "1000mg",
    countryOfOrigin: "TURKEY",
    // productType: "Type 19",
  },
  // {
  //   productCode: "BCD010",
  //   productName: "Product J",
  //   parentProduct: "Parent J",
  //   manufacturer: "Manufacturer J",
  //   strength: "Strength J",
  //   countryOfOrigin: "Country J",
  //   productType: "Type 20",
  // },
];

export const MilestoneListData = [
  {
    id: 1,
    templateName: "Template 1",
    milestoneCount: 5,
    createdBy: "User 1",
    usedInCount: 3,
  },
  {
    id: 2,
    templateName: "Template 2",
    milestoneCount: 8,
    createdBy: "User 2",
    usedInCount: 2,
  },
  {
    id: 3,
    templateName: "Template 3",
    milestoneCount: 3,
    createdBy: "User 3",
    usedInCount: 7,
  },
  {
    id: 4,
    templateName: "Template 4",
    milestoneCount: 6,
    createdBy: "User 4",
    usedInCount: 5,
  },
  {
    id: 5,
    templateName: "Template 5",
    milestoneCount: 4,
    createdBy: "User 5",
    usedInCount: 1,
  },
  {
    id: 6,
    templateName: "Template 6",
    milestoneCount: 7,
    createdBy: "User 6",
    usedInCount: 4,
  },
  {
    id: 7,
    templateName: "Template 7",
    milestoneCount: 2,
    createdBy: "User 7",
    usedInCount: 6,
  },
  {
    id: 8,
    templateName: "Template 8",
    milestoneCount: 9,
    createdBy: "User 8",
    usedInCount: 2,
  },
  {
    id: 9,
    templateName: "Template 9",
    milestoneCount: 3,
    createdBy: "User 9",
    usedInCount: 8,
  },
  {
    id: 10,
    templateName: "Template 10",
    milestoneCount: 6,
    createdBy: "User 10",
    usedInCount: 5,
  },
];

export const UserListData = [
  {
    userName: "John Doe",
    role: "Developer",
    status: "Active",
  },
  {
    userName: "Jane Smith",
    role: "Designer",
    status: "Inactive",
  },
  {
    userName: "Michael Johnson",
    role: "Project Manager",
    status: "Active",
  },
  {
    userName: "Emily Brown",
    role: "QA Engineer",
    status: "Inactive",
  },
  {
    userName: "David Wilson",
    role: "System Administrator",
    status: "Active",
  },
  {
    userName: "Jessica Lee",
    role: "Business Analyst",
    status: "Inactive",
  },
  {
    userName: "Christopher Clark",
    role: "DevOps Engineer",
    status: "Active",
  },
  {
    userName: "Sarah Martinez",
    role: "Technical Writer",
    status: "Inactive",
  },
  {
    userName: "Daniel Taylor",
    role: "Database Administrator",
    status: "Active",
  },
  {
    userName: "Olivia Garcia",
    role: "Product Owner",
    status: "Inactive",
  },
];

export const parentProcedureFormFields = [
  {
    sectionName: "General",
    fields: [
      {
        label: "Procedure Type",
        name: "procedureType",
        type: "select",
        options: procedureTypeOptions || [],
        isRequired: true,
      },
      {
        label: "Product Code",
        name: "productCode",
        type: "select",
        options: [], // Add options here
        isRequired: true,
      },
      {
        label: "Product Name",
        name: "productName",
        type: "uneditable",
        // No options needed for uneditable type
      },
      {
        label: "Generic Name (Product)",
        name: "genericName",
        type: "text",
        isRequired: true,
      },
      {
        label: "Strength",
        name: "strength",
        type: "uneditable",
        // No options needed for uneditable type
      },
      {
        label: "Pharmaceutical form",
        name: "pharmaceuticalForm",
        type: "uneditable",
        // No options needed for uneditable type
      },
      {
        label: "Pack size",
        name: "packSize",
        type: "uneditable",
        // No options needed for uneditable type
      },
      {
        label: "Product Type",
        name: "productType",
        type: "uneditable",
        // No options needed for uneditable type
      },
      {
        label: "Country",
        name: "country",
        type: "select",
        options: countryOptions || [],

        isMulti: true, // For multi-select
      },
    ],
  },
];

export const newProcedureFormFields = [
  {
    sectionName: "General Information",
    fields: [
      {
        label: "Procedure Type",
        name: "procedureType",
        type: "select",
        options: procedureTypeOptions || [],
        isRequired: true,
      },
      {
        label: "Country",
        name: "country",
        type: "select",
        options: countryOptions || [],
        isRequired: true,
      },
      {
        label: "Authorisation status",
        name: "authorisationStatus",
        type: "select",
        options: AuthorisationStatusOptions || [],
        isRequired: true,
      },
      { label: "MA Number", name: "maNumber", type: "text", isRequired: true },
      { label: "MA Holder", name: "maHolder", type: "uneditable" },
      { label: "MA date", name: "maDate", type: "date" },
      { label: "MA expiry date", name: "maExpiryDate", type: "date" },
      { label: "Remarks", name: "remarks", type: "text" },
      {
        label: "Team Member(s)",
        name: "teamMembers",
        type: "select",
        options: teamMembersOptions || [],
        isMulti: true,
        // isRequired: true,
      },
    ],
  },
  {
    sectionName: "Product Information",
    fields: [
      {
        label: "Product Code",
        name: "productCode",
        type: "select",
        options: [],
        isRequired: true,
      },
      {
        label: "Product Type",
        name: "productType",
        type: "uneditable",
      },
      { label: "Product Name", name: "productName", type: "uneditable" },
      { label: "Generic Name", name: "genericName", type: "uneditable" },
      { label: "Strength", name: "strength", type: "uneditable" },
      {
        label: "Pharmaceutical form",
        name: "pharmaceuticalForm",
        type: "uneditable",
      },
      { label: "Pack size", name: "packSize", type: "uneditable" },
      { label: "PGHT", name: "pght", type: "autofilled" },
      { label: "Shelf life", name: "shelfLife", type: "uneditable" },
      {
        label: "Storage conditions",
        name: "storageConditions",
        type: "uneditable",
      },
    ],
  },
  {
    sectionName: "Procedure Milestones",
    fields: [
      { label: "Dossier sent", name: "dossierSent", type: "date" },
      { label: "Dossier submitted", name: "dossierSubmitted", type: "date" },
      { label: "Samples sent", name: "samplesSent", type: "date" },
      { label: "Sample PO n°", name: "samplePONumber", type: "text" },
      { label: "Payment", name: "payment", type: "date" },
      { label: "Payment reference", name: "paymentReference", type: "text" },
      {
        label: "Milestones overview",
        name: "milestonesOverview",
        type: "select",
        options: [],
      },
    ],
  },
  {
    sectionName: "Manufacturer",
    fields: [
      {
        label: "Manufacturing site Finished product",
        name: "manufacturingSiteFinishedProduct",
        type: "uneditable",
      },
      {
        label: "Manufacturing site FP address",
        name: "manufacturingSiteFPAddress",
        type: "uneditable",
      },
      {
        label: "Manufacturing site FP Telephone number",
        name: "manufacturingSiteFPTelephoneNumber",
        type: "uneditable",
      },
      {
        label: "Manufacturing site FP E-Mail",
        name: "manufacturingSiteFPEmail",
        type: "uneditable",
      },
      {
        label: "Manufacturing site FP GMP expiry date",
        name: "manufacturingSiteFPGMPExpiryDate",
        type: "uneditable",
      },
      {
        label: "Manufacturing site FP ML expiry date",
        name: "manufacturingSiteFPMLExpiryDate",
        type: "uneditable",
      },
      {
        label: "Batch release site Finished product",
        name: "batchReleaseSiteFinishedProduct",
        type: "uneditable",
      },
      {
        label: "Batch release site FP address",
        name: "batchReleaseSiteFPAddress",
        type: "uneditable",
      },
      {
        label: "Batch release site FP Telephone number",
        name: "batchReleaseSiteFPTelephoneNumber",
        type: "uneditable",
      },
      {
        label: "Batch release site FP E-Mail",
        name: "batchReleaseSiteFPEmail",
        type: "uneditable",
      },
      {
        label: "Batch release site FP GMP expiry date",
        name: "batchReleaseSiteFPGMPExpiryDate",
        type: "uneditable",
      },
      {
        label: "Batch release site FP ML expiry date",
        name: "batchReleaseSiteFPMLExpiryDate",
        type: "uneditable",
      },
      {
        label: "API Manufacturer",
        name: "apiManufacturer",
        type: "uneditable",
      },
      {
        label: "API Manufacturer address",
        name: "apiManufacturerAddress",
        type: "uneditable",
      },
      { label: "API", name: "api", type: "uneditable" },
      {
        label: "API Manufacturer GMP expiry date",
        name: "apiManufacturerGMPExpiryDate",
        type: "uneditable",
      },
      {
        label: "API Manufacturer ML expiry date",
        name: "apiManufacturerMLExpiryDate",
        type: "uneditable",
      },
    ],
  },
];

export const renewalProcedureFormFields = [
  {
    sectionName: "General Information",
    fields: [
      {
        label: "Procedure Type",
        name: "procedureType",
        type: "select",
        options: procedureTypeOptions || [],
        isRequired: true,
      },
      {
        label: "Country",
        name: "country",
        type: "select",
        options: countryOptions || [],
        isRequired: true,
      },
      {
        label: "Authorisation status",
        name: "authorisationStatus",
        type: "select",
        options: AuthorisationStatusOptions || [],
        isRequired: true,
      },
      { label: "MA Number", name: "maNumber", type: "text", isRequired: true },
      { label: "MA Holder", name: "maHolder", type: "uneditable" },
      { label: "MA Date", name: "maDate", type: "date" },
      { label: "MA Expiry Date", name: "maExpiryDate", type: "date" },
      { label: "Parent MA Number", name: "parentMANumber", type: "text" },
      { label: "Parent MA Date", name: "parentMADate", type: "date" },
      { label: "VAR Approval Date", name: "varApprovalDate", type: "date" },
      { label: "VAR Details", name: "varDetails", type: "text" },
      { label: "Remarks", name: "remarks", type: "text" },
      {
        label: "Team Member(s)",
        name: "teamMembers",
        type: "select",
        options: teamMembersOptions || [],
        isMulti: true,
      },
    ],
  },
  {
    sectionName: "Product Information",
    fields: [
      {
        label: "Product Code",
        name: "productCode",
        type: "select",
        options: [],
        isRequired: true,
      },
      {
        label: "Product Type",
        name: "productType",
        type: "text",
      },
      { label: "Product Name", name: "productName", type: "uneditable" },
      { label: "Generic Name", name: "genericName", type: "uneditable" },
      { label: "Strength", name: "strength", type: "uneditable" },
      {
        label: "Pharmaceutical form",
        name: "pharmaceuticalForm",
        type: "uneditable",
      },
      { label: "Pack size", name: "packSize", type: "uneditable" },
      { label: "PGHT", name: "pght", type: "autofilled" },
      { label: "Shelf life", name: "shelfLife", type: "uneditable" },
      {
        label: "Storage conditions",
        name: "storageConditions",
        type: "uneditable",
      },
    ],
  },
  {
    sectionName: "Procedure Milestones",
    fields: [
      { label: "Dossier sent", name: "dossierSent", type: "date" },
      { label: "Dossier submitted", name: "dossierSubmitted", type: "date" },
      { label: "Samples sent", name: "samplesSent", type: "date" },
      { label: "Sample PO n°", name: "samplePONumber", type: "text" },
      { label: "Payment", name: "payment", type: "date" },
      { label: "Payment reference", name: "paymentReference", type: "text" },
      {
        label: "Milestones overview",
        name: "milestonesOverview",
        type: "select",
        options: [],
      },
    ],
  },
  {
    sectionName: "Manufacturer",
    fields: [
      {
        label: "Manufacturing site Finished product",
        name: "manufacturingSiteFinishedProduct",
        type: "uneditable",
      },
      {
        label: "Manufacturing site FP address",
        name: "manufacturingSiteFPAddress",
        type: "uneditable",
      },
      {
        label: "Manufacturing site FP Telephone number",
        name: "manufacturingSiteFPTelephoneNumber",
        type: "uneditable",
      },
      {
        label: "Manufacturing site FP E-Mail",
        name: "manufacturingSiteFPEmail",
        type: "uneditable",
      },
      {
        label: "Manufacturing site FP GMP expiry date",
        name: "manufacturingSiteFPGMPExpiryDate",
        type: "uneditable",
      },
      {
        label: "Manufacturing site FP ML expiry date",
        name: "manufacturingSiteFPMLExpiryDate",
        type: "uneditable",
      },
      {
        label: "Batch release site Finished product",
        name: "batchReleaseSiteFinishedProduct",
        type: "uneditable",
      },
      {
        label: "Batch release site FP address",
        name: "batchReleaseSiteFPAddress",
        type: "uneditable",
      },
      {
        label: "Batch release site FP Telephone number",
        name: "batchReleaseSiteFPTelephoneNumber",
        type: "uneditable",
      },
      {
        label: "Batch release site FP E-Mail",
        name: "batchReleaseSiteFPEmail",
        type: "uneditable",
      },
      {
        label: "Batch release site FP GMP expiry date",
        name: "batchReleaseSiteFPGMPExpiryDate",
        type: "uneditable",
      },
      {
        label: "Batch release site FP ML expiry date",
        name: "batchReleaseSiteFPMLExpiryDate",
        type: "uneditable",
      },
      {
        label: "API Manufacturer",
        name: "apiManufacturer",
        type: "uneditable",
      },
      {
        label: "API Manufacturer address",
        name: "apiManufacturerAddress",
        type: "uneditable",
      },
      { label: "API", name: "api", type: "uneditable" },
      {
        label: "Batch release site FP E-Mail",
        name: "batchReleaseSiteFPEmail",
        type: "uneditable",
      },
      {
        label: "API Manufacturer GMP expiry date",
        name: "apiManufacturerGMPExpiryDate",
        type: "uneditable",
      },
      {
        label: "API Manufacturer ML expiry date",
        name: "apiManufacturerMLExpiryDate",
        type: "uneditable",
      },
    ],
  },
];

export const parentProductFormFields = [
  {
    sectionName: "Parent Product",
    fields: [
      {
        label: "Product code",
        name: "productCode",
        type: "text",
        isRequired: true,
      },
      {
        label: "Product Name",
        name: "productName",
        type: "text",
        isRequired: true,
      },
      {
        label: "Active Substance (EN)",
        name: "activeSubstanceEN",
        type: "text",
        isRequired: true,
      },
      {
        label: "Active Substance (FR)",
        name: "activeSubstanceFR",
        type: "text",
        isRequired: true,
      },
      { label: "ATC Code", name: "ATCCode", type: "text", isRequired: true },
      {
        label: "Product Type",
        name: "productType",
        type: "select",
        options: parentProductOptions || [],
        isRequired: false,
      },
    ],
  },
];

export const newProductFormFields = [
  {
    sectionName: "General Information",
    fields: [
      {
        label: "Parent Product",
        name: "parentProduct",
        type: "select",
        options: [],
        isRequired: true,
      },
      {
        label: "Product code",
        name: "productCode",
        type: "text",
        isRequired: true,
      },
      { label: "Product name", name: "productName", type: "uneditable" },
      { label: "Product type", name: "productType", type: "uneditable" },
      { label: "ATC code", name: "ATCCode", type: "uneditable" },
      {
        label: "Manufacturer",
        name: "manufacturer",
        type: "select",
        options: [],
        isRequired: false,
      },
      {
        label: "Active substance (EN)",
        name: "activeSubstanceEN",
        type: "uneditable",
      },
      {
        label: "Active substance (FR)",
        name: "activeSubstanceFR",
        type: "uneditable",
      },
      {
        label: "Active substance Manufacturer",
        name: "activeSubstanceManufacturer",
        type: "select",
        options: [],
        isRequired: false,
      },
      { label: "Strength", name: "strength", type: "text" },
      {
        label: "Pharmaceutical form",
        name: "pharmaceuticalForm",
        type: "text",
      },
      { label: "Remarks", name: "remarks", type: "text" },
      { label: "Shelf life", name: "shelfLife", type: "numeric" },
      {
        label: "Countries of application",
        name: "countriesOfApplication",
        type: "select",
        options: [],
        isMulti: true,
        isRequired: false,
      },
      { label: "PGHT", name: "pght", type: "autofilled" },
      {
        label: "MA Country of origin",
        name: "maCountryOfOrigin",
        type: "documentText",
      },
    ],
  },
  {
    sectionName: "Presentation",
    fields: [
      {
        label: "Storage conditions",
        name: "storageConditions",
        type: "numeric",
      },
      {
        label: "Storage conditions after open",
        name: "storageConditionsAfterOpen",
        type: "numeric",
      },
      { label: "Container", name: "container", type: "text" },
      { label: "Material", name: "material", type: "text" },
      { label: "Closure", name: "closure", type: "text" },
      { label: "Pack size", name: "packSize", type: "text" },
      {
        label: "Administration device",
        name: "administrationDevice",
        type: "text",
      },
    ],
  },
];

export const procedureMilestoneFields = [
  {
    label: "CPP Requested",
    name: "cppRequested",
    type: "checkbox",
    defaultValue: false,
  },
  {
    label: "CPP Received",
    name: "cppReceived",
    type: "checkbox",
    defaultValue: false,
  },
  {
    label: "FSC Requested",
    name: "fscRequested",
    type: "checkbox",
    defaultValue: false,
  },
  {
    label: "FSC Received",
    name: "fscReceived",
    type: "checkbox",
    defaultValue: false,
  },
  {
    label: "Registration samples requested",
    name: "registrationSamplesRequested",
    type: "checkbox",
    defaultValue: false,
  },
  {
    label: "SO n° received",
    name: "soNumberReceived",
    type: "date",
    defaultValue: false,
  },
  {
    label: "Dossier sent",
    name: "dossierSent",
    type: "date",
    defaultValue: false,
  },
  {
    label: "Samples sent",
    name: "samplesSent",
    type: "date",
    defaultValue: false,
  },
  {
    label: "Inform local partners of shipment",
    name: "informLocalPartners",
    type: "checkbox",
    defaultValue: false,
  },
  {
    label: "Product added in monthly report",
    name: "productAddedInMonthlyReport",
    type: "checkbox",
    defaultValue: false,
  },
  {
    label: "Dossier shipment follow up",
    name: "dossierShipmentFollowUp",
    type: "checkbox",
    defaultValue: false,
  },
  {
    label: "Finished dossier from WiP to Submitted",
    name: "finishedDossierSubmitted",
    type: "checkbox",
    defaultValue: false,
  },
  {
    label: "Application letter",
    name: "applicationLetter",
    type: "document",
    defaultValue: false,
  },
  {
    label: "Payment request (incl number generation)",
    name: "paymentRequest",
    type: "date",
    defaultValue: false,
  },
  {
    label: "Follow-up of payment and receipt of POP",
    name: "paymentFollowUp",
    type: "checkbox",
    defaultValue: false,
  },
  {
    label: "POP sent to local partner",
    name: "popSentToLocalPartner",
    type: "checkbox",
    defaultValue: false,
  },
  {
    label: "Dossier received",
    name: "dossierReceived",
    type: "checkbox",
    defaultValue: false,
  },
  {
    label: "Samples received",
    name: "samplesReceived",
    type: "checkbox",
    defaultValue: false,
  },
  {
    label: "Dossier submitted",
    name: "dossierSubmitted",
    type: "date",
    defaultValue: false,
  },
  {
    label: "Proof of submission received",
    name: "proofOfSubmissionReceived",
    type: "document",
    defaultValue: false,
  },
  {
    label: "Proof of payment of registration fee received",
    name: "proofOfPaymentReceived",
    type: "document",
    defaultValue: false,
  },
  {
    label: "Queries received",
    name: "queriesReceived",
    type: "checkbox",
    defaultValue: false,
  },
  {
    label: "Queries to be submitted by",
    name: "queriesToBeSubmittedBy",
    type: "date",
    defaultValue: false,
  },
  {
    label: "Q&A folder created",
    name: "qaFolderCreated",
    type: "checkbox",
    defaultValue: false,
  },
  {
    label: "Queries submitted",
    name: "queriesSubmitted",
    type: "checkbox",
    defaultValue: false,
  },
  {
    label: "MA received",
    name: "maReceived",
    type: "document",
    defaultValue: false,
  },
  {
    label: "Inform EPS",
    name: "informEPS",
    type: "checkbox",
    defaultValue: false,
  },
  {
    label: "Inform Partner",
    name: "informPartner",
    type: "checkbox",
    defaultValue: false,
  },
];

export const milestoneFormFields = [
  {
    sectionName: "General Information",
    fields: [
      {
        label: "CPP Requested",
        name: "cppRequested",
        type: "checkbox",
        defaultValue: false,
      },
      {
        label: "CPP Received",
        name: "cppReceived",
        type: "checkbox",
        defaultValue: false,
      },
      {
        label: "FSC Requested",
        name: "fscRequested",
        type: "checkbox",
        defaultValue: false,
      },
      {
        label: "FSC Received",
        name: "fscReceived",
        type: "checkbox",
        defaultValue: false,
      },
      {
        label: "Registration samples requested",
        name: "registrationSamplesRequested",
        type: "checkbox",
        defaultValue: false,
      },
      {
        label: "SO n° received",
        name: "soNumberReceived",
        type: "checkbox",

        defaultValue: false,
      },
      {
        label: "Dossier sent",
        name: "dossierSent",
        type: "checkbox",
        defaultValue: false,
      },
      {
        label: "Samples sent",
        name: "samplesSent",
        type: "checkbox",
        defaultValue: false,
      },
      {
        label: "Inform local partners of shipment",
        name: "informLocalPartners",
        type: "checkbox",
        defaultValue: false,
      },
      {
        label: "Product added in monthly report",
        name: "productAddedInMonthlyReport",
        type: "checkbox",
        defaultValue: false,
      },
      {
        label: "Dossier shipment follow up",
        name: "dossierShipmentFollowUp",
        type: "checkbox",
        defaultValue: false,
      },
      {
        label: "Finished dossier from WiP to Submitted",
        name: "finishedDossierSubmitted",
        type: "checkbox",
        defaultValue: false,
      },
      {
        label: "Application letter",
        name: "applicationLetter",
        type: "checkbox",
        defaultValue: false,
      },
      {
        label: "Payment request (incl number generation)",
        name: "paymentRequest",
        type: "checkbox",
        defaultValue: false,
      },
      {
        label: "Follow-up of payment and receipt of POP",
        name: "paymentFollowUp",
        type: "checkbox",
        defaultValue: false,
      },
      {
        label: "POP sent to local partner",
        name: "popSentToLocalPartner",
        type: "checkbox",
        defaultValue: false,
      },
      {
        label: "Dossier received",
        name: "dossierReceived",
        type: "checkbox",
        defaultValue: false,
      },
      {
        label: "Samples received",
        name: "samplesReceived",
        type: "checkbox",
        defaultValue: false,
      },
      {
        label: "Dossier submitted",
        name: "dossierSubmitted",
        type: "checkbox",
        defaultValue: false,
      },
      {
        label: "Proof of submission received",
        name: "proofOfSubmissionReceived",
        type: "checkbox",
        defaultValue: false,
      },
      {
        label: "Proof of payment of registration fee received",
        name: "proofOfPaymentReceived",
        type: "checkbox",
        defaultValue: false,
      },
      {
        label: "Queries received",
        name: "queriesReceived",
        type: "checkbox",
        defaultValue: false,
      },
      {
        label: "Queries to be submitted by",
        name: "queriesToBeSubmittedBy",
        type: "checkbox",
        defaultValue: false,
      },
      {
        label: "Q&A folder created",
        name: "qaFolderCreated",
        type: "checkbox",
        defaultValue: false,
      },
      {
        label: "Queries submitted",
        name: "queriesSubmitted",
        type: "checkbox",
        defaultValue: false,
      },
      {
        label: "MA received",
        name: "maReceived",
        type: "checkbox",
        defaultValue: false,
      },
      {
        label: "Inform EPS",
        name: "informEPS",
        type: "checkbox",
        defaultValue: false,
      },
      {
        label: "Inform Partner",
        name: "informPartner",
        type: "checkbox",
        defaultValue: false,
      },
    ],
  },
];

export const partnerFormFields = [
  {
    sectionName: "General Information",
    fields: [
      {
        label: "Relationship Type",
        name: "relationshipType",
        type: "select",
        options: [],
        isRequired: true,
        defaultValue: null,
      },
    ],
  },
  {
    sectionName: "Company Information",
    fields: [
      {
        label: "Company Type",
        name: "companyType",
        type: "select",
        options: [],
        isRequired: true,
        defaultValue: null,
      },
      {
        label: "Company name",
        name: "companyName",
        type: "text",
        isRequired: true,
      },
      {
        label: "Company display name",
        name: "companyDisplayName",
        type: "text",
        isRequired: true,
      },
      {
        label: "Address",
        name: "companyAddress",
        type: "text",
        isRequired: true,
      },
      {
        label: "Country",
        name: "companyCountry",
        type: "select",
        options: [],
        isRequired: true,
        defaultValue: null,
      },
      {
        label: "Telephone number",
        name: "companyTelephoneNumber",
        type: "numeric",
        isRequired: true,
      },
      {
        label: "E-Mail",
        name: "companyEmail",
        type: "email",
        isRequired: true,
      },
      {
        label: "VAT number",
        name: "companyVatNumber",
        type: "text",
        isRequired: true,
      },
    ],
  },
  {
    sectionName: "Contact Information",
    fields: [
      {
        label: "Title",
        name: "contactTitle",
        type: "select",
        options: [],
        isRequired: true,
        defaultValue: null,
      },
      { label: "Name", name: "contactName", type: "text", isRequired: true },
      {
        label: "First Name",
        name: "contactFirstName",
        type: "text",
        isRequired: true,
      },
      {
        label: "Position",
        name: "contactPosition",
        type: "text",
        isRequired: true,
      },
      {
        label: "Department",
        name: "contactDepartment",
        type: "select",
        options: [],
        isRequired: true,
        defaultValue: null,
      },
      {
        label: "Telephone number",
        name: "contactTelephoneNumber",
        type: "numeric",
        isRequired: true,
      },
      {
        label: "E-Mail",
        name: "contactEmail",
        type: "email",
        isRequired: true,
      },
    ],
  },
  {
    sectionName: "Site Information",
    fields: [
      { label: "Site name", name: "siteName", type: "text", isRequired: true },
      {
        label: "Site type",
        name: "siteType",
        type: "select",
        options: [],
        isRequired: true,
        defaultValue: null,
      },
      { label: "Address", name: "siteAddress", type: "text", isRequired: true },
      {
        label: "Country",
        name: "siteCountry",
        type: "select",
        options: [],
        isRequired: true,
        defaultValue: null,
      },
      {
        label: "Telephone number",
        name: "siteTelephoneNumber",
        type: "numeric",
        isRequired: true,
      },
      { label: "E-Mail", name: "siteEmail", type: "email", isRequired: true },
      {
        label: "VAT number",
        name: "siteVatNumber",
        type: "text",
        isRequired: true,
      },
    ],
  },
  {
    sectionName: "License Information",
    fields: [
      {
        label: "Manufacturing licence Exp date",
        name: "manufacturingLicenceExpDate",
        type: "date",
        defaultValue: null,
      },
      {
        label: "GMP Exp date",
        name: "gmpExpDate",
        type: "date",
        defaultValue: null,
      },
      {
        label: "GDP Exp date",
        name: "gdpExpDate",
        type: "date",
        defaultValue: null,
      },
      {
        label: "GMP Territory",
        name: "gmpTerritory",
        type: "checkbox",
        defaultValue: false,
      },
      {
        label: "GMP Territory Exp date",
        name: "gmpTerritoryExpDate",
        type: "date",
        defaultValue: null,
      },
    ],
  },
];

const userRoleOptions = [
  { value: "Admin", label: "Admin" },
  { value: "Regulatory Manager", label: "Regulatory Manager" },
  { value: "Regulatory Department", label: "Regulatory Department" },
  { value: "EPS other departments", label: "EPS other departments" },
  { value: "EPS colleagues Africa", label: "EPS colleagues Africa" },
  { value: "Partners/Clients", label: "Partners/Clients" },
];

export const userFormFields = [
  {
    sectionName: "User Information",
    fields: [
      {
        label: "First Name",
        name: "firstName",
        type: "text",
        isRequired: true,
      },
      { label: "Last Name", name: "lastName", type: "text", isRequired: true },
      {
        label: "Role",
        name: "role",
        type: "select",
        options: userRoleOptions || [],
        isRequired: true,
        defaultValue: null,
      },
      { label: "Contact", name: "contact", type: "numeric", isRequired: true },
    ],
  },
];

export const formBuilderFields = [];

// Iterate through each section
newProcedureFormFields.forEach((section) => {
  // Check if the section has fields
  const obj = {
    sectionName: "",
    fields: [],
  };
  obj.sectionName = section?.sectionName;
  if (section.fields) {
    // Iterate through each field in the section
    section.fields.map((field) => {
      // Create an object representing the form control for each field
      const formField = {
        label: field.label,
        name: field.name,
        type: "checkbox",
        checked: false, // Initialize as unchecked
      };

      // Add the form control object to the formBuilderFields array
      obj.fields.push(formField);
    });
  }
  formBuilderFields.push(obj);
});

// Milestone Template Fields
export const milestoneTemplateFormFields = [
  {
    sectionName: "",
    fields: [
      {
        label: "Milestone Name",
        name: "milestoneName",
        type: "input",
        isRequired: true,
      },
      {
        label: "Milestone Type",
        name: "milestoneType",
        type: "select",
        options: [],
        isRequired: true,
      },
    ],
  },
];
