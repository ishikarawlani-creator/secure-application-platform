# Teardown Guide

This guide describes the cleanup procedure for the Secure Application Platform after the final demonstration and review.

## 1. Application Resources

- Stop the local application running on the test environment.
- Remove temporary test files and processes.
- Remove test-only Lambda functions when no longer required.

## 2. Cognito

- Remove test users after the project review.
- Remove the Cognito application client.
- Delete the Cognito User Pool if it is no longer required.

## 3. API Gateway

- Remove the test API Gateway resources.
- Delete unused stages and deployments.

## 4. AWS WAF

- Remove the WAF association from the API Gateway resource.
- Delete the test Web ACL after confirming that it is no longer required.
- Remove associated WAF logging configuration if no longer needed.

## 5. Secrets Manager

- Delete the test application secret after evidence collection.
- Disable or remove the rotation configuration when the secret is no longer required.

## 6. KMS

- Do not immediately delete the customer-managed KMS key.
- If the key is no longer required, schedule key deletion according to AWS KMS procedures and the project retention requirements.

## 7. Lambda

Remove test-only Lambda functions and associated execution roles after confirming that no remaining project component depends on them.

## 8. IAM

- Remove project-specific test roles and policies.
- Remove unnecessary permissions.
- Confirm that no long-lived access keys were created for the application.
- Review IAM Access Analyzer after cleanup.

## 9. CloudTrail and CloudWatch

- Preserve required audit evidence before deleting test resources.
- Export or retain required logs according to project requirements.
- Remove temporary CloudWatch alarms and metric filters when they are no longer required.

## 10. Final Verification

Before completing teardown:

- [ ] Required screenshots and evidence have been collected.
- [ ] Project report has been completed.
- [ ] GitHub repository contains the required documentation.
- [ ] No secrets or credentials are committed to the repository.
- [ ] Temporary AWS resources have been identified.
- [ ] Required audit evidence has been preserved.
- [ ] Resources are removed only after final review.

## Important

Teardown should be performed only after the final demonstration, evaluation, and evidence collection are complete. Resources required for review must not be deleted before approval.
