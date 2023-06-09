// Generated by https://quicktype.io

export interface HSForm {
    portalId:                number;
    guid:                    string;
    name:                    string;
    action:                  string;
    method:                  string;
    cssClass:                string;
    redirect:                string;
    submitText:              string;
    followUpId:              string;
    notifyRecipients:        string;
    leadNurturingCampaignId: string;
    formFieldGroups:         FormFieldGroup[];
    createdAt:               number;
    updatedAt:               number;
    performableHtml:         string;
    migratedFrom:            string;
    ignoreCurrentValues:     boolean;
    metaData:                any[];
    deletable:               boolean;
    inlineMessage:           string;
    tmsId:                   string;
    captchaEnabled:          boolean;
    campaignGuid:            string;
    cloneable:               boolean;
    editable:                boolean;
    formType:                string;
}

export interface FormFieldGroup {
    fields:       Field[];
    default:      boolean;
    isSmartGroup: boolean;
    richText:     RichText;
}

export interface Field {
    name:                  string;
    label:                 string;
    type:                  string;
    fieldType:             string;
    description:           string;
    groupName:             string;
    displayOrder:          number;
    required:              boolean;
    selectedOptions:       any[];
    options:               any[];
    validation:            Validation;
    enabled:               boolean;
    hidden:                boolean;
    defaultValue:          string;
    isSmartField:          boolean;
    unselectedLabel:       string;
    placeholder:           string;
    dependentFieldFilters: any[];
    labelHidden:           boolean;
}

export interface Validation {
    name:                  string;
    message:               string;
    data:                  string;
    useDefaultBlockList:   boolean;
    blockedEmailAddresses: any[];
}

export interface RichText {
    content: string;
}
