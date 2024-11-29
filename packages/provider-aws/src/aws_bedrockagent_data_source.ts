import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsBedrockagentDataSourceArgsDataSourceConfigurationS3Configuration {
  bucket_arn: string;
  bucket_owner_account_id?: string;
  inclusion_prefixes?: string[];
}
export interface AwsBedrockagentDataSourceArgsDataSourceConfiguration {
  type: string;
  s3_configuration: AwsBedrockagentDataSourceArgsDataSourceConfigurationS3Configuration;
}
export interface AwsBedrockagentDataSourceArgsServerSideEncryptionConfiguration {
  kms_key_arn?: string;
}
export interface AwsBedrockagentDataSourceArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsBedrockagentDataSourceArgsVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration {
  max_tokens: number;
  overlap_percentage: number;
}
export interface AwsBedrockagentDataSourceArgsVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfiguration {
  max_tokens: number;
}
export interface AwsBedrockagentDataSourceArgsVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration {
  overlap_tokens: number;
  level_configuration: AwsBedrockagentDataSourceArgsVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfiguration;
}
export interface AwsBedrockagentDataSourceArgsVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration {
  breakpoint_percentile_threshold: number;
  buffer_size: number;
  max_token: number;
}
export interface AwsBedrockagentDataSourceArgsVectorIngestionConfigurationChunkingConfiguration {
  chunking_strategy: string;
  fixed_size_chunking_configuration: AwsBedrockagentDataSourceArgsVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration;
  hierarchical_chunking_configuration: AwsBedrockagentDataSourceArgsVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration;
  semantic_chunking_configuration: AwsBedrockagentDataSourceArgsVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration;
}
export interface AwsBedrockagentDataSourceArgsVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3Location {
  uri: string;
}
export interface AwsBedrockagentDataSourceArgsVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorage {
  s3_location: AwsBedrockagentDataSourceArgsVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3Location;
}
export interface AwsBedrockagentDataSourceArgsVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionTransformationLambdaConfiguration {
  lambda_arn: string;
}
export interface AwsBedrockagentDataSourceArgsVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunction {
  transformation_lambda_configuration: AwsBedrockagentDataSourceArgsVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionTransformationLambdaConfiguration;
}
export interface AwsBedrockagentDataSourceArgsVectorIngestionConfigurationCustomTransformationConfigurationTransformation {
  step_to_apply: string;
  transformation_function: AwsBedrockagentDataSourceArgsVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunction;
}
export interface AwsBedrockagentDataSourceArgsVectorIngestionConfigurationCustomTransformationConfiguration {
  intermediate_storage: AwsBedrockagentDataSourceArgsVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorage;
  transformation: AwsBedrockagentDataSourceArgsVectorIngestionConfigurationCustomTransformationConfigurationTransformation;
}
export interface AwsBedrockagentDataSourceArgsVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt {
  parsing_prompt_string: string;
}
export interface AwsBedrockagentDataSourceArgsVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration {
  model_arn: string;
  parsing_prompt: AwsBedrockagentDataSourceArgsVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt;
}
export interface AwsBedrockagentDataSourceArgsVectorIngestionConfigurationParsingConfiguration {
  parsing_strategy: string;
  bedrock_foundation_model_configuration: AwsBedrockagentDataSourceArgsVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration;
}
export interface AwsBedrockagentDataSourceArgsVectorIngestionConfiguration {
  chunking_configuration: AwsBedrockagentDataSourceArgsVectorIngestionConfigurationChunkingConfiguration;
  custom_transformation_configuration: AwsBedrockagentDataSourceArgsVectorIngestionConfigurationCustomTransformationConfiguration;
  parsing_configuration: AwsBedrockagentDataSourceArgsVectorIngestionConfigurationParsingConfiguration;
}
export interface AwsBedrockagentDataSourceArgs {
  description?: string;
  knowledge_base_id: string;
  name: string;
  data_source_configuration: AwsBedrockagentDataSourceArgsDataSourceConfiguration;
  server_side_encryption_configuration: AwsBedrockagentDataSourceArgsServerSideEncryptionConfiguration;
  timeouts: AwsBedrockagentDataSourceArgsTimeouts;
  vector_ingestion_configuration: AwsBedrockagentDataSourceArgsVectorIngestionConfiguration;
}
export class aws_bedrockagent_data_source extends TerraformResource {
  readonly data_deletion_policy?: string;
  readonly data_source_id!: string;
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsBedrockagentDataSourceArgs) {
    super(config, "resource", args, resourceName, "aws_bedrockagent_data_source");
  }
}