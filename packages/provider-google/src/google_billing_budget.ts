import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleBillingBudgetArgsAllUpdatesRule {
  disable_default_iam_recipients?: boolean;
  enable_project_level_recipients?: boolean;
  monitoring_notification_channels?: string[];
  pubsub_topic?: string;
  schema_version?: string;
}
export interface GoogleBillingBudgetArgsamountSpecifiedAmount {
  nanos?: number;
  units?: string;
}
export interface GoogleBillingBudgetArgsamount {
  last_period_amount?: boolean;
  specified_amount: GoogleBillingBudgetArgsamountSpecifiedAmount;
}
export interface GoogleBillingBudgetArgsBudgetFilterCustomPeriodEndDate {
  day: number;
  month: number;
  year: number;
}
export interface GoogleBillingBudgetArgsBudgetFilterCustomPeriodStartDate {
  day: number;
  month: number;
  year: number;
}
export interface GoogleBillingBudgetArgsBudgetFilterCustomPeriod {
  end_date: GoogleBillingBudgetArgsBudgetFilterCustomPeriodEndDate;
  start_date: GoogleBillingBudgetArgsBudgetFilterCustomPeriodStartDate;
}
export interface GoogleBillingBudgetArgsBudgetFilter {
  calendar_period?: string;
  credit_types_treatment?: string;
  projects?: string[];
  resource_ancestors?: string[];
  custom_period: GoogleBillingBudgetArgsBudgetFilterCustomPeriod;
}
export interface GoogleBillingBudgetArgsThresholdRules {
  spend_basis?: string;
  threshold_percent: number;
}
export interface GoogleBillingBudgetArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleBillingBudgetArgs {
  billing_account: string;
  display_name?: string;
  ownership_scope?: string;
  all_updates_rule: GoogleBillingBudgetArgsAllUpdatesRule;
  amount: GoogleBillingBudgetArgsamount;
  budget_filter: GoogleBillingBudgetArgsBudgetFilter;
  threshold_rules: GoogleBillingBudgetArgsThresholdRules;
  timeouts: GoogleBillingBudgetArgstimeouts;
}
export class google_billing_budget extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBillingBudgetArgs) {
    super(config, "resource", args, resourceName, "google_billing_budget");
  }
}