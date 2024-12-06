import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsQldbLedgerArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsQldbLedgerArgs {
  deletion_protection?: boolean;
  permissions_mode: string;
  tags?: { [key: string]: string };
  timeouts?: AwsQldbLedgerArgsTimeouts;
}

export class aws_qldb_ledger extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly kms_key?: string;
  readonly name?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsQldbLedgerArgs) {
    super(config, "resource", args, resourceName, "aws_qldb_ledger");
  }
}
