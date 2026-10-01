# Attack Walkthrough

This document describes the security testing performed for the Secure Application Platform.

## 1. Unauthenticated API Request

A request was sent to the protected user endpoint without a valid JWT access token.

**Result:** 401 Unauthorized

This confirms that protected API access requires authentication.

## 2. Authenticated User Request

A valid authenticated user accessed the protected user endpoint.

**Result:** 200 OK

This confirms successful JWT authentication.

## 3. Non-Admin Access

A valid non-admin user attempted to access the administrator endpoint.

**Result:** 403 Forbidden

This confirms group-based authorization.

## 4. Admin Access

An authenticated administrator accessed the administrator endpoint.

**Result:** 200 OK

This confirms that the admin authorization control works.

## 5. Malicious Web Request

An XSS-like request was sent through the WAF-protected API Gateway endpoint.

**Result:** 403 Forbidden

AWS WAF blocked the request.

The WAF logs recorded the request as a BLOCK action associated with the AWS Managed Rules Common Rule Set.

## 6. Rate-Based Protection

A burst of requests was generated against the protected endpoint to test the configured rate-based WAF rule.

The configured WAF rate-based control was used to test excessive request volume.

## 7. Unauthorized Secret Access

A test Lambda using an unauthorized IAM role attempted to retrieve the application secret.

**Result:** AccessDenied

This demonstrates least-privilege protection for Secrets Manager.

## 8. Unauthorized KMS Decryption

A test Lambda using an unauthorized IAM role attempted to decrypt protected data using the customer-managed KMS key.

**Result:** AccessDenied

The denied KMS operation was also recorded in CloudTrail.

## 9. Security Monitoring

CloudTrail and CloudWatch were reviewed for security-relevant activity, including:

- Secrets Manager access
- KMS decrypt attempts
- WAF blocked requests
- Failed authentication activity
- Security alarm states

## Conclusion

The walkthrough demonstrates multiple independent security layers covering authentication, authorization, WAF protection, encryption, secrets management, IAM least privilege, logging, and monitoring.
