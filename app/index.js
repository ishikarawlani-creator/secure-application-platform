const express = require("express");
const { CognitoJwtVerifier } = require("aws-jwt-verify");

const app = express();

app.use(express.json());

const USER_POOL_ID = process.env.USER_POOL_ID;
const CLIENT_ID = process.env.CLIENT_ID;

const verifier = CognitoJwtVerifier.create({
  userPoolId: USER_POOL_ID,
  clientId: CLIENT_ID,
  tokenUse: "access",
});

async function authenticate(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        error: "Unauthorized",
        message: "Bearer token required",
      });
    }

    const token = authHeader.substring(7);

    const payload = await verifier.verify(token);

    req.user = payload;
    next();
  } catch (error) {
    return res.status(401).json({
      error: "Unauthorized",
      message: "Invalid or expired JWT",
    });
  }
}

function requireAdmin(req, res, next) {
  const groups = req.user["cognito:groups"] || [];

  if (!groups.includes("admin")) {
    return res.status(403).json({
      error: "Forbidden",
      message: "Admin group membership required",
    });
  }

  next();
}

app.get("/", (req, res) => {
  res.json({
    application: "Secure Application Platform",
    status: "running",
  });
});

app.get("/api/user", authenticate, (req, res) => {
  res.status(200).json({
    message: "Authenticated user access granted",
    username: req.user.username || req.user.sub,
  });
});

app.get("/api/admin", authenticate, requireAdmin, (req, res) => {
  res.status(200).json({
    message: "Admin access granted",
    username: req.user.username || req.user.sub,
  });
});

app.listen(3000, "127.0.0.1", () => {
  console.log("Secure API running on http://127.0.0.1:3000");
});
