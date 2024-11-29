import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobActionsDeidentifyTransformationConfig {
  deidentify_template?: string;
  image_redact_template?: string;
  structured_deidentify_template?: string;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable {
  dataset_id: string;
  project_id: string;
  table_id?: string;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobActionsDeidentifyTransformationDetailsStorageConfig {
  table: GoogleDataLossPreventionJobTriggerArgsInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobActionsDeidentify {
  cloud_storage_output: string;
  file_types_to_transform?: string[];
  transformation_config: GoogleDataLossPreventionJobTriggerArgsInspectJobActionsDeidentifyTransformationConfig;
  transformation_details_storage_config: GoogleDataLossPreventionJobTriggerArgsInspectJobActionsDeidentifyTransformationDetailsStorageConfig;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobActionsJobNotificationEmails {}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobActionsPubSub {
  topic: string;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobActionsPublishFindingsToCloudDataCatalog {}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobActionsPublishSummaryToCscc {}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobActionsPublishToStackdriver {}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobActionsSaveFindingsOutputConfigTable {
  dataset_id: string;
  project_id: string;
  table_id?: string;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobActionsSaveFindingsOutputConfig {
  output_schema?: string;
  table: GoogleDataLossPreventionJobTriggerArgsInspectJobActionsSaveFindingsOutputConfigTable;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobActionsSaveFindings {
  output_config: GoogleDataLossPreventionJobTriggerArgsInspectJobActionsSaveFindingsOutputConfig;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobActions {
  deidentify: GoogleDataLossPreventionJobTriggerArgsInspectJobActionsDeidentify;
  job_notification_emails: GoogleDataLossPreventionJobTriggerArgsInspectJobActionsJobNotificationEmails;
  pub_sub: GoogleDataLossPreventionJobTriggerArgsInspectJobActionsPubSub;
  publish_findings_to_cloud_data_catalog: GoogleDataLossPreventionJobTriggerArgsInspectJobActionsPublishFindingsToCloudDataCatalog;
  publish_summary_to_cscc: GoogleDataLossPreventionJobTriggerArgsInspectJobActionsPublishSummaryToCscc;
  publish_to_stackdriver: GoogleDataLossPreventionJobTriggerArgsInspectJobActionsPublishToStackdriver;
  save_findings: GoogleDataLossPreventionJobTriggerArgsInspectJobActionsSaveFindings;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigCustomInfoTypesDictionaryCloudStoragePath {
  path: string;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigCustomInfoTypesDictionaryWordList {
  words: string[];
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigCustomInfoTypesDictionary {
  cloud_storage_path: GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigCustomInfoTypesDictionaryCloudStoragePath;
  word_list: GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigCustomInfoTypesDictionaryWordList;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigCustomInfoTypesInfoTypeSensitivityScore {
  score: string;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigCustomInfoTypesInfoType {
  name: string;
  version?: string;
  sensitivity_score: GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigCustomInfoTypesInfoTypeSensitivityScore;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigCustomInfoTypesRegex {
  group_indexes?: number[];
  pattern: string;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigCustomInfoTypesSensitivityScore {
  score: string;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigCustomInfoTypesStoredType {
  name: string;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigCustomInfoTypesSurrogateType {}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigCustomInfoTypes {
  exclusion_type?: string;
  likelihood?: string;
  dictionary: GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigCustomInfoTypesDictionary;
  info_type: GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigCustomInfoTypesInfoType;
  regex: GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigCustomInfoTypesRegex;
  sensitivity_score: GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigCustomInfoTypesSensitivityScore;
  stored_type: GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigCustomInfoTypesStoredType;
  surrogate_type: GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigCustomInfoTypesSurrogateType;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigInfoTypesSensitivityScore {
  score: string;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigInfoTypes {
  name: string;
  version?: string;
  sensitivity_score: GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigInfoTypesSensitivityScore;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScore {
  score: string;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoType {
  name: string;
  version?: string;
  sensitivity_score: GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScore;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigLimitsMaxFindingsPerInfoType {
  max_findings?: number;
  info_type: GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoType;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigLimits {
  max_findings_per_item?: number;
  max_findings_per_request?: number;
  max_findings_per_info_type: GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigLimitsMaxFindingsPerInfoType;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigRuleSetInfoTypesSensitivityScore {
  score: string;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigRuleSetInfoTypes {
  name: string;
  version?: string;
  sensitivity_score: GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigRuleSetInfoTypesSensitivityScore;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath {
  path: string;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryWordList {
  words: string[];
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigRuleSetRulesExclusionRuleDictionary {
  cloud_storage_path: GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath;
  word_list: GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryWordList;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegex {
  group_indexes?: number[];
  pattern?: string;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximity {
  window_after?: number;
  window_before?: number;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotword {
  hotword_regex: GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegex;
  proximity: GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximity;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScore {
  score: string;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes {
  name: string;
  version?: string;
  sensitivity_score: GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScore;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes {
  info_types: GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigRuleSetRulesExclusionRuleRegex {
  group_indexes?: number[];
  pattern: string;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigRuleSetRulesExclusionRule {
  matching_type: string;
  dictionary: GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigRuleSetRulesExclusionRuleDictionary;
  exclude_by_hotword: GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotword;
  exclude_info_types: GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes;
  regex: GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigRuleSetRulesExclusionRuleRegex;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigRuleSetRulesHotwordRuleHotwordRegex {
  group_indexes?: number[];
  pattern?: string;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment {
  fixed_likelihood?: string;
  relative_likelihood?: number;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigRuleSetRulesHotwordRuleProximity {
  window_after?: number;
  window_before?: number;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigRuleSetRulesHotwordRule {
  hotword_regex: GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigRuleSetRulesHotwordRuleHotwordRegex;
  likelihood_adjustment: GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment;
  proximity: GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigRuleSetRulesHotwordRuleProximity;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigRuleSetRules {
  exclusion_rule: GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigRuleSetRulesExclusionRule;
  hotword_rule: GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigRuleSetRulesHotwordRule;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigRuleSet {
  info_types: GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigRuleSetInfoTypes;
  rules: GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigRuleSetRules;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfig {
  exclude_info_types?: boolean;
  include_quote?: boolean;
  min_likelihood?: string;
  custom_info_types: GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigCustomInfoTypes;
  info_types: GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigInfoTypes;
  limits: GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigLimits;
  rule_set: GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfigRuleSet;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobStorageConfigBigQueryOptionsExcludedFields {
  name: string;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobStorageConfigBigQueryOptionsIdentifyingFields {
  name: string;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobStorageConfigBigQueryOptionsIncludedFields {
  name: string;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobStorageConfigBigQueryOptionsTableReference {
  dataset_id: string;
  project_id: string;
  table_id: string;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobStorageConfigBigQueryOptions {
  rows_limit?: number;
  rows_limit_percent?: number;
  sample_method?: string;
  excluded_fields: GoogleDataLossPreventionJobTriggerArgsInspectJobStorageConfigBigQueryOptionsExcludedFields;
  identifying_fields: GoogleDataLossPreventionJobTriggerArgsInspectJobStorageConfigBigQueryOptionsIdentifyingFields;
  included_fields: GoogleDataLossPreventionJobTriggerArgsInspectJobStorageConfigBigQueryOptionsIncludedFields;
  table_reference: GoogleDataLossPreventionJobTriggerArgsInspectJobStorageConfigBigQueryOptionsTableReference;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet {
  bucket_name: string;
  exclude_regex?: string[];
  include_regex?: string[];
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobStorageConfigCloudStorageOptionsFileSet {
  url?: string;
  regex_file_set: GoogleDataLossPreventionJobTriggerArgsInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobStorageConfigCloudStorageOptions {
  bytes_limit_per_file?: number;
  bytes_limit_per_file_percent?: number;
  file_types?: string[];
  files_limit_percent?: number;
  sample_method?: string;
  file_set: GoogleDataLossPreventionJobTriggerArgsInspectJobStorageConfigCloudStorageOptionsFileSet;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobStorageConfigDatastoreOptionsKind {
  name: string;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobStorageConfigDatastoreOptionsPartitionId {
  namespace_id?: string;
  project_id: string;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobStorageConfigDatastoreOptions {
  kind: GoogleDataLossPreventionJobTriggerArgsInspectJobStorageConfigDatastoreOptionsKind;
  partition_id: GoogleDataLossPreventionJobTriggerArgsInspectJobStorageConfigDatastoreOptionsPartitionId;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields {
  name: string;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobStorageConfigHybridOptionsTableOptions {
  identifying_fields: GoogleDataLossPreventionJobTriggerArgsInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobStorageConfigHybridOptions {
  description?: string;
  labels?: {
    [key: string]: string;
  };
  required_finding_label_keys?: string[];
  table_options: GoogleDataLossPreventionJobTriggerArgsInspectJobStorageConfigHybridOptionsTableOptions;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobStorageConfigTimespanConfigTimestampField {
  name: string;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobStorageConfigTimespanConfig {
  enable_auto_population_of_timespan_config?: boolean;
  end_time?: string;
  start_time?: string;
  timestamp_field: GoogleDataLossPreventionJobTriggerArgsInspectJobStorageConfigTimespanConfigTimestampField;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJobStorageConfig {
  big_query_options: GoogleDataLossPreventionJobTriggerArgsInspectJobStorageConfigBigQueryOptions;
  cloud_storage_options: GoogleDataLossPreventionJobTriggerArgsInspectJobStorageConfigCloudStorageOptions;
  datastore_options: GoogleDataLossPreventionJobTriggerArgsInspectJobStorageConfigDatastoreOptions;
  hybrid_options: GoogleDataLossPreventionJobTriggerArgsInspectJobStorageConfigHybridOptions;
  timespan_config: GoogleDataLossPreventionJobTriggerArgsInspectJobStorageConfigTimespanConfig;
}
export interface GoogleDataLossPreventionJobTriggerArgsInspectJob {
  inspect_template_name?: string;
  actions: GoogleDataLossPreventionJobTriggerArgsInspectJobActions;
  inspect_config: GoogleDataLossPreventionJobTriggerArgsInspectJobInspectConfig;
  storage_config: GoogleDataLossPreventionJobTriggerArgsInspectJobStorageConfig;
}
export interface GoogleDataLossPreventionJobTriggerArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDataLossPreventionJobTriggerArgsTriggersManual {}
export interface GoogleDataLossPreventionJobTriggerArgsTriggersSchedule {
  recurrence_period_duration?: string;
}
export interface GoogleDataLossPreventionJobTriggerArgsTriggers {
  manual: GoogleDataLossPreventionJobTriggerArgsTriggersManual;
  schedule: GoogleDataLossPreventionJobTriggerArgsTriggersSchedule;
}
export interface GoogleDataLossPreventionJobTriggerArgs {
  description?: string;
  display_name?: string;
  parent: string;
  status?: string;
  inspect_job: GoogleDataLossPreventionJobTriggerArgsInspectJob;
  timeouts?: GoogleDataLossPreventionJobTriggerArgsTimeouts;
  triggers: GoogleDataLossPreventionJobTriggerArgsTriggers;
}
export class google_data_loss_prevention_job_trigger extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly last_run_time!: string;
  readonly name!: string;
  readonly trigger_id?: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataLossPreventionJobTriggerArgs) {
    super(config, "resource", args, resourceName, "google_data_loss_prevention_job_trigger");
  }
}