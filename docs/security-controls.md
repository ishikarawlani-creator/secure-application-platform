# Security Controls

## Phase 1 – Identity and Authentication

- Amazon Cognito User Pool configured.
- MFA configured using an authenticator application.
- Admin and user groups configured.
- JWT-based authentication implemented.
- Protected user endpoint implemented.
- Admin-only endpoint implemented.

### Validation

- Unauthenticated request → 401 Unauthorized
- Authenticated user request → 200 OK
- Non-admin admin-route request → 403 Forbidden
- Admin request → 200 OK

## Phase 2 – Web Application Firewall

- AWS WAF configured for the API Gateway endpoint.
- AWS Managed Rules enabled.
- XSS/SQL injection protection configured.
- Rate-based protection configured.
- Malicious requests tested and blocked.

### Validation

- Legitimate request → 200 OK
- XSS-like request → 403 Forbidden
- Rate-based protection tested.

## Phase 3 – Encryption and Secrets Management

- Customer-managed AWS KMS key configured.
- AWS Secrets Manager used for application secrets.
- Automatic rotation configured.
- Runtime secret retrieval demonstrated.
- Unauthorized Secrets Manager access denied.
- Unauthorized KMS decryption denied.
- HTTPS/TLS protection verified.

## Phase 4 – Least-Privilege IAM

- Dedicated IAM roles configured.
- Resource-specific permissions applied.
- IAM policy simulation performed.
- Required access allowed.
- Unnecessary access denied.
- IAM Access Analyzer reviewed.

## Phase 5 – Monitoring and Auditing

- AWS CloudTrail used for audit events.
- AWS WAF logging enabled.
- CloudWatch metrics and alarms configured.
- Secret access and KMS activity monitored.
- Security-relevant events reviewed.

## Evidence

Detailed screenshots and explanations for these controls are included in:

`Ishika_Rawlani_Project_Report_22_September_2026_Final-1.pdf`
