// Importing necessary Cypress plugins and commands

// Cypress file upload command
import 'cypress-file-upload';

// Command for interacting with mentoring page (searching mentors, etc.)
import './commands/mentoring';

// Command for scheduling actions (selecting date, time, etc.)
import './commands/schedule';

// Utility commands for reusable functions (like saving text to env, etc.)
import './commands/utils';

// Command for interacting with session details (viewing sessions, etc.)
import './commands/session';

// Command for filling personal information (name, email, etc.)
import './commands/personalInfo';

// Command for finalizing the session (password, confirmation, etc.)
import './commands/finalizeSchedule';
