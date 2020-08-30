const NODE_ENV = process.env.NODE_ENV || "development";

if (NODE_ENV === "development") {
  require("./config/runDevelopmentServer");
} else {
  require("./config/runProductionServer");
}
