export const PHONE = {
  name: 'Phone',
  properties: {
    callingCode: 'string?',
    contactNumber: 'string',
    cca2: 'string?',
  },
};

export const ADDRESS = {
  name: 'Address',
  properties: {
    addressLineOne: 'string?',
    addressLineTwo: 'string?',
    addressLineThree: 'string?',
  },
};

export const SPECIES = {
  name: 'Species',
  primaryKey: '_id',
  properties: {
    _id: 'objectId',
    name: 'string',
    numberOfSpecimen: 'int?',
    numberOfBreedingAdults: 'int?',
    numberOfSpeciemenExportedSinceLastInspection: 'int?',
    sourceCodeOfPreviousExport: 'string?',
    dateFirstSpeciesAcquired: 'date?',
    sourceCodeInitialStock: 'string?',
    lifeStageOfInitialStock: 'string?',
    numberOfMalesInitialStock: 'int?',
    numberOfFemalesInitialStock: 'int?',
    additionalAnimalsAcquiredSinceInitialStock: 'bool?',
    addressOfAdditionalStock: 'Address?',
    doYouBreedThisSpecies: 'bool?',
    whenDidYouBreedThisSpecies: 'date?',
    numberOfLittersPerYear: 'int?',
    numberOfOffspringPerLitter: 'int?',
    numberProducedInPreviousYear: 'int?',
    doYouRanchThisSpecies: 'bool?',
    lifeStageHarvested: 'string?',
    numberHarvestedInPreviousYear: 'int?',
    noOfAdultsPresentFacilityInfo: 'int?',
    noOfAdultsPresentInspectionInfo: 'int?',
    noOfMalesPresentFacilityInfo: 'int?',
    noOfMalesPresentInspectionInfo: 'int?',
    noOfFemalesPresentFacilityInfo: 'int?',
    noOfFemalesPresentInspectionInfo: 'int?',
    percentageOfFemalesBreedEachYear: 'int?',
    foodFedToAdults: 'string?',
    noOfJuvenilesPresentFacilityInfo: 'int?',
    noOfJuvenilesPresentInspectionInfo: 'int?',
    ageAtSexualMaturity: 'int?',
    sizeOrMassAtSexualMaturity: 'int?',
    sizeOrMassAtSaleOrExport: 'int?',
    percentageOfJuvenilesSurviveBeyond2Weeks: 'int?',
    foodFedToRearingAndJuveniles: 'string?',
  },
};

export const STAFF_HOURS = {
  name: 'StaffHours',
  properties: {
    fullTimeStaffs: 'int',
    partTimeStaffs: 'int',
  },
};

export const FORM_ONE = {
  name: 'FormOne',
  primaryKey: '_id',
  properties: {
    _id: 'objectId',
    dateOfInspection: 'string',
    nameOfInspectionOfficers: 'string[]',
    facilityName: 'string',
    facilityAddressLineOne: 'string',
    facilityAddressLineTwo: 'string',
    country: 'string',
    facilityOwner: 'string',
    facilityOwnerEmail: 'string',
    facilityOwnerPhone: 'Phone',
    facilityEstablishmentDate: 'string',
    typeOfInspection: 'string[]',
    citesInformationCode: 'string',
  },
};

export const FORM_TWO = {
  name: 'FormTwo',
  primaryKey: '_id',
  properties: {
    _id: 'objectId',
    staffHours: 'StaffHours',
    accessToVeterinaryServices: 'string[]',
    veterinarianName: 'string?',
    veterinarianAddress: 'string?',
    veterinarianCountry: 'string?',
    animalKeptAtOtherLocation: 'string[]',
    addressOfOtherAnimals: 'string[]', // If animalKeptAtOtherLocation is true
  },
};

export const FORM_FOUR = {
  name: 'FormFour',
  primaryKey: '_id',
  properties: {
    _id: 'objectId',
    legallyRegisteredToBreedAndKeep: 'bool',
    unusualActivityObserved: 'bool',
    containmentFacilityAvailable: 'bool',
    containmentFacilityAdequate: 'bool',
    recordsMaintainedForExport: 'bool',
    foodFacilitiesAvailable: 'bool',
    facilityProductionMatchesEstimates: 'bool',
    wildOriginSignsShown: 'bool',
    difficultToBreed: 'bool',
    facilityEstablishedLongEnough: 'bool',
    haveIdentificationMark: 'bool',
  },
};

export const STEP_ONE = {
  name: 'StepOne',
  primaryKey: '_id',
  properties: {
    _id: 'objectId',
    researchConducted: 'bool?',
    existingRecordsExamined: 'bool?',
    outstandingInfringementInvestigations: 'bool?',
    formOneCompleted: 'bool?',
    productionCapacityCalculated: 'bool?',
    toolsEnsured: 'bool?',
    twoOfficialsArranged: 'bool?',
    inspectionCoincides: 'bool?',
    facilityOwnerPresent: 'bool?',
    formOne: 'FormOne?',
  },
};

export const STEP_TWO = {
  name: 'StepTwo',
  primaryKey: '_id',
  properties: {
    _id: 'objectId',
    purposeDisclosedToOwner: 'bool?',
    confirmFormOneContent: 'bool?',
    informationRecorded: 'bool?',
    formTwoCompleted: 'bool?',
    formThreeCompleted: 'bool?',
    sourceDetermined: 'bool?',
    recordsExaminedForStock: 'bool?',
    formTwo: 'FormTwo?',
  },
};

export const STEP_THREE = {
  name: 'StepThree',
  primaryKey: '_id',
  properties: {
    _id: 'objectId',
    inspectionCompleted: 'bool?',
    formFourCompleted: 'bool?',
    productionCapacityCalculated: 'bool?',
    requirementCheckedForAdditionalInspection: 'bool?',
    formFour: 'FormFour?',
  },
};

export const INSPECTION = {
  name: 'Inspection',
  primaryKey: '_id',
  properties: {
    _id: 'objectId',
    stepOne: 'StepOne?',
    stepTwo: 'StepTwo?',
    stepThree: 'StepThree?',
    notes: 'string[]',
    photos: 'string[]',
    registeredSpecies: 'Species[]',
  },
};
