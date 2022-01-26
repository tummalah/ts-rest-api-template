import * as shell from "shelljs";

// Copy all the view templates
shell.cp( "-R", "src/views", "dist/" );

// Copy package.json and packagelock
shell.cp(  "package**.json", "dist/" );
// Copy .env example for safe config check during container start
shell.cp(  ".env.example", "dist/" );
