export const PHONE = {
  name: 'Phone',
  primaryKey: '_id',
  properties: {
    _id: 'objectId',
    dialCode: 'int',
    contactNo: 'string',
    countryId: 'int?',
  },
};

export const ADDRESS = {
  name: 'Address',
  primaryKey: '_id',
  properties: {
    _id: 'objectId',
    addressLineOne: 'string',
    addressLineTwo: 'string',
    addressLineThree: 'string',
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
    facilityOwnerPhone: 'string',
    registeredSpecies: 'Species[]',
    facilityEshtablishmentDate: 'string',
    typeOfInspection: 'string[]',
    citesInformationCode: 'string',
  },
};

export const FORM_TWO = {
  name: 'FormTwo',
  primaryKey: '_id',
  properties: {
    _id: 'objectId',
    fullTimeStaffs: 'int',
    partTimeStaffs: 'int',
    accessToVeterinaryServices: 'bool',
    veterinarianName: 'string?',
    veterinarianAddress: 'Address?',
    animalKeptAtOtherLocation: 'bool',
    addressOfOtherAnimals: 'Address[]', // If animalKeptAtOtherLocation is true
  },
};

export const FORM_THREE = {
  name: 'FormThree',
  primaryKey: '_id',
  properties: {
    _id: 'objectId',
    species: 'Species',
    dateFirstSpeciesAcquired: 'date',
    sourceCode: 'string',
    lifeStageOfInitialStock: 'string',
    numberOfMaleStock: 'int',
    numberOfFemaleStock: 'int',
    additionalAnimalsAcquiredSinceInitialStock: 'bool',
    addressOfAdditionalStock: 'Address?',
    doYouBreedThisSpecies: 'bool',
    whenDidYouBreedThisSpecies: 'bool?',
    dateOfBreeding: 'date?',
    numberOfLittersPerYear: 'int?',
    numberOfEggsInLitter: 'int?',
    numberProducedInPreviousYear: 'int?',
    doYouRanchThisSpecies: 'bool',
    lifeStageHarvested: 'string?',
    numberHarvestedInPreviousYear: 'int?',
    noOfAdultsPresentFacilityInfo: 'int',
    noOfAdultsPresentInspectionInfo: 'int',
    noOfMalesPresentFacilityInfo: 'int',
    noOfMalesPresentInspectionInfo: 'int',
    noOfFemalesPresentFacilityInfo: 'int',
    noOfFemalesPresentInspectionInfo: 'int',
    percentageOfFemalesBreedEachYear: 'int',
    foodFedToAdults: 'string',
    noOfJuvenilesPresentFacilityInfo: 'int',
    noOfJuvenilesPresentInspectionInfo: 'int',
    ageOfSexualMaturity: 'int',
    sizeOrMassAtSexualMaturity: 'int',
    sizeOrMassAtSaleOrExport: 'int',
    percentageOfJuvenilesSurviveBeyond2Weeks: 'int',
    foodFedToRearingAndJuveniles: 'string',
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

// NEED TO DISCUSS - OPTIONAL OR NOT, SOURCE DETERMINATION

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
    inspectionConcides: 'bool?',
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
  },
};
