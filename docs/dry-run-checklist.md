# Dry Run Checklist

This checklist is used to prepare and validate the Secure Application Platform before the final demonstration.

## Phase 1 – Identity and Authentication

- [ ] Cognito User Pool is available.
- [ ] MFA is configured using an authenticator application.
- [ ] Admin and user groups are configured.
- [ ] Valid user authentication is tested.
- [ ] Unauthenticated request returns 401 Unauthorized.
- [ ] Non-admin access to the admin endpoint returns 403 Forbidden.
- [ ] Admin access returns 200 OK.

## Phase 2 – AWS WAF

- [ ] AWS WAF Web ACL is available.
- [ ] AWS Managed Rules are enabled.
- [ ] XSS/SQL injection protection is configured.
- [ ] Rate-based protection is configured.
- [ ] Legitimate request returns 200 OK.
- [ ] Malicious test request returns 403 Forbidden.
- [ ] WAF logs record blocked requests.

## Phase 3 – KMS and Secrets Manager

- [ ] Customer-managed KMS key is enabled.
- [ ] Application secret is stored in AWS Secrets Manager.
- [ ] Automatic rotation is configured.
- [ ] Application retrieves the secret at runtime.
- [ ] Unauthorized Secrets Manager access is denied.
- [ ] Unauthorized KMS decrypt access is denied.
- [ ] CloudTrail records secret and KMS activity.
- [ ] HTTPS/TLS protection is verified.

## Phase 4 – Least-Privilege IAM

- [ ] Application roles use dedicated IAM permissions.
- [ ] Permissions are scoped to required resources.
- [ ] Required actions are allowed.
- [ ] Unnecessary actions are denied.
- [ ] Access to unrelated secrets is denied.
- [ ] IAM policy simulation results are reviewed.
- [ ] IAM Access Analyzer findings are reviewed.
- [ ] No long-lived application credentials are required.

## Phase 5 – Monitoring and Auditing

- [ ] CloudTrail logging is enabled.
- [ ] AWS WAF logging is enabled.
- [ ] CloudWatch security metrics are available.
- [ ] Denied KMS decrypt activity is monitored.
- [ ] Failed authentication activity is monitored.
- [ ] WAF blocked requests are monitored.
- [ ] Security alarms are configured and reviewed.

## Final Demonstration Sequence

1. Demonstrate Cognito authentication and MFA.
2. Demonstrate authenticated user access.
3. Demonstrate non-admin access denial.
4. Demonstrate admin authorization.
5. Demonstrate a legitimate WAF-protected request.
6. Demonstrate a malicious request blocked by WAF.
7. Demonstrate unauthorized Secrets Manager access being denied.
8. Demonstrate unauthorized KMS decryption being denied.
9. Show CloudTrail evidence.
10. Show WAF logs.
11. Show CloudWatch security alarms.
12. Explain the remaining security limitation and the separation between the WAF/API Gateway demonstration path and the local Cognito/JWT API component.

## Demo Safety

- Do not display passwords, tokens, client secrets, TOTP secrets, or access keys.
- Use test accounts and sample data only.
- Keep sensitive AWS identifiers masked in screenshots where appropriate.
- Do not modify production resources during the demonstration.
